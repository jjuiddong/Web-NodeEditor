"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//
// 2020-06-28, jjuiddong
// context menu class
//   - menu item
//
//  - 2020-07-13
//    - TypeScript Refactoring
//
var config_1 = __importDefault(require("./config"));
var util_1 = __importDefault(require("./util"));
//--------------------------------------------------------------------------------
// MenuItem
var MenuItem = /** @class */ (function () {
    function MenuItem(contextMenu, isRootMenu, parentElem, name, callback) {
        var _this = this;
        if (contextMenu === void 0) { contextMenu = null; }
        if (isRootMenu === void 0) { isRootMenu = false; }
        if (parentElem === void 0) { parentElem = null; }
        if (name === void 0) { name = "top"; }
        if (callback === void 0) { callback = null; }
        this.contextMenu = null;
        this.isRootMenu = false;
        this.parentElem = null;
        this.elem = null;
        this.enable = true;
        this.isShowMenu = false;
        this.showSubMenu = false;
        //--------------------------------------------------------------------------------
        // mouse move event handling
        this.onMouseMove = function (e) { };
        //--------------------------------------------------------------------------------
        // mouse enter event handling
        this.onMouseEnter = function (e) {
            if (_this.elem && (_this.children.length > 0))
                _this.openSubMenu();
        };
        //--------------------------------------------------------------------------------
        // mouse leave event handling
        this.onMouseLeave = function (e) {
            if (_this.elem && (_this.children.length > 0))
                _this.closeSubMenu();
        };
        //--------------------------------------------------------------------------------
        // mouse click event handling
        this.onMouseClick = function (e) {
            var _a;
            e.stopPropagation();
            if (!_this.enable)
                return;
            if (_this.callback)
                _this.callback(_this);
            // leaf menuItem? close context menu
            if (_this.children.length === 0) {
                (_a = _this.contextMenu) === null || _a === void 0 ? void 0 : _a.onClickMenu(_this);
            }
        };
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
        }
        else {
            var elem = document.createElement("div");
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
    MenuItem.prototype.open = function (x, y) {
        if (this.isRootMenu) {
            this.isShowMenu = true;
            for (var i = 0; i < this.children.length; ++i) {
                var itemX = x;
                var itemY = y + i * config_1.default.CONTEXTMENU_ITEM_HEIGHT;
                this.children[i].open(itemX, itemY);
            }
        }
        else if (this.elem && this.parentElem) {
            this.isShowMenu = true;
            this.elem.style.left = x + "px";
            this.elem.style.top = y + "px";
            this.elem.style.width = 100 + "px";
            this.elem.style.height = config_1.default.CONTEXTMENU_ITEM_HEIGHT + "px";
            this.parentElem.appendChild(this.elem);
            this.elem.addEventListener("mousemove", this.onMouseMove);
            this.elem.addEventListener("mouseenter", this.onMouseEnter);
            this.elem.addEventListener("mouseleave", this.onMouseLeave);
            this.elem.addEventListener("click", this.onMouseClick);
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // MenuItem::openSubMenu
    // open sub context menu
    MenuItem.prototype.openSubMenu = function () {
        if (!this.isRootMenu && this.elem) {
            this.showSubMenu = true;
            var x = parseInt(this.elem.style.width) + util_1.default.convertRemToPixels(1.0);
            var y = 0;
            for (var i = 0; i < this.children.length; ++i) {
                var itemX = x;
                var itemY = y + i * config_1.default.CONTEXTMENU_ITEM_HEIGHT;
                this.children[i].open(itemX, itemY);
            }
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // MenuItem::close
    // close context menu
    MenuItem.prototype.close = function () {
        this.children.forEach(function (element) { return element.close(); });
        if (!this.isRootMenu && this.isShowMenu) {
            if (this.parentElem && this.elem)
                this.parentElem.removeChild(this.elem);
            this.isShowMenu = false;
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // MenuItem::closeSubMenu
    // close sub context menu
    MenuItem.prototype.closeSubMenu = function () {
        if (!this.isRootMenu) {
            for (var i = 0; i < this.children.length; ++i) {
                this.children[i].close();
            }
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // MenuItem::addSubMenu
    // add submenu
    // return menu instance
    MenuItem.prototype.addSubMenu = function (contextMenu, isRootMenu, parentElem, name, callback) {
        if (contextMenu === void 0) { contextMenu = null; }
        if (isRootMenu === void 0) { isRootMenu = false; }
        if (parentElem === void 0) { parentElem = null; }
        if (name === void 0) { name = "top"; }
        if (callback === void 0) { callback = null; }
        var item = new MenuItem(contextMenu, isRootMenu, this.elem, name, callback);
        this.children.push(item);
        return item;
    };
    ;
    //--------------------------------------------------------------------------------
    // set menu enable/disable
    MenuItem.prototype.setEnable = function (enable) {
        this.enable = enable;
        if (this.elem)
            this.elem.className = enable ? "contextmenu-item" : "contextmenu-item disabled";
    };
    return MenuItem;
}());
;
//--------------------------------------------------------------------------------
// ContextMenu Manager
//--------------------------------------------------------------------------------
var ContextMenu = /** @class */ (function () {
    function ContextMenu(name) {
        if (name === void 0) { name = "Menu"; }
        this.rootMenu = new MenuItem(this, true, document.body, name);
        this.callbacks = [];
    }
    //--------------------------------------------------------------------------------
    // open context menu
    ContextMenu.prototype.open = function (x, y) {
        var _a;
        (_a = this.rootMenu) === null || _a === void 0 ? void 0 : _a.open(x, y);
    };
    ;
    //--------------------------------------------------------------------------------
    // close context menu
    ContextMenu.prototype.close = function () {
        var _a;
        (_a = this.rootMenu) === null || _a === void 0 ? void 0 : _a.close();
    };
    ;
    //--------------------------------------------------------------------------------
    // add menu item
    // return added menu
    ContextMenu.prototype.addMenu = function (name, callback) {
        var _a;
        if (callback === void 0) { callback = null; }
        var menuItem = (_a = this.rootMenu) === null || _a === void 0 ? void 0 : _a.addSubMenu(this, false, null, name, callback);
        return menuItem ? menuItem : null;
    };
    ;
    //--------------------------------------------------------------------------------
    // add sub menu item
    // return added menu
    // parentMenuName: menuName1&menuName2&menuName3
    //                delimeter: &
    ContextMenu.prototype.addSubMenu = function (parentMenuName, name, callback) {
        if (callback === void 0) { callback = null; }
        var menuItem = null;
        var parentMenuItem = this.findMenuItem(parentMenuName);
        if (parentMenuItem) {
            menuItem = parentMenuItem.addSubMenu(this, false, null, name, callback);
        }
        else {
            console.log('not found parent menu item ' + parentMenuName);
        }
        return menuItem;
    };
    ;
    //--------------------------------------------------------------------------------
    // menu item enable/disable
    // menuName, ex)menuName1&menuName2&menuName3
    // enable : boolean
    ContextMenu.prototype.setMenuEnable = function (menuName, enable) {
        var menuItem = this.findMenuItem(menuName);
        menuItem === null || menuItem === void 0 ? void 0 : menuItem.setEnable(enable);
    };
    //--------------------------------------------------------------------------------
    // menuName, ex)menuName1&menuName2&menuName3
    ContextMenu.prototype.findMenuItem = function (menuName) {
        var _a;
        var strs = menuName.split('&');
        var children = (_a = this.rootMenu) === null || _a === void 0 ? void 0 : _a.children;
        var menuItem = null;
        if (children) {
            for (var i = 0; i < strs.length; ++i) {
                var parent = null;
                for (var k = 0; k < children.length; ++k) {
                    if (children[k].name === strs[i]) {
                        parent = children[k];
                        break;
                    }
                }
                if (!parent)
                    break; // not found parent menu item
                if (strs.length - 1 === i) {
                    menuItem = parent;
                    break; // success find 
                }
                children = parent.children;
            }
        }
        return menuItem;
    };
    //--------------------------------------------------------------------------------
    // menu click event
    // close context menu
    ContextMenu.prototype.onClickMenu = function (menuItem) {
        this.close();
    };
    ;
    return ContextMenu;
}());
exports.default = ContextMenu;
;
//# sourceMappingURL=context_menu.js.map