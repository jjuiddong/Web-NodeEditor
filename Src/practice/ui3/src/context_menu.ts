//
// 2020-06-28, jjuiddong
// context menu class
//   - menu item
//
//  - 2020-07-13
//    - TypeScript Refactoring
//
import Config from './config'
import Util from './util'

//--------------------------------------------------------------------------------
// MenuItem
class MenuItem {
  contextMenu: ContextMenu | null = null
  isRootMenu: boolean = false
  parentElem: HTMLElement | null = null
  elem: HTMLElement | null = null
  name: string
  enable: boolean = true
  callback: { (menu: MenuItem): void; } | null
  children: MenuItem[]
  isShowMenu: boolean = false;
  showSubMenu: boolean = false;

  constructor(
    contextMenu: ContextMenu | null = null,
    isRootMenu: boolean = false,
    parentElem: HTMLElement | null = null,
    name: string = "top",
    callback: { (menu: MenuItem): void; } | null = null,
  ) {
    this.contextMenu = contextMenu; // context menu
    this.isRootMenu =
      isRootMenu === undefined ? true : isRootMenu;
    this.parentElem = parentElem; // DOM parent element
    this.name = name || "menu item";
    this.enable = true; // enable/disable?
    this.callback = callback;
    this.children = []; // child menu item
    this.isShowMenu = false; // show/hide menu

    if (this.isRootMenu) {
      this.elem = document.body;
    } else {
      var elem: HTMLElement = document.createElement("div");
      //elem.name = this.name;
      elem.className = "contextmenu-item";
      elem.innerHTML = this.name;
      elem.style.position = "absolute";
      this.elem = elem;
    }
  }

  //--------------------------------------------------------------------------------
  // MenuItem::open
  // open context menu
  open(x: number, y: number) {
    if (this.isRootMenu) {
      this.isShowMenu = true;
      for (var i = 0; i < this.children.length; ++i) {
        const itemX: number = x;
        const itemY: number = y + i * Config.CONTEXTMENU_ITEM_HEIGHT;
        this.children[i].open(itemX, itemY);
      }
    } else if (this.elem && this.parentElem) {
      this.isShowMenu = true;
      this.elem.style.left = x + "px";
      this.elem.style.top = y + "px";
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
  // MenuItem::openSubMenu
  // open sub context menu
  openSubMenu() {
    if (!this.isRootMenu && this.elem) {
      this.showSubMenu = true;
      const x: number = parseInt(this.elem.style.width) + Util.convertRemToPixels(1.0);
      const y: number = 0;
      for (var i = 0; i < this.children.length; ++i) {
        const itemX: number = x;
        const itemY: number = y + i * Config.CONTEXTMENU_ITEM_HEIGHT;
        this.children[i].open(itemX, itemY);
      }
    }
  };

  //--------------------------------------------------------------------------------
  // MenuItem::close
  // close context menu
  close() {
    this.children.forEach((element) => element.close());
    if (!this.isRootMenu && this.isShowMenu) {
      if (this.parentElem && this.elem)
        this.parentElem.removeChild(this.elem);
      this.isShowMenu = false;
    }
  };

  //--------------------------------------------------------------------------------
  // MenuItem::closeSubMenu
  // close sub context menu
  closeSubMenu() {
    if (!this.isRootMenu) {
      for (var i = 0; i < this.children.length; ++i) {
        this.children[i].close();
      }
    }
  };

  //--------------------------------------------------------------------------------
  // MenuItem::addSubMenu
  // add submenu
  // return menu instance
  addSubMenu(
    contextMenu: ContextMenu | null = null,
    isRootMenu: boolean = false,
    parentElem: HTMLElement | null = null,
    name: string = "top",
    callback: { (menu: MenuItem): void; } | null = null,
  ) {
    const item = new MenuItem(contextMenu, isRootMenu, this.elem, name, callback);
    this.children.push(item);
    return item;
  };

  //--------------------------------------------------------------------------------
  // set menu enable/disable
  setEnable(enable: boolean) {
    this.enable = enable;
    if (this.elem)
      this.elem.className = enable ? "contextmenu-item" : "contextmenu-item disabled";
  }

  //--------------------------------------------------------------------------------
  // mouse move event handling
  onMouseMove = (e: MouseEvent) => { }

  //--------------------------------------------------------------------------------
  // mouse enter event handling
  onMouseEnter = (e: MouseEvent) => {
    if (this.elem && (this.children.length > 0))
      this.openSubMenu();
  };

  //--------------------------------------------------------------------------------
  // mouse leave event handling
  onMouseLeave = (e: MouseEvent) => {
    if (this.elem && (this.children.length > 0))
      this.closeSubMenu();
  };

  //--------------------------------------------------------------------------------
  // mouse click event handling
  onMouseClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (!this.enable) return;
    if (this.callback) this.callback(this);

    // leaf menuItem? close context menu
    if (this.children.length === 0) {
      this.contextMenu?.onClickMenu(this);
    }
  };
};

//--------------------------------------------------------------------------------
// ContextMenu Manager
//--------------------------------------------------------------------------------
export default class ContextMenu {
  rootMenu: MenuItem | null
  callbacks: { (menu: MenuItem): void }[] // callback function array

  constructor(name: string = "Menu") {
    this.rootMenu = new MenuItem(
      this,
      true,
      document.body,
      name
    );
    this.callbacks = []
  }

  //--------------------------------------------------------------------------------
  // open context menu
  open(x: number, y: number) {
    this.rootMenu?.open(x, y);
  };

  //--------------------------------------------------------------------------------
  // close context menu
  close() {
    this.rootMenu?.close();
  };

  //--------------------------------------------------------------------------------
  // add menu item
  // return added menu
  addMenu(name: string, callback: { (menu: MenuItem): void; } | null = null)
    : MenuItem | null {
    var menuItem = this.rootMenu?.addSubMenu(this, false, null, name, callback);
    return menuItem ? menuItem : null;
  };

  //--------------------------------------------------------------------------------
  // add sub menu item
  // return added menu
  // parentMenuName: menuName1&menuName2&menuName3
  //                delimeter: &
  addSubMenu(parentMenuName: string, name: string,
    callback: { (menu: MenuItem): void; } | null = null)
    : MenuItem | null {
    var menuItem = null;
    var parentMenuItem: MenuItem | null = this.findMenuItem(parentMenuName);
    if (parentMenuItem) {
      menuItem = parentMenuItem.addSubMenu(this, false, null, name, callback);
    } else {
      console.log('not found parent menu item ' + parentMenuName);
    }
    return menuItem;
  };

  //--------------------------------------------------------------------------------
  // menu item enable/disable
  // menuName, ex)menuName1&menuName2&menuName3
  // enable : boolean
  setMenuEnable(menuName: string, enable: boolean) {
    var menuItem = this.findMenuItem(menuName);
    menuItem?.setEnable(enable);
  }

  //--------------------------------------------------------------------------------
  // menuName, ex)menuName1&menuName2&menuName3
  findMenuItem(menuName: string): MenuItem | null {
    const strs: string[] = menuName.split('&');
    var children: MenuItem[] | undefined = this.rootMenu?.children;

    var menuItem: MenuItem | null = null;
    if (children) {
      for (var i = 0; i < strs.length; ++i) {
        var parent = null;
        for (var k = 0; k < children.length; ++k) {
          if (children[k].name === strs[i]) {
            parent = children[k];
            break;
          }
        }

        if (!parent) break; // not found parent menu item
        if (strs.length - 1 === i) {
          menuItem = parent;
          break; // success find 
        }
        children = parent.children;
      }
    }
    return menuItem;
  }


  //--------------------------------------------------------------------------------
  // menu click event
  // close context menu
  onClickMenu(menuItem: MenuItem) {
    this.close();
  };
};
