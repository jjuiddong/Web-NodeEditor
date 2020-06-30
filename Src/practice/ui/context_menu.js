//
// 2020-06-28, jjuiddong
// context menu class
//   - menu item
//

//--------------------------------------------------------------------------------
// MenuItem
const MenuItem = class {
  constructor(
    option = {
      contextMenu: null,
      isRootMenu: false,
      parentElem: null,
      name: "top",
      callback: null,
    }
  ) {
    this.contextMenu = option.contextMenu; // context menu
    this.isRootMenu =
      option.isRootMenu === undefined ? true : option.isRootMenu;
    this.parentElem = option.parentElem; // DOM parent element
    this.name = option.name || "menu item";
    this.enable = true; // enable/disable?
    this.callback = option.callback;
    this.children = []; // child menu item
    this.showMenu = false; // show/hide menu

    if (this.isRootMenu) {
      this.elem = document.body;
    } else {
      var elem = document.createElement("div");
      elem.name = this.name;
      elem.className = "contextmenu-item";
      elem.innerHTML = this.name;
      elem.style.position = "absolute";
      this.elem = elem;
    }
  }

  //--------------------------------------------------------------------------------
  // open context menu
  open = function (x, y) {
    if (this.isRootMenu) {
      this.showMenu = true;
      for (var i = 0; i < this.children.length; ++i) {
        const itemX = x;
        const itemY = y + i * Config.CONTEXTMENU_ITEM_HEIGHT;
        this.children[i].open(itemX, itemY);
      }
    } else {
      this.showMenu = true;
      this.elem.style.left = parseInt(x) + "px";
      this.elem.style.top = parseInt(y) + "px";
      this.elem.style.width = 100 + "px";
      this.elem.style.height = Config.CONTEXTMENU_ITEM_HEIGHT + "px";
      this.parentElem.appendChild(this.elem);

      this.elem.addEventListener("mousemove", this.onMouseMove);
      this.elem.addEventListener("mouseenter", this.onMouseEnter);
      this.elem.addEventListener("mouseleave", this.onMouseLeave);
      this.elem.addEventListener("click", this.onMouseClick);
    }
  };

  //--------------------------------------------------------------------------------
  // open sub context menu
  openSubMenu = function () {
    if (!this.isRootMenu) {
      this.showSubMenu = true;
      const x = parseInt(this.elem.style.width) + Util.convertRemToPixels(1.0);
      const y = 0;
      for (var i = 0; i < this.children.length; ++i) {
        const itemX = x;
        const itemY = y + i * Config.CONTEXTMENU_ITEM_HEIGHT;
        this.children[i].open(itemX, itemY);
      }
    }
  };

  //--------------------------------------------------------------------------------
  // close context menu
  close = function () {
    this.children.forEach((element) => element.close());
    if (!this.isRootMenu && this.showMenu) {
      this.parentElem.removeChild(this.elem);
      this.showMenu = false;
    }
  };

  //--------------------------------------------------------------------------------
  // close sub context menu
  closeSubMenu = function () {
    if (!this.isRootMenu) {
      for (var i = 0; i < this.children.length; ++i) {
        this.children[i].close();
      }
    }
  };

  //--------------------------------------------------------------------------------
  // add submenu
  // return menu instance
  addSubMenu = function (
    option = {
      contextMenu: null,
      isRootMenu: false,
      parentElem: null,
      name: "top",
      callback: null,
    }
  ) {
    var arg = option;
    arg.parentElem = this.elem;
    const item = new MenuItem(arg);
    this.children.push(item);
    return item;
  };

  //--------------------------------------------------------------------------------
  // set menu enable/disable
  setEnable = function(enable) {
    this.enable = enable;
    this.elem.className = enable? "contextmenu-item" : "contextmenu-item disabled";
  }

  //--------------------------------------------------------------------------------
  // mouse move event handling
  onMouseMove = (e) => {};

  //--------------------------------------------------------------------------------
  // mouse enter event handling
  onMouseEnter = (e) => {
    if (this.elem && (this.children.length > 0))
      this.openSubMenu();
  };

  //--------------------------------------------------------------------------------
  // mouse leave event handling
  onMouseLeave = (e) => {
    if (this.elem && (this.children.length > 0))
      this.closeSubMenu();
  };

  //--------------------------------------------------------------------------------
  // mouse click event handling
  onMouseClick = (e) => {
    e.stopPropagation();
    if (!this.enable) return;
    if (this.callback) this.callback(this);

    // leaf menuItem? close context menu
    if (this.children.length === 0) {
      this.contextMenu.onClickMenu(this);
    }
  };
};

//--------------------------------------------------------------------------------
// ContextMenu Manager
//--------------------------------------------------------------------------------
const ContextMenu = class {
  constructor(name) {
    this.rootMenu = new MenuItem(
      (option = {
        contextMenu: this,
        isRootMenu: true,
        parentElem: document.body,
        name: "Menu",
      })
    );
    this.callbacks = [];
  }

  //--------------------------------------------------------------------------------
  // open context menu
  open = function (x, y) {
    this.rootMenu.open(x, y);
  };

  //--------------------------------------------------------------------------------
  // close context menu
  close = function () {
    this.rootMenu.close();
  };

  //--------------------------------------------------------------------------------
  // add menu item
  // return added menu
  addMenu = function (name, callback) {
    var menuItem = this.rootMenu.addSubMenu(
      (option = {
        contextMenu: this,
        isRootMenu: false,
        name: name,
        callback: callback,
      })
    );
    return menuItem;
  };

  //--------------------------------------------------------------------------------
  // add sub menu item
  // return added menu
  // parentMenuName: menuName1&menuName2&menuName3
  //                delimeter: &
  addSubMenu = function (parentMenuName, name, callback) {
    var menuItem = null;
    var parentMenuItem = this.findMenuItem(parentMenuName);
    if (parentMenuItem) {
      menuItem = parentMenuItem.addSubMenu(
        (option = {
          contextMenu: this,
          isRootMenu: false,
          name: name,
          callback: callback,
        })
      );
    } else {
      console.log('not found parent menu item ' + parentMenuName);
    }    

    return menuItem;
  };

  //--------------------------------------------------------------------------------
  // menu item enable/disable
  // menuName, ex)menuName1&menuName2&menuName3
  // enable : boolean
  setMenuEnable = function(menuName, enable) {
    var menuItem = this.findMenuItem(menuName);
    menuItem.setEnable(enable);
  }

  //--------------------------------------------------------------------------------
  // menuName, ex)menuName1&menuName2&menuName3
  findMenuItem = function(menuName) {
    const strs = menuName.split('&');
    var children = this.rootMenu.children;
    
    var menuItem = null;
    for (var i=0; i < strs.length; ++i) {
      var parent = null;    
      for (var k=0; k < children.length; ++k) {
        if (children[k].name === strs[i]) {
          parent = children[k];
          break;          
        }
      }

      if (!parent) break; // not found parent menu item
      if (strs.length-1 === i) {
        menuItem = parent;
        break; // success find 
      }
      children = parent.children;
    }
    return menuItem;
  }


  //--------------------------------------------------------------------------------
  // menu click event
  // close context menu
  onClickMenu = function (menuItem) {
    this.close();
  };
};
