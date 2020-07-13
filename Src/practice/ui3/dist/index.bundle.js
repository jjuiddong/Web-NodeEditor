/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/config.js":
/*!************************!*\
  !*** ./dist/config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//
// 2020-06-24, jjuiddong
// configuration class
//
//  - 2020-07-13
//    - TypeScript Refactoring
//
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.TITLEBAR_HEIGHT = 30;
    Config.NODE_MARGIN_LEFT = 5;
    Config.NODE_MARGIN_TOP = 5;
    Config.NODE_ARC_RADIUS = 6;
    Config.NODE_BORDER_COLOR = 'rgba(0,0,0,1)';
    Config.NODE_HEADER_COLOR = "rgba(200,200,0,1)";
    Config.NODE_HEADER_COLOR2 = "rgba(255,255,0,1)";
    Config.NODE_BODY_COLOR = "rgba(200,200,200,1)";
    Config.NODE_BODY_COLOR2 = "rgba(255,255,255,1)";
    Config.SLOT_MARGIN_LEFT = 5;
    Config.SLOT_HEIGHT = 30;
    Config.SLOT_ICON_COLOR = "rgba(0,255,0,1)";
    Config.SLOT_ICON_COLOR_NORMAL = "rgba(0,255,0,1)";
    Config.SLOT_ICON_COLOR_HOVER = "rgba(255,255,0,1)";
    Config.SLOT_ICON_COLOR_SELECT = "rgba(255,150,0,1)";
    Config.SLOT_ICON_COLOR_LINK = "rgba(255,0,0,1)";
    Config.SLOT_ICON_RADIUS = 20 / 2;
    Config.SLOT_ICON_SPACE_WIDTH = Config.SLOT_ICON_RADIUS * 2 + 5;
    Config.SLOT_TEXT_BASE_OFFSET = 5; // text y base offset
    Config.WIDGETS_MARGIN_LEFT = 5;
    Config.WIDGETS_MARGIN_TOP = 5;
    Config.WIDGETS_HEIGHT = 30;
    Config.WIDGETS_BG_COLOR = 'rgba(0,0,0,1)';
    Config.WIDGETS_TEXT_COLOR = 'rgba(255,255,255,1)';
    Config.WIDGETS_TEXT_BASE_OFFSET = 5; // text y base offset
    Config.CONTEXTMENU_ITEM_HEIGHT = 26;
    return Config;
}());
exports.default = Config;
;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./dist/context_menu.js":
/*!******************************!*\
  !*** ./dist/context_menu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var config_1 = __importDefault(__webpack_require__(/*! ./config */ "./dist/config.js"));
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./dist/util.js"));
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

/***/ }),

/***/ "./dist/editview.js":
/*!**************************!*\
  !*** ./dist/editview.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//
// 2020-06-25, jjuiddong
// Node Editor View class
//  - render canvas
//  - render node
//  - render link
//
//  - 2020-07-13
//      - TypeScript Refactoring
//
var vec2_1 = __importDefault(__webpack_require__(/*! ./math/vec2 */ "./dist/math/vec2.js"));
var context_menu_1 = __importDefault(__webpack_require__(/*! ./context_menu */ "./dist/context_menu.js"));
var node_spawn_1 = __importDefault(__webpack_require__(/*! ./node_spawn */ "./dist/node_spawn.js"));
var EDIT_STATE_NORMAL = 0;
var EDIT_STATE_SCROLL = 1;
var EDIT_STATE_MOVE_NODE = 2;
var EDIT_STATE_EDIT_LINK = 3;
var EDIT_STATE_EDIT_WIDGET = 4;
var EditView = /** @class */ (function () {
    function EditView(canvas, width, // view width
    height // view height
    ) {
        var _this = this;
        this.ctx = null;
        this.state = EDIT_STATE_NORMAL;
        this.isFocus = false;
        this.width = 0;
        this.height = 0;
        this.offset = new vec2_1.default(1000, 1000);
        this.scale = 1;
        this.size = new vec2_1.default(2000, 2000);
        this.isScroll = false;
        this.clickPos = new vec2_1.default(0, 0);
        this.prevPos = new vec2_1.default(0, 0);
        this.mousePos = new vec2_1.default(0, 0);
        this.pattern = null;
        this.editLink = null;
        this.editWidget = null;
        this.nodes = [];
        this.menu = null;
        //--------------------------------------------------------------------------------
        // return mouse original pos
        // calc zoom in/out, offset
        this.getOriginalPos = function (x, y) {
            var mousePos = new vec2_1.default(x, y);
            var offsetScale = new vec2_1.default();
            vec2_1.default.scale(offsetScale, _this.offset, _this.scale);
            var curPos = new vec2_1.default();
            vec2_1.default.add(curPos, mousePos, offsetScale);
            vec2_1.default.scale(curPos, curPos, 1 / _this.scale); // convert to original pos
            return curPos;
        };
        //--------------------------------------------------------------------------------
        // save node data to database
        this.saveDB = function () {
            // this.prompt.open('Input Title', 'nodeTitleName', (value) => {
            //     EditView_Ver1.saveDB(this, value);
            // });
        };
        //--------------------------------------------------------------------------------
        // load node data from database
        this.loadDB = function () {
            // this.prompt.open('Input Title', 'nodeTitleName', (value) => {
            //     EditView_Ver1.loadFromDB(this, value);
            // });
        };
        //--------------------------------------------------------------------------------
        // save node data to local storage
        this.saveLocalStorage = function () {
            // EditView_Ver1.saveLocalStorage(this, 'title');
        };
        //--------------------------------------------------------------------------------
        // load node data from local storage
        this.loadLocalStorage = function () {
            // EditView_Ver1.loadFromLocalStorage(this);
        };
        //--------------------------------------------------------------------------------
        // mouse move event handling
        this.onMouseMove = function (e) {
            if (_this.isScroll) {
                var delta = new vec2_1.default();
                vec2_1.default.sub(delta, _this.prevPos, new vec2_1.default(e.offsetX, e.offsetY));
                vec2_1.default.set2(_this.prevPos, e.offsetX, e.offsetY);
                vec2_1.default.scale(delta, delta, 1 / _this.scale);
                vec2_1.default.add(_this.offset, _this.offset, delta);
            }
            var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
            var selNode = null;
            // this.nodes.forEach((node) => {
            //   if (node.state === NODE_STATE_SELECT) {
            //     selNode = node;
            //     node.move(mousePos.x + node.offset.x, mousePos.y + node.offset.y);
            //     if (this.state === EDIT_STATE_MOVE_NODE) this.calcNodeLayout(selNode);
            //   }
            //   if (node.state === NODE_STATE_EDIT_WIDGET) {
            //     // nothing~
            //   } else {
            //     if (node.isPointInRect(mousePos.x, mousePos.y))
            //       node.onMouseMove(mousePos, e);
            //   }
            // });
            // if (this.editLink && this.state === EDIT_STATE_EDIT_LINK) {
            //   this.editLink.setP1(mousePos);
            // }
            // if (this.editWidget && this.state === EDIT_STATE_EDIT_WIDGET) {
            //   this.editWidget.onMouseMove(mousePos, e);
            // }
        };
        //--------------------------------------------------------------------------------
        // mouse down event handling
        this.onMouseDown = function (e) {
            if (e.button === 0) {
                _this.onMouseLeftDown(e);
            }
        };
        //--------------------------------------------------------------------------------
        // mouse left button down event handling
        this.onMouseLeftDown = function (e) {
            var _a;
            (_a = _this.menu) === null || _a === void 0 ? void 0 : _a.close();
            var isSelect = false;
            var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
            var selSlot = null;
            var selWidget = null;
            // this.nodes.forEach((node) => {
            //   if (node.isPointInRect(mousePos.x, mousePos.y)) {
            //     isSelect = true;
            //     node.onMouseDown(mousePos, e);
            //     if (node.state === NODE_STATE_EDIT_SLOT) {
            //       this.state = EDIT_STATE_EDIT_LINK;
            //       selSlot = node.getSelectSlots()[0];
            //     } else if (node.state === NODE_STATE_EDIT_WIDGET) {
            //       this.state = EDIT_STATE_EDIT_WIDGET;
            //       selWidget = node.getSelectWidgets()[0];
            //     } else {
            //       this.state = EDIT_STATE_MOVE_NODE;
            //       node.setFocus(true);
            //       node.offset.set2(node.rect.x - mousePos.x, node.rect.y - mousePos.y);
            //     }
            //   } else {
            //     node.isFocus = false;
            //   }
            // });
            // scroll?
            if (!isSelect) {
                _this.isScroll = true;
                _this.state = EDIT_STATE_SCROLL;
                _this.clickPos.set2(e.offsetX, e.offsetY);
                _this.prevPos.set2(e.offsetX, e.offsetY);
            }
            // edit link
            if (selSlot && _this.state === EDIT_STATE_EDIT_LINK) {
                //   this.editLink = new Link(
                //     (option = {
                //       from: selSlot.id,
                //       p0: selSlot.getPos(),
                //       p1: mousePos,
                //     })
                //   );
            }
            // eidt widget
            if (selWidget && _this.state === EDIT_STATE_EDIT_WIDGET) {
                _this.editWidget = selWidget;
            }
        };
        //--------------------------------------------------------------------------------
        // mouse up event handling
        this.onMouseUp = function (e) {
            var _a;
            if (e.button === 0) {
                _this.onMouseLeftUp(e);
            }
            else if (e.button === 2) {
                // mouse right button down
                var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
                _this.mousePos.set(mousePos);
                // // check focus node
                // const nodes = this.nodes.filter((node) => node.isFocus);
                // this.menu.setMenuEnable("Remove", nodes.length > 0);
                (_a = _this.menu) === null || _a === void 0 ? void 0 : _a.open(e.offsetX + 5, e.offsetY + 5);
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };
        //--------------------------------------------------------------------------------
        // mouse left up event handling
        this.onMouseLeftUp = function (e) {
            _this.isScroll = false;
            var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
            // var selSlot = null;
            // var selWidget = null;
            // this.nodes.forEach((node) => {
            //   const isInRect = node.isPointInRect(mousePos.x, mousePos.y);
            //   if (node.state !== NODE_STATE_NORMAL) {
            //     if (isInRect) {
            //       const widgets = node.getSelectWidgets();
            //       if (widgets.length > 0) {
            //         selWidget = widgets[0];
            //       }
            //     }
            //     node.onMouseUp(mousePos, e);
            //   } else if (isInRect) {
            //     node.onMouseUp(mousePos, e);
            //     const slots = node.getHoverSlots();
            //     if (slots.length > 0) {
            //       selSlot = slots[0];
            //     }
            //   }
            // });
            // // create link?
            // if (this.editLink && selSlot && this.state === EDIT_STATE_EDIT_LINK) {
            //   this.editLink.setTo(selSlot.id);
            //   this.addLink(this.editLink);
            // }
            // // eidt widget?
            // if (selWidget && this.editWidget && this.state === EDIT_STATE_EDIT_WIDGET) {
            //   if (!(selWidget instanceof Widgets.Boolean)) {
            //     this.input.open(this.editWidget, e.offsetX, e.offsetY);
            //   }
            // }
            // this.editLink = null;
            // this.editWidget = null;
            // this.state = EDIT_STATE_NORMAL;
        };
        //--------------------------------------------------------------------------------
        // mouse up event handling
        this.onMouseDBClick = function (e) {
        };
        //--------------------------------------------------------------------------------
        // mouse wheel event handling
        this.onMouseWheel = function (e) {
            var curPos = new vec2_1.default();
            var mousePos = new vec2_1.default(e.offsetX, e.offsetY);
            vec2_1.default.scale(curPos, _this.offset, _this.scale);
            vec2_1.default.add(curPos, curPos, mousePos);
            var s;
            if (e.deltaY > 0) {
                s = 0.8;
            }
            else {
                s = 1.2;
            }
            _this.scale *= s;
            var newPos = new vec2_1.default();
            vec2_1.default.scale(newPos, curPos, s);
            var delta = new vec2_1.default();
            vec2_1.default.sub(delta, newPos, mousePos);
            vec2_1.default.set2(_this.offset, delta.x / _this.scale, delta.y / _this.scale);
        };
        if (!canvas)
            return;
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function () {
            if (ctx)
                _this.pattern = ctx.createPattern(img, 'repeat');
        };
        img.src = '../imgs/grid.png';
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        var menu = new context_menu_1.default();
        menu.addMenu("Add");
        //menu.addMenu("Remove", this.onRemove);
        menu.addMenu("Group", function () { return console.log("Group"); });
        menu.addSubMenu("Add", "Variable");
        menu.addSubMenu("Add", "Function");
        menu.addSubMenu("Add&Variable", "Boolean", function (a) {
            return _this.nodes.push(node_spawn_1.default.Boolean(_this.mousePos));
        });
        menu.addSubMenu("Add&Variable", "Number", function () {
            return _this.nodes.push(node_spawn_1.default.Number(_this.mousePos));
        });
        menu.addSubMenu("Add&Variable", "String", function () {
            return _this.nodes.push(node_spawn_1.default.String(_this.mousePos));
        });
        // menu.addSubMenu("Add&Function", "Node1", () =>
        //   //this.nodes.push(SpawnNode.Node1(this.mousePos))
        // );
        // menu.addSubMenu("Add&Function", "Node2", () =>
        //   //this.nodes.push(SpawnNode.Node2(this.mousePos))
        // );
        // menu.addSubMenu("Add&Function", "Node3", () =>
        //   //this.nodes.push(SpawnNode.Node3(this.mousePos))
        // );
        // menu.addSubMenu("Add&Function", "Node4");
        // menu.addSubMenu("Add&Function", "Console", () =>
        //   //this.nodes.push(SpawnNode.Console(this.mousePos))
        // );
        this.menu = menu;
        canvas.addEventListener("mousemove", this.onMouseMove);
        canvas.addEventListener("mousedown", this.onMouseDown);
        canvas.addEventListener("mouseup", this.onMouseUp);
        canvas.addEventListener("dblclick", this.onMouseDBClick);
        canvas.addEventListener("wheel", this.onMouseWheel);
    }
    EditView.prototype.render = function (ctx) {
        if (!ctx)
            return;
        ctx.save();
        ctx.scale(this.scale, this.scale);
        ctx.translate(-this.offset.x, -this.offset.y);
        // render background grid
        ctx.fillStyle = "rgba(0,0,0,1)";
        if (this.pattern) {
            ctx.fillStyle = this.pattern;
            ctx.imageSmoothingEnabled = false;
            ctx.fillRect(this.offset.x, this.offset.y, this.width / this.scale, this.height / this.scale);
            ctx.imageSmoothingEnabled = true;
        }
        //
        // render nodes
        this.nodes.forEach(function (node) { return node.render(ctx); });
        ctx.restore();
        // debugging information
        {
            var ty = 30;
            ctx.font = "20px serif";
            ctx.fillStyle = "rgba(255,255,255,1)";
            ctx.fillText("Scroll : " +
                this.offset.x.toFixed(2) +
                ", " +
                this.offset.y.toFixed(2), 0, (ty += 24));
            ctx.fillText("Zoom : " + this.scale.toFixed(2), 0, (ty += 24));
            ctx.fillText("State : " + this.state, 0, (ty += 24));
        }
    };
    return EditView;
}());
exports.default = EditView;
//# sourceMappingURL=editview.js.map

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var menubar_1 = __importDefault(__webpack_require__(/*! ./menubar */ "./dist/menubar.js"));
var editview_1 = __importDefault(__webpack_require__(/*! ./editview */ "./dist/editview.js"));
console.log("start node editor");
var _menuBar = null;
var _editView = null;
var _ctx = null;
// initialize canvas & menubar
var body = document.querySelector('body');
if (body) {
    var menu = document.createElement('div');
    var canvas = document.createElement('canvas');
    if (menu) {
        menu.id = 'menubar';
        body.appendChild(menu);
    }
    if (canvas) {
        canvas.id = 'canvas';
        canvas.width = window.innerWidth - 4;
        canvas.height = window.innerHeight - 4;
        _ctx = canvas.getContext("2d");
        _editView = new editview_1.default(canvas, canvas.width, canvas.height);
        _menuBar = new menubar_1.default(_editView);
        body.appendChild(canvas);
    }
    window.requestAnimationFrame(render);
}
// render canvas
function render() {
    if (_editView)
        _editView.render(_ctx);
    window.requestAnimationFrame(render);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/math/rect.js":
/*!***************************!*\
  !*** ./dist/math/rect.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//
// 2020-06-25, jjuiddong
// Rect class
//  - x, y, width, height
//
// 2020-07-13
//  - TypeScript Refactoring
//
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }
    // this = rect
    Rect.prototype.set = function (rect) {
        this.x = rect.x;
        this.y = rect.y;
        this.w = rect.w;
        this.h = rect.h;
    };
    ;
    // this = x,y,w,h
    Rect.prototype.set2 = function (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    };
    ;
    Rect.prototype.isPointInRect = function (x, y) {
        return (this.x < x &&
            this.x + this.w > x &&
            this.y < y &&
            this.y + this.h > y);
    };
    ;
    // out = rect
    Rect.set = function (out, rect) {
        out.x = rect.x;
        out.y = rect.y;
        out.w = rect.w;
        out.h = rect.h;
    };
    ;
    // this = x,y,w,h
    Rect.set2 = function (out, x, y, width, height) {
        out.x = x;
        out.y = y;
        out.w = width;
        out.h = height;
    };
    ;
    return Rect;
}());
exports.default = Rect;
;
//# sourceMappingURL=rect.js.map

/***/ }),

/***/ "./dist/math/vec2.js":
/*!***************************!*\
  !*** ./dist/math/vec2.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//
// 2020-07-13, jjuiddong
// 2D vector
//
Object.defineProperty(exports, "__esModule", { value: true });
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = 0;
        this.y = 0;
        this.x = x || 0;
        this.y = y || 0;
    }
    Vec2.prototype.set = function (pos) {
        this.x = pos.x;
        this.y = pos.y;
    };
    Vec2.prototype.set2 = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Vec2.prototype.copy = function (pos) {
        this.x = pos.x;
        this.y = pos.y;
        return this;
    };
    // out = a
    Vec2.set = function (out, a) {
        out.x = a.x;
        out.y = a.y;
    };
    // out = x,y
    Vec2.set2 = function (out, x, y) {
        out.x = x;
        out.y = y;
    };
    ;
    // out = a + b
    Vec2.add = function (out, a, b) {
        out.x = a.x + b.x;
        out.y = a.y + b.y;
    };
    ;
    // out = a - b
    Vec2.sub = function (out, a, b) {
        out.x = a.x - b.x;
        out.y = a.y - b.y;
    };
    ;
    // out = a * b
    Vec2.scale = function (out, a, b) {
        out.x = a.x * b;
        out.y = a.y * b;
    };
    ;
    return Vec2;
}());
exports.default = Vec2;
//# sourceMappingURL=vec2.js.map

/***/ }),

/***/ "./dist/menubar.js":
/*!*************************!*\
  !*** ./dist/menubar.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MenuBar = /** @class */ (function () {
    function MenuBar(editView) {
        var _this = this;
        this.editView = null;
        this.elem = null;
        //--------------------------------------------------------------------------------
        // MenuBar.onSaveDB
        // save button click event handler
        this.onSaveDB = function () {
            var _a;
            (_a = _this.editView) === null || _a === void 0 ? void 0 : _a.saveDB();
        };
        //--------------------------------------------------------------------------------
        // MenuBar.onLoadDB
        // load button click event handler
        this.onLoadDB = function () {
            var _a;
            (_a = _this.editView) === null || _a === void 0 ? void 0 : _a.loadDB();
        };
        //--------------------------------------------------------------------------------
        // MenuBar.onSaveLocal
        // save button click event handler
        this.onSaveLocal = function () {
            var _a;
            (_a = _this.editView) === null || _a === void 0 ? void 0 : _a.saveLocalStorage();
        };
        //--------------------------------------------------------------------------------
        // MenuBar.onLoadLocal
        // load button click event handler
        this.onLoadLocal = function () {
            var _a;
            (_a = _this.editView) === null || _a === void 0 ? void 0 : _a.loadLocalStorage();
        };
        this.editView = editView; // EditView instance
        var parentElem = document.getElementById("menubar");
        var elem = document.createElement("div");
        if (parentElem && elem) {
            elem.className = "menubar";
            elem.style.position = "absolute";
            elem.innerHTML =
                "<button id='savedb'>Save DB</button>"
                    + "<button id='loaddb'>Load DB</button>"
                    + "<span style='margin:2rem'></span>"
                    + "<button id='savelocal'>Save Local</button>"
                    + "<button id='loadlocal'>Load Local</button>";
            parentElem.appendChild(elem);
            var saveBtn = elem.querySelector("#savedb");
            if (saveBtn) {
                saveBtn.addEventListener("click", this.onSaveDB);
            }
            var loadBtn = elem.querySelector("#loaddb");
            if (loadBtn) {
                loadBtn.addEventListener("click", this.onLoadDB);
            }
            var saveLocalBtn = elem.querySelector("#savelocal");
            if (saveLocalBtn) {
                saveLocalBtn.addEventListener("click", this.onSaveLocal);
            }
            var loadLocalBtn = elem.querySelector("#loadlocal");
            if (loadLocalBtn) {
                loadLocalBtn.addEventListener("click", this.onLoadLocal);
            }
            this.elem = elem;
        }
    }
    return MenuBar;
}());
exports.default = MenuBar;
;
//# sourceMappingURL=menubar.js.map

/***/ }),

/***/ "./dist/node.js":
/*!**********************!*\
  !*** ./dist/node.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//
// 2020-06-24, jjuiddong
// node class
//
//  - 2020-07-13
//    - TypeScript Refactoring
//
var rect_1 = __importDefault(__webpack_require__(/*! ./math/rect */ "./dist/math/rect.js"));
var vec2_1 = __importDefault(__webpack_require__(/*! ./math/vec2 */ "./dist/math/vec2.js"));
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./dist/util.js"));
var config_1 = __importDefault(__webpack_require__(/*! ./config */ "./dist/config.js"));
// node state
var NODE_STATE_NORMAL = 0;
var NODE_STATE_HOVER = 1;
var NODE_STATE_SELECT = 2;
var NODE_STATE_EDIT_SLOT = 3;
var NODE_STATE_EDIT_WIDGET = 4;
var Node = /** @class */ (function () {
    function Node(id, name, rect) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = "Node"; }
        if (rect === void 0) { rect = new rect_1.default(0, 0, 200, 200); }
        this.id = 0;
        this.isFocus = false;
        this.id = id || util_1.default.genId();
        this.name = name;
        this.offset = new vec2_1.default(0, 0); // mouse select offset
        this.rect = rect; // node rect
        this.bodyY = rect.y; // node body rect y
        this.inputs = []; // input slots
        this.outputs = []; // output slots
        this.widgets = []; // widgets (number, text, boolean, combobox)
        this.state = NODE_STATE_NORMAL;
    }
    // //--------------------------------------------------------------------------------
    // // add slot
    // addSlot = function (slot) {
    //   slot.node = this;
    //   if (slot.type === SLOT_TYPE_INPUT) {
    //     this.inputs.push(slot);
    //   } else if (slot.type === SLOT_TYPE_OUTPUT) {
    //     this.outputs.push(slot);
    //   } else {
    //     console.log("error!! addSlot(), slot type invalid");
    //   }
    //   this.clacSlotLayout();
    // };
    // //--------------------------------------------------------------------------------
    // // remove slot
    // // slotId: slot id
    // removeSlot = function (slotId) {
    //   if (this.inputs.find((slot) => slotId === slot.id)) {
    //     this.inputs = this.inputs.filter((slot) => slotId !== slot.id);
    //   } else if (this.outputs.find((slot) => slotId === slot.id)) {
    //     this.outputs = this.outputs.filter((slot) => slotId !== slot.id);
    //   }
    // };
    // //--------------------------------------------------------------------------------
    // // add widgets
    // addWidget = function (widget) {
    //   widget.node = this;
    //   this.widgets.push(widget);
    //   this.clacSlotLayout();
    // };
    //--------------------------------------------------------------------------------
    // render node
    // ctx: rendering context 2d
    Node.prototype.render = function (ctx) {
        var x = this.rect.x;
        var y = this.rect.y;
        var w = this.rect.w;
        var h = this.rect.h;
        {
            var hh = config_1.default.TITLEBAR_HEIGHT;
            var by = y + config_1.default.TITLEBAR_HEIGHT;
            var bh = h - config_1.default.TITLEBAR_HEIGHT;
            util_1.default.roundedRectHeader(ctx, x, y, w, hh, config_1.default.NODE_ARC_RADIUS, this.isFocus ? config_1.default.NODE_HEADER_COLOR2 : config_1.default.NODE_HEADER_COLOR, config_1.default.NODE_BORDER_COLOR);
            util_1.default.roundedRectBody(ctx, x, by, w, bh, config_1.default.NODE_ARC_RADIUS, this.isFocus ? config_1.default.NODE_BODY_COLOR2 : config_1.default.NODE_BODY_COLOR, config_1.default.NODE_BORDER_COLOR);
            this.bodyY = hh;
        }
        {
            // render title text
            var tx = x + config_1.default.NODE_MARGIN_LEFT;
            var ty = y + config_1.default.TITLEBAR_HEIGHT - 5;
            ctx.font = "24px serif";
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fillText(this.name, tx, ty);
        }
        // render input/output slot
        this.inputs.forEach(function (slot) {
            slot.render(ctx);
        });
        this.outputs.forEach(function (slot) {
            slot.render(ctx);
        });
        // render widgets
        this.widgets.forEach(function (widget) {
            widget.render(ctx);
        });
    };
    ;
    //--------------------------------------------------------------------------------
    // move node x,y position
    Node.prototype.move = function (x, y) {
        this.rect.x = x;
        this.rect.y = y;
    };
    ;
    //--------------------------------------------------------------------------------
    // focus node
    // focus: true/false
    Node.prototype.setFocus = function (focus) {
        this.isFocus = focus;
        this.state = focus ? NODE_STATE_SELECT : NODE_STATE_NORMAL;
    };
    //--------------------------------------------------------------------------------
    // check x,y point in rect?
    Node.prototype.isPointInRect = function (x, y) {
        return this.rect.isPointInRect(x, y);
    };
    ;
    return Node;
}());
exports.default = Node;
;
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "./dist/node_spawn.js":
/*!****************************!*\
  !*** ./dist/node_spawn.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __importDefault(__webpack_require__(/*! ./math/rect */ "./dist/math/rect.js"));
var node_1 = __importDefault(__webpack_require__(/*! ./node */ "./dist/node.js"));
var SpawnNode = /** @class */ (function () {
    function SpawnNode() {
    }
    //--------------------------------------------------------------------------------
    // spawn Boolean
    // pos: {x,y}
    SpawnNode.Boolean = function (pos) {
        var node = new node_1.default(null, 'Boolean', new rect_1.default(pos.x, pos.y, 200, 100));
        // node.addSlot(new Slot({ name: "in", type: SLOT_TYPE_INPUT }));
        // node.addSlot(new Slot({ name: "out", type: SLOT_TYPE_OUTPUT }));
        // node.addWidget(new Widgets.Boolean({}));
        return node;
    };
    //--------------------------------------------------------------------------------
    // spawn Number
    // pos: {x,y}
    SpawnNode.Number = function (pos) {
        var node = new node_1.default(null, 'Number', new rect_1.default(pos.x, pos.y, 200, 100));
        // node.addSlot(new Slot({ name: "in", type: SLOT_TYPE_INPUT }));
        // node.addSlot(new Slot({ name: "out", type: SLOT_TYPE_OUTPUT }));
        // node.addWidget(new Widgets.Number({}));
        return node;
    };
    // //--------------------------------------------------------------------------------
    // spawn String
    // pos: {x,y}
    SpawnNode.String = function (pos) {
        var node = new node_1.default(null, 'String', new rect_1.default(pos.x, pos.y, 200, 100));
        // node.addSlot(new Slot({ name: "in", type: SLOT_TYPE_INPUT }));
        // node.addSlot(new Slot({ name: "out", type: SLOT_TYPE_OUTPUT }));
        // node.addWidget(new Widgets.String({}));
        return node;
    };
    return SpawnNode;
}());
exports.default = SpawnNode;
//# sourceMappingURL=node_spawn.js.map

/***/ }),

/***/ "./dist/util.js":
/*!**********************!*\
  !*** ./dist/util.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//
// 2020-06-26, jjuiddong
// Utility class
//
//  - 2020-07-13
//    - TypeScript Refactoring
//
var Util = /** @class */ (function () {
    function Util() {
    }
    //--------------------------------------------------------------------------------
    // generate unique id
    Util.genId = function () {
        Util.inc += 1;
        return Util.inc;
    };
    //--------------------------------------------------------------------------------
    // initialize id seed
    Util.setSeed = function (seed) {
        Util.seed = seed;
        Util.inc = seed;
    };
    //--------------------------------------------------------------------------------
    Util.lerp = function (value1, value2, amount) {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;
        return value1 + (value2 - value1) * amount;
    };
    //--------------------------------------------------------------------------------
    // convert rem to pixel
    // https://stackoverflow.com/questions/36532307/rem-px-in-javascript
    Util.convertRemToPixels = function (rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };
    //--------------------------------------------------------------------------------
    // roundedRect
    Util.roundedRect = function (ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.lineTo(x + width - radius, y + height);
        ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        ctx.lineTo(x + width, y + radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.lineTo(x + radius, y);
        ctx.arcTo(x, y, x, y + radius, radius);
        if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fill();
        }
        if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
            ctx.stroke();
        }
    };
    //--------------------------------------------------------------------------------
    // roundedRectBody
    Util.roundedRectBody = function (ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + height - radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.lineTo(x + width - radius, y + height);
        ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x, y);
        ctx.save();
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.restore();
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    };
    //--------------------------------------------------------------------------------
    // check avilable storage
    // https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    // ex) Util.storageAvailable('localStorage')
    Util.storageAvailable = function (type) {
        // var storage;
        // try {
        //   storage = window[type];
        //   var x = '__storage_test__';
        //   storage.setItem(x, x);
        //   storage.removeItem(x);
        //   return true;
        // }
        // catch (e) {
        //   return e instanceof DOMException && (
        //     // Firefox를 제외한 모든 브라우저
        //     e.code === 22 ||
        //     // Firefox
        //     e.code === 1014 ||
        //     // 코드가 존재하지 않을 수도 있기 떄문에 이름 필드도 확인합니다.
        //     // Firefox를 제외한 모든 브라우저
        //     e.name === 'QuotaExceededError' ||
        //     // Firefox
        //     e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        //     // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
        //     (storage && storage.length !== 0);
        // }
    };
    Util.seed = 10000;
    Util.inc = Util.seed;
    //--------------------------------------------------------------------------------
    // roundedRectHeader
    Util.roundedRectHeader = function (ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x + width, y + radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.lineTo(x + radius, y);
        ctx.arcTo(x, y, x, y + radius, radius);
        ctx.save();
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.restore();
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    };
    return Util;
}());
exports.default = Util;
;
//# sourceMappingURL=util.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9jb250ZXh0X21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9lZGl0dmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rpc3QvbWF0aC9yZWN0LmpzIiwid2VicGFjazovLy8uL2Rpc3QvbWF0aC92ZWMyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbWVudWJhci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ub2RlX3NwYXduLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZ0M7Ozs7Ozs7Ozs7OztBQ3BFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGdDOzs7Ozs7Ozs7Ozs7QUM1RGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZ0MiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy9cclxuLy8gMjAyMC0wNi0yNCwgamp1aWRkb25nXHJcbi8vIGNvbmZpZ3VyYXRpb24gY2xhc3NcclxuLy9cclxuLy8gIC0gMjAyMC0wNy0xM1xyXG4vLyAgICAtIFR5cGVTY3JpcHQgUmVmYWN0b3JpbmdcclxuLy9cclxudmFyIENvbmZpZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbmZpZygpIHtcclxuICAgIH1cclxuICAgIENvbmZpZy5USVRMRUJBUl9IRUlHSFQgPSAzMDtcclxuICAgIENvbmZpZy5OT0RFX01BUkdJTl9MRUZUID0gNTtcclxuICAgIENvbmZpZy5OT0RFX01BUkdJTl9UT1AgPSA1O1xyXG4gICAgQ29uZmlnLk5PREVfQVJDX1JBRElVUyA9IDY7XHJcbiAgICBDb25maWcuTk9ERV9CT1JERVJfQ09MT1IgPSAncmdiYSgwLDAsMCwxKSc7XHJcbiAgICBDb25maWcuTk9ERV9IRUFERVJfQ09MT1IgPSBcInJnYmEoMjAwLDIwMCwwLDEpXCI7XHJcbiAgICBDb25maWcuTk9ERV9IRUFERVJfQ09MT1IyID0gXCJyZ2JhKDI1NSwyNTUsMCwxKVwiO1xyXG4gICAgQ29uZmlnLk5PREVfQk9EWV9DT0xPUiA9IFwicmdiYSgyMDAsMjAwLDIwMCwxKVwiO1xyXG4gICAgQ29uZmlnLk5PREVfQk9EWV9DT0xPUjIgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIjtcclxuICAgIENvbmZpZy5TTE9UX01BUkdJTl9MRUZUID0gNTtcclxuICAgIENvbmZpZy5TTE9UX0hFSUdIVCA9IDMwO1xyXG4gICAgQ29uZmlnLlNMT1RfSUNPTl9DT0xPUiA9IFwicmdiYSgwLDI1NSwwLDEpXCI7XHJcbiAgICBDb25maWcuU0xPVF9JQ09OX0NPTE9SX05PUk1BTCA9IFwicmdiYSgwLDI1NSwwLDEpXCI7XHJcbiAgICBDb25maWcuU0xPVF9JQ09OX0NPTE9SX0hPVkVSID0gXCJyZ2JhKDI1NSwyNTUsMCwxKVwiO1xyXG4gICAgQ29uZmlnLlNMT1RfSUNPTl9DT0xPUl9TRUxFQ1QgPSBcInJnYmEoMjU1LDE1MCwwLDEpXCI7XHJcbiAgICBDb25maWcuU0xPVF9JQ09OX0NPTE9SX0xJTksgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xyXG4gICAgQ29uZmlnLlNMT1RfSUNPTl9SQURJVVMgPSAyMCAvIDI7XHJcbiAgICBDb25maWcuU0xPVF9JQ09OX1NQQUNFX1dJRFRIID0gQ29uZmlnLlNMT1RfSUNPTl9SQURJVVMgKiAyICsgNTtcclxuICAgIENvbmZpZy5TTE9UX1RFWFRfQkFTRV9PRkZTRVQgPSA1OyAvLyB0ZXh0IHkgYmFzZSBvZmZzZXRcclxuICAgIENvbmZpZy5XSURHRVRTX01BUkdJTl9MRUZUID0gNTtcclxuICAgIENvbmZpZy5XSURHRVRTX01BUkdJTl9UT1AgPSA1O1xyXG4gICAgQ29uZmlnLldJREdFVFNfSEVJR0hUID0gMzA7XHJcbiAgICBDb25maWcuV0lER0VUU19CR19DT0xPUiA9ICdyZ2JhKDAsMCwwLDEpJztcclxuICAgIENvbmZpZy5XSURHRVRTX1RFWFRfQ09MT1IgPSAncmdiYSgyNTUsMjU1LDI1NSwxKSc7XHJcbiAgICBDb25maWcuV0lER0VUU19URVhUX0JBU0VfT0ZGU0VUID0gNTsgLy8gdGV4dCB5IGJhc2Ugb2Zmc2V0XHJcbiAgICBDb25maWcuQ09OVEVYVE1FTlVfSVRFTV9IRUlHSFQgPSAyNjtcclxuICAgIHJldHVybiBDb25maWc7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbmZpZztcclxuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy9cclxuLy8gMjAyMC0wNi0yOCwgamp1aWRkb25nXHJcbi8vIGNvbnRleHQgbWVudSBjbGFzc1xyXG4vLyAgIC0gbWVudSBpdGVtXHJcbi8vXHJcbi8vICAtIDIwMjAtMDctMTNcclxuLy8gICAgLSBUeXBlU2NyaXB0IFJlZmFjdG9yaW5nXHJcbi8vXHJcbnZhciBjb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb25maWdcIikpO1xyXG52YXIgdXRpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1lbnVJdGVtXHJcbnZhciBNZW51SXRlbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1lbnVJdGVtKGNvbnRleHRNZW51LCBpc1Jvb3RNZW51LCBwYXJlbnRFbGVtLCBuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNvbnRleHRNZW51ID09PSB2b2lkIDApIHsgY29udGV4dE1lbnUgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKGlzUm9vdE1lbnUgPT09IHZvaWQgMCkgeyBpc1Jvb3RNZW51ID0gZmFsc2U7IH1cclxuICAgICAgICBpZiAocGFyZW50RWxlbSA9PT0gdm9pZCAwKSB7IHBhcmVudEVsZW0gPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJ0b3BcIjsgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjayA9PT0gdm9pZCAwKSB7IGNhbGxiYWNrID0gbnVsbDsgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNSb290TWVudSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dNZW51ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93U3ViTWVudSA9IGZhbHNlO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSBtb3ZlIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7IH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIG1vdXNlIGVudGVyIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZWxlbSAmJiAoX3RoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkpXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuU3ViTWVudSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIG1vdXNlIGxlYXZlIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZWxlbSAmJiAoX3RoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkpXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZVN1Yk1lbnUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSBjbGljayBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmVuYWJsZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2soX3RoaXMpO1xyXG4gICAgICAgICAgICAvLyBsZWFmIG1lbnVJdGVtPyBjbG9zZSBjb250ZXh0IG1lbnVcclxuICAgICAgICAgICAgaWYgKF90aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgKF9hID0gX3RoaXMuY29udGV4dE1lbnUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkNsaWNrTWVudShfdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBjb250ZXh0TWVudTsgLy8gY29udGV4dCBtZW51XHJcbiAgICAgICAgdGhpcy5pc1Jvb3RNZW51ID1cclxuICAgICAgICAgICAgaXNSb290TWVudSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzUm9vdE1lbnU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtID0gcGFyZW50RWxlbTsgLy8gRE9NIHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCBcIm1lbnUgaXRlbVwiO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTsgLy8gZW5hYmxlL2Rpc2FibGU/XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTsgLy8gY2hpbGQgbWVudSBpdGVtXHJcbiAgICAgICAgdGhpcy5pc1Nob3dNZW51ID0gZmFsc2U7IC8vIHNob3cvaGlkZSBtZW51XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSb290TWVudSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAvL2VsZW0ubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBcImNvbnRleHRtZW51LWl0ZW1cIjtcclxuICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IGVsZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gTWVudUl0ZW06Om9wZW5cclxuICAgIC8vIG9wZW4gY29udGV4dCBtZW51XHJcbiAgICBNZW51SXRlbS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSb290TWVudSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd01lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtWCA9IHg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVkgPSB5ICsgaSAqIGNvbmZpZ18xLmRlZmF1bHQuQ09OVEVYVE1FTlVfSVRFTV9IRUlHSFQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLm9wZW4oaXRlbVgsIGl0ZW1ZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW0gJiYgdGhpcy5wYXJlbnRFbGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG93TWVudSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5zdHlsZS53aWR0aCA9IDEwMCArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLnN0eWxlLmhlaWdodCA9IGNvbmZpZ18xLmRlZmF1bHQuQ09OVEVYVE1FTlVfSVRFTV9IRUlHSFQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbS5hcHBlbmRDaGlsZCh0aGlzLmVsZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25Nb3VzZUVudGVyKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uTW91c2VDbGljayk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE1lbnVJdGVtOjpvcGVuU3ViTWVudVxyXG4gICAgLy8gb3BlbiBzdWIgY29udGV4dCBtZW51XHJcbiAgICBNZW51SXRlbS5wcm90b3R5cGUub3BlblN1Yk1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUm9vdE1lbnUgJiYgdGhpcy5lbGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N1Yk1lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgeCA9IHBhcnNlSW50KHRoaXMuZWxlbS5zdHlsZS53aWR0aCkgKyB1dGlsXzEuZGVmYXVsdC5jb252ZXJ0UmVtVG9QaXhlbHMoMS4wKTtcclxuICAgICAgICAgICAgdmFyIHkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtWCA9IHg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVkgPSB5ICsgaSAqIGNvbmZpZ18xLmRlZmF1bHQuQ09OVEVYVE1FTlVfSVRFTV9IRUlHSFQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLm9wZW4oaXRlbVgsIGl0ZW1ZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBNZW51SXRlbTo6Y2xvc2VcclxuICAgIC8vIGNsb3NlIGNvbnRleHQgbWVudVxyXG4gICAgTWVudUl0ZW0ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudC5jbG9zZSgpOyB9KTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSb290TWVudSAmJiB0aGlzLmlzU2hvd01lbnUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbSAmJiB0aGlzLmVsZW0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW0ucmVtb3ZlQ2hpbGQodGhpcy5lbGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dNZW51ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE1lbnVJdGVtOjpjbG9zZVN1Yk1lbnVcclxuICAgIC8vIGNsb3NlIHN1YiBjb250ZXh0IG1lbnVcclxuICAgIE1lbnVJdGVtLnByb3RvdHlwZS5jbG9zZVN1Yk1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUm9vdE1lbnUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gTWVudUl0ZW06OmFkZFN1Yk1lbnVcclxuICAgIC8vIGFkZCBzdWJtZW51XHJcbiAgICAvLyByZXR1cm4gbWVudSBpbnN0YW5jZVxyXG4gICAgTWVudUl0ZW0ucHJvdG90eXBlLmFkZFN1Yk1lbnUgPSBmdW5jdGlvbiAoY29udGV4dE1lbnUsIGlzUm9vdE1lbnUsIHBhcmVudEVsZW0sIG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHRNZW51ID09PSB2b2lkIDApIHsgY29udGV4dE1lbnUgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKGlzUm9vdE1lbnUgPT09IHZvaWQgMCkgeyBpc1Jvb3RNZW51ID0gZmFsc2U7IH1cclxuICAgICAgICBpZiAocGFyZW50RWxlbSA9PT0gdm9pZCAwKSB7IHBhcmVudEVsZW0gPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJ0b3BcIjsgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjayA9PT0gdm9pZCAwKSB7IGNhbGxiYWNrID0gbnVsbDsgfVxyXG4gICAgICAgIHZhciBpdGVtID0gbmV3IE1lbnVJdGVtKGNvbnRleHRNZW51LCBpc1Jvb3RNZW51LCB0aGlzLmVsZW0sIG5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc2V0IG1lbnUgZW5hYmxlL2Rpc2FibGVcclxuICAgIE1lbnVJdGVtLnByb3RvdHlwZS5zZXRFbmFibGUgPSBmdW5jdGlvbiAoZW5hYmxlKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGUgPSBlbmFibGU7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbSlcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmNsYXNzTmFtZSA9IGVuYWJsZSA/IFwiY29udGV4dG1lbnUtaXRlbVwiIDogXCJjb250ZXh0bWVudS1pdGVtIGRpc2FibGVkXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1lbnVJdGVtO1xyXG59KCkpO1xyXG47XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ29udGV4dE1lbnUgTWFuYWdlclxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBDb250ZXh0TWVudSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbnRleHRNZW51KG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk1lbnVcIjsgfVxyXG4gICAgICAgIHRoaXMucm9vdE1lbnUgPSBuZXcgTWVudUl0ZW0odGhpcywgdHJ1ZSwgZG9jdW1lbnQuYm9keSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIG9wZW4gY29udGV4dCBtZW51XHJcbiAgICBDb250ZXh0TWVudS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMucm9vdE1lbnUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vcGVuKHgsIHkpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGNsb3NlIGNvbnRleHQgbWVudVxyXG4gICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnJvb3RNZW51KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBhZGQgbWVudSBpdGVtXHJcbiAgICAvLyByZXR1cm4gYWRkZWQgbWVudVxyXG4gICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmFkZE1lbnUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHsgY2FsbGJhY2sgPSBudWxsOyB9XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gKF9hID0gdGhpcy5yb290TWVudSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZFN1Yk1lbnUodGhpcywgZmFsc2UsIG51bGwsIG5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gbWVudUl0ZW0gPyBtZW51SXRlbSA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gYWRkIHN1YiBtZW51IGl0ZW1cclxuICAgIC8vIHJldHVybiBhZGRlZCBtZW51XHJcbiAgICAvLyBwYXJlbnRNZW51TmFtZTogbWVudU5hbWUxJm1lbnVOYW1lMiZtZW51TmFtZTNcclxuICAgIC8vICAgICAgICAgICAgICAgIGRlbGltZXRlcjogJlxyXG4gICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmFkZFN1Yk1lbnUgPSBmdW5jdGlvbiAocGFyZW50TWVudU5hbWUsIG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHsgY2FsbGJhY2sgPSBudWxsOyB9XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gbnVsbDtcclxuICAgICAgICB2YXIgcGFyZW50TWVudUl0ZW0gPSB0aGlzLmZpbmRNZW51SXRlbShwYXJlbnRNZW51TmFtZSk7XHJcbiAgICAgICAgaWYgKHBhcmVudE1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtID0gcGFyZW50TWVudUl0ZW0uYWRkU3ViTWVudSh0aGlzLCBmYWxzZSwgbnVsbCwgbmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBmb3VuZCBwYXJlbnQgbWVudSBpdGVtICcgKyBwYXJlbnRNZW51TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZW51SXRlbTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBtZW51IGl0ZW0gZW5hYmxlL2Rpc2FibGVcclxuICAgIC8vIG1lbnVOYW1lLCBleCltZW51TmFtZTEmbWVudU5hbWUyJm1lbnVOYW1lM1xyXG4gICAgLy8gZW5hYmxlIDogYm9vbGVhblxyXG4gICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnNldE1lbnVFbmFibGUgPSBmdW5jdGlvbiAobWVudU5hbWUsIGVuYWJsZSkge1xyXG4gICAgICAgIHZhciBtZW51SXRlbSA9IHRoaXMuZmluZE1lbnVJdGVtKG1lbnVOYW1lKTtcclxuICAgICAgICBtZW51SXRlbSA9PT0gbnVsbCB8fCBtZW51SXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudUl0ZW0uc2V0RW5hYmxlKGVuYWJsZSk7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gbWVudU5hbWUsIGV4KW1lbnVOYW1lMSZtZW51TmFtZTImbWVudU5hbWUzXHJcbiAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZmluZE1lbnVJdGVtID0gZnVuY3Rpb24gKG1lbnVOYW1lKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHZhciBzdHJzID0gbWVudU5hbWUuc3BsaXQoJyYnKTtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSAoX2EgPSB0aGlzLnJvb3RNZW51KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hpbGRyZW47XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gbnVsbDtcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5ba10ubmFtZSA9PT0gc3Ryc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjaGlsZHJlbltrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIG5vdCBmb3VuZCBwYXJlbnQgbWVudSBpdGVtXHJcbiAgICAgICAgICAgICAgICBpZiAoc3Rycy5sZW5ndGggLSAxID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0gPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIHN1Y2Nlc3MgZmluZCBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZW51SXRlbTtcclxuICAgIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBtZW51IGNsaWNrIGV2ZW50XHJcbiAgICAvLyBjbG9zZSBjb250ZXh0IG1lbnVcclxuICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5vbkNsaWNrTWVudSA9IGZ1bmN0aW9uIChtZW51SXRlbSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICByZXR1cm4gQ29udGV4dE1lbnU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRleHRNZW51O1xyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHRfbWVudS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vL1xyXG4vLyAyMDIwLTA2LTI1LCBqanVpZGRvbmdcclxuLy8gTm9kZSBFZGl0b3IgVmlldyBjbGFzc1xyXG4vLyAgLSByZW5kZXIgY2FudmFzXHJcbi8vICAtIHJlbmRlciBub2RlXHJcbi8vICAtIHJlbmRlciBsaW5rXHJcbi8vXHJcbi8vICAtIDIwMjAtMDctMTNcclxuLy8gICAgICAtIFR5cGVTY3JpcHQgUmVmYWN0b3JpbmdcclxuLy9cclxudmFyIHZlYzJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXRoL3ZlYzJcIikpO1xyXG52YXIgY29udGV4dF9tZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dF9tZW51XCIpKTtcclxudmFyIG5vZGVfc3Bhd25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlX3NwYXduXCIpKTtcclxudmFyIEVESVRfU1RBVEVfTk9STUFMID0gMDtcclxudmFyIEVESVRfU1RBVEVfU0NST0xMID0gMTtcclxudmFyIEVESVRfU1RBVEVfTU9WRV9OT0RFID0gMjtcclxudmFyIEVESVRfU1RBVEVfRURJVF9MSU5LID0gMztcclxudmFyIEVESVRfU1RBVEVfRURJVF9XSURHRVQgPSA0O1xyXG52YXIgRWRpdFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFZGl0VmlldyhjYW52YXMsIHdpZHRoLCAvLyB2aWV3IHdpZHRoXHJcbiAgICBoZWlnaHQgLy8gdmlldyBoZWlnaHRcclxuICAgICkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBFRElUX1NUQVRFX05PUk1BTDtcclxuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBuZXcgdmVjMl8xLmRlZmF1bHQoMTAwMCwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IHZlYzJfMS5kZWZhdWx0KDIwMDAsIDIwMDApO1xyXG4gICAgICAgIHRoaXMuaXNTY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsaWNrUG9zID0gbmV3IHZlYzJfMS5kZWZhdWx0KDAsIDApO1xyXG4gICAgICAgIHRoaXMucHJldlBvcyA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgwLCAwKTtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zID0gbmV3IHZlYzJfMS5kZWZhdWx0KDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0dGVybiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lZGl0TGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lZGl0V2lkZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbnVsbDtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gcmV0dXJuIG1vdXNlIG9yaWdpbmFsIHBvc1xyXG4gICAgICAgIC8vIGNhbGMgem9vbSBpbi9vdXQsIG9mZnNldFxyXG4gICAgICAgIHRoaXMuZ2V0T3JpZ2luYWxQb3MgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICB2YXIgbW91c2VQb3MgPSBuZXcgdmVjMl8xLmRlZmF1bHQoeCwgeSk7XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXRTY2FsZSA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2ZWMyXzEuZGVmYXVsdC5zY2FsZShvZmZzZXRTY2FsZSwgX3RoaXMub2Zmc2V0LCBfdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIHZhciBjdXJQb3MgPSBuZXcgdmVjMl8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuYWRkKGN1clBvcywgbW91c2VQb3MsIG9mZnNldFNjYWxlKTtcclxuICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc2NhbGUoY3VyUG9zLCBjdXJQb3MsIDEgLyBfdGhpcy5zY2FsZSk7IC8vIGNvbnZlcnQgdG8gb3JpZ2luYWwgcG9zXHJcbiAgICAgICAgICAgIHJldHVybiBjdXJQb3M7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gc2F2ZSBub2RlIGRhdGEgdG8gZGF0YWJhc2VcclxuICAgICAgICB0aGlzLnNhdmVEQiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5wcm9tcHQub3BlbignSW5wdXQgVGl0bGUnLCAnbm9kZVRpdGxlTmFtZScsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgRWRpdFZpZXdfVmVyMS5zYXZlREIodGhpcywgdmFsdWUpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBsb2FkIG5vZGUgZGF0YSBmcm9tIGRhdGFiYXNlXHJcbiAgICAgICAgdGhpcy5sb2FkREIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvbXB0Lm9wZW4oJ0lucHV0IFRpdGxlJywgJ25vZGVUaXRsZU5hbWUnLCAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIEVkaXRWaWV3X1ZlcjEubG9hZEZyb21EQih0aGlzLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIHNhdmUgbm9kZSBkYXRhIHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLnNhdmVMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEVkaXRWaWV3X1ZlcjEuc2F2ZUxvY2FsU3RvcmFnZSh0aGlzLCAndGl0bGUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBsb2FkIG5vZGUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmxvYWRMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEVkaXRWaWV3X1ZlcjEubG9hZEZyb21Mb2NhbFN0b3JhZ2UodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gbW91c2UgbW92ZSBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc3ViKGRlbHRhLCBfdGhpcy5wcmV2UG9zLCBuZXcgdmVjMl8xLmRlZmF1bHQoZS5vZmZzZXRYLCBlLm9mZnNldFkpKTtcclxuICAgICAgICAgICAgICAgIHZlYzJfMS5kZWZhdWx0LnNldDIoX3RoaXMucHJldlBvcywgZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc2NhbGUoZGVsdGEsIGRlbHRhLCAxIC8gX3RoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuYWRkKF90aGlzLm9mZnNldCwgX3RoaXMub2Zmc2V0LCBkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gX3RoaXMuZ2V0T3JpZ2luYWxQb3MoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICB2YXIgc2VsTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgIGlmIChub2RlLnN0YXRlID09PSBOT0RFX1NUQVRFX1NFTEVDVCkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2VsTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIC8vICAgICBub2RlLm1vdmUobW91c2VQb3MueCArIG5vZGUub2Zmc2V0LngsIG1vdXNlUG9zLnkgKyBub2RlLm9mZnNldC55KTtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLnN0YXRlID09PSBFRElUX1NUQVRFX01PVkVfTk9ERSkgdGhpcy5jYWxjTm9kZUxheW91dChzZWxOb2RlKTtcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vICAgaWYgKG5vZGUuc3RhdGUgPT09IE5PREVfU1RBVEVfRURJVF9XSURHRVQpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG5vdGhpbmd+XHJcbiAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChub2RlLmlzUG9pbnRJblJlY3QobW91c2VQb3MueCwgbW91c2VQb3MueSkpXHJcbiAgICAgICAgICAgIC8vICAgICAgIG5vZGUub25Nb3VzZU1vdmUobW91c2VQb3MsIGUpO1xyXG4gICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmVkaXRMaW5rICYmIHRoaXMuc3RhdGUgPT09IEVESVRfU1RBVEVfRURJVF9MSU5LKSB7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5lZGl0TGluay5zZXRQMShtb3VzZVBvcyk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZWRpdFdpZGdldCAmJiB0aGlzLnN0YXRlID09PSBFRElUX1NUQVRFX0VESVRfV0lER0VUKSB7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5lZGl0V2lkZ2V0Lm9uTW91c2VNb3ZlKG1vdXNlUG9zLCBlKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIG1vdXNlIGRvd24gZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICB0aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbk1vdXNlTGVmdERvd24oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSBsZWZ0IGJ1dHRvbiBkb3duIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTGVmdERvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIChfYSA9IF90aGlzLm1lbnUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB2YXIgaXNTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gX3RoaXMuZ2V0T3JpZ2luYWxQb3MoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICB2YXIgc2VsU2xvdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBzZWxXaWRnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy8gICBpZiAobm9kZS5pc1BvaW50SW5SZWN0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnkpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBpc1NlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICBub2RlLm9uTW91c2VEb3duKG1vdXNlUG9zLCBlKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChub2RlLnN0YXRlID09PSBOT0RFX1NUQVRFX0VESVRfU0xPVCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICB0aGlzLnN0YXRlID0gRURJVF9TVEFURV9FRElUX0xJTks7XHJcbiAgICAgICAgICAgIC8vICAgICAgIHNlbFNsb3QgPSBub2RlLmdldFNlbGVjdFNsb3RzKClbMF07XHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKG5vZGUuc3RhdGUgPT09IE5PREVfU1RBVEVfRURJVF9XSURHRVQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgdGhpcy5zdGF0ZSA9IEVESVRfU1RBVEVfRURJVF9XSURHRVQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgIHNlbFdpZGdldCA9IG5vZGUuZ2V0U2VsZWN0V2lkZ2V0cygpWzBdO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgICAgdGhpcy5zdGF0ZSA9IEVESVRfU1RBVEVfTU9WRV9OT0RFO1xyXG4gICAgICAgICAgICAvLyAgICAgICBub2RlLnNldEZvY3VzKHRydWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICBub2RlLm9mZnNldC5zZXQyKG5vZGUucmVjdC54IC0gbW91c2VQb3MueCwgbm9kZS5yZWN0LnkgLSBtb3VzZVBvcy55KTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS5pc0ZvY3VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgLy8gc2Nyb2xsP1xyXG4gICAgICAgICAgICBpZiAoIWlzU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1Njcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IEVESVRfU1RBVEVfU0NST0xMO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tQb3Muc2V0MihlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wcmV2UG9zLnNldDIoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVkaXQgbGlua1xyXG4gICAgICAgICAgICBpZiAoc2VsU2xvdCAmJiBfdGhpcy5zdGF0ZSA9PT0gRURJVF9TVEFURV9FRElUX0xJTkspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgdGhpcy5lZGl0TGluayA9IG5ldyBMaW5rKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIChvcHRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBmcm9tOiBzZWxTbG90LmlkLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgcDA6IHNlbFNsb3QuZ2V0UG9zKCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBwMTogbW91c2VQb3MsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBlaWR0IHdpZGdldFxyXG4gICAgICAgICAgICBpZiAoc2VsV2lkZ2V0ICYmIF90aGlzLnN0YXRlID09PSBFRElUX1NUQVRFX0VESVRfV0lER0VUKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lZGl0V2lkZ2V0ID0gc2VsV2lkZ2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gbW91c2UgdXAgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICB0aGlzLm9uTW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbk1vdXNlTGVmdFVwKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3VzZSByaWdodCBidXR0b24gZG93blxyXG4gICAgICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gX3RoaXMuZ2V0T3JpZ2luYWxQb3MoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW91c2VQb3Muc2V0KG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIGNoZWNrIGZvY3VzIG5vZGVcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5vZGVzID0gdGhpcy5ub2Rlcy5maWx0ZXIoKG5vZGUpID0+IG5vZGUuaXNGb2N1cyk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1lbnUuc2V0TWVudUVuYWJsZShcIlJlbW92ZVwiLCBub2Rlcy5sZW5ndGggPiAwKTtcclxuICAgICAgICAgICAgICAgIChfYSA9IF90aGlzLm1lbnUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vcGVuKGUub2Zmc2V0WCArIDUsIGUub2Zmc2V0WSArIDUpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIG1vdXNlIGxlZnQgdXAgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICB0aGlzLm9uTW91c2VMZWZ0VXAgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pc1Njcm9sbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgbW91c2VQb3MgPSBfdGhpcy5nZXRPcmlnaW5hbFBvcyhlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBzZWxTbG90ID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gdmFyIHNlbFdpZGdldCA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgIGNvbnN0IGlzSW5SZWN0ID0gbm9kZS5pc1BvaW50SW5SZWN0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnkpO1xyXG4gICAgICAgICAgICAvLyAgIGlmIChub2RlLnN0YXRlICE9PSBOT0RFX1NUQVRFX05PUk1BTCkge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGlzSW5SZWN0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgIGNvbnN0IHdpZGdldHMgPSBub2RlLmdldFNlbGVjdFdpZGdldHMoKTtcclxuICAgICAgICAgICAgLy8gICAgICAgaWYgKHdpZGdldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNlbFdpZGdldCA9IHdpZGdldHNbMF07XHJcbiAgICAgICAgICAgIC8vICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIG5vZGUub25Nb3VzZVVwKG1vdXNlUG9zLCBlKTtcclxuICAgICAgICAgICAgLy8gICB9IGVsc2UgaWYgKGlzSW5SZWN0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICBub2RlLm9uTW91c2VVcChtb3VzZVBvcywgZSk7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzbG90cyA9IG5vZGUuZ2V0SG92ZXJTbG90cygpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHNsb3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gICAgICAgc2VsU2xvdCA9IHNsb3RzWzBdO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIC8vIC8vIGNyZWF0ZSBsaW5rP1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5lZGl0TGluayAmJiBzZWxTbG90ICYmIHRoaXMuc3RhdGUgPT09IEVESVRfU1RBVEVfRURJVF9MSU5LKSB7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5lZGl0TGluay5zZXRUbyhzZWxTbG90LmlkKTtcclxuICAgICAgICAgICAgLy8gICB0aGlzLmFkZExpbmsodGhpcy5lZGl0TGluayk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gLy8gZWlkdCB3aWRnZXQ/XHJcbiAgICAgICAgICAgIC8vIGlmIChzZWxXaWRnZXQgJiYgdGhpcy5lZGl0V2lkZ2V0ICYmIHRoaXMuc3RhdGUgPT09IEVESVRfU1RBVEVfRURJVF9XSURHRVQpIHtcclxuICAgICAgICAgICAgLy8gICBpZiAoIShzZWxXaWRnZXQgaW5zdGFuY2VvZiBXaWRnZXRzLkJvb2xlYW4pKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmlucHV0Lm9wZW4odGhpcy5lZGl0V2lkZ2V0LCBlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZWRpdExpbmsgPSBudWxsO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmVkaXRXaWRnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXRlID0gRURJVF9TVEFURV9OT1JNQUw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gbW91c2UgdXAgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICB0aGlzLm9uTW91c2VEQkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSB3aGVlbCBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZVdoZWVsID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGN1clBvcyA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgbW91c2VQb3MgPSBuZXcgdmVjMl8xLmRlZmF1bHQoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICB2ZWMyXzEuZGVmYXVsdC5zY2FsZShjdXJQb3MsIF90aGlzLm9mZnNldCwgX3RoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICB2ZWMyXzEuZGVmYXVsdC5hZGQoY3VyUG9zLCBjdXJQb3MsIG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgdmFyIHM7XHJcbiAgICAgICAgICAgIGlmIChlLmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHMgPSAwLjg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gMS4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnNjYWxlICo9IHM7XHJcbiAgICAgICAgICAgIHZhciBuZXdQb3MgPSBuZXcgdmVjMl8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc2NhbGUobmV3UG9zLCBjdXJQb3MsIHMpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBuZXcgdmVjMl8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc3ViKGRlbHRhLCBuZXdQb3MsIG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc2V0MihfdGhpcy5vZmZzZXQsIGRlbHRhLnggLyBfdGhpcy5zY2FsZSwgZGVsdGEueSAvIF90aGlzLnNjYWxlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghY2FudmFzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjdHgpXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYXR0ZXJuID0gY3R4LmNyZWF0ZVBhdHRlcm4oaW1nLCAncmVwZWF0Jyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWcuc3JjID0gJy4uL2ltZ3MvZ3JpZC5wbmcnO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB2YXIgbWVudSA9IG5ldyBjb250ZXh0X21lbnVfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgbWVudS5hZGRNZW51KFwiQWRkXCIpO1xyXG4gICAgICAgIC8vbWVudS5hZGRNZW51KFwiUmVtb3ZlXCIsIHRoaXMub25SZW1vdmUpO1xyXG4gICAgICAgIG1lbnUuYWRkTWVudShcIkdyb3VwXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnNvbGUubG9nKFwiR3JvdXBcIik7IH0pO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZFwiLCBcIlZhcmlhYmxlXCIpO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZFwiLCBcIkZ1bmN0aW9uXCIpO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZWYXJpYWJsZVwiLCBcIkJvb2xlYW5cIiwgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm5vZGVzLnB1c2gobm9kZV9zcGF3bl8xLmRlZmF1bHQuQm9vbGVhbihfdGhpcy5tb3VzZVBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZWYXJpYWJsZVwiLCBcIk51bWJlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5ub2Rlcy5wdXNoKG5vZGVfc3Bhd25fMS5kZWZhdWx0Lk51bWJlcihfdGhpcy5tb3VzZVBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZWYXJpYWJsZVwiLCBcIlN0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5ub2Rlcy5wdXNoKG5vZGVfc3Bhd25fMS5kZWZhdWx0LlN0cmluZyhfdGhpcy5tb3VzZVBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIG1lbnUuYWRkU3ViTWVudShcIkFkZCZGdW5jdGlvblwiLCBcIk5vZGUxXCIsICgpID0+XHJcbiAgICAgICAgLy8gICAvL3RoaXMubm9kZXMucHVzaChTcGF3bk5vZGUuTm9kZTEodGhpcy5tb3VzZVBvcykpXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICAvLyBtZW51LmFkZFN1Yk1lbnUoXCJBZGQmRnVuY3Rpb25cIiwgXCJOb2RlMlwiLCAoKSA9PlxyXG4gICAgICAgIC8vICAgLy90aGlzLm5vZGVzLnB1c2goU3Bhd25Ob2RlLk5vZGUyKHRoaXMubW91c2VQb3MpKVxyXG4gICAgICAgIC8vICk7XHJcbiAgICAgICAgLy8gbWVudS5hZGRTdWJNZW51KFwiQWRkJkZ1bmN0aW9uXCIsIFwiTm9kZTNcIiwgKCkgPT5cclxuICAgICAgICAvLyAgIC8vdGhpcy5ub2Rlcy5wdXNoKFNwYXduTm9kZS5Ob2RlMyh0aGlzLm1vdXNlUG9zKSlcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIC8vIG1lbnUuYWRkU3ViTWVudShcIkFkZCZGdW5jdGlvblwiLCBcIk5vZGU0XCIpO1xyXG4gICAgICAgIC8vIG1lbnUuYWRkU3ViTWVudShcIkFkZCZGdW5jdGlvblwiLCBcIkNvbnNvbGVcIiwgKCkgPT5cclxuICAgICAgICAvLyAgIC8vdGhpcy5ub2Rlcy5wdXNoKFNwYXduTm9kZS5Db25zb2xlKHRoaXMubW91c2VQb3MpKVxyXG4gICAgICAgIC8vICk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgdGhpcy5vbk1vdXNlREJDbGljayk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbCk7XHJcbiAgICB9XHJcbiAgICBFZGl0Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGlmICghY3R4KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5vZmZzZXQueCwgLXRoaXMub2Zmc2V0LnkpO1xyXG4gICAgICAgIC8vIHJlbmRlciBiYWNrZ3JvdW5kIGdyaWRcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XHJcbiAgICAgICAgaWYgKHRoaXMucGF0dGVybikge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5wYXR0ZXJuO1xyXG4gICAgICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLm9mZnNldC54LCB0aGlzLm9mZnNldC55LCB0aGlzLndpZHRoIC8gdGhpcy5zY2FsZSwgdGhpcy5oZWlnaHQgLyB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gcmVuZGVyIG5vZGVzXHJcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnJlbmRlcihjdHgpOyB9KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIC8vIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHR5ID0gMzA7XHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIyMHB4IHNlcmlmXCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiU2Nyb2xsIDogXCIgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueC50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgICAgIFwiLCBcIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldC55LnRvRml4ZWQoMiksIDAsICh0eSArPSAyNCkpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJab29tIDogXCIgKyB0aGlzLnNjYWxlLnRvRml4ZWQoMiksIDAsICh0eSArPSAyNCkpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJTdGF0ZSA6IFwiICsgdGhpcy5zdGF0ZSwgMCwgKHR5ICs9IDI0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBFZGl0VmlldztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRWRpdFZpZXc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVkaXR2aWV3LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBtZW51YmFyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWVudWJhclwiKSk7XHJcbnZhciBlZGl0dmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2VkaXR2aWV3XCIpKTtcclxuY29uc29sZS5sb2coXCJzdGFydCBub2RlIGVkaXRvclwiKTtcclxudmFyIF9tZW51QmFyID0gbnVsbDtcclxudmFyIF9lZGl0VmlldyA9IG51bGw7XHJcbnZhciBfY3R4ID0gbnVsbDtcclxuLy8gaW5pdGlhbGl6ZSBjYW52YXMgJiBtZW51YmFyXHJcbnZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5pZiAoYm9keSkge1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGlmIChtZW51KSB7XHJcbiAgICAgICAgbWVudS5pZCA9ICdtZW51YmFyJztcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNhbnZhcykge1xyXG4gICAgICAgIGNhbnZhcy5pZCA9ICdjYW52YXMnO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gNDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNDtcclxuICAgICAgICBfY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBfZWRpdFZpZXcgPSBuZXcgZWRpdHZpZXdfMS5kZWZhdWx0KGNhbnZhcywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBfbWVudUJhciA9IG5ldyBtZW51YmFyXzEuZGVmYXVsdChfZWRpdFZpZXcpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxufVxyXG4vLyByZW5kZXIgY2FudmFzXHJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGlmIChfZWRpdFZpZXcpXHJcbiAgICAgICAgX2VkaXRWaWV3LnJlbmRlcihfY3R4KTtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vL1xyXG4vLyAyMDIwLTA2LTI1LCBqanVpZGRvbmdcclxuLy8gUmVjdCBjbGFzc1xyXG4vLyAgLSB4LCB5LCB3aWR0aCwgaGVpZ2h0XHJcbi8vXHJcbi8vIDIwMjAtMDctMTNcclxuLy8gIC0gVHlwZVNjcmlwdCBSZWZhY3RvcmluZ1xyXG4vL1xyXG52YXIgUmVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IDA7IH1cclxuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAwOyB9XHJcbiAgICAgICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSAwOyB9XHJcbiAgICAgICAgaWYgKGhlaWdodCA9PT0gdm9pZCAwKSB7IGhlaWdodCA9IDA7IH1cclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy53ID0gMDtcclxuICAgICAgICB0aGlzLmggPSAwO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmggPSBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzID0gcmVjdFxyXG4gICAgUmVjdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICB0aGlzLnggPSByZWN0Lng7XHJcbiAgICAgICAgdGhpcy55ID0gcmVjdC55O1xyXG4gICAgICAgIHRoaXMudyA9IHJlY3QudztcclxuICAgICAgICB0aGlzLmggPSByZWN0Lmg7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8gdGhpcyA9IHgseSx3LGhcclxuICAgIFJlY3QucHJvdG90eXBlLnNldDIgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmggPSBoZWlnaHQ7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgUmVjdC5wcm90b3R5cGUuaXNQb2ludEluUmVjdCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggPCB4ICYmXHJcbiAgICAgICAgICAgIHRoaXMueCArIHRoaXMudyA+IHggJiZcclxuICAgICAgICAgICAgdGhpcy55IDwgeSAmJlxyXG4gICAgICAgICAgICB0aGlzLnkgKyB0aGlzLmggPiB5KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLyBvdXQgPSByZWN0XHJcbiAgICBSZWN0LnNldCA9IGZ1bmN0aW9uIChvdXQsIHJlY3QpIHtcclxuICAgICAgICBvdXQueCA9IHJlY3QueDtcclxuICAgICAgICBvdXQueSA9IHJlY3QueTtcclxuICAgICAgICBvdXQudyA9IHJlY3QudztcclxuICAgICAgICBvdXQuaCA9IHJlY3QuaDtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLyB0aGlzID0geCx5LHcsaFxyXG4gICAgUmVjdC5zZXQyID0gZnVuY3Rpb24gKG91dCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIG91dC54ID0geDtcclxuICAgICAgICBvdXQueSA9IHk7XHJcbiAgICAgICAgb3V0LncgPSB3aWR0aDtcclxuICAgICAgICBvdXQuaCA9IGhlaWdodDtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICByZXR1cm4gUmVjdDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVjdDtcclxuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG4vL1xyXG4vLyAyMDIwLTA3LTEzLCBqanVpZGRvbmdcclxuLy8gMkQgdmVjdG9yXHJcbi8vXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlYzIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWMyKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAwOyB9XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gMDsgfVxyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgfVxyXG4gICAgVmVjMi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHRoaXMueCA9IHBvcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBvcy55O1xyXG4gICAgfTtcclxuICAgIFZlYzIucHJvdG90eXBlLnNldDIgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH07XHJcbiAgICBWZWMyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHRoaXMueCA9IHBvcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBvcy55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8vIG91dCA9IGFcclxuICAgIFZlYzIuc2V0ID0gZnVuY3Rpb24gKG91dCwgYSkge1xyXG4gICAgICAgIG91dC54ID0gYS54O1xyXG4gICAgICAgIG91dC55ID0gYS55O1xyXG4gICAgfTtcclxuICAgIC8vIG91dCA9IHgseVxyXG4gICAgVmVjMi5zZXQyID0gZnVuY3Rpb24gKG91dCwgeCwgeSkge1xyXG4gICAgICAgIG91dC54ID0geDtcclxuICAgICAgICBvdXQueSA9IHk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8gb3V0ID0gYSArIGJcclxuICAgIFZlYzIuYWRkID0gZnVuY3Rpb24gKG91dCwgYSwgYikge1xyXG4gICAgICAgIG91dC54ID0gYS54ICsgYi54O1xyXG4gICAgICAgIG91dC55ID0gYS55ICsgYi55O1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vIG91dCA9IGEgLSBiXHJcbiAgICBWZWMyLnN1YiA9IGZ1bmN0aW9uIChvdXQsIGEsIGIpIHtcclxuICAgICAgICBvdXQueCA9IGEueCAtIGIueDtcclxuICAgICAgICBvdXQueSA9IGEueSAtIGIueTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLyBvdXQgPSBhICogYlxyXG4gICAgVmVjMi5zY2FsZSA9IGZ1bmN0aW9uIChvdXQsIGEsIGIpIHtcclxuICAgICAgICBvdXQueCA9IGEueCAqIGI7XHJcbiAgICAgICAgb3V0LnkgPSBhLnkgKiBiO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBWZWMyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWMyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWMyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNZW51QmFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVudUJhcihlZGl0Vmlldykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lZGl0VmlldyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbGVtID0gbnVsbDtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gTWVudUJhci5vblNhdmVEQlxyXG4gICAgICAgIC8vIHNhdmUgYnV0dG9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICB0aGlzLm9uU2F2ZURCID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIChfYSA9IF90aGlzLmVkaXRWaWV3KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2F2ZURCKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gTWVudUJhci5vbkxvYWREQlxyXG4gICAgICAgIC8vIGxvYWQgYnV0dG9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICB0aGlzLm9uTG9hZERCID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIChfYSA9IF90aGlzLmVkaXRWaWV3KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubG9hZERCKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gTWVudUJhci5vblNhdmVMb2NhbFxyXG4gICAgICAgIC8vIHNhdmUgYnV0dG9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICB0aGlzLm9uU2F2ZUxvY2FsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIChfYSA9IF90aGlzLmVkaXRWaWV3KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2F2ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIE1lbnVCYXIub25Mb2FkTG9jYWxcclxuICAgICAgICAvLyBsb2FkIGJ1dHRvbiBjbGljayBldmVudCBoYW5kbGVyXHJcbiAgICAgICAgdGhpcy5vbkxvYWRMb2NhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSBfdGhpcy5lZGl0VmlldykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxvYWRMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZWRpdFZpZXcgPSBlZGl0VmlldzsgLy8gRWRpdFZpZXcgaW5zdGFuY2VcclxuICAgICAgICB2YXIgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudWJhclwiKTtcclxuICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaWYgKHBhcmVudEVsZW0gJiYgZWxlbSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IFwibWVudWJhclwiO1xyXG4gICAgICAgICAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICBcIjxidXR0b24gaWQ9J3NhdmVkYic+U2F2ZSBEQjwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBcIjxidXR0b24gaWQ9J2xvYWRkYic+TG9hZCBEQjwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBcIjxzcGFuIHN0eWxlPSdtYXJnaW46MnJlbSc+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBcIjxidXR0b24gaWQ9J3NhdmVsb2NhbCc+U2F2ZSBMb2NhbDwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBcIjxidXR0b24gaWQ9J2xvYWRsb2NhbCc+TG9hZCBMb2NhbDwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICAgICAgICB2YXIgc2F2ZUJ0biA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIiNzYXZlZGJcIik7XHJcbiAgICAgICAgICAgIGlmIChzYXZlQnRuKSB7XHJcbiAgICAgICAgICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uU2F2ZURCKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbG9hZEJ0biA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIiNsb2FkZGJcIik7XHJcbiAgICAgICAgICAgIGlmIChsb2FkQnRuKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uTG9hZERCKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc2F2ZUxvY2FsQnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiI3NhdmVsb2NhbFwiKTtcclxuICAgICAgICAgICAgaWYgKHNhdmVMb2NhbEJ0bikge1xyXG4gICAgICAgICAgICAgICAgc2F2ZUxvY2FsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uU2F2ZUxvY2FsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbG9hZExvY2FsQnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiI2xvYWRsb2NhbFwiKTtcclxuICAgICAgICAgICAgaWYgKGxvYWRMb2NhbEJ0bikge1xyXG4gICAgICAgICAgICAgICAgbG9hZExvY2FsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uTG9hZExvY2FsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVsZW0gPSBlbGVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBNZW51QmFyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNZW51QmFyO1xyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lbnViYXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy9cclxuLy8gMjAyMC0wNi0yNCwgamp1aWRkb25nXHJcbi8vIG5vZGUgY2xhc3NcclxuLy9cclxuLy8gIC0gMjAyMC0wNy0xM1xyXG4vLyAgICAtIFR5cGVTY3JpcHQgUmVmYWN0b3JpbmdcclxuLy9cclxudmFyIHJlY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXRoL3JlY3RcIikpO1xyXG52YXIgdmVjMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hdGgvdmVjMlwiKSk7XHJcbnZhciB1dGlsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbnZhciBjb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb25maWdcIikpO1xyXG4vLyBub2RlIHN0YXRlXHJcbnZhciBOT0RFX1NUQVRFX05PUk1BTCA9IDA7XHJcbnZhciBOT0RFX1NUQVRFX0hPVkVSID0gMTtcclxudmFyIE5PREVfU1RBVEVfU0VMRUNUID0gMjtcclxudmFyIE5PREVfU1RBVEVfRURJVF9TTE9UID0gMztcclxudmFyIE5PREVfU1RBVEVfRURJVF9XSURHRVQgPSA0O1xyXG52YXIgTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5vZGUoaWQsIG5hbWUsIHJlY3QpIHtcclxuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IG51bGw7IH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk5vZGVcIjsgfVxyXG4gICAgICAgIGlmIChyZWN0ID09PSB2b2lkIDApIHsgcmVjdCA9IG5ldyByZWN0XzEuZGVmYXVsdCgwLCAwLCAyMDAsIDIwMCk7IH1cclxuICAgICAgICB0aGlzLmlkID0gMDtcclxuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlkID0gaWQgfHwgdXRpbF8xLmRlZmF1bHQuZ2VuSWQoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbmV3IHZlYzJfMS5kZWZhdWx0KDAsIDApOyAvLyBtb3VzZSBzZWxlY3Qgb2Zmc2V0XHJcbiAgICAgICAgdGhpcy5yZWN0ID0gcmVjdDsgLy8gbm9kZSByZWN0XHJcbiAgICAgICAgdGhpcy5ib2R5WSA9IHJlY3QueTsgLy8gbm9kZSBib2R5IHJlY3QgeVxyXG4gICAgICAgIHRoaXMuaW5wdXRzID0gW107IC8vIGlucHV0IHNsb3RzXHJcbiAgICAgICAgdGhpcy5vdXRwdXRzID0gW107IC8vIG91dHB1dCBzbG90c1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IFtdOyAvLyB3aWRnZXRzIChudW1iZXIsIHRleHQsIGJvb2xlYW4sIGNvbWJvYm94KVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBOT0RFX1NUQVRFX05PUk1BTDtcclxuICAgIH1cclxuICAgIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIC8vIGFkZCBzbG90XHJcbiAgICAvLyBhZGRTbG90ID0gZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgIC8vICAgc2xvdC5ub2RlID0gdGhpcztcclxuICAgIC8vICAgaWYgKHNsb3QudHlwZSA9PT0gU0xPVF9UWVBFX0lOUFVUKSB7XHJcbiAgICAvLyAgICAgdGhpcy5pbnB1dHMucHVzaChzbG90KTtcclxuICAgIC8vICAgfSBlbHNlIGlmIChzbG90LnR5cGUgPT09IFNMT1RfVFlQRV9PVVRQVVQpIHtcclxuICAgIC8vICAgICB0aGlzLm91dHB1dHMucHVzaChzbG90KTtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImVycm9yISEgYWRkU2xvdCgpLCBzbG90IHR5cGUgaW52YWxpZFwiKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICB0aGlzLmNsYWNTbG90TGF5b3V0KCk7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gLy8gcmVtb3ZlIHNsb3RcclxuICAgIC8vIC8vIHNsb3RJZDogc2xvdCBpZFxyXG4gICAgLy8gcmVtb3ZlU2xvdCA9IGZ1bmN0aW9uIChzbG90SWQpIHtcclxuICAgIC8vICAgaWYgKHRoaXMuaW5wdXRzLmZpbmQoKHNsb3QpID0+IHNsb3RJZCA9PT0gc2xvdC5pZCkpIHtcclxuICAgIC8vICAgICB0aGlzLmlucHV0cyA9IHRoaXMuaW5wdXRzLmZpbHRlcigoc2xvdCkgPT4gc2xvdElkICE9PSBzbG90LmlkKTtcclxuICAgIC8vICAgfSBlbHNlIGlmICh0aGlzLm91dHB1dHMuZmluZCgoc2xvdCkgPT4gc2xvdElkID09PSBzbG90LmlkKSkge1xyXG4gICAgLy8gICAgIHRoaXMub3V0cHV0cyA9IHRoaXMub3V0cHV0cy5maWx0ZXIoKHNsb3QpID0+IHNsb3RJZCAhPT0gc2xvdC5pZCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH07XHJcbiAgICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyAvLyBhZGQgd2lkZ2V0c1xyXG4gICAgLy8gYWRkV2lkZ2V0ID0gZnVuY3Rpb24gKHdpZGdldCkge1xyXG4gICAgLy8gICB3aWRnZXQubm9kZSA9IHRoaXM7XHJcbiAgICAvLyAgIHRoaXMud2lkZ2V0cy5wdXNoKHdpZGdldCk7XHJcbiAgICAvLyAgIHRoaXMuY2xhY1Nsb3RMYXlvdXQoKTtcclxuICAgIC8vIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyByZW5kZXIgbm9kZVxyXG4gICAgLy8gY3R4OiByZW5kZXJpbmcgY29udGV4dCAyZFxyXG4gICAgTm9kZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5yZWN0Lng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnJlY3QueTtcclxuICAgICAgICB2YXIgdyA9IHRoaXMucmVjdC53O1xyXG4gICAgICAgIHZhciBoID0gdGhpcy5yZWN0Lmg7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaGggPSBjb25maWdfMS5kZWZhdWx0LlRJVExFQkFSX0hFSUdIVDtcclxuICAgICAgICAgICAgdmFyIGJ5ID0geSArIGNvbmZpZ18xLmRlZmF1bHQuVElUTEVCQVJfSEVJR0hUO1xyXG4gICAgICAgICAgICB2YXIgYmggPSBoIC0gY29uZmlnXzEuZGVmYXVsdC5USVRMRUJBUl9IRUlHSFQ7XHJcbiAgICAgICAgICAgIHV0aWxfMS5kZWZhdWx0LnJvdW5kZWRSZWN0SGVhZGVyKGN0eCwgeCwgeSwgdywgaGgsIGNvbmZpZ18xLmRlZmF1bHQuTk9ERV9BUkNfUkFESVVTLCB0aGlzLmlzRm9jdXMgPyBjb25maWdfMS5kZWZhdWx0Lk5PREVfSEVBREVSX0NPTE9SMiA6IGNvbmZpZ18xLmRlZmF1bHQuTk9ERV9IRUFERVJfQ09MT1IsIGNvbmZpZ18xLmRlZmF1bHQuTk9ERV9CT1JERVJfQ09MT1IpO1xyXG4gICAgICAgICAgICB1dGlsXzEuZGVmYXVsdC5yb3VuZGVkUmVjdEJvZHkoY3R4LCB4LCBieSwgdywgYmgsIGNvbmZpZ18xLmRlZmF1bHQuTk9ERV9BUkNfUkFESVVTLCB0aGlzLmlzRm9jdXMgPyBjb25maWdfMS5kZWZhdWx0Lk5PREVfQk9EWV9DT0xPUjIgOiBjb25maWdfMS5kZWZhdWx0Lk5PREVfQk9EWV9DT0xPUiwgY29uZmlnXzEuZGVmYXVsdC5OT0RFX0JPUkRFUl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVkgPSBoaDtcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZW5kZXIgdGl0bGUgdGV4dFxyXG4gICAgICAgICAgICB2YXIgdHggPSB4ICsgY29uZmlnXzEuZGVmYXVsdC5OT0RFX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICB2YXIgdHkgPSB5ICsgY29uZmlnXzEuZGVmYXVsdC5USVRMRUJBUl9IRUlHSFQgLSA1O1xyXG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMjRweCBzZXJpZlwiO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLm5hbWUsIHR4LCB0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbmRlciBpbnB1dC9vdXRwdXQgc2xvdFxyXG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgICAgICAgICAgc2xvdC5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAoc2xvdCkge1xyXG4gICAgICAgICAgICBzbG90LnJlbmRlcihjdHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHJlbmRlciB3aWRnZXRzXHJcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkge1xyXG4gICAgICAgICAgICB3aWRnZXQucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gbW92ZSBub2RlIHgseSBwb3NpdGlvblxyXG4gICAgTm9kZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5yZWN0LnggPSB4O1xyXG4gICAgICAgIHRoaXMucmVjdC55ID0geTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBmb2N1cyBub2RlXHJcbiAgICAvLyBmb2N1czogdHJ1ZS9mYWxzZVxyXG4gICAgTm9kZS5wcm90b3R5cGUuc2V0Rm9jdXMgPSBmdW5jdGlvbiAoZm9jdXMpIHtcclxuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmb2N1cztcclxuICAgICAgICB0aGlzLnN0YXRlID0gZm9jdXMgPyBOT0RFX1NUQVRFX1NFTEVDVCA6IE5PREVfU1RBVEVfTk9STUFMO1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGNoZWNrIHgseSBwb2ludCBpbiByZWN0P1xyXG4gICAgTm9kZS5wcm90b3R5cGUuaXNQb2ludEluUmVjdCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjdC5pc1BvaW50SW5SZWN0KHgsIHkpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBOb2RlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlO1xyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXRoL3JlY3RcIikpO1xyXG52YXIgbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVcIikpO1xyXG52YXIgU3Bhd25Ob2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3Bhd25Ob2RlKCkge1xyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc3Bhd24gQm9vbGVhblxyXG4gICAgLy8gcG9zOiB7eCx5fVxyXG4gICAgU3Bhd25Ob2RlLkJvb2xlYW4gPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLmRlZmF1bHQobnVsbCwgJ0Jvb2xlYW4nLCBuZXcgcmVjdF8xLmRlZmF1bHQocG9zLngsIHBvcy55LCAyMDAsIDEwMCkpO1xyXG4gICAgICAgIC8vIG5vZGUuYWRkU2xvdChuZXcgU2xvdCh7IG5hbWU6IFwiaW5cIiwgdHlwZTogU0xPVF9UWVBFX0lOUFVUIH0pKTtcclxuICAgICAgICAvLyBub2RlLmFkZFNsb3QobmV3IFNsb3QoeyBuYW1lOiBcIm91dFwiLCB0eXBlOiBTTE9UX1RZUEVfT1VUUFVUIH0pKTtcclxuICAgICAgICAvLyBub2RlLmFkZFdpZGdldChuZXcgV2lkZ2V0cy5Cb29sZWFuKHt9KSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc3Bhd24gTnVtYmVyXHJcbiAgICAvLyBwb3M6IHt4LHl9XHJcbiAgICBTcGF3bk5vZGUuTnVtYmVyID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IG5vZGVfMS5kZWZhdWx0KG51bGwsICdOdW1iZXInLCBuZXcgcmVjdF8xLmRlZmF1bHQocG9zLngsIHBvcy55LCAyMDAsIDEwMCkpO1xyXG4gICAgICAgIC8vIG5vZGUuYWRkU2xvdChuZXcgU2xvdCh7IG5hbWU6IFwiaW5cIiwgdHlwZTogU0xPVF9UWVBFX0lOUFVUIH0pKTtcclxuICAgICAgICAvLyBub2RlLmFkZFNsb3QobmV3IFNsb3QoeyBuYW1lOiBcIm91dFwiLCB0eXBlOiBTTE9UX1RZUEVfT1VUUFVUIH0pKTtcclxuICAgICAgICAvLyBub2RlLmFkZFdpZGdldChuZXcgV2lkZ2V0cy5OdW1iZXIoe30pKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH07XHJcbiAgICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBzcGF3biBTdHJpbmdcclxuICAgIC8vIHBvczoge3gseX1cclxuICAgIFNwYXduTm9kZS5TdHJpbmcgPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLmRlZmF1bHQobnVsbCwgJ1N0cmluZycsIG5ldyByZWN0XzEuZGVmYXVsdChwb3MueCwgcG9zLnksIDIwMCwgMTAwKSk7XHJcbiAgICAgICAgLy8gbm9kZS5hZGRTbG90KG5ldyBTbG90KHsgbmFtZTogXCJpblwiLCB0eXBlOiBTTE9UX1RZUEVfSU5QVVQgfSkpO1xyXG4gICAgICAgIC8vIG5vZGUuYWRkU2xvdChuZXcgU2xvdCh7IG5hbWU6IFwib3V0XCIsIHR5cGU6IFNMT1RfVFlQRV9PVVRQVVQgfSkpO1xyXG4gICAgICAgIC8vIG5vZGUuYWRkV2lkZ2V0KG5ldyBXaWRnZXRzLlN0cmluZyh7fSkpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTcGF3bk5vZGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNwYXduTm9kZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZV9zcGF3bi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vL1xyXG4vLyAyMDIwLTA2LTI2LCBqanVpZGRvbmdcclxuLy8gVXRpbGl0eSBjbGFzc1xyXG4vL1xyXG4vLyAgLSAyMDIwLTA3LTEzXHJcbi8vICAgIC0gVHlwZVNjcmlwdCBSZWZhY3RvcmluZ1xyXG4vL1xyXG52YXIgVXRpbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFV0aWwoKSB7XHJcbiAgICB9XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBnZW5lcmF0ZSB1bmlxdWUgaWRcclxuICAgIFV0aWwuZ2VuSWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgVXRpbC5pbmMgKz0gMTtcclxuICAgICAgICByZXR1cm4gVXRpbC5pbmM7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gaW5pdGlhbGl6ZSBpZCBzZWVkXHJcbiAgICBVdGlsLnNldFNlZWQgPSBmdW5jdGlvbiAoc2VlZCkge1xyXG4gICAgICAgIFV0aWwuc2VlZCA9IHNlZWQ7XHJcbiAgICAgICAgVXRpbC5pbmMgPSBzZWVkO1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFV0aWwubGVycCA9IGZ1bmN0aW9uICh2YWx1ZTEsIHZhbHVlMiwgYW1vdW50KSB7XHJcbiAgICAgICAgYW1vdW50ID0gYW1vdW50IDwgMCA/IDAgOiBhbW91bnQ7XHJcbiAgICAgICAgYW1vdW50ID0gYW1vdW50ID4gMSA/IDEgOiBhbW91bnQ7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlMSArICh2YWx1ZTIgLSB2YWx1ZTEpICogYW1vdW50O1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGNvbnZlcnQgcmVtIHRvIHBpeGVsXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNjUzMjMwNy9yZW0tcHgtaW4tamF2YXNjcmlwdFxyXG4gICAgVXRpbC5jb252ZXJ0UmVtVG9QaXhlbHMgPSBmdW5jdGlvbiAocmVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbSAqIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplKTtcclxuICAgIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyByb3VuZGVkUmVjdFxyXG4gICAgVXRpbC5yb3VuZGVkUmVjdCA9IGZ1bmN0aW9uIChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cywgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHgsIHkgKyByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmFyY1RvKHgsIHkgKyBoZWlnaHQsIHggKyByYWRpdXMsIHkgKyBoZWlnaHQsIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cywgcmFkaXVzKTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmFyY1RvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoIC0gcmFkaXVzLCB5LCByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cywgeSk7XHJcbiAgICAgICAgY3R4LmFyY1RvKHgsIHksIHgsIHkgKyByYWRpdXMsIHJhZGl1cyk7XHJcbiAgICAgICAgaWYgKGZpbGxTdHlsZSkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3Ryb2tlU3R5bGUpIHtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gcm91bmRlZFJlY3RCb2R5XHJcbiAgICBVdGlsLnJvdW5kZWRSZWN0Qm9keSA9IGZ1bmN0aW9uIChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cywgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmFyY1RvKHgsIHkgKyBoZWlnaHQsIHggKyByYWRpdXMsIHkgKyBoZWlnaHQsIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cywgcmFkaXVzKTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gNTtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDU7XHJcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGNoZWNrIGF2aWxhYmxlIHN0b3JhZ2VcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2tvL2RvY3MvV2ViL0FQSS9XZWJfU3RvcmFnZV9BUEkvVXNpbmdfdGhlX1dlYl9TdG9yYWdlX0FQSVxyXG4gICAgLy8gZXgpIFV0aWwuc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJylcclxuICAgIFV0aWwuc3RvcmFnZUF2YWlsYWJsZSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgLy8gdmFyIHN0b3JhZ2U7XHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAvLyAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICAgICAgLy8gICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgICAgICAvLyAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgICAgICAvLyAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgICAgICAvLyAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxyXG4gICAgICAgIC8vICAgICAvLyBGaXJlZm9466W8IOygnOyZuO2VnCDrqqjrk6Ag67iM65287Jqw7KCAXHJcbiAgICAgICAgLy8gICAgIGUuY29kZSA9PT0gMjIgfHxcclxuICAgICAgICAvLyAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgIC8vICAgICBlLmNvZGUgPT09IDEwMTQgfHxcclxuICAgICAgICAvLyAgICAgLy8g7L2U65Oc6rCAIOyhtOyerO2VmOyngCDslYrsnYQg7IiY64+EIOyeiOq4sCDrloTrrLjsl5Ag7J2066aEIO2VhOuTnOuPhCDtmZXsnbjtlanri4jri6QuXHJcbiAgICAgICAgLy8gICAgIC8vIEZpcmVmb3jrpbwg7KCc7Jm47ZWcIOuqqOuToCDruIzrnbzsmrDsoIBcclxuICAgICAgICAvLyAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxyXG4gICAgICAgIC8vICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgLy8gICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcclxuICAgICAgICAvLyAgICAgLy8g7J2066+4IOyggOyepeuQnCDqsoPsnbTsnojripQg6rK97Jqw7JeQ66eMIFF1b3RhRXhjZWVkZWRFcnJvcuulvCDtmZXsnbjtlZjsi63si5zsmKQuXHJcbiAgICAgICAgLy8gICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9O1xyXG4gICAgVXRpbC5zZWVkID0gMTAwMDA7XHJcbiAgICBVdGlsLmluYyA9IFV0aWwuc2VlZDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHJvdW5kZWRSZWN0SGVhZGVyXHJcbiAgICBVdGlsLnJvdW5kZWRSZWN0SGVhZGVyID0gZnVuY3Rpb24gKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzLCBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSArIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCAtIHJhZGl1cywgeSwgcmFkaXVzKTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyByYWRpdXMsIHkpO1xyXG4gICAgICAgIGN0eC5hcmNUbyh4LCB5LCB4LCB5ICsgcmFkaXVzLCByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSA1O1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gNTtcclxuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XHJcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFV0aWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFV0aWw7XHJcbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9