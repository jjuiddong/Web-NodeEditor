//
// 2020-06-28, jjuiddong
// context menu class
//   - menu item
//

//--------------------------------------------------------------------------------
// MenuItem
MenuItem = class {
  constructor(
    option = {
      rootMenu: false,
      parentElem: null,
      name: "top",
      callback: null,
    }
  ) {
    this.rootMenu = option.rootMenu === undefined ? true : option.rootMenu;
    this.parentElem = option.parentElem;
    this.name = option.name || "menu item";
    this.callback = option.callback;
    this.children = [];

    if (this.rootMenu) {
      this.elem = document.body;
    } else {
      var elem = document.createElement("div");
      elem.className = "contextmenu-item";
      elem.innerHTML = this.name;
      elem.style.position = "absolute";
      this.elem = elem;
    }
  }

  //--------------------------------------------------------------------------------
  // open context menu
  open = function (x, y) {
    if (this.rootMenu) {
      for (var i = 0; i < this.children.length; ++i) {
        const itemX = x;
        const itemY = y + i * 30;
        this.children[i].open(itemX, itemY);
      }
    } else {
      this.elem.style.left = x + "px";
      this.elem.style.top = y + "px";
      this.elem.style.width = 100 + "px";
      this.elem.style.height = 30 + "px";
      this.parentElem.appendChild(this.elem);

      this.elem.addEventListener("mousemove", this.onMouseMove);
      this.elem.addEventListener("mouseenter", this.onMouseEnter);
      this.elem.addEventListener("mouseleave", this.onMouseLeave);
      this.elem.addEventListener("click", this.onMouseClick);
    }
  };

  //--------------------------------------------------------------------------------
  // close context menu
  close = function () {
    this.parentElem.removeChild(this.elem);
  };

  //--------------------------------------------------------------------------------
  // add submenu
  // return menu instance
  addSubMenu = function (
    option = {
      rootMenu: false,
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
  // mouse move event handling
  onMouseMove = (e) => {};

  //--------------------------------------------------------------------------------
  // mouse enter event handling
  onMouseEnter = (e) => {
    //console.log(this.name + ' enter');
    //this.elem.className = "contextmenu-item hover";
  };

  //--------------------------------------------------------------------------------
  // mouse leave event handling
  onMouseLeave = (e) => {
    //console.log(this.name + ' leave');
    //this.elem.className = "contextmenu-item";
  };

  //--------------------------------------------------------------------------------
  // mouse click event handling
  onMouseClick = (e) => {
    //console.log(this.name + " click");
    if (this.callback)
        this.callback(this);
  };
};

//--------------------------------------------------------------------------------
// ContextMenu Manager
//--------------------------------------------------------------------------------
ContextMenu = class {
  constructor(name) {
    this.rootMenu = new MenuItem(
      (option = {
        rootMenu: true,
        parentElem: document.body,
        name: "Menu",
      })
    );
  }

  //--------------------------------------------------------------------------------
  // open context menu
  open = function (x, y) {
    this.rootMenu.open(x, y);
  };

  //--------------------------------------------------------------------------------
  // close context menu
  close = function () {};

  //--------------------------------------------------------------------------------
  // add menu item
  // return added menu
  addMenu = function (name, callback) {
    var menuItem = this.rootMenu.addSubMenu(
      (option = {
        rootMenu: false,
        name: name,
        callback: callback,
      })
    );
    return menuItem;
  };
};
