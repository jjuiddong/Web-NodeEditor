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
// 2020-07-13
//  - TypeScript Refactoring
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
// 2020-07-13
//  - TypeScript Refactoring
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
// 2020-07-13
//  - TypeScript Refactoring
//
var vec2_1 = __importDefault(__webpack_require__(/*! ./math/vec2 */ "./dist/math/vec2.js"));
var context_menu_1 = __importDefault(__webpack_require__(/*! ./context_menu */ "./dist/context_menu.js"));
var node_1 = __webpack_require__(/*! ./node */ "./dist/node.js");
var slot_1 = __webpack_require__(/*! ./slot */ "./dist/slot.js");
var link_1 = __importDefault(__webpack_require__(/*! ./link */ "./dist/link.js"));
var widgets_1 = __webpack_require__(/*! ./widgets */ "./dist/widgets.js");
var node_spawn_1 = __importDefault(__webpack_require__(/*! ./node_spawn */ "./dist/node_spawn.js"));
var popup_1 = __webpack_require__(/*! ./popup */ "./dist/popup.js");
var editview_ver1_1 = __importDefault(__webpack_require__(/*! ./editview_ver1 */ "./dist/editview_ver1.js"));
var EditState;
(function (EditState) {
    EditState[EditState["Normal"] = 0] = "Normal";
    EditState[EditState["Scroll"] = 1] = "Scroll";
    EditState[EditState["MoveNode"] = 2] = "MoveNode";
    EditState[EditState["EditLink"] = 3] = "EditLink";
    EditState[EditState["EditWidget"] = 4] = "EditWidget";
})(EditState || (EditState = {}));
var EditView = /** @class */ (function () {
    function EditView(canvas, width, // view width
    height // view height
    ) {
        var _this = this;
        this.ctx = null;
        this.state = EditState.Normal;
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
        this.links = [];
        this.nodes = [];
        this.menu = null;
        this.input = new popup_1.Popup.Input();
        this.prompt = new popup_1.Popup.Prompt();
        //--------------------------------------------------------------------------------
        // recalc node position, link position
        // node : move node
        this.calcNodeLayoutAll = function () {
            // nothing~
        };
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
        // Context Menu Remove
        // remove select nodes
        this.onRemove = function () {
            // collect remove link
            var rmLinks = [];
            for (var _i = 0, _a = _this.nodes; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.isFocus) {
                    for (var _b = 0, _c = node.inputs; _b < _c.length; _b++) {
                        var slot = _c[_b];
                        rmLinks = rmLinks.concat(_this.getLinkFromSlot(slot.id));
                    }
                    for (var _d = 0, _e = node.outputs; _d < _e.length; _d++) {
                        var slot = _e[_d];
                        rmLinks = rmLinks.concat(_this.getLinkFromSlot(slot.id));
                    }
                }
            }
            _this.removeLinks(rmLinks);
            // remove node
            _this.nodes = _this.nodes.filter(function (node) { return !node.isFocus; });
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
            _this.nodes.forEach(function (node) {
                if (node.state === node_1.NodeState.Select) {
                    selNode = node;
                    node.move(mousePos.x + node.offset.x, mousePos.y + node.offset.y);
                    if (_this.state === EditState.MoveNode)
                        _this.calcNodeLayout(selNode);
                }
                if (node.state === node_1.NodeState.EditWidget) {
                    // nothing~
                }
                else {
                    if (node.isPointInRect(mousePos.x, mousePos.y))
                        node.onMouseMove(mousePos, e);
                }
            });
            if (_this.editLink && _this.state === EditState.EditLink) {
                _this.editLink.setP1(mousePos);
            }
            if (_this.editWidget && _this.state === EditState.EditWidget) {
                _this.editWidget.onMouseMove(mousePos, e);
            }
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
            _this.nodes.forEach(function (node) {
                if (node.isPointInRect(mousePos.x, mousePos.y)) {
                    isSelect = true;
                    node.onMouseDown(mousePos, e);
                    if (node.state === node_1.NodeState.EditSlot) {
                        _this.state = EditState.EditLink;
                        var selSlot = node.getSelectSlots()[0];
                        _this.editLink = new link_1.default(-1, selSlot.id, -1, selSlot.getPos(), mousePos);
                    }
                    else if (node.state === node_1.NodeState.EditWidget) {
                        _this.state = EditState.EditWidget;
                        _this.editWidget = node.getSelectWidgets()[0];
                    }
                    else {
                        _this.state = EditState.MoveNode;
                        node.setFocus(true);
                        node.offset.set2(node.rect.x - mousePos.x, node.rect.y - mousePos.y);
                    }
                }
                else {
                    node.isFocus = false;
                }
            });
            // scroll?
            if (!isSelect) {
                _this.isScroll = true;
                _this.state = EditState.Scroll;
                _this.clickPos.set2(e.offsetX, e.offsetY);
                _this.prevPos.set2(e.offsetX, e.offsetY);
            }
        };
        //--------------------------------------------------------------------------------
        // mouse up event handling
        this.onMouseUp = function (e) {
            var _a, _b;
            if (e.button === 0) {
                _this.onMouseLeftUp(e);
            }
            else if (e.button === 2) {
                // mouse right button down
                var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
                _this.mousePos.set(mousePos);
                // // check focus node
                var nodes = _this.nodes.filter(function (node) { return node.isFocus; });
                (_a = _this.menu) === null || _a === void 0 ? void 0 : _a.setMenuEnable("Remove", nodes.length > 0);
                (_b = _this.menu) === null || _b === void 0 ? void 0 : _b.open(e.offsetX + 5, e.offsetY + 5);
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
            //var selSlot: Slot | null = null;
            //var selWidget = null;
            _this.nodes.forEach(function (node) {
                var isInRect = node.isPointInRect(mousePos.x, mousePos.y);
                if (node.state !== node_1.NodeState.Normal) {
                    if (isInRect) {
                        var widgets = node.getSelectWidgets();
                        if (widgets.length > 0) {
                            var selWidget = widgets[0];
                            // eidt widget?
                            if (_this.editWidget && _this.state === EditState.EditWidget) {
                                if (!(selWidget instanceof widgets_1.Widgets.Boolean)) {
                                    _this.input.open(_this.editWidget, e.offsetX, e.offsetY);
                                }
                            }
                        }
                    }
                    node.onMouseUp(mousePos, e);
                }
                else if (isInRect) {
                    node.onMouseUp(mousePos, e);
                    var slots = node.getHoverSlots();
                    if (slots.length > 0) {
                        var selSlot = slots[0];
                        if (_this.editLink && selSlot && _this.state === EditState.EditLink) {
                            _this.editLink.setTo(selSlot.id);
                            _this.addLink(_this.editLink);
                        }
                    }
                }
            });
            _this.editLink = null;
            _this.editWidget = null;
            _this.state = EditState.Normal;
        };
        //--------------------------------------------------------------------------------
        // mouse up event handling
        this.onMouseDBClick = function (e) {
            var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
            _this.nodes.forEach(function (node) {
                if (node.isPointInRect(mousePos.x, mousePos.y)) {
                    node.onMouseDBClick(mousePos, e);
                    // remove select slot link
                    var slots = node.getSelectSlots();
                    if (slots.length > 0) {
                        var selSlot = slots[0];
                        var rmLinks = _this.getLinkFromSlot(selSlot.id);
                        _this.removeLinks(rmLinks);
                    }
                }
            });
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
        menu.addMenu("Remove", this.onRemove);
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
        menu.addSubMenu("Add&Function", "Node1", function () {
            return _this.nodes.push(node_spawn_1.default.Node1(_this.mousePos));
        });
        menu.addSubMenu("Add&Function", "Node2", function () {
            return _this.nodes.push(node_spawn_1.default.Node2(_this.mousePos));
        });
        menu.addSubMenu("Add&Function", "Node3", function () {
            return _this.nodes.push(node_spawn_1.default.Node3(_this.mousePos));
        });
        menu.addSubMenu("Add&Function", "Node4");
        menu.addSubMenu("Add&Function", "Console", function () {
            return _this.nodes.push(node_spawn_1.default.Console(_this.mousePos));
        });
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
        // render link
        this.links.forEach(function (link) { return link.render(ctx); });
        // render nodes
        this.nodes.forEach(function (node) { return node.render(ctx); });
        if (this.editLink)
            this.editLink.render(ctx);
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
    //--------------------------------------------------------------------------------
    // get slot
    EditView.prototype.getSlotInNode = function (node, slotId) {
        var result1 = node.inputs.filter(function (slot) { return slot.id === slotId; });
        if (result1.length > 0)
            return result1[0];
        var result2 = node.outputs.filter(function (slot) { return slot.id === slotId; });
        if (result2.length > 0)
            return result2[0];
        return null;
    };
    ;
    //--------------------------------------------------------------------------------
    // get slot
    // return slot has slotId
    EditView.prototype.getSlot = function (slotId) {
        var _this = this;
        var slot = null;
        this.nodes.forEach(function (node) {
            var result = _this.getSlotInNode(node, slotId);
            if (result) {
                slot = result;
            }
        });
        return slot;
    };
    ;
    //--------------------------------------------------------------------------------
    // get node from slot
    // return node has slot
    EditView.prototype.getNodeFromSlot = function (slotId) {
        var _this = this;
        var nodeHasSlot = null;
        this.nodes.forEach(function (node) {
            var result = _this.getSlotInNode(node, slotId);
            if (result) {
                nodeHasSlot = node;
            }
        });
        return nodeHasSlot;
    };
    ;
    //--------------------------------------------------------------------------------
    // get link has slot
    // return link array
    EditView.prototype.getLinkFromSlot = function (slotId) {
        var links = this.links.filter(function (link) { return link.from === slotId || link.to === slotId; });
        return links;
    };
    ;
    //--------------------------------------------------------------------------------
    // add link
    // link: Link instance
    EditView.prototype.addLink = function (newLink) {
        //this.editLink.setTo(selSlot.id);
        //this.editLink.setP1(selSlot.getPos());
        var frSlot = this.getSlot(newLink.from);
        var toSlot = this.getSlot(newLink.to);
        var frNode = this.getNodeFromSlot(newLink.from);
        var toNode = this.getNodeFromSlot(newLink.to);
        var existLink = this.links.find(function (link) {
            return (link.from === newLink.from && link.to === newLink.to) ||
                (link.to === newLink.from && link.from === newLink.to);
        });
        // check valid link?
        if (!newLink.to ||
            !newLink.from ||
            newLink.to === newLink.from ||
            frNode === toNode ||
            existLink ||
            !frSlot ||
            !toSlot ||
            (frSlot && toSlot && frSlot.type === toSlot.type)) {
            // invalid link, ignore
        }
        else {
            // valid link
            // exchange from=input, to=output
            var input = frSlot.type === slot_1.SlotType.Input ? frSlot : toSlot;
            var output = toSlot.type === slot_1.SlotType.Output ? toSlot : frSlot;
            newLink.setFrom(input.id);
            newLink.setP0(input.getPos());
            newLink.setTo(output.id);
            newLink.setP1(output.getPos());
            frSlot.setLink(true);
            toSlot.setLink(true);
            this.links.push(newLink);
        }
    };
    //--------------------------------------------------------------------------------
    // recalc link from,to position
    // node : move node
    EditView.prototype.calcNodeLayout = function (node) {
        var _this = this;
        var calcFn = function (links, slot) {
            var link1 = links.filter(function (link) { return link.to === slot.id; });
            link1.forEach(function (link) { return link.setP1(slot.getPos()); });
            var link2 = links.filter(function (link) { return link.from === slot.id; });
            link2.forEach(function (link) { return link.setP0(slot.getPos()); });
        };
        node.inputs.forEach(function (slot) { return calcFn(_this.links, slot); });
        node.outputs.forEach(function (slot) { return calcFn(_this.links, slot); });
    };
    ;
    //--------------------------------------------------------------------------------
    // Remove Links
    // rmLinks: array link
    EditView.prototype.removeLinks = function (rmLinks) {
        var _this = this;
        // remove link
        this.links = this.links.filter(function (link) { return !rmLinks.find(function (r) { return r.id === link.id; }); });
        // refresh slot state
        rmLinks.forEach(function (link) {
            var frSlot = _this.getSlot(link.from);
            var toSlot = _this.getSlot(link.to);
            if (frSlot) {
                frSlot.setLink(_this.getLinkFromSlot(frSlot.id).length !== 0);
            }
            if (toSlot) {
                toSlot.setLink(_this.getLinkFromSlot(toSlot.id).length !== 0);
            }
        });
    };
    ;
    //--------------------------------------------------------------------------------
    // close document
    // remove node, link, etc
    EditView.prototype.closeDocument = function () {
        this.nodes = [];
        this.links = [];
        this.editLink = null;
        this.editWidget = null;
        this.input.close();
    };
    //--------------------------------------------------------------------------------
    // save node data to database
    EditView.prototype.saveDB = function () {
        var _this = this;
        this.prompt.open('Input Title', 'nodeTitleName', function (value) {
            editview_ver1_1.default.saveDB(_this, value);
        });
    };
    ;
    //--------------------------------------------------------------------------------
    // load node data from database
    EditView.prototype.loadDB = function () {
        var _this = this;
        this.prompt.open('Input Title', 'nodeTitleName', function (value) {
            editview_ver1_1.default.loadFromDB(_this, value);
        });
    };
    ;
    //--------------------------------------------------------------------------------
    // save node data to local storage
    EditView.prototype.saveLocalStorage = function () {
        editview_ver1_1.default.saveLocalStorage(this, 'title');
    };
    ;
    //--------------------------------------------------------------------------------
    // load node data from local storage
    EditView.prototype.loadLocalStorage = function () {
        editview_ver1_1.default.loadFromLocalStorage(this);
    };
    ;
    return EditView;
}());
exports.default = EditView;
//# sourceMappingURL=editview.js.map

/***/ }),

/***/ "./dist/editview_ver1.js":
/*!*******************************!*\
  !*** ./dist/editview_ver1.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./dist/util.js"));
var widgets_1 = __webpack_require__(/*! ./widgets */ "./dist/widgets.js");
var vec2_1 = __importDefault(__webpack_require__(/*! ./math/vec2 */ "./dist/math/vec2.js"));
var rect_1 = __importDefault(__webpack_require__(/*! ./math/rect */ "./dist/math/rect.js"));
var node_1 = __importDefault(__webpack_require__(/*! ./node */ "./dist/node.js"));
var slot_1 = __importDefault(__webpack_require__(/*! ./slot */ "./dist/slot.js"));
var link_1 = __importDefault(__webpack_require__(/*! ./link */ "./dist/link.js"));
var EditView_Ver1 = /** @class */ (function () {
    function EditView_Ver1() {
    }
    //--------------------------------------------------------------------------------
    // save nodes to local storage
    // editView: EditView instance
    EditView_Ver1.saveLocalStorage = function (editView, titleName) {
        var data = EditView_Ver1.nodeToJSON(editView, titleName);
        var str = JSON.stringify(data);
        if (util_1.default.storageAvailable("localStorage")) {
            window.localStorage.setItem("save data", str);
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // load nodes from local storage
    // editView: EditView instance
    EditView_Ver1.loadFromLocalStorage = function (editView) {
        if (util_1.default.storageAvailable("localStorage")) {
            var str = window.localStorage.getItem("save data");
            if (str) {
                var data = JSON.parse(str);
                console.log(data.version);
                if (data.version !== "v1.0") {
                    console.log("Error!! EditView_Ver1.load conflic version");
                    return;
                }
                EditView_Ver1.load(editView, data);
            }
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // save nodes to database
    // editView: EditView instance
    EditView_Ver1.saveDB = function (editView, titleName) {
        var data = EditView_Ver1.nodeToJSON(editView, titleName);
        var str = JSON.stringify(data);
        // if (Util.storageAvailable("localStorage")) {
        //   window.localStorage.setItem("save data", str);
        // }
        // request save nodefile to webserver
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                //alert(xhr.responseText);
            }
        };
        xhr.open("POST", "http://localhost:4000/api/file", true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(str);
    };
    ;
    //--------------------------------------------------------------------------------
    // load nodes from database
    // editView: EditView instance
    EditView_Ver1.loadFromDB = function (editView, titleName) {
        var str = JSON.stringify({ title: titleName });
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                EditView_Ver1.load(editView, JSON.parse(xhr.responseText));
            }
        };
        var url = "http://localhost:4000/api/file?title=" + titleName;
        xhr.open("GET", url, true);
        xhr.send();
    };
    ;
    //--------------------------------------------------------------------------------
    // nodes to json string
    // editView: EditView instance
    // titleName: title name
    EditView_Ver1.nodeToJSON = function (editView, titleName) {
        var data = {
            version: "v1.0",
            title: titleName,
            offsetX: editView.offset.x,
            offsetY: editView.offset.y,
            scale: editView.scale,
            nodes: [],
            links: [],
        };
        // save nodes
        editView.nodes.forEach(function (node) {
            var nodeData = {
                id: node.id,
                name: node.name,
                x: node.rect.x,
                y: node.rect.y,
                w: node.rect.w,
                h: node.rect.h,
                inputs: [],
                outputs: [],
                widgets: [],
            };
            node.inputs.forEach(function (slot) {
                var slotData = {
                    id: slot.id,
                    name: slot.name,
                    type: slot.type,
                };
                nodeData.inputs.push(slotData);
            });
            node.outputs.forEach(function (slot) {
                var slotData = {
                    id: slot.id,
                    name: slot.name,
                    type: slot.type,
                };
                nodeData.outputs.push(slotData);
            });
            node.widgets.forEach(function (widget) {
                var widgetData = {
                    id: widget.id,
                    name: widget.name,
                    type: widget.type,
                    value: widget.getValue()
                };
                nodeData.widgets.push(widgetData);
            });
            data.nodes.push(nodeData);
        });
        // save link
        editView.links.forEach(function (link) {
            var linkData = {
                id: link.id,
                from: link.from,
                to: link.to,
            };
            data.links.push(linkData);
        });
        return data;
    };
    ;
    //--------------------------------------------------------------------------------
    // load nodes
    // editView: EditView instance
    // nodeData: node json data
    EditView_Ver1.load = function (editView, nodeData) {
        editView.closeDocument();
        var data = nodeData;
        var ids = new Map(); // id mapping
        if (data.offsetX && data.offsetY) {
            editView.offset = new vec2_1.default(data.offsetX, data.offsetY);
        }
        if (data.scale) {
            editView.scale = data.scale;
        }
        if (data.nodes) {
            data.nodes.forEach(function (node) {
                var nid = util_1.default.genId();
                ids.set(node.id, nid);
                var n = new node_1.default(nid, node.name, new rect_1.default(node.x, node.y, node.w, node.h));
                node.inputs.forEach(function (slot) {
                    var sid = util_1.default.genId();
                    ids.set(slot.id, sid);
                    var s = new slot_1.default(sid, null, slot.name, slot.type);
                    n.addSlot(s);
                });
                node.outputs.forEach(function (slot) {
                    var sid = util_1.default.genId();
                    ids.set(slot.id, sid);
                    var s = new slot_1.default(sid, null, slot.name, slot.type);
                    n.addSlot(s);
                });
                node.widgets.forEach(function (widget) {
                    var w = null;
                    var wid = util_1.default.genId();
                    ids.set(widget.id, wid);
                    switch (widget.type) {
                        case widgets_1.WidgetType.Boolean:
                            w = new widgets_1.Widgets.Boolean(wid, null, widget.name, widget.value);
                            break;
                        case widgets_1.WidgetType.Number:
                            w = new widgets_1.Widgets.Number(wid, null, widget.name, widget.value);
                            break;
                        case widgets_1.WidgetType.String:
                            w = new widgets_1.Widgets.String(wid, null, widget.name, widget.value);
                            break;
                        default:
                            console.log("Error!! EditView.load()");
                    }
                    if (w)
                        n.addWidget(w);
                });
                editView.nodes.push(n);
            });
        } //~data.nodes
        // todo: treacky code to calc node.bodyY
        editView.render(editView.ctx);
        if (data.links) {
            data.links.forEach(function (link) {
                var lid = util_1.default.genId();
                ids.set(link.id, lid);
                var frId = ids.get(link.from);
                var toId = ids.get(link.to);
                var lk = new link_1.default(lid, frId, toId);
                editView.addLink(lk);
            });
        }
    };
    ;
    return EditView_Ver1;
}());
exports.default = EditView_Ver1;
;
//# sourceMappingURL=editview_ver1.js.map

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

/***/ "./dist/link.js":
/*!**********************!*\
  !*** ./dist/link.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkState = void 0;
//
// 2020-06-26, jjuiddong
// link class
//  - link slot to slot
//
// 2020-07-14
//  - TypeScript Refactoring
//
var vec2_1 = __importDefault(__webpack_require__(/*! ./math/vec2 */ "./dist/math/vec2.js"));
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./dist/util.js"));
var LinkState;
(function (LinkState) {
    LinkState[LinkState["Normal"] = 0] = "Normal";
    LinkState[LinkState["Animation"] = 1] = "Animation";
})(LinkState = exports.LinkState || (exports.LinkState = {}));
var Link = /** @class */ (function () {
    function Link(id, from, to, p0, p1) {
        if (id === void 0) { id = -1; }
        if (from === void 0) { from = -1; }
        if (to === void 0) { to = -1; }
        if (p0 === void 0) { p0 = new vec2_1.default(0, 0); }
        if (p1 === void 0) { p1 = new vec2_1.default(0, 0); }
        this.state = LinkState.Normal;
        this.lineOffset = 0;
        this.id = (id < 0) ? util_1.default.genId() : id;
        this.from = from; // from slot id
        this.to = to; // to slot id
        this.p0 = p0; // from slot position
        this.p1 = p1; // from slot position
    }
    //--------------------------------------------------------------------------------
    // render link, bezier line
    Link.prototype.render = function (ctx) {
        var cx = (this.p0.x + this.p1.x) / 2;
        var cy = (this.p0.y + this.p1.y) / 2;
        var cp1x = util_1.default.lerp(this.p0.x, cx, 0.5);
        var cp1y = util_1.default.lerp(this.p0.y, cy, 0.1);
        var cp2x = util_1.default.lerp(cx, this.p1.x, 0.5);
        var cp2y = util_1.default.lerp(cy, this.p1.y, 0.9);
        var lineOffset = 0;
        var outLineWidth = 7;
        var innerLineWidth = 5;
        // animation
        if (this.state === LinkState.Animation) {
            this.lineOffset += 1.5;
            lineOffset = this.lineOffset;
            outLineWidth = 12;
            innerLineWidth = 10;
        }
        ctx.save();
        // outline
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = outLineWidth;
        ctx.beginPath();
        if (this.state === LinkState.Animation) {
            ctx.setLineDash([10, 10]);
            ctx.lineDashOffset = this.lineOffset;
        }
        ctx.moveTo(this.p0.x, this.p0.y);
        ctx.quadraticCurveTo(cp1x, cp1y, cx, cy);
        ctx.quadraticCurveTo(cp2x, cp2y, this.p1.x, this.p1.y);
        ctx.stroke();
        // inner line
        ctx.lineWidth = innerLineWidth;
        ctx.strokeStyle = "rgba(255,255,255,1)";
        ctx.stroke();
        ctx.restore();
    };
    ;
    //--------------------------------------------------------------------------------
    // set from slot id
    Link.prototype.setFrom = function (slotId) {
        this.from = slotId;
    };
    ;
    //--------------------------------------------------------------------------------
    // set to slot id
    Link.prototype.setTo = function (slotId) {
        this.to = slotId;
    };
    ;
    //--------------------------------------------------------------------------------
    // set p0 position
    // pos: Vec2
    Link.prototype.setP0 = function (pos) {
        this.p0.set(pos);
    };
    ;
    //--------------------------------------------------------------------------------
    // set p1 position
    // pos: Vec2
    Link.prototype.setP1 = function (pos) {
        this.p1.set(pos);
    };
    ;
    //--------------------------------------------------------------------------------
    // set animation
    // enable: true/false
    Link.prototype.setAnimation = function (enable) {
        this.state = (enable) ? LinkState.Normal : LinkState.Animation;
    };
    return Link;
}());
exports.default = Link;
;
//# sourceMappingURL=link.js.map

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
// 2020-06-25, jjuiddong
// 2D vector
//
// 2020-07-13
//  - TypeScript Refactoring
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
exports.NodeState = void 0;
//
// 2020-06-24, jjuiddong
// node class
//
// 2020-07-13
//  - TypeScript Refactoring
//
var slot_1 = __webpack_require__(/*! ./slot */ "./dist/slot.js");
var rect_1 = __importDefault(__webpack_require__(/*! ./math/rect */ "./dist/math/rect.js"));
var vec2_1 = __importDefault(__webpack_require__(/*! ./math/vec2 */ "./dist/math/vec2.js"));
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./dist/util.js"));
var config_1 = __importDefault(__webpack_require__(/*! ./config */ "./dist/config.js"));
var widgets_1 = __webpack_require__(/*! ./widgets */ "./dist/widgets.js");
var NodeState;
(function (NodeState) {
    NodeState[NodeState["Normal"] = 0] = "Normal";
    NodeState[NodeState["Hover"] = 1] = "Hover";
    NodeState[NodeState["Select"] = 2] = "Select";
    NodeState[NodeState["EditSlot"] = 3] = "EditSlot";
    NodeState[NodeState["EditWidget"] = 4] = "EditWidget";
})(NodeState = exports.NodeState || (exports.NodeState = {}));
var Node = /** @class */ (function () {
    function Node(id, name, rect) {
        var _this = this;
        if (id === void 0) { id = -1; }
        if (name === void 0) { name = "Node"; }
        if (rect === void 0) { rect = new rect_1.default(0, 0, 200, 200); }
        this.id = 0;
        this.isFocus = false;
        this.offset = new vec2_1.default(0, 0); // mouse select offset
        this.inputs = []; // input slots
        this.outputs = []; // output slots
        this.widgets = []; // widgets (number, text, boolean, combobox)
        this.state = NodeState.Normal;
        //--------------------------------------------------------------------------------
        // mouse move event handling
        // e: event
        this.onMouseMove = function (mousePos, e) {
            _this.inputs.forEach(function (slot) { return slot.onMouseMove(mousePos, e); });
            _this.outputs.forEach(function (slot) { return slot.onMouseMove(mousePos, e); });
            _this.widgets.forEach(function (widget) { return widget.onMouseMove(mousePos, e); });
        };
        //--------------------------------------------------------------------------------
        // mouse down event handling
        this.onMouseDown = function (mousePos, e) {
            _this.inputs.forEach(function (slot) { return slot.onMouseDown(mousePos, e); });
            _this.outputs.forEach(function (slot) { return slot.onMouseDown(mousePos, e); });
            _this.widgets.forEach(function (widget) { return widget.onMouseDown(mousePos, e); });
            var slots = _this.getSelectSlots();
            var widgets = _this.getSelectWidgets();
            if (slots.length > 0) {
                _this.state = NodeState.EditSlot;
            }
            else if (widgets.length > 0) {
                _this.state = NodeState.EditWidget;
            }
        };
        //--------------------------------------------------------------------------------
        // mouse up event handling
        this.onMouseUp = function (mousePos, e) {
            _this.inputs.forEach(function (slot) { return slot.onMouseUp(mousePos, e); });
            _this.outputs.forEach(function (slot) { return slot.onMouseUp(mousePos, e); });
            _this.widgets.forEach(function (widget) { return widget.onMouseUp(mousePos, e); });
            _this.state = NodeState.Normal;
        };
        //--------------------------------------------------------------------------------
        // double click event handling
        this.onMouseDBClick = function (mousePos, e) {
            _this.inputs.forEach(function (slot) { return slot.onMouseDBClick(mousePos, e); });
            _this.outputs.forEach(function (slot) { return slot.onMouseDBClick(mousePos, e); });
            _this.widgets.forEach(function (widget) { return widget.onMouseDBClick(mousePos, e); });
            _this.state = NodeState.Normal;
        };
        this.id = (id < 0) ? util_1.default.genId() : id;
        this.name = name;
        this.rect = rect;
        this.bodyY = rect.y;
    }
    //--------------------------------------------------------------------------------
    // add slot
    Node.prototype.addSlot = function (slot) {
        slot.node = this;
        if (slot.type === slot_1.SlotType.Input) {
            this.inputs.push(slot);
        }
        else if (slot.type === slot_1.SlotType.Output) {
            this.outputs.push(slot);
        }
        else {
            console.log("error!! addSlot(), slot type invalid");
        }
        this.clacSlotLayout();
    };
    ;
    //--------------------------------------------------------------------------------
    // remove slot
    // slotId: slot id
    Node.prototype.removeSlot = function (slotId) {
        if (this.inputs.find(function (slot) { return slotId === slot.id; })) {
            this.inputs = this.inputs.filter(function (slot) { return slotId !== slot.id; });
        }
        else if (this.outputs.find(function (slot) { return slotId === slot.id; })) {
            this.outputs = this.outputs.filter(function (slot) { return slotId !== slot.id; });
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // add widgets
    Node.prototype.addWidget = function (widget) {
        widget.node = this;
        this.widgets.push(widget);
        this.clacSlotLayout();
    };
    ;
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
        this.state = focus ? NodeState.Select : NodeState.Normal;
    };
    //--------------------------------------------------------------------------------
    // check x,y point in rect?
    Node.prototype.isPointInRect = function (x, y) {
        return this.rect.isPointInRect(x, y);
    };
    ;
    //--------------------------------------------------------------------------------
    // calc slot layout
    Node.prototype.clacSlotLayout = function () {
        var i = 0;
        for (i = 0; i < this.inputs.length; ++i) {
            this.inputs[i].rect.x = 0;
            this.inputs[i].rect.y = i * config_1.default.SLOT_HEIGHT;
        }
        for (i = 0; i < this.outputs.length; ++i) {
            this.outputs[i].rect.x = this.rect.w;
            this.outputs[i].rect.y = i * config_1.default.SLOT_HEIGHT;
        }
        var widgetsY = Math.max(this.inputs.length, this.outputs.length) * config_1.default.SLOT_HEIGHT;
        for (i = 0; i < this.widgets.length; ++i) {
            this.widgets[i].move(0, widgetsY + i * config_1.default.SLOT_HEIGHT);
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // get select slot
    Node.prototype.getSelectSlots = function () {
        var i = this.inputs.filter(function (slot) { return slot.state === slot_1.SlotState.Select; });
        var o = this.outputs.filter(function (slot) { return slot.state == slot_1.SlotState.Select; });
        return i.concat(o);
    };
    ;
    //--------------------------------------------------------------------------------
    // get hover slot
    Node.prototype.getHoverSlots = function () {
        var i = this.inputs.filter(function (slot) { return slot.state === slot_1.SlotState.Hover; });
        var o = this.outputs.filter(function (slot) { return slot.state === slot_1.SlotState.Hover; });
        return i.concat(o);
    };
    ;
    //--------------------------------------------------------------------------------
    // get select widgets
    Node.prototype.getSelectWidgets = function () {
        var sels = this.widgets.filter(function (widget) { return widget.getState() == widgets_1.WidgetState.Select; });
        return sels;
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

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __importDefault(__webpack_require__(/*! ./math/rect */ "./dist/math/rect.js"));
var node_1 = __importDefault(__webpack_require__(/*! ./node */ "./dist/node.js"));
var slot_1 = __importStar(__webpack_require__(/*! ./slot */ "./dist/slot.js"));
var widgets_1 = __webpack_require__(/*! ./widgets */ "./dist/widgets.js");
var SpawnNode = /** @class */ (function () {
    function SpawnNode() {
    }
    //--------------------------------------------------------------------------------
    // spawn Boolean
    // pos: {x,y}
    SpawnNode.Boolean = function (pos) {
        var node = new node_1.default(-1, 'Boolean', new rect_1.default(pos.x, pos.y, 200, 100));
        node.addSlot(new slot_1.default(-1, null, "in", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "out", slot_1.SlotType.Output));
        node.addWidget(new widgets_1.Widgets.Boolean());
        return node;
    };
    //--------------------------------------------------------------------------------
    // spawn Number
    // pos: {x,y}
    SpawnNode.Number = function (pos) {
        var node = new node_1.default(-1, 'Number', new rect_1.default(pos.x, pos.y, 200, 100));
        node.addSlot(new slot_1.default(-1, null, "in", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "out", slot_1.SlotType.Output));
        node.addWidget(new widgets_1.Widgets.Number());
        return node;
    };
    // //--------------------------------------------------------------------------------
    // spawn String
    // pos: {x,y}
    SpawnNode.String = function (pos) {
        var node = new node_1.default(-1, 'String', new rect_1.default(pos.x, pos.y, 200, 100));
        node.addSlot(new slot_1.default(-1, null, "in", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "out", slot_1.SlotType.Output));
        node.addWidget(new widgets_1.Widgets.String());
        return node;
    };
    //--------------------------------------------------------------------------------
    // spawn node1
    // pos: {x,y}
    SpawnNode.Node1 = function (pos) {
        var node = new node_1.default(-1, 'Node1', new rect_1.default(pos.x, pos.y, 200, 200));
        node.addSlot(new slot_1.default(-1, null, "in-1", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "in-2", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "in-3", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "out-1", slot_1.SlotType.Output));
        node.addSlot(new slot_1.default(-1, null, "out-2", slot_1.SlotType.Output));
        node.addSlot(new slot_1.default(-1, null, "out-3", slot_1.SlotType.Output));
        return node;
    };
    //--------------------------------------------------------------------------------
    // spawn node2
    // pos: {x,y}
    SpawnNode.Node2 = function (pos) {
        var node = new node_1.default(-1, 'Node2', new rect_1.default(pos.x, pos.y, 200, 150));
        node.addSlot(new slot_1.default(-1, null, "in-1", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "in-2", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "out-1", slot_1.SlotType.Output));
        node.addSlot(new slot_1.default(-1, null, "out-2", slot_1.SlotType.Output));
        return node;
    };
    //--------------------------------------------------------------------------------
    // spawn node3
    // pos: {x,y}
    SpawnNode.Node3 = function (pos) {
        var node = new node_1.default(-1, 'Node3', new rect_1.default(pos.x, pos.y, 200, 180));
        node.addSlot(new slot_1.default(-1, null, "in-1", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "in-2", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "out-1", slot_1.SlotType.Output));
        node.addSlot(new slot_1.default(-1, null, "out-2", slot_1.SlotType.Output));
        node.addSlot(new slot_1.default(-1, null, "out-3", slot_1.SlotType.Output));
        return node;
    };
    //--------------------------------------------------------------------------------
    // spawn Console
    // pos: {x,y}
    SpawnNode.Console = function (pos) {
        var node = new node_1.default(-1, 'Console', new rect_1.default(pos.x, pos.y, 200, 100));
        node.addSlot(new slot_1.default(-1, null, "in", slot_1.SlotType.Input));
        node.addSlot(new slot_1.default(-1, null, "out", slot_1.SlotType.Output));
        return node;
    };
    return SpawnNode;
}());
exports.default = SpawnNode;
//# sourceMappingURL=node_spawn.js.map

/***/ }),

/***/ "./dist/popup.js":
/*!***********************!*\
  !*** ./dist/popup.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
//
// 2020-07-01, jjuiddong
// PopUp Window
//
// 2020-07-14
//  - TypeScript Refactoring
//
var widgets_1 = __webpack_require__(/*! ./widgets */ "./dist/widgets.js");
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./dist/util.js"));
var Popup;
(function (Popup) {
    var InputType;
    (function (InputType) {
        InputType[InputType["Boolean"] = 0] = "Boolean";
        InputType[InputType["Number"] = 1] = "Number";
        InputType[InputType["String"] = 2] = "String";
    })(InputType = Popup.InputType || (Popup.InputType = {}));
    //--------------------------------------------------------------------------------
    // Popup.Input
    //--------------------------------------------------------------------------------
    var Input = /** @class */ (function () {
        function Input() {
            var _this = this;
            this.isShow = false; // show/hide input popup
            this.parentElem = document.body; // parent element
            this.widget = null; // input widget
            //--------------------------------------------------------------------------------
            // Popup.Input.onComplete
            // complete input
            this.onComplete = function () {
                var input = _this.elem.querySelector("input");
                if (input)
                    _this.setValue(input.value);
                _this.close();
            };
            //--------------------------------------------------------------------------------
            // Popup.Input.onCancel
            // cancel input
            this.onCancel = function () {
                _this.close();
            };
            //--------------------------------------------------------------------------------
            // Popup.Input.onButtonClick
            // complete input
            this.onButtonClick = function () {
                var input = _this.elem.querySelector("input");
                if (input)
                    _this.setValue(input.value);
                _this.close();
            };
            var elem = document.createElement("div");
            elem.className = "popup-input";
            elem.style.position = "absolute";
            this.elem = elem;
        }
        //--------------------------------------------------------------------------------
        // Popup.Input.open
        // open input popup
        Input.prototype.open = function (widget, x, y) {
            var _this = this;
            this.widget = widget;
            this.elem.style.left = x + "px";
            this.elem.style.top = y + "px";
            this.elem.innerHTML =
                "Value  <input type='text' value='' spellcheck='false'></input><button>OK</button>";
            var input = this.elem.querySelector("input");
            if (input) {
                if (this.widget instanceof widgets_1.Widgets.Boolean) {
                    input.value = String(this.widget.value);
                }
                else if (this.widget instanceof widgets_1.Widgets.Number) {
                    input.value = String(this.widget.value);
                }
                else if (this.widget instanceof widgets_1.Widgets.String) {
                    input.value = String(this.widget.value);
                }
                else {
                    console.log('error Popup.Input.open, type error');
                }
                input.addEventListener("keydown", function (e) {
                    if (e.keyCode == 13)
                        _this.onComplete();
                    else if (e.keyCode == 27)
                        _this.onCancel();
                });
                input.addEventListener("blur", function (e) {
                    this.focus();
                });
            }
            var button = this.elem.querySelector("button");
            if (button) {
                button.addEventListener("click", this.onButtonClick);
            }
            if (!this.isShow) {
                this.isShow = true;
                this.parentElem.appendChild(this.elem);
            }
            var input = this.elem.querySelector("input");
            if (input)
                input.focus();
        };
        ;
        //--------------------------------------------------------------------------------
        // Popup.Input.close
        // close input popup
        Input.prototype.close = function () {
            if (!this.isShow)
                return;
            this.isShow = false;
            this.parentElem.removeChild(this.elem);
        };
        ;
        //--------------------------------------------------------------------------------
        // Popup.Input.setValue
        // complete input
        Input.prototype.setValue = function (value) {
            if (this.widget instanceof widgets_1.Widgets.Boolean) {
                this.widget.value = value === "true";
            }
            else if (this.widget instanceof widgets_1.Widgets.Number) {
                this.widget.value = parseInt(value);
            }
            else if (this.widget instanceof widgets_1.Widgets.String) {
                this.widget.value = value;
            }
            else {
                console.log('error Popup.Input.setValue, type error');
            }
        };
        return Input;
    }());
    Popup.Input = Input;
    ;
    //--------------------------------------------------------------------------------
    // Popup.Prompt
    //--------------------------------------------------------------------------------
    var Prompt = /** @class */ (function () {
        function Prompt() {
            var _this = this;
            this.isShow = false; // show/hide input popup
            this.parentElem = document.body; // parent element
            this.callback = null;
            //--------------------------------------------------------------------------------
            // Popup.Prompt.onComplete
            // complete input
            this.onComplete = function () {
                var input = _this.elem.querySelector("input");
                if (input && _this.callback)
                    _this.callback(input.value);
                _this.close();
            };
            //--------------------------------------------------------------------------------
            // Popup.Prompt.onCancel
            // cancel input
            this.onCancel = function () {
                _this.close();
            };
            //--------------------------------------------------------------------------------
            // Popup.Prompt.onButtonClick
            // complete input
            this.onButtonClick = function () {
                var input = _this.elem.querySelector("input");
                if (input && _this.callback)
                    _this.callback(input.value);
                _this.close();
            };
            var elem = document.createElement("div");
            elem.className = "popup-prompt";
            elem.style.position = "absolute";
            this.elem = elem;
        }
        //--------------------------------------------------------------------------------
        // Popup.Prompt.open
        // open Prompt popup
        Prompt.prototype.open = function (title, value, callback, x, y) {
            var _this = this;
            if (x === void 0) { x = null; }
            if (y === void 0) { y = null; }
            this.callback = callback;
            var left = x || (window.innerWidth / 2) - (450 / 2);
            var top = y || (window.innerHeight / 2) - (util_1.default.convertRemToPixels(6) / 2);
            this.elem.style.left = left + "px";
            this.elem.style.top = top + "px";
            this.elem.innerHTML =
                "<span>" + title + "</span>Value  <input type='text' value='' spellcheck='false'></input><button>OK</button>";
            var input = this.elem.querySelector("input");
            if (input) {
                input.value = value;
                input.addEventListener("keydown", function (e) {
                    if (e.keyCode == 13)
                        _this.onComplete();
                    else if (e.keyCode == 27)
                        _this.onCancel();
                });
                input.addEventListener("blur", function (e) {
                    this.focus();
                });
            }
            var button = this.elem.querySelector("button");
            if (button) {
                button.addEventListener("click", this.onButtonClick);
            }
            if (!this.isShow) {
                this.isShow = true;
                this.parentElem.appendChild(this.elem);
            }
            var input = this.elem.querySelector("input");
            if (input)
                input.focus();
        };
        ;
        //--------------------------------------------------------------------------------
        // Popup.Prompt.close
        // close prompt popup
        Prompt.prototype.close = function () {
            if (!this.isShow)
                return;
            this.isShow = false;
            this.parentElem.removeChild(this.elem);
        };
        ;
        return Prompt;
    }());
    Popup.Prompt = Prompt;
})(Popup = exports.Popup || (exports.Popup = {}));
//# sourceMappingURL=popup.js.map

/***/ }),

/***/ "./dist/slot.js":
/*!**********************!*\
  !*** ./dist/slot.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotState = exports.SlotType = void 0;
var rect_1 = __importDefault(__webpack_require__(/*! ./math/rect */ "./dist/math/rect.js"));
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./dist/util.js"));
var config_1 = __importDefault(__webpack_require__(/*! ./config */ "./dist/config.js"));
var vec2_1 = __importDefault(__webpack_require__(/*! ./math/vec2 */ "./dist/math/vec2.js"));
var SlotType;
(function (SlotType) {
    SlotType[SlotType["Input"] = 0] = "Input";
    SlotType[SlotType["Output"] = 1] = "Output";
})(SlotType = exports.SlotType || (exports.SlotType = {}));
var SlotState;
(function (SlotState) {
    SlotState[SlotState["Normal"] = 0] = "Normal";
    SlotState[SlotState["Hover"] = 1] = "Hover";
    SlotState[SlotState["Select"] = 2] = "Select";
})(SlotState = exports.SlotState || (exports.SlotState = {}));
var Slot = /** @class */ (function () {
    function Slot(id, node, name, type, rect) {
        if (id === void 0) { id = -1; }
        if (node === void 0) { node = null; }
        if (name === void 0) { name = "slot"; }
        if (type === void 0) { type = SlotType.Input; }
        if (rect === void 0) { rect = new rect_1.default(0, 0, 0, 0); }
        this.id = (id < 0) ? util_1.default.genId() : id;
        this.node = node; // slot owner node
        this.name = name;
        this.type = type;
        this.rect = new rect_1.default(0, 0, 0, 0);
        this.hasLink = false; // slot has link?
        this.state = SlotState.Normal;
    }
    //--------------------------------------------------------------------------------
    // ctx: 2d rendering context
    // node: parent node
    Slot.prototype.render = function (ctx) {
        if (!this.node)
            return;
        var node = this.node;
        var x = node.rect.x + this.rect.x;
        var y = node.rect.y + node.bodyY + this.rect.y;
        var center = y + config_1.default.SLOT_HEIGHT / 2; // slot center
        var iconR = config_1.default.SLOT_ICON_RADIUS; // icon radius
        var iconW = config_1.default.SLOT_ICON_SPACE_WIDTH;
        var cx = x; // cursor x
        var cy = y; // cursor y
        if (this.type === SlotType.Input) {
            cx += config_1.default.SLOT_MARGIN_LEFT;
            cx += iconR;
        }
        else if (this.type === SlotType.Output) {
            cx -= config_1.default.SLOT_MARGIN_LEFT;
            cx -= iconR;
        }
        {
            // render slot icon
            switch (this.state) {
                case SlotState.Normal:
                    ctx.fillStyle = this.hasLink
                        ? config_1.default.SLOT_ICON_COLOR_LINK
                        : config_1.default.SLOT_ICON_COLOR_NORMAL;
                    break;
                case SlotState.Hover:
                    ctx.fillStyle = config_1.default.SLOT_ICON_COLOR_HOVER;
                    break;
                case SlotState.Select:
                    ctx.fillStyle = config_1.default.SLOT_ICON_COLOR_SELECT;
                    break;
            }
            //ctx.fillStyle =  Config.SLOT_ICON_COLOR;
            var sy = center;
            ctx.beginPath();
            ctx.arc(cx, sy, iconR, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        if (this.type === SlotType.Input) {
            cx += iconR + 5;
            ctx.textAlign = "left";
        }
        else if (this.type === SlotType.Output) {
            cx -= iconR + 5;
            ctx.textAlign = "right";
        }
        {
            // render slot name
            ctx.font = "24px serif";
            ctx.fillStyle = "rgba(0,0,0,1)";
            //var tx = x + iconW + Config.SLOT_MARGIN_LEFT;
            //var tx = cx;
            var ty = y + config_1.default.SLOT_HEIGHT - config_1.default.SLOT_TEXT_BASE_OFFSET;
            ctx.fillText(this.name, cx, ty);
        }
        ctx.textAlign = "left"; // restore
    };
    ;
    //--------------------------------------------------------------------------------
    Slot.prototype.setRect = function (rect) {
        this.rect.set(rect);
    };
    ;
    //--------------------------------------------------------------------------------
    // set hasLink
    Slot.prototype.setLink = function (hasLink) {
        this.hasLink = hasLink;
    };
    //--------------------------------------------------------------------------------
    // return slot icon positon
    Slot.prototype.getPos = function () {
        if (!this.node)
            return new vec2_1.default(0, 0);
        var node = this.node;
        var left = node.rect.x + this.rect.x;
        var top = node.rect.y + node.bodyY + this.rect.y;
        var iconR = config_1.default.SLOT_ICON_RADIUS; // icon radius
        var cx = left;
        var center = top + config_1.default.SLOT_HEIGHT / 2; // slot center
        if (this.type === SlotType.Input) {
            cx += config_1.default.SLOT_MARGIN_LEFT;
            cx += iconR;
        }
        else if (this.type === SlotType.Output) {
            cx -= config_1.default.SLOT_MARGIN_LEFT;
            cx -= iconR;
        }
        return new vec2_1.default(cx, center);
    };
    ;
    //--------------------------------------------------------------------------------
    // is contain point?
    Slot.prototype.isPointInRect = function (x, y) {
        if (!this.node)
            return false;
        var node = this.node;
        var left = node.rect.x + this.rect.x;
        var top = node.rect.y + node.bodyY + this.rect.y;
        var iconW = config_1.default.SLOT_ICON_SPACE_WIDTH;
        var cx = left;
        if (this.type === SlotType.Input) {
            cx += config_1.default.SLOT_MARGIN_LEFT;
            //cx += iconR;
        }
        else if (this.type === SlotType.Output) {
            cx -= config_1.default.SLOT_MARGIN_LEFT;
            cx -= iconW;
        }
        var rect = new rect_1.default(cx, top, iconW, config_1.default.SLOT_HEIGHT);
        return rect.isPointInRect(x, y);
    };
    ;
    //--------------------------------------------------------------------------------
    // mouse move event handling
    // e: event
    Slot.prototype.onMouseMove = function (mousePos, e) {
        if (this.isPointInRect(mousePos.x, mousePos.y)) {
            if (this.state !== SlotState.Select)
                this.state = SlotState.Hover;
        }
        else {
            this.state = SlotState.Normal;
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // mouse down event handling
    Slot.prototype.onMouseDown = function (mousePos, e) {
        if (this.isPointInRect(mousePos.x, mousePos.y)) {
            this.state = SlotState.Select;
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // mouse up event handling
    Slot.prototype.onMouseUp = function (mousePos, e) {
        if (this.isPointInRect(mousePos.x, mousePos.y)) {
            this.state = SlotState.Hover;
        }
        else {
            this.state = SlotState.Normal;
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // double click event handling
    Slot.prototype.onMouseDBClick = function (mousePos, e) {
        if (this.isPointInRect(mousePos.x, mousePos.y)) {
            this.state = SlotState.Select;
        }
    };
    ;
    return Slot;
}());
exports.default = Slot;
;
//# sourceMappingURL=slot.js.map

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
// 2020-07-13
//  - TypeScript Refactoring
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
        if (fillStyle === void 0) { fillStyle = null; }
        if (strokeStyle === void 0) { strokeStyle = null; }
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
        var storage = null;
        try {
            //storage = window[type];
            storage = window.localStorage;
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
            // Firefox를 제외한 모든 브라우저
            e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // 코드가 존재하지 않을 수도 있기 떄문에 이름 필드도 확인합니다.
                // Firefox를 제외한 모든 브라우저
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
                ((storage !== null) && storage.length !== 0);
        }
        return false;
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

/***/ }),

/***/ "./dist/widgets.js":
/*!*************************!*\
  !*** ./dist/widgets.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widgets = exports.WidgetType = exports.WidgetState = void 0;
//
// 2020-06-30, jjuiddong
// widgets
//  - input number
//  - input boolean
//  - input string
//  - input combobox
//
// 2020-07-14
//  - TypeScript Refactoring
//
var rect_1 = __importDefault(__webpack_require__(/*! ./math/rect */ "./dist/math/rect.js"));
var vec2_1 = __importDefault(__webpack_require__(/*! ./math/vec2 */ "./dist/math/vec2.js"));
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./dist/util.js"));
var config_1 = __importDefault(__webpack_require__(/*! ./config */ "./dist/config.js"));
var WidgetState;
(function (WidgetState) {
    WidgetState[WidgetState["Normal"] = 0] = "Normal";
    WidgetState[WidgetState["Hover"] = 1] = "Hover";
    WidgetState[WidgetState["Select"] = 2] = "Select";
})(WidgetState = exports.WidgetState || (exports.WidgetState = {}));
var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["Boolean"] = 0] = "Boolean";
    WidgetType[WidgetType["Number"] = 1] = "Number";
    WidgetType[WidgetType["String"] = 2] = "String";
})(WidgetType = exports.WidgetType || (exports.WidgetType = {}));
var Widgets;
(function (Widgets) {
    // widgets base class
    var Base = /** @class */ (function () {
        function Base(id, name, type, node, rect) {
            this.node = null;
            this.state = WidgetState.Normal;
            this.id = id;
            this.name = name;
            this.type = type;
            this.node = node;
            this.rect = rect;
        }
        Base.prototype.getValue = function () { return 0; };
        Base.prototype.render = function (ctx) { };
        Base.prototype.move = function (x, y) {
            this.rect.x = x;
            this.rect.y = y;
        };
        Base.prototype.getState = function () { return this.state; };
        Base.prototype.isPointInRect = function (x, y) { return false; };
        Base.prototype.onMouseMove = function (mousePos, e) { };
        Base.prototype.onMouseDown = function (mousePos, e) { };
        Base.prototype.onMouseUp = function (mousePos, e) { };
        Base.prototype.onMouseDBClick = function (mousePos, e) { };
        return Base;
    }());
    Widgets.Base = Base;
    //--------------------------------------------------------------------------------
    // Widgets.Number
    //--------------------------------------------------------------------------------
    var Number = /** @class */ (function (_super) {
        __extends(Number, _super);
        function Number(id, node, name, value, rect) {
            if (id === void 0) { id = -1; }
            if (node === void 0) { node = null; }
            if (name === void 0) { name = "number"; }
            if (value === void 0) { value = 0; }
            if (rect === void 0) { rect = new rect_1.default(0, 0, 100, config_1.default.WIDGETS_HEIGHT); }
            var _this = _super.call(this, (id < 0) ? util_1.default.genId() : id, name, WidgetType.Number, node, rect) || this;
            _this.value = 0;
            _this.prevPos = new vec2_1.default(0, 0);
            //--------------------------------------------------------------------------------
            // Widgets.Number.onMouseMove
            // mouse move event handling
            // e: event
            _this.onMouseMove = function (mousePos, e) {
                if (_this.state === WidgetState.Select) {
                    // const curPos = new Vec2(e.offsetX, e.offsetY);
                    // const delta = new Vec2(0,0);
                    // Vec2.sub(delta, curPos, this.prevPos);
                    // this.prevPos.set(curPos);
                    // this.value += delta.x;
                }
            };
            //--------------------------------------------------------------------------------
            // Widgets.Number.onMouseDown
            // mouse down event handling
            _this.onMouseDown = function (mousePos, e) {
                if (_this.isPointInRect(mousePos.x, mousePos.y)) {
                    _this.state = WidgetState.Select;
                    _this.prevPos.set2(e.offsetX, e.offsetY);
                }
            };
            //--------------------------------------------------------------------------------
            // Widgets.Number.onMouseUp
            // mouse up event handling
            _this.onMouseUp = function (mousePos, e) {
                if (_this.isPointInRect(mousePos.x, mousePos.y)) {
                    _this.state = WidgetState.Hover;
                }
                else {
                    _this.state = WidgetState.Normal;
                }
            };
            //--------------------------------------------------------------------------------
            // Widgets.Number.onMouseDBClick
            // double click event handling
            _this.onMouseDBClick = function (mousePos, e) {
                if (_this.isPointInRect(mousePos.x, mousePos.y)) {
                    _this.state = WidgetState.Select;
                }
            };
            _this.value = value;
            return _this;
        }
        //--------------------------------------------------------------------------------
        // Widgets.Number.getValue
        Number.prototype.getValue = function () { return this.value; };
        //--------------------------------------------------------------------------------
        // Widgets.Number.render
        // ctx: rendering context 2d
        Number.prototype.render = function (ctx) {
            var node = this.node;
            if (!node)
                return;
            var x = node.rect.x + this.rect.x + config_1.default.WIDGETS_MARGIN_LEFT;
            var y = node.rect.y + node.bodyY + this.rect.y + config_1.default.WIDGETS_MARGIN_TOP;
            var w = node.rect.w - config_1.default.WIDGETS_MARGIN_LEFT * 2;
            util_1.default.roundedRect(ctx, x, y, w, this.rect.h, 1, config_1.default.WIDGETS_BG_COLOR);
            {
                // render value
                var tx = x + w / 2; //+ Config.NODE_MARGIN_LEFT;
                var ty = y + this.rect.h - config_1.default.WIDGETS_TEXT_BASE_OFFSET;
                ctx.font = "24px serif";
                ctx.textAlign = "center";
                ctx.fillStyle = config_1.default.WIDGETS_TEXT_COLOR;
                ctx.fillText("" + this.value, tx, ty);
            }
            ctx.textAlign = "left"; // restore
        };
        ;
        //--------------------------------------------------------------------------------
        // Widgets.Number.isPointInRect
        // is contain point?
        Number.prototype.isPointInRect = function (x, y) {
            var node = this.node;
            if (!node)
                return false;
            var xx = node.rect.x + this.rect.x + config_1.default.WIDGETS_MARGIN_LEFT;
            var yy = node.rect.y + node.bodyY + this.rect.y + config_1.default.WIDGETS_MARGIN_TOP;
            var w = node.rect.w - config_1.default.WIDGETS_MARGIN_LEFT * 2;
            var h = this.rect.h;
            var rect = new rect_1.default(xx, yy, w, h);
            return rect.isPointInRect(x, y);
        };
        ;
        return Number;
    }(Base));
    Widgets.Number = Number;
    ; // ~Widgets.Number
    //--------------------------------------------------------------------------------
    // Widgets.Boolean
    //--------------------------------------------------------------------------------
    var Boolean = /** @class */ (function (_super) {
        __extends(Boolean, _super);
        //prevPos: Vec2 = new Vec2(0, 0);
        function Boolean(id, node, name, value, rect) {
            if (id === void 0) { id = -1; }
            if (node === void 0) { node = null; }
            if (name === void 0) { name = "number"; }
            if (value === void 0) { value = false; }
            if (rect === void 0) { rect = new rect_1.default(0, 0, 100, config_1.default.WIDGETS_HEIGHT); }
            var _this = _super.call(this, (id < 0) ? util_1.default.genId() : id, name, WidgetType.Boolean, node, rect) || this;
            _this.value = false;
            _this.name = "number";
            //--------------------------------------------------------------------------------
            // Widgets.Boolean.onMouseMove
            // mouse move event handling
            // e: event
            _this.onMouseMove = function (mousePos, e) {
            };
            //--------------------------------------------------------------------------------
            // Widgets.Boolean.onMouseDown
            // mouse down event handling
            _this.onMouseDown = function (mousePos, e) {
                if (_this.isPointInRect(mousePos.x, mousePos.y)) {
                    _this.state = WidgetState.Select;
                    //this.prevPos.set2(e.offsetX, e.offsetY);
                }
            };
            //--------------------------------------------------------------------------------
            // Widgets.Boolean.onMouseUp
            // mouse up event handling
            _this.onMouseUp = function (mousePos, e) {
                if (_this.isPointInRect(mousePos.x, mousePos.y)) {
                    _this.value = (_this.state === WidgetState.Select) ? !_this.value : _this.value;
                    _this.state = WidgetState.Hover;
                }
                else {
                    _this.state = WidgetState.Normal;
                }
            };
            //--------------------------------------------------------------------------------
            // Widgets.Boolean.onMouseDBClick
            // double click event handling
            _this.onMouseDBClick = function (mousePos, e) {
            };
            _this.value = value;
            return _this;
        }
        //--------------------------------------------------------------------------------
        // Widgets.Boolean.getValue
        Boolean.prototype.getValue = function () { return this.value; };
        //--------------------------------------------------------------------------------
        // Widgets.Boolean.render
        // ctx: rendering context 2d
        Boolean.prototype.render = function (ctx) {
            var node = this.node;
            if (!node)
                return;
            var x = node.rect.x + this.rect.x + config_1.default.WIDGETS_MARGIN_LEFT;
            var y = node.rect.y + node.bodyY + this.rect.y + config_1.default.WIDGETS_MARGIN_TOP;
            var w = node.rect.w - config_1.default.WIDGETS_MARGIN_LEFT * 2;
            util_1.default.roundedRect(ctx, x, y, w, this.rect.h, 1, config_1.default.WIDGETS_BG_COLOR);
            {
                // render value
                var tx = x + w / 2; //+ Config.NODE_MARGIN_LEFT;
                var ty = y + this.rect.h - config_1.default.WIDGETS_TEXT_BASE_OFFSET;
                ctx.font = "24px serif";
                ctx.textAlign = "center";
                ctx.fillStyle = config_1.default.WIDGETS_TEXT_COLOR;
                ctx.fillText("" + this.value, tx, ty);
            }
            ctx.textAlign = "left"; // restore
        };
        ;
        //--------------------------------------------------------------------------------
        // Widgets.Boolean.isPointInRect
        // is contain point?
        Boolean.prototype.isPointInRect = function (x, y) {
            var node = this.node;
            if (!node)
                return false;
            var xx = node.rect.x + this.rect.x + config_1.default.WIDGETS_MARGIN_LEFT;
            var yy = node.rect.y + node.bodyY + this.rect.y + config_1.default.WIDGETS_MARGIN_TOP;
            var w = node.rect.w - config_1.default.WIDGETS_MARGIN_LEFT * 2;
            var h = this.rect.h;
            var rect = new rect_1.default(xx, yy, w, h);
            return rect.isPointInRect(x, y);
        };
        ;
        return Boolean;
    }(Base));
    Widgets.Boolean = Boolean;
    ; // ~Widgets.Boolean
    //--------------------------------------------------------------------------------
    // Widgets.String
    //--------------------------------------------------------------------------------
    var String = /** @class */ (function (_super) {
        __extends(String, _super);
        //prevPos:Vec2 = new Vec2(0,0);
        function String(id, node, name, value, rect) {
            if (id === void 0) { id = -1; }
            if (node === void 0) { node = null; }
            if (name === void 0) { name = "string"; }
            if (value === void 0) { value = "empty"; }
            if (rect === void 0) { rect = new rect_1.default(0, 0, 100, config_1.default.WIDGETS_HEIGHT); }
            var _this = _super.call(this, (id < 0) ? util_1.default.genId() : id, name, WidgetType.String, node, rect) || this;
            //--------------------------------------------------------------------------------
            // Widgets.String.onMouseMove
            // mouse move event handling
            // e: event
            _this.onMouseMove = function (mousePos, e) {
            };
            //--------------------------------------------------------------------------------
            // Widgets.String.onMouseDown
            // mouse down event handling
            _this.onMouseDown = function (mousePos, e) {
                if (_this.isPointInRect(mousePos.x, mousePos.y)) {
                    _this.state = WidgetState.Select;
                    //this.prevPos.set2(e.offsetX, e.offsetY);
                }
            };
            //--------------------------------------------------------------------------------
            // Widgets.String.onMouseUp
            // mouse up event handling
            _this.onMouseUp = function (mousePos, e) {
                if (_this.isPointInRect(mousePos.x, mousePos.y)) {
                    //this.value = (this.state ===  WIDGET_STATE_SELECT)? !this.value : this.value;
                    _this.state = WidgetState.Hover;
                }
                else {
                    _this.state = WidgetState.Normal;
                }
            };
            //--------------------------------------------------------------------------------
            // Widgets.String.onMouseDBClick
            // double click event handling
            _this.onMouseDBClick = function (mousePos, e) {
            };
            _this.value = value;
            return _this;
        }
        //--------------------------------------------------------------------------------
        // Widgets.String.render
        String.prototype.getValue = function () { return this.value; };
        //--------------------------------------------------------------------------------
        // Widgets.String.render
        // ctx: rendering context 2d
        String.prototype.render = function (ctx) {
            var node = this.node;
            if (!node)
                return;
            var x = node.rect.x + this.rect.x + config_1.default.WIDGETS_MARGIN_LEFT;
            var y = node.rect.y + node.bodyY + this.rect.y + config_1.default.WIDGETS_MARGIN_TOP;
            var w = node.rect.w - config_1.default.WIDGETS_MARGIN_LEFT * 2;
            util_1.default.roundedRect(ctx, x, y, w, this.rect.h, 1, config_1.default.WIDGETS_BG_COLOR);
            {
                // render value
                var tx = x + w / 2; //+ Config.NODE_MARGIN_LEFT;
                var ty = y + this.rect.h - config_1.default.WIDGETS_TEXT_BASE_OFFSET;
                ctx.font = "24px serif";
                ctx.textAlign = "center";
                ctx.fillStyle = config_1.default.WIDGETS_TEXT_COLOR;
                ctx.fillText(this.value, tx, ty);
            }
            ctx.textAlign = "left"; // restore
        };
        ;
        //--------------------------------------------------------------------------------
        // Widgets.String.isPointInRect
        // is contain point?
        String.prototype.isPointInRect = function (x, y) {
            var node = this.node;
            if (!node)
                return false;
            var xx = node.rect.x + this.rect.x + config_1.default.WIDGETS_MARGIN_LEFT;
            var yy = node.rect.y + node.bodyY + this.rect.y + config_1.default.WIDGETS_MARGIN_TOP;
            var w = node.rect.w - config_1.default.WIDGETS_MARGIN_LEFT * 2;
            var h = this.rect.h;
            var rect = new rect_1.default(xx, yy, w, h);
            return rect.isPointInRect(x, y);
        };
        ;
        return String;
    }(Base));
    Widgets.String = String;
    ; // ~Widgets.String
})(Widgets = exports.Widgets || (exports.Widgets = {}));
//# sourceMappingURL=widgets.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9jb250ZXh0X21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9lZGl0dmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2VkaXR2aWV3X3ZlcjEuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9tYXRoL3JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9tYXRoL3ZlYzIuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9tZW51YmFyLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L25vZGVfc3Bhd24uanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC91dGlsLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvd2lkZ2V0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0Esc0RBQXNELGdCQUFnQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHNCQUFzQixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLHFCQUFxQixFQUFFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw2QkFBNkIsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QixFQUFFO0FBQ3ZFO0FBQ0EsNENBQTRDLHlCQUF5QixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDJCQUEyQixFQUFFO0FBQ3ZGO0FBQ0E7QUFDQSwyREFBMkQsMkJBQTJCLEVBQUU7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxtREFBbUQsRUFBRTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw0QkFBNEIsRUFBRTtBQUNwRiwyQ0FBMkMsa0NBQWtDLEVBQUU7QUFDL0Usc0RBQXNELDhCQUE4QixFQUFFO0FBQ3RGLDJDQUEyQyxrQ0FBa0MsRUFBRTtBQUMvRTtBQUNBLDZDQUE2QyxrQ0FBa0MsRUFBRTtBQUNqRiw4Q0FBOEMsa0NBQWtDLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxvQ0FBb0MseUJBQXlCLEVBQUUsRUFBRSxFQUFFO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DOzs7Ozs7Ozs7Ozs7QUMzZ0JhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw2QkFBNkIsbUJBQU8sQ0FBQyw4QkFBUTtBQUM3QyxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBVztBQUNuQyw2QkFBNkIsbUJBQU8sQ0FBQyx3Q0FBYTtBQUNsRCw2QkFBNkIsbUJBQU8sQ0FBQyx3Q0FBYTtBQUNsRCw2QkFBNkIsbUJBQU8sQ0FBQyw4QkFBUTtBQUM3Qyw2QkFBNkIsbUJBQU8sQ0FBQyw4QkFBUTtBQUM3Qyw2QkFBNkIsbUJBQU8sQ0FBQyw4QkFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EseUM7Ozs7Ozs7Ozs7OztBQzNOYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsb0NBQVc7QUFDbkQsaUNBQWlDLG1CQUFPLENBQUMsc0NBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ3JDYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFPLENBQUMsd0NBQWE7QUFDbEQsNkJBQTZCLG1CQUFPLENBQUMsOEJBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBEQUEwRDtBQUMzRDtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckMsOEJBQThCLFdBQVc7QUFDekMsNEJBQTRCLFNBQVM7QUFDckMsNEJBQTRCLCtCQUErQjtBQUMzRCw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZ0M7Ozs7Ozs7Ozs7OztBQy9HYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsMkJBQTJCLE9BQU87QUFDbEMsK0JBQStCLFdBQVc7QUFDMUMsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7QUNwRWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxnQzs7Ozs7Ozs7Ozs7O0FDL0RhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7QUN2RWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsOEJBQVE7QUFDN0IsNkJBQTZCLG1CQUFPLENBQUMsd0NBQWE7QUFDbEQsNkJBQTZCLG1CQUFPLENBQUMsd0NBQWE7QUFDbEQsNkJBQTZCLG1CQUFPLENBQUMsOEJBQVE7QUFDN0MsK0JBQStCLG1CQUFPLENBQUMsa0NBQVU7QUFDakQsZ0JBQWdCLG1CQUFPLENBQUMsb0NBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBEQUEwRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUztBQUNyQyw4QkFBOEIsZUFBZTtBQUM3Qyw4QkFBOEIsMkNBQTJDO0FBQ3pFO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxzQ0FBc0MsRUFBRTtBQUMxRixtREFBbUQsc0NBQXNDLEVBQUU7QUFDM0YscURBQXFELHdDQUF3QyxFQUFFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHNDQUFzQyxFQUFFO0FBQzFGLG1EQUFtRCxzQ0FBc0MsRUFBRTtBQUMzRixxREFBcUQsd0NBQXdDLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELG9DQUFvQyxFQUFFO0FBQ3hGLG1EQUFtRCxvQ0FBb0MsRUFBRTtBQUN6RixxREFBcUQsc0NBQXNDLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx5Q0FBeUMsRUFBRTtBQUM3RixtREFBbUQseUNBQXlDLEVBQUU7QUFDOUYscURBQXFELDJDQUEyQyxFQUFFO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyQkFBMkIsRUFBRTtBQUMzRSw4REFBOEQsMkJBQTJCLEVBQUU7QUFDM0Y7QUFDQSxvREFBb0QsMkJBQTJCLEVBQUU7QUFDakYsZ0VBQWdFLDJCQUEyQixFQUFFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsK0NBQStDLEVBQUU7QUFDckcscURBQXFELDhDQUE4QyxFQUFFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCw4Q0FBOEMsRUFBRTtBQUNwRyxxREFBcUQsOENBQThDLEVBQUU7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDBEQUEwRCxFQUFFO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQzs7Ozs7Ozs7Ozs7O0FDOU5hO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNkJBQTZCLG1CQUFPLENBQUMsd0NBQWE7QUFDbEQsNkJBQTZCLG1CQUFPLENBQUMsOEJBQVE7QUFDN0MsMEJBQTBCLG1CQUFPLENBQUMsOEJBQVE7QUFDMUMsZ0JBQWdCLG1CQUFPLENBQUMsb0NBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7Ozs7Ozs7QUM3R2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBVztBQUNuQyw2QkFBNkIsbUJBQU8sQ0FBQyw4QkFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyw0Q0FBNEM7QUFDNUMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QywrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMsOENBQThDO0FBQy9DLGlDOzs7Ozs7Ozs7Ozs7QUN2T2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNkJBQTZCLG1CQUFPLENBQUMsd0NBQWE7QUFDbEQsNkJBQTZCLG1CQUFPLENBQUMsOEJBQVE7QUFDN0MsK0JBQStCLG1CQUFPLENBQUMsa0NBQVU7QUFDakQsNkJBQTZCLG1CQUFPLENBQUMsd0NBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHVEQUF1RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwREFBMEQ7QUFDM0Q7QUFDQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDLDhCQUE4QixhQUFhO0FBQzNDLDhCQUE4QixlQUFlO0FBQzdDLDhCQUE4Qix1QkFBdUI7QUFDckQsOEJBQThCLHVDQUF1QztBQUNyRTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQ7QUFDQSxtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQzs7Ozs7Ozs7Ozs7O0FDdE1hO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JELHFDQUFxQyxvQkFBb0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQzs7Ozs7Ozs7Ozs7O0FDNUlhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQU8sQ0FBQyx3Q0FBYTtBQUNsRCw2QkFBNkIsbUJBQU8sQ0FBQyx3Q0FBYTtBQUNsRCw2QkFBNkIsbUJBQU8sQ0FBQyw4QkFBUTtBQUM3QywrQkFBK0IsbUJBQU8sQ0FBQyxrQ0FBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnRUFBZ0U7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNkRBQTZEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG1CQUFtQjtBQUNsRSx3REFBd0QsY0FBYztBQUN0RSw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELDJEQUEyRDtBQUMzRCxnRUFBZ0U7QUFDaEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6QyxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsaUJBQWlCO0FBQ25ELG1DQUFtQyxXQUFXO0FBQzlDLGtDQUFrQyx1RUFBdUU7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsbUJBQW1CO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6QyxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsaUJBQWlCO0FBQ25ELG1DQUFtQyxlQUFlO0FBQ2xELGtDQUFrQyx1RUFBdUU7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsbUJBQW1CO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6QyxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsaUJBQWlCO0FBQ25ELG1DQUFtQyxpQkFBaUI7QUFDcEQsa0NBQWtDLHVFQUF1RTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG1CQUFtQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLENBQUMsb0RBQW9EO0FBQ3JELG1DIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vXHJcbi8vIDIwMjAtMDYtMjQsIGpqdWlkZG9uZ1xyXG4vLyBjb25maWd1cmF0aW9uIGNsYXNzXHJcbi8vXHJcbi8vIDIwMjAtMDctMTNcclxuLy8gIC0gVHlwZVNjcmlwdCBSZWZhY3RvcmluZ1xyXG4vL1xyXG52YXIgQ29uZmlnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29uZmlnKCkge1xyXG4gICAgfVxyXG4gICAgQ29uZmlnLlRJVExFQkFSX0hFSUdIVCA9IDMwO1xyXG4gICAgQ29uZmlnLk5PREVfTUFSR0lOX0xFRlQgPSA1O1xyXG4gICAgQ29uZmlnLk5PREVfTUFSR0lOX1RPUCA9IDU7XHJcbiAgICBDb25maWcuTk9ERV9BUkNfUkFESVVTID0gNjtcclxuICAgIENvbmZpZy5OT0RFX0JPUkRFUl9DT0xPUiA9ICdyZ2JhKDAsMCwwLDEpJztcclxuICAgIENvbmZpZy5OT0RFX0hFQURFUl9DT0xPUiA9IFwicmdiYSgyMDAsMjAwLDAsMSlcIjtcclxuICAgIENvbmZpZy5OT0RFX0hFQURFUl9DT0xPUjIgPSBcInJnYmEoMjU1LDI1NSwwLDEpXCI7XHJcbiAgICBDb25maWcuTk9ERV9CT0RZX0NPTE9SID0gXCJyZ2JhKDIwMCwyMDAsMjAwLDEpXCI7XHJcbiAgICBDb25maWcuTk9ERV9CT0RZX0NPTE9SMiA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiO1xyXG4gICAgQ29uZmlnLlNMT1RfTUFSR0lOX0xFRlQgPSA1O1xyXG4gICAgQ29uZmlnLlNMT1RfSEVJR0hUID0gMzA7XHJcbiAgICBDb25maWcuU0xPVF9JQ09OX0NPTE9SID0gXCJyZ2JhKDAsMjU1LDAsMSlcIjtcclxuICAgIENvbmZpZy5TTE9UX0lDT05fQ09MT1JfTk9STUFMID0gXCJyZ2JhKDAsMjU1LDAsMSlcIjtcclxuICAgIENvbmZpZy5TTE9UX0lDT05fQ09MT1JfSE9WRVIgPSBcInJnYmEoMjU1LDI1NSwwLDEpXCI7XHJcbiAgICBDb25maWcuU0xPVF9JQ09OX0NPTE9SX1NFTEVDVCA9IFwicmdiYSgyNTUsMTUwLDAsMSlcIjtcclxuICAgIENvbmZpZy5TTE9UX0lDT05fQ09MT1JfTElOSyA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XHJcbiAgICBDb25maWcuU0xPVF9JQ09OX1JBRElVUyA9IDIwIC8gMjtcclxuICAgIENvbmZpZy5TTE9UX0lDT05fU1BBQ0VfV0lEVEggPSBDb25maWcuU0xPVF9JQ09OX1JBRElVUyAqIDIgKyA1O1xyXG4gICAgQ29uZmlnLlNMT1RfVEVYVF9CQVNFX09GRlNFVCA9IDU7IC8vIHRleHQgeSBiYXNlIG9mZnNldFxyXG4gICAgQ29uZmlnLldJREdFVFNfTUFSR0lOX0xFRlQgPSA1O1xyXG4gICAgQ29uZmlnLldJREdFVFNfTUFSR0lOX1RPUCA9IDU7XHJcbiAgICBDb25maWcuV0lER0VUU19IRUlHSFQgPSAzMDtcclxuICAgIENvbmZpZy5XSURHRVRTX0JHX0NPTE9SID0gJ3JnYmEoMCwwLDAsMSknO1xyXG4gICAgQ29uZmlnLldJREdFVFNfVEVYVF9DT0xPUiA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcclxuICAgIENvbmZpZy5XSURHRVRTX1RFWFRfQkFTRV9PRkZTRVQgPSA1OyAvLyB0ZXh0IHkgYmFzZSBvZmZzZXRcclxuICAgIENvbmZpZy5DT05URVhUTUVOVV9JVEVNX0hFSUdIVCA9IDI2O1xyXG4gICAgcmV0dXJuIENvbmZpZztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlnO1xyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vL1xyXG4vLyAyMDIwLTA2LTI4LCBqanVpZGRvbmdcclxuLy8gY29udGV4dCBtZW51IGNsYXNzXHJcbi8vICAgLSBtZW51IGl0ZW1cclxuLy9cclxuLy8gMjAyMC0wNy0xM1xyXG4vLyAgLSBUeXBlU2NyaXB0IFJlZmFjdG9yaW5nXHJcbi8vXHJcbnZhciBjb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb25maWdcIikpO1xyXG52YXIgdXRpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1lbnVJdGVtXHJcbnZhciBNZW51SXRlbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1lbnVJdGVtKGNvbnRleHRNZW51LCBpc1Jvb3RNZW51LCBwYXJlbnRFbGVtLCBuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNvbnRleHRNZW51ID09PSB2b2lkIDApIHsgY29udGV4dE1lbnUgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKGlzUm9vdE1lbnUgPT09IHZvaWQgMCkgeyBpc1Jvb3RNZW51ID0gZmFsc2U7IH1cclxuICAgICAgICBpZiAocGFyZW50RWxlbSA9PT0gdm9pZCAwKSB7IHBhcmVudEVsZW0gPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJ0b3BcIjsgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjayA9PT0gdm9pZCAwKSB7IGNhbGxiYWNrID0gbnVsbDsgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNSb290TWVudSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dNZW51ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93U3ViTWVudSA9IGZhbHNlO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSBtb3ZlIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7IH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIG1vdXNlIGVudGVyIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZWxlbSAmJiAoX3RoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkpXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuU3ViTWVudSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIG1vdXNlIGxlYXZlIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZWxlbSAmJiAoX3RoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkpXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZVN1Yk1lbnUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSBjbGljayBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmVuYWJsZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2soX3RoaXMpO1xyXG4gICAgICAgICAgICAvLyBsZWFmIG1lbnVJdGVtPyBjbG9zZSBjb250ZXh0IG1lbnVcclxuICAgICAgICAgICAgaWYgKF90aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgKF9hID0gX3RoaXMuY29udGV4dE1lbnUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkNsaWNrTWVudShfdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBjb250ZXh0TWVudTsgLy8gY29udGV4dCBtZW51XHJcbiAgICAgICAgdGhpcy5pc1Jvb3RNZW51ID1cclxuICAgICAgICAgICAgaXNSb290TWVudSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzUm9vdE1lbnU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtID0gcGFyZW50RWxlbTsgLy8gRE9NIHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCBcIm1lbnUgaXRlbVwiO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTsgLy8gZW5hYmxlL2Rpc2FibGU/XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTsgLy8gY2hpbGQgbWVudSBpdGVtXHJcbiAgICAgICAgdGhpcy5pc1Nob3dNZW51ID0gZmFsc2U7IC8vIHNob3cvaGlkZSBtZW51XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSb290TWVudSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAvL2VsZW0ubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBcImNvbnRleHRtZW51LWl0ZW1cIjtcclxuICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IGVsZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gTWVudUl0ZW06Om9wZW5cclxuICAgIC8vIG9wZW4gY29udGV4dCBtZW51XHJcbiAgICBNZW51SXRlbS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSb290TWVudSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd01lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtWCA9IHg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVkgPSB5ICsgaSAqIGNvbmZpZ18xLmRlZmF1bHQuQ09OVEVYVE1FTlVfSVRFTV9IRUlHSFQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLm9wZW4oaXRlbVgsIGl0ZW1ZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW0gJiYgdGhpcy5wYXJlbnRFbGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG93TWVudSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5zdHlsZS53aWR0aCA9IDEwMCArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLnN0eWxlLmhlaWdodCA9IGNvbmZpZ18xLmRlZmF1bHQuQ09OVEVYVE1FTlVfSVRFTV9IRUlHSFQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbS5hcHBlbmRDaGlsZCh0aGlzLmVsZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25Nb3VzZUVudGVyKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uTW91c2VDbGljayk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE1lbnVJdGVtOjpvcGVuU3ViTWVudVxyXG4gICAgLy8gb3BlbiBzdWIgY29udGV4dCBtZW51XHJcbiAgICBNZW51SXRlbS5wcm90b3R5cGUub3BlblN1Yk1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUm9vdE1lbnUgJiYgdGhpcy5lbGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N1Yk1lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgeCA9IHBhcnNlSW50KHRoaXMuZWxlbS5zdHlsZS53aWR0aCkgKyB1dGlsXzEuZGVmYXVsdC5jb252ZXJ0UmVtVG9QaXhlbHMoMS4wKTtcclxuICAgICAgICAgICAgdmFyIHkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtWCA9IHg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVkgPSB5ICsgaSAqIGNvbmZpZ18xLmRlZmF1bHQuQ09OVEVYVE1FTlVfSVRFTV9IRUlHSFQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLm9wZW4oaXRlbVgsIGl0ZW1ZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBNZW51SXRlbTo6Y2xvc2VcclxuICAgIC8vIGNsb3NlIGNvbnRleHQgbWVudVxyXG4gICAgTWVudUl0ZW0ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudC5jbG9zZSgpOyB9KTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSb290TWVudSAmJiB0aGlzLmlzU2hvd01lbnUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbSAmJiB0aGlzLmVsZW0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW0ucmVtb3ZlQ2hpbGQodGhpcy5lbGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dNZW51ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE1lbnVJdGVtOjpjbG9zZVN1Yk1lbnVcclxuICAgIC8vIGNsb3NlIHN1YiBjb250ZXh0IG1lbnVcclxuICAgIE1lbnVJdGVtLnByb3RvdHlwZS5jbG9zZVN1Yk1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUm9vdE1lbnUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gTWVudUl0ZW06OmFkZFN1Yk1lbnVcclxuICAgIC8vIGFkZCBzdWJtZW51XHJcbiAgICAvLyByZXR1cm4gbWVudSBpbnN0YW5jZVxyXG4gICAgTWVudUl0ZW0ucHJvdG90eXBlLmFkZFN1Yk1lbnUgPSBmdW5jdGlvbiAoY29udGV4dE1lbnUsIGlzUm9vdE1lbnUsIHBhcmVudEVsZW0sIG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHRNZW51ID09PSB2b2lkIDApIHsgY29udGV4dE1lbnUgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKGlzUm9vdE1lbnUgPT09IHZvaWQgMCkgeyBpc1Jvb3RNZW51ID0gZmFsc2U7IH1cclxuICAgICAgICBpZiAocGFyZW50RWxlbSA9PT0gdm9pZCAwKSB7IHBhcmVudEVsZW0gPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJ0b3BcIjsgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjayA9PT0gdm9pZCAwKSB7IGNhbGxiYWNrID0gbnVsbDsgfVxyXG4gICAgICAgIHZhciBpdGVtID0gbmV3IE1lbnVJdGVtKGNvbnRleHRNZW51LCBpc1Jvb3RNZW51LCB0aGlzLmVsZW0sIG5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc2V0IG1lbnUgZW5hYmxlL2Rpc2FibGVcclxuICAgIE1lbnVJdGVtLnByb3RvdHlwZS5zZXRFbmFibGUgPSBmdW5jdGlvbiAoZW5hYmxlKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGUgPSBlbmFibGU7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbSlcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmNsYXNzTmFtZSA9IGVuYWJsZSA/IFwiY29udGV4dG1lbnUtaXRlbVwiIDogXCJjb250ZXh0bWVudS1pdGVtIGRpc2FibGVkXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1lbnVJdGVtO1xyXG59KCkpO1xyXG47XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ29udGV4dE1lbnUgTWFuYWdlclxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBDb250ZXh0TWVudSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbnRleHRNZW51KG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk1lbnVcIjsgfVxyXG4gICAgICAgIHRoaXMucm9vdE1lbnUgPSBuZXcgTWVudUl0ZW0odGhpcywgdHJ1ZSwgZG9jdW1lbnQuYm9keSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIG9wZW4gY29udGV4dCBtZW51XHJcbiAgICBDb250ZXh0TWVudS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMucm9vdE1lbnUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vcGVuKHgsIHkpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGNsb3NlIGNvbnRleHQgbWVudVxyXG4gICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnJvb3RNZW51KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBhZGQgbWVudSBpdGVtXHJcbiAgICAvLyByZXR1cm4gYWRkZWQgbWVudVxyXG4gICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmFkZE1lbnUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHsgY2FsbGJhY2sgPSBudWxsOyB9XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gKF9hID0gdGhpcy5yb290TWVudSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZFN1Yk1lbnUodGhpcywgZmFsc2UsIG51bGwsIG5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gbWVudUl0ZW0gPyBtZW51SXRlbSA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gYWRkIHN1YiBtZW51IGl0ZW1cclxuICAgIC8vIHJldHVybiBhZGRlZCBtZW51XHJcbiAgICAvLyBwYXJlbnRNZW51TmFtZTogbWVudU5hbWUxJm1lbnVOYW1lMiZtZW51TmFtZTNcclxuICAgIC8vICAgICAgICAgICAgICAgIGRlbGltZXRlcjogJlxyXG4gICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmFkZFN1Yk1lbnUgPSBmdW5jdGlvbiAocGFyZW50TWVudU5hbWUsIG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHsgY2FsbGJhY2sgPSBudWxsOyB9XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gbnVsbDtcclxuICAgICAgICB2YXIgcGFyZW50TWVudUl0ZW0gPSB0aGlzLmZpbmRNZW51SXRlbShwYXJlbnRNZW51TmFtZSk7XHJcbiAgICAgICAgaWYgKHBhcmVudE1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtID0gcGFyZW50TWVudUl0ZW0uYWRkU3ViTWVudSh0aGlzLCBmYWxzZSwgbnVsbCwgbmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBmb3VuZCBwYXJlbnQgbWVudSBpdGVtICcgKyBwYXJlbnRNZW51TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZW51SXRlbTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBtZW51IGl0ZW0gZW5hYmxlL2Rpc2FibGVcclxuICAgIC8vIG1lbnVOYW1lLCBleCltZW51TmFtZTEmbWVudU5hbWUyJm1lbnVOYW1lM1xyXG4gICAgLy8gZW5hYmxlIDogYm9vbGVhblxyXG4gICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnNldE1lbnVFbmFibGUgPSBmdW5jdGlvbiAobWVudU5hbWUsIGVuYWJsZSkge1xyXG4gICAgICAgIHZhciBtZW51SXRlbSA9IHRoaXMuZmluZE1lbnVJdGVtKG1lbnVOYW1lKTtcclxuICAgICAgICBtZW51SXRlbSA9PT0gbnVsbCB8fCBtZW51SXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudUl0ZW0uc2V0RW5hYmxlKGVuYWJsZSk7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gbWVudU5hbWUsIGV4KW1lbnVOYW1lMSZtZW51TmFtZTImbWVudU5hbWUzXHJcbiAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZmluZE1lbnVJdGVtID0gZnVuY3Rpb24gKG1lbnVOYW1lKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHZhciBzdHJzID0gbWVudU5hbWUuc3BsaXQoJyYnKTtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSAoX2EgPSB0aGlzLnJvb3RNZW51KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hpbGRyZW47XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gbnVsbDtcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5ba10ubmFtZSA9PT0gc3Ryc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjaGlsZHJlbltrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIG5vdCBmb3VuZCBwYXJlbnQgbWVudSBpdGVtXHJcbiAgICAgICAgICAgICAgICBpZiAoc3Rycy5sZW5ndGggLSAxID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0gPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIHN1Y2Nlc3MgZmluZCBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZW51SXRlbTtcclxuICAgIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBtZW51IGNsaWNrIGV2ZW50XHJcbiAgICAvLyBjbG9zZSBjb250ZXh0IG1lbnVcclxuICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5vbkNsaWNrTWVudSA9IGZ1bmN0aW9uIChtZW51SXRlbSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICByZXR1cm4gQ29udGV4dE1lbnU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRleHRNZW51O1xyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHRfbWVudS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vL1xyXG4vLyAyMDIwLTA2LTI1LCBqanVpZGRvbmdcclxuLy8gTm9kZSBFZGl0b3IgVmlldyBjbGFzc1xyXG4vLyAgLSByZW5kZXIgY2FudmFzXHJcbi8vICAtIHJlbmRlciBub2RlXHJcbi8vICAtIHJlbmRlciBsaW5rXHJcbi8vXHJcbi8vIDIwMjAtMDctMTNcclxuLy8gIC0gVHlwZVNjcmlwdCBSZWZhY3RvcmluZ1xyXG4vL1xyXG52YXIgdmVjMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hdGgvdmVjMlwiKSk7XHJcbnZhciBjb250ZXh0X21lbnVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb250ZXh0X21lbnVcIikpO1xyXG52YXIgbm9kZV8xID0gcmVxdWlyZShcIi4vbm9kZVwiKTtcclxudmFyIHNsb3RfMSA9IHJlcXVpcmUoXCIuL3Nsb3RcIik7XHJcbnZhciBsaW5rXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbGlua1wiKSk7XHJcbnZhciB3aWRnZXRzXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzXCIpO1xyXG52YXIgbm9kZV9zcGF3bl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVfc3Bhd25cIikpO1xyXG52YXIgcG9wdXBfMSA9IHJlcXVpcmUoXCIuL3BvcHVwXCIpO1xyXG52YXIgZWRpdHZpZXdfdmVyMV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2VkaXR2aWV3X3ZlcjFcIikpO1xyXG52YXIgRWRpdFN0YXRlO1xyXG4oZnVuY3Rpb24gKEVkaXRTdGF0ZSkge1xyXG4gICAgRWRpdFN0YXRlW0VkaXRTdGF0ZVtcIk5vcm1hbFwiXSA9IDBdID0gXCJOb3JtYWxcIjtcclxuICAgIEVkaXRTdGF0ZVtFZGl0U3RhdGVbXCJTY3JvbGxcIl0gPSAxXSA9IFwiU2Nyb2xsXCI7XHJcbiAgICBFZGl0U3RhdGVbRWRpdFN0YXRlW1wiTW92ZU5vZGVcIl0gPSAyXSA9IFwiTW92ZU5vZGVcIjtcclxuICAgIEVkaXRTdGF0ZVtFZGl0U3RhdGVbXCJFZGl0TGlua1wiXSA9IDNdID0gXCJFZGl0TGlua1wiO1xyXG4gICAgRWRpdFN0YXRlW0VkaXRTdGF0ZVtcIkVkaXRXaWRnZXRcIl0gPSA0XSA9IFwiRWRpdFdpZGdldFwiO1xyXG59KShFZGl0U3RhdGUgfHwgKEVkaXRTdGF0ZSA9IHt9KSk7XHJcbnZhciBFZGl0VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVkaXRWaWV3KGNhbnZhcywgd2lkdGgsIC8vIHZpZXcgd2lkdGhcclxuICAgIGhlaWdodCAvLyB2aWV3IGhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEVkaXRTdGF0ZS5Ob3JtYWw7XHJcbiAgICAgICAgdGhpcy5pc0ZvY3VzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbmV3IHZlYzJfMS5kZWZhdWx0KDEwMDAsIDEwMDApO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgyMDAwLCAyMDAwKTtcclxuICAgICAgICB0aGlzLmlzU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGlja1BvcyA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgwLCAwKTtcclxuICAgICAgICB0aGlzLnByZXZQb3MgPSBuZXcgdmVjMl8xLmRlZmF1bHQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWRpdExpbmsgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWRpdFdpZGdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saW5rcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm1lbnUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgcG9wdXBfMS5Qb3B1cC5JbnB1dCgpO1xyXG4gICAgICAgIHRoaXMucHJvbXB0ID0gbmV3IHBvcHVwXzEuUG9wdXAuUHJvbXB0KCk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIHJlY2FsYyBub2RlIHBvc2l0aW9uLCBsaW5rIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gbm9kZSA6IG1vdmUgbm9kZVxyXG4gICAgICAgIHRoaXMuY2FsY05vZGVMYXlvdXRBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIG5vdGhpbmd+XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gcmV0dXJuIG1vdXNlIG9yaWdpbmFsIHBvc1xyXG4gICAgICAgIC8vIGNhbGMgem9vbSBpbi9vdXQsIG9mZnNldFxyXG4gICAgICAgIHRoaXMuZ2V0T3JpZ2luYWxQb3MgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICB2YXIgbW91c2VQb3MgPSBuZXcgdmVjMl8xLmRlZmF1bHQoeCwgeSk7XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXRTY2FsZSA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2ZWMyXzEuZGVmYXVsdC5zY2FsZShvZmZzZXRTY2FsZSwgX3RoaXMub2Zmc2V0LCBfdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIHZhciBjdXJQb3MgPSBuZXcgdmVjMl8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuYWRkKGN1clBvcywgbW91c2VQb3MsIG9mZnNldFNjYWxlKTtcclxuICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc2NhbGUoY3VyUG9zLCBjdXJQb3MsIDEgLyBfdGhpcy5zY2FsZSk7IC8vIGNvbnZlcnQgdG8gb3JpZ2luYWwgcG9zXHJcbiAgICAgICAgICAgIHJldHVybiBjdXJQb3M7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQ29udGV4dCBNZW51IFJlbW92ZVxyXG4gICAgICAgIC8vIHJlbW92ZSBzZWxlY3Qgbm9kZXNcclxuICAgICAgICB0aGlzLm9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBjb2xsZWN0IHJlbW92ZSBsaW5rXHJcbiAgICAgICAgICAgIHZhciBybUxpbmtzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBfdGhpcy5ub2RlczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNGb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBub2RlLmlucHV0czsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsb3QgPSBfY1tfYl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJtTGlua3MgPSBybUxpbmtzLmNvbmNhdChfdGhpcy5nZXRMaW5rRnJvbVNsb3Qoc2xvdC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfZCA9IDAsIF9lID0gbm9kZS5vdXRwdXRzOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xvdCA9IF9lW19kXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm1MaW5rcyA9IHJtTGlua3MuY29uY2F0KF90aGlzLmdldExpbmtGcm9tU2xvdChzbG90LmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZUxpbmtzKHJtTGlua3MpO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgbm9kZVxyXG4gICAgICAgICAgICBfdGhpcy5ub2RlcyA9IF90aGlzLm5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gIW5vZGUuaXNGb2N1czsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gbW91c2UgbW92ZSBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc3ViKGRlbHRhLCBfdGhpcy5wcmV2UG9zLCBuZXcgdmVjMl8xLmRlZmF1bHQoZS5vZmZzZXRYLCBlLm9mZnNldFkpKTtcclxuICAgICAgICAgICAgICAgIHZlYzJfMS5kZWZhdWx0LnNldDIoX3RoaXMucHJldlBvcywgZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuc2NhbGUoZGVsdGEsIGRlbHRhLCAxIC8gX3RoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgdmVjMl8xLmRlZmF1bHQuYWRkKF90aGlzLm9mZnNldCwgX3RoaXMub2Zmc2V0LCBkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gX3RoaXMuZ2V0T3JpZ2luYWxQb3MoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICB2YXIgc2VsTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF90aGlzLm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnN0YXRlID09PSBub2RlXzEuTm9kZVN0YXRlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubW92ZShtb3VzZVBvcy54ICsgbm9kZS5vZmZzZXQueCwgbW91c2VQb3MueSArIG5vZGUub2Zmc2V0LnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gRWRpdFN0YXRlLk1vdmVOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxjTm9kZUxheW91dChzZWxOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnN0YXRlID09PSBub2RlXzEuTm9kZVN0YXRlLkVkaXRXaWRnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBub3RoaW5nflxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNQb2ludEluUmVjdChtb3VzZVBvcy54LCBtb3VzZVBvcy55KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5vbk1vdXNlTW92ZShtb3VzZVBvcywgZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZWRpdExpbmsgJiYgX3RoaXMuc3RhdGUgPT09IEVkaXRTdGF0ZS5FZGl0TGluaykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZWRpdExpbmsuc2V0UDEobW91c2VQb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5lZGl0V2lkZ2V0ICYmIF90aGlzLnN0YXRlID09PSBFZGl0U3RhdGUuRWRpdFdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZWRpdFdpZGdldC5vbk1vdXNlTW92ZShtb3VzZVBvcywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSBkb3duIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25Nb3VzZUxlZnREb3duKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gbW91c2UgbGVmdCBidXR0b24gZG93biBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZUxlZnREb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSBfdGhpcy5tZW51KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xvc2UoKTtcclxuICAgICAgICAgICAgdmFyIGlzU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBtb3VzZVBvcyA9IF90aGlzLmdldE9yaWdpbmFsUG9zKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICAgICAgX3RoaXMubm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNQb2ludEluUmVjdChtb3VzZVBvcy54LCBtb3VzZVBvcy55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLm9uTW91c2VEb3duKG1vdXNlUG9zLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zdGF0ZSA9PT0gbm9kZV8xLk5vZGVTdGF0ZS5FZGl0U2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IEVkaXRTdGF0ZS5FZGl0TGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbFNsb3QgPSBub2RlLmdldFNlbGVjdFNsb3RzKClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVkaXRMaW5rID0gbmV3IGxpbmtfMS5kZWZhdWx0KC0xLCBzZWxTbG90LmlkLCAtMSwgc2VsU2xvdC5nZXRQb3MoKSwgbW91c2VQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLnN0YXRlID09PSBub2RlXzEuTm9kZVN0YXRlLkVkaXRXaWRnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSBFZGl0U3RhdGUuRWRpdFdpZGdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWRpdFdpZGdldCA9IG5vZGUuZ2V0U2VsZWN0V2lkZ2V0cygpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSBFZGl0U3RhdGUuTW92ZU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Rm9jdXModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub2Zmc2V0LnNldDIobm9kZS5yZWN0LnggLSBtb3VzZVBvcy54LCBub2RlLnJlY3QueSAtIG1vdXNlUG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXNGb2N1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gc2Nyb2xsP1xyXG4gICAgICAgICAgICBpZiAoIWlzU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1Njcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IEVkaXRTdGF0ZS5TY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGlja1Bvcy5zZXQyKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnByZXZQb3Muc2V0MihlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSB1cCBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbk1vdXNlTGVmdFVwKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3VzZSByaWdodCBidXR0b24gZG93blxyXG4gICAgICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gX3RoaXMuZ2V0T3JpZ2luYWxQb3MoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW91c2VQb3Muc2V0KG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIGNoZWNrIGZvY3VzIG5vZGVcclxuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IF90aGlzLm5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5pc0ZvY3VzOyB9KTtcclxuICAgICAgICAgICAgICAgIChfYSA9IF90aGlzLm1lbnUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNZW51RW5hYmxlKFwiUmVtb3ZlXCIsIG5vZGVzLmxlbmd0aCA+IDApO1xyXG4gICAgICAgICAgICAgICAgKF9iID0gX3RoaXMubWVudSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9wZW4oZS5vZmZzZXRYICsgNSwgZS5vZmZzZXRZICsgNSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gbW91c2UgbGVmdCB1cCBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZUxlZnRVcCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmlzU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBtb3VzZVBvcyA9IF90aGlzLmdldE9yaWdpbmFsUG9zKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICAgICAgLy92YXIgc2VsU2xvdDogU2xvdCB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICAvL3ZhciBzZWxXaWRnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICBfdGhpcy5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNJblJlY3QgPSBub2RlLmlzUG9pbnRJblJlY3QobW91c2VQb3MueCwgbW91c2VQb3MueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zdGF0ZSAhPT0gbm9kZV8xLk5vZGVTdGF0ZS5Ob3JtYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZGdldHMgPSBub2RlLmdldFNlbGVjdFdpZGdldHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZGdldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbFdpZGdldCA9IHdpZGdldHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlaWR0IHdpZGdldD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5lZGl0V2lkZ2V0ICYmIF90aGlzLnN0YXRlID09PSBFZGl0U3RhdGUuRWRpdFdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHNlbFdpZGdldCBpbnN0YW5jZW9mIHdpZGdldHNfMS5XaWRnZXRzLkJvb2xlYW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmlucHV0Lm9wZW4oX3RoaXMuZWRpdFdpZGdldCwgZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlLm9uTW91c2VVcChtb3VzZVBvcywgZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0luUmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUub25Nb3VzZVVwKG1vdXNlUG9zLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xvdHMgPSBub2RlLmdldEhvdmVyU2xvdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsU2xvdCA9IHNsb3RzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZWRpdExpbmsgJiYgc2VsU2xvdCAmJiBfdGhpcy5zdGF0ZSA9PT0gRWRpdFN0YXRlLkVkaXRMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lZGl0TGluay5zZXRUbyhzZWxTbG90LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZExpbmsoX3RoaXMuZWRpdExpbmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuZWRpdExpbmsgPSBudWxsO1xyXG4gICAgICAgICAgICBfdGhpcy5lZGl0V2lkZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSBFZGl0U3RhdGUuTm9ybWFsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIG1vdXNlIHVwIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlREJDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBtb3VzZVBvcyA9IF90aGlzLmdldE9yaWdpbmFsUG9zKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICAgICAgX3RoaXMubm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNQb2ludEluUmVjdChtb3VzZVBvcy54LCBtb3VzZVBvcy55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUub25Nb3VzZURCQ2xpY2sobW91c2VQb3MsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBzZWxlY3Qgc2xvdCBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsb3RzID0gbm9kZS5nZXRTZWxlY3RTbG90cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxTbG90ID0gc2xvdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBybUxpbmtzID0gX3RoaXMuZ2V0TGlua0Zyb21TbG90KHNlbFNsb3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVMaW5rcyhybUxpbmtzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIG1vdXNlIHdoZWVsIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgY3VyUG9zID0gbmV3IHZlYzJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBtb3VzZVBvcyA9IG5ldyB2ZWMyXzEuZGVmYXVsdChlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIHZlYzJfMS5kZWZhdWx0LnNjYWxlKGN1clBvcywgX3RoaXMub2Zmc2V0LCBfdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIHZlYzJfMS5kZWZhdWx0LmFkZChjdXJQb3MsIGN1clBvcywgbW91c2VQb3MpO1xyXG4gICAgICAgICAgICB2YXIgcztcclxuICAgICAgICAgICAgaWYgKGUuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcyA9IDAuODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSAxLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuc2NhbGUgKj0gcztcclxuICAgICAgICAgICAgdmFyIG5ld1BvcyA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2ZWMyXzEuZGVmYXVsdC5zY2FsZShuZXdQb3MsIGN1clBvcywgcyk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2ZWMyXzEuZGVmYXVsdC5zdWIoZGVsdGEsIG5ld1BvcywgbW91c2VQb3MpO1xyXG4gICAgICAgICAgICB2ZWMyXzEuZGVmYXVsdC5zZXQyKF90aGlzLm9mZnNldCwgZGVsdGEueCAvIF90aGlzLnNjYWxlLCBkZWx0YS55IC8gX3RoaXMuc2NhbGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCFjYW52YXMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eClcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhdHRlcm4gPSBjdHguY3JlYXRlUGF0dGVybihpbWcsICdyZXBlYXQnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGltZy5zcmMgPSAnLi4vaW1ncy9ncmlkLnBuZyc7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHZhciBtZW51ID0gbmV3IGNvbnRleHRfbWVudV8xLmRlZmF1bHQoKTtcclxuICAgICAgICBtZW51LmFkZE1lbnUoXCJBZGRcIik7XHJcbiAgICAgICAgbWVudS5hZGRNZW51KFwiUmVtb3ZlXCIsIHRoaXMub25SZW1vdmUpO1xyXG4gICAgICAgIG1lbnUuYWRkTWVudShcIkdyb3VwXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnNvbGUubG9nKFwiR3JvdXBcIik7IH0pO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZFwiLCBcIlZhcmlhYmxlXCIpO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZFwiLCBcIkZ1bmN0aW9uXCIpO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZWYXJpYWJsZVwiLCBcIkJvb2xlYW5cIiwgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm5vZGVzLnB1c2gobm9kZV9zcGF3bl8xLmRlZmF1bHQuQm9vbGVhbihfdGhpcy5tb3VzZVBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZWYXJpYWJsZVwiLCBcIk51bWJlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5ub2Rlcy5wdXNoKG5vZGVfc3Bhd25fMS5kZWZhdWx0Lk51bWJlcihfdGhpcy5tb3VzZVBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZWYXJpYWJsZVwiLCBcIlN0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5ub2Rlcy5wdXNoKG5vZGVfc3Bhd25fMS5kZWZhdWx0LlN0cmluZyhfdGhpcy5tb3VzZVBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZGdW5jdGlvblwiLCBcIk5vZGUxXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm5vZGVzLnB1c2gobm9kZV9zcGF3bl8xLmRlZmF1bHQuTm9kZTEoX3RoaXMubW91c2VQb3MpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtZW51LmFkZFN1Yk1lbnUoXCJBZGQmRnVuY3Rpb25cIiwgXCJOb2RlMlwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5ub2Rlcy5wdXNoKG5vZGVfc3Bhd25fMS5kZWZhdWx0Lk5vZGUyKF90aGlzLm1vdXNlUG9zKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWVudS5hZGRTdWJNZW51KFwiQWRkJkZ1bmN0aW9uXCIsIFwiTm9kZTNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubm9kZXMucHVzaChub2RlX3NwYXduXzEuZGVmYXVsdC5Ob2RlMyhfdGhpcy5tb3VzZVBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZGdW5jdGlvblwiLCBcIk5vZGU0XCIpO1xyXG4gICAgICAgIG1lbnUuYWRkU3ViTWVudShcIkFkZCZGdW5jdGlvblwiLCBcIkNvbnNvbGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubm9kZXMucHVzaChub2RlX3NwYXduXzEuZGVmYXVsdC5Db25zb2xlKF90aGlzLm1vdXNlUG9zKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgdGhpcy5vbk1vdXNlREJDbGljayk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbCk7XHJcbiAgICB9XHJcbiAgICBFZGl0Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGlmICghY3R4KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5vZmZzZXQueCwgLXRoaXMub2Zmc2V0LnkpO1xyXG4gICAgICAgIC8vIHJlbmRlciBiYWNrZ3JvdW5kIGdyaWRcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XHJcbiAgICAgICAgaWYgKHRoaXMucGF0dGVybikge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5wYXR0ZXJuO1xyXG4gICAgICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLm9mZnNldC54LCB0aGlzLm9mZnNldC55LCB0aGlzLndpZHRoIC8gdGhpcy5zY2FsZSwgdGhpcy5oZWlnaHQgLyB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbmRlciBsaW5rXHJcbiAgICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7IHJldHVybiBsaW5rLnJlbmRlcihjdHgpOyB9KTtcclxuICAgICAgICAvLyByZW5kZXIgbm9kZXNcclxuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUucmVuZGVyKGN0eCk7IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRMaW5rKVxyXG4gICAgICAgICAgICB0aGlzLmVkaXRMaW5rLnJlbmRlcihjdHgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgLy8gZGVidWdnaW5nIGluZm9ybWF0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdHkgPSAzMDtcclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjIwcHggc2VyaWZcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJTY3JvbGwgOiBcIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldC54LnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgICAgXCIsIFwiICtcclxuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0LnkudG9GaXhlZCgyKSwgMCwgKHR5ICs9IDI0KSk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlpvb20gOiBcIiArIHRoaXMuc2NhbGUudG9GaXhlZCgyKSwgMCwgKHR5ICs9IDI0KSk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlN0YXRlIDogXCIgKyB0aGlzLnN0YXRlLCAwLCAodHkgKz0gMjQpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gZ2V0IHNsb3RcclxuICAgIEVkaXRWaWV3LnByb3RvdHlwZS5nZXRTbG90SW5Ob2RlID0gZnVuY3Rpb24gKG5vZGUsIHNsb3RJZCkge1xyXG4gICAgICAgIHZhciByZXN1bHQxID0gbm9kZS5pbnB1dHMuZmlsdGVyKGZ1bmN0aW9uIChzbG90KSB7IHJldHVybiBzbG90LmlkID09PSBzbG90SWQ7IH0pO1xyXG4gICAgICAgIGlmIChyZXN1bHQxLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQxWzBdO1xyXG4gICAgICAgIHZhciByZXN1bHQyID0gbm9kZS5vdXRwdXRzLmZpbHRlcihmdW5jdGlvbiAoc2xvdCkgeyByZXR1cm4gc2xvdC5pZCA9PT0gc2xvdElkOyB9KTtcclxuICAgICAgICBpZiAocmVzdWx0Mi5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0MlswXTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBnZXQgc2xvdFxyXG4gICAgLy8gcmV0dXJuIHNsb3QgaGFzIHNsb3RJZFxyXG4gICAgRWRpdFZpZXcucHJvdG90eXBlLmdldFNsb3QgPSBmdW5jdGlvbiAoc2xvdElkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc2xvdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5nZXRTbG90SW5Ob2RlKG5vZGUsIHNsb3RJZCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHNsb3QgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2xvdDtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBnZXQgbm9kZSBmcm9tIHNsb3RcclxuICAgIC8vIHJldHVybiBub2RlIGhhcyBzbG90XHJcbiAgICBFZGl0Vmlldy5wcm90b3R5cGUuZ2V0Tm9kZUZyb21TbG90ID0gZnVuY3Rpb24gKHNsb3RJZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG5vZGVIYXNTbG90ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLmdldFNsb3RJbk5vZGUobm9kZSwgc2xvdElkKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZUhhc1Nsb3QgPSBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGVIYXNTbG90O1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGdldCBsaW5rIGhhcyBzbG90XHJcbiAgICAvLyByZXR1cm4gbGluayBhcnJheVxyXG4gICAgRWRpdFZpZXcucHJvdG90eXBlLmdldExpbmtGcm9tU2xvdCA9IGZ1bmN0aW9uIChzbG90SWQpIHtcclxuICAgICAgICB2YXIgbGlua3MgPSB0aGlzLmxpbmtzLmZpbHRlcihmdW5jdGlvbiAobGluaykgeyByZXR1cm4gbGluay5mcm9tID09PSBzbG90SWQgfHwgbGluay50byA9PT0gc2xvdElkOyB9KTtcclxuICAgICAgICByZXR1cm4gbGlua3M7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gYWRkIGxpbmtcclxuICAgIC8vIGxpbms6IExpbmsgaW5zdGFuY2VcclxuICAgIEVkaXRWaWV3LnByb3RvdHlwZS5hZGRMaW5rID0gZnVuY3Rpb24gKG5ld0xpbmspIHtcclxuICAgICAgICAvL3RoaXMuZWRpdExpbmsuc2V0VG8oc2VsU2xvdC5pZCk7XHJcbiAgICAgICAgLy90aGlzLmVkaXRMaW5rLnNldFAxKHNlbFNsb3QuZ2V0UG9zKCkpO1xyXG4gICAgICAgIHZhciBmclNsb3QgPSB0aGlzLmdldFNsb3QobmV3TGluay5mcm9tKTtcclxuICAgICAgICB2YXIgdG9TbG90ID0gdGhpcy5nZXRTbG90KG5ld0xpbmsudG8pO1xyXG4gICAgICAgIHZhciBmck5vZGUgPSB0aGlzLmdldE5vZGVGcm9tU2xvdChuZXdMaW5rLmZyb20pO1xyXG4gICAgICAgIHZhciB0b05vZGUgPSB0aGlzLmdldE5vZGVGcm9tU2xvdChuZXdMaW5rLnRvKTtcclxuICAgICAgICB2YXIgZXhpc3RMaW5rID0gdGhpcy5saW5rcy5maW5kKGZ1bmN0aW9uIChsaW5rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobGluay5mcm9tID09PSBuZXdMaW5rLmZyb20gJiYgbGluay50byA9PT0gbmV3TGluay50bykgfHxcclxuICAgICAgICAgICAgICAgIChsaW5rLnRvID09PSBuZXdMaW5rLmZyb20gJiYgbGluay5mcm9tID09PSBuZXdMaW5rLnRvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjaGVjayB2YWxpZCBsaW5rP1xyXG4gICAgICAgIGlmICghbmV3TGluay50byB8fFxyXG4gICAgICAgICAgICAhbmV3TGluay5mcm9tIHx8XHJcbiAgICAgICAgICAgIG5ld0xpbmsudG8gPT09IG5ld0xpbmsuZnJvbSB8fFxyXG4gICAgICAgICAgICBmck5vZGUgPT09IHRvTm9kZSB8fFxyXG4gICAgICAgICAgICBleGlzdExpbmsgfHxcclxuICAgICAgICAgICAgIWZyU2xvdCB8fFxyXG4gICAgICAgICAgICAhdG9TbG90IHx8XHJcbiAgICAgICAgICAgIChmclNsb3QgJiYgdG9TbG90ICYmIGZyU2xvdC50eXBlID09PSB0b1Nsb3QudHlwZSkpIHtcclxuICAgICAgICAgICAgLy8gaW52YWxpZCBsaW5rLCBpZ25vcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkIGxpbmtcclxuICAgICAgICAgICAgLy8gZXhjaGFuZ2UgZnJvbT1pbnB1dCwgdG89b3V0cHV0XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGZyU2xvdC50eXBlID09PSBzbG90XzEuU2xvdFR5cGUuSW5wdXQgPyBmclNsb3QgOiB0b1Nsb3Q7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0b1Nsb3QudHlwZSA9PT0gc2xvdF8xLlNsb3RUeXBlLk91dHB1dCA/IHRvU2xvdCA6IGZyU2xvdDtcclxuICAgICAgICAgICAgbmV3TGluay5zZXRGcm9tKGlucHV0LmlkKTtcclxuICAgICAgICAgICAgbmV3TGluay5zZXRQMChpbnB1dC5nZXRQb3MoKSk7XHJcbiAgICAgICAgICAgIG5ld0xpbmsuc2V0VG8ob3V0cHV0LmlkKTtcclxuICAgICAgICAgICAgbmV3TGluay5zZXRQMShvdXRwdXQuZ2V0UG9zKCkpO1xyXG4gICAgICAgICAgICBmclNsb3Quc2V0TGluayh0cnVlKTtcclxuICAgICAgICAgICAgdG9TbG90LnNldExpbmsodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGlua3MucHVzaChuZXdMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gcmVjYWxjIGxpbmsgZnJvbSx0byBwb3NpdGlvblxyXG4gICAgLy8gbm9kZSA6IG1vdmUgbm9kZVxyXG4gICAgRWRpdFZpZXcucHJvdG90eXBlLmNhbGNOb2RlTGF5b3V0ID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjYWxjRm4gPSBmdW5jdGlvbiAobGlua3MsIHNsb3QpIHtcclxuICAgICAgICAgICAgdmFyIGxpbmsxID0gbGlua3MuZmlsdGVyKGZ1bmN0aW9uIChsaW5rKSB7IHJldHVybiBsaW5rLnRvID09PSBzbG90LmlkOyB9KTtcclxuICAgICAgICAgICAgbGluazEuZm9yRWFjaChmdW5jdGlvbiAobGluaykgeyByZXR1cm4gbGluay5zZXRQMShzbG90LmdldFBvcygpKTsgfSk7XHJcbiAgICAgICAgICAgIHZhciBsaW5rMiA9IGxpbmtzLmZpbHRlcihmdW5jdGlvbiAobGluaykgeyByZXR1cm4gbGluay5mcm9tID09PSBzbG90LmlkOyB9KTtcclxuICAgICAgICAgICAgbGluazIuZm9yRWFjaChmdW5jdGlvbiAobGluaykgeyByZXR1cm4gbGluay5zZXRQMChzbG90LmdldFBvcygpKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBub2RlLmlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzbG90KSB7IHJldHVybiBjYWxjRm4oX3RoaXMubGlua3MsIHNsb3QpOyB9KTtcclxuICAgICAgICBub2RlLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAoc2xvdCkgeyByZXR1cm4gY2FsY0ZuKF90aGlzLmxpbmtzLCBzbG90KTsgfSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUmVtb3ZlIExpbmtzXHJcbiAgICAvLyBybUxpbmtzOiBhcnJheSBsaW5rXHJcbiAgICBFZGl0Vmlldy5wcm90b3R5cGUucmVtb3ZlTGlua3MgPSBmdW5jdGlvbiAocm1MaW5rcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGxpbmtcclxuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5saW5rcy5maWx0ZXIoZnVuY3Rpb24gKGxpbmspIHsgcmV0dXJuICFybUxpbmtzLmZpbmQoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuaWQgPT09IGxpbmsuaWQ7IH0pOyB9KTtcclxuICAgICAgICAvLyByZWZyZXNoIHNsb3Qgc3RhdGVcclxuICAgICAgICBybUxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICAgICAgdmFyIGZyU2xvdCA9IF90aGlzLmdldFNsb3QobGluay5mcm9tKTtcclxuICAgICAgICAgICAgdmFyIHRvU2xvdCA9IF90aGlzLmdldFNsb3QobGluay50byk7XHJcbiAgICAgICAgICAgIGlmIChmclNsb3QpIHtcclxuICAgICAgICAgICAgICAgIGZyU2xvdC5zZXRMaW5rKF90aGlzLmdldExpbmtGcm9tU2xvdChmclNsb3QuaWQpLmxlbmd0aCAhPT0gMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRvU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgdG9TbG90LnNldExpbmsoX3RoaXMuZ2V0TGlua0Zyb21TbG90KHRvU2xvdC5pZCkubGVuZ3RoICE9PSAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGNsb3NlIGRvY3VtZW50XHJcbiAgICAvLyByZW1vdmUgbm9kZSwgbGluaywgZXRjXHJcbiAgICBFZGl0Vmlldy5wcm90b3R5cGUuY2xvc2VEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5saW5rcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWRpdExpbmsgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWRpdFdpZGdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbG9zZSgpO1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNhdmUgbm9kZSBkYXRhIHRvIGRhdGFiYXNlXHJcbiAgICBFZGl0Vmlldy5wcm90b3R5cGUuc2F2ZURCID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wcm9tcHQub3BlbignSW5wdXQgVGl0bGUnLCAnbm9kZVRpdGxlTmFtZScsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBlZGl0dmlld192ZXIxXzEuZGVmYXVsdC5zYXZlREIoX3RoaXMsIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBsb2FkIG5vZGUgZGF0YSBmcm9tIGRhdGFiYXNlXHJcbiAgICBFZGl0Vmlldy5wcm90b3R5cGUubG9hZERCID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wcm9tcHQub3BlbignSW5wdXQgVGl0bGUnLCAnbm9kZVRpdGxlTmFtZScsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBlZGl0dmlld192ZXIxXzEuZGVmYXVsdC5sb2FkRnJvbURCKF90aGlzLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc2F2ZSBub2RlIGRhdGEgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgRWRpdFZpZXcucHJvdG90eXBlLnNhdmVMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZWRpdHZpZXdfdmVyMV8xLmRlZmF1bHQuc2F2ZUxvY2FsU3RvcmFnZSh0aGlzLCAndGl0bGUnKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBsb2FkIG5vZGUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIEVkaXRWaWV3LnByb3RvdHlwZS5sb2FkTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGVkaXR2aWV3X3ZlcjFfMS5kZWZhdWx0LmxvYWRGcm9tTG9jYWxTdG9yYWdlKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBFZGl0VmlldztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRWRpdFZpZXc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVkaXR2aWV3LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbnZhciB3aWRnZXRzXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzXCIpO1xyXG52YXIgdmVjMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hdGgvdmVjMlwiKSk7XHJcbnZhciByZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWF0aC9yZWN0XCIpKTtcclxudmFyIG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcclxudmFyIHNsb3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zbG90XCIpKTtcclxudmFyIGxpbmtfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9saW5rXCIpKTtcclxudmFyIEVkaXRWaWV3X1ZlcjEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFZGl0Vmlld19WZXIxKCkge1xyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc2F2ZSBub2RlcyB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAvLyBlZGl0VmlldzogRWRpdFZpZXcgaW5zdGFuY2VcclxuICAgIEVkaXRWaWV3X1ZlcjEuc2F2ZUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uIChlZGl0VmlldywgdGl0bGVOYW1lKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBFZGl0Vmlld19WZXIxLm5vZGVUb0pTT04oZWRpdFZpZXcsIHRpdGxlTmFtZSk7XHJcbiAgICAgICAgdmFyIHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIGlmICh1dGlsXzEuZGVmYXVsdC5zdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmUgZGF0YVwiLCBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBsb2FkIG5vZGVzIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgLy8gZWRpdFZpZXc6IEVkaXRWaWV3IGluc3RhbmNlXHJcbiAgICBFZGl0Vmlld19WZXIxLmxvYWRGcm9tTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKGVkaXRWaWV3KSB7XHJcbiAgICAgICAgaWYgKHV0aWxfMS5kZWZhdWx0LnN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcclxuICAgICAgICAgICAgdmFyIHN0ciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmUgZGF0YVwiKTtcclxuICAgICAgICAgICAgaWYgKHN0cikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHN0cik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudmVyc2lvbiAhPT0gXCJ2MS4wXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yISEgRWRpdFZpZXdfVmVyMS5sb2FkIGNvbmZsaWMgdmVyc2lvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFZGl0Vmlld19WZXIxLmxvYWQoZWRpdFZpZXcsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNhdmUgbm9kZXMgdG8gZGF0YWJhc2VcclxuICAgIC8vIGVkaXRWaWV3OiBFZGl0VmlldyBpbnN0YW5jZVxyXG4gICAgRWRpdFZpZXdfVmVyMS5zYXZlREIgPSBmdW5jdGlvbiAoZWRpdFZpZXcsIHRpdGxlTmFtZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gRWRpdFZpZXdfVmVyMS5ub2RlVG9KU09OKGVkaXRWaWV3LCB0aXRsZU5hbWUpO1xyXG4gICAgICAgIHZhciBzdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAvLyBpZiAoVXRpbC5zdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XHJcbiAgICAgICAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlIGRhdGFcIiwgc3RyKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmVxdWVzdCBzYXZlIG5vZGVmaWxlIHRvIHdlYnNlcnZlclxyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy9hbGVydCh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9maWxlXCIsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgIHhoci5zZW5kKHN0cik7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gbG9hZCBub2RlcyBmcm9tIGRhdGFiYXNlXHJcbiAgICAvLyBlZGl0VmlldzogRWRpdFZpZXcgaW5zdGFuY2VcclxuICAgIEVkaXRWaWV3X1ZlcjEubG9hZEZyb21EQiA9IGZ1bmN0aW9uIChlZGl0VmlldywgdGl0bGVOYW1lKSB7XHJcbiAgICAgICAgdmFyIHN0ciA9IEpTT04uc3RyaW5naWZ5KHsgdGl0bGU6IHRpdGxlTmFtZSB9KTtcclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIEVkaXRWaWV3X1ZlcjEubG9hZChlZGl0VmlldywgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvZmlsZT90aXRsZT1cIiArIHRpdGxlTmFtZTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gbm9kZXMgdG8ganNvbiBzdHJpbmdcclxuICAgIC8vIGVkaXRWaWV3OiBFZGl0VmlldyBpbnN0YW5jZVxyXG4gICAgLy8gdGl0bGVOYW1lOiB0aXRsZSBuYW1lXHJcbiAgICBFZGl0Vmlld19WZXIxLm5vZGVUb0pTT04gPSBmdW5jdGlvbiAoZWRpdFZpZXcsIHRpdGxlTmFtZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICB2ZXJzaW9uOiBcInYxLjBcIixcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlTmFtZSxcclxuICAgICAgICAgICAgb2Zmc2V0WDogZWRpdFZpZXcub2Zmc2V0LngsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IGVkaXRWaWV3Lm9mZnNldC55LFxyXG4gICAgICAgICAgICBzY2FsZTogZWRpdFZpZXcuc2NhbGUsXHJcbiAgICAgICAgICAgIG5vZGVzOiBbXSxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gc2F2ZSBub2Rlc1xyXG4gICAgICAgIGVkaXRWaWV3Lm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGVEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG5vZGUuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB4OiBub2RlLnJlY3QueCxcclxuICAgICAgICAgICAgICAgIHk6IG5vZGUucmVjdC55LFxyXG4gICAgICAgICAgICAgICAgdzogbm9kZS5yZWN0LncsXHJcbiAgICAgICAgICAgICAgICBoOiBub2RlLnJlY3QuaCxcclxuICAgICAgICAgICAgICAgIGlucHV0czogW10sXHJcbiAgICAgICAgICAgICAgICBvdXRwdXRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHdpZGdldHM6IFtdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBub2RlLmlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzbG90KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xvdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNsb3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogc2xvdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHNsb3QudHlwZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5pbnB1dHMucHVzaChzbG90RGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBub2RlLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsb3REYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBzbG90LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHNsb3QubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBzbG90LnR5cGUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbm9kZURhdGEub3V0cHV0cy5wdXNoKHNsb3REYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5vZGUud2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aWRnZXREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB3aWRnZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogd2lkZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogd2lkZ2V0LnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHdpZGdldC5nZXRWYWx1ZSgpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbm9kZURhdGEud2lkZ2V0cy5wdXNoKHdpZGdldERhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGF0YS5ub2Rlcy5wdXNoKG5vZGVEYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBzYXZlIGxpbmtcclxuICAgICAgICBlZGl0Vmlldy5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XHJcbiAgICAgICAgICAgIHZhciBsaW5rRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBsaW5rLmlkLFxyXG4gICAgICAgICAgICAgICAgZnJvbTogbGluay5mcm9tLFxyXG4gICAgICAgICAgICAgICAgdG86IGxpbmsudG8sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRhdGEubGlua3MucHVzaChsaW5rRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gbG9hZCBub2Rlc1xyXG4gICAgLy8gZWRpdFZpZXc6IEVkaXRWaWV3IGluc3RhbmNlXHJcbiAgICAvLyBub2RlRGF0YTogbm9kZSBqc29uIGRhdGFcclxuICAgIEVkaXRWaWV3X1ZlcjEubG9hZCA9IGZ1bmN0aW9uIChlZGl0Vmlldywgbm9kZURhdGEpIHtcclxuICAgICAgICBlZGl0Vmlldy5jbG9zZURvY3VtZW50KCk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBub2RlRGF0YTtcclxuICAgICAgICB2YXIgaWRzID0gbmV3IE1hcCgpOyAvLyBpZCBtYXBwaW5nXHJcbiAgICAgICAgaWYgKGRhdGEub2Zmc2V0WCAmJiBkYXRhLm9mZnNldFkpIHtcclxuICAgICAgICAgICAgZWRpdFZpZXcub2Zmc2V0ID0gbmV3IHZlYzJfMS5kZWZhdWx0KGRhdGEub2Zmc2V0WCwgZGF0YS5vZmZzZXRZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuc2NhbGUpIHtcclxuICAgICAgICAgICAgZWRpdFZpZXcuc2NhbGUgPSBkYXRhLnNjYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5ub2Rlcykge1xyXG4gICAgICAgICAgICBkYXRhLm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuaWQgPSB1dGlsXzEuZGVmYXVsdC5nZW5JZCgpO1xyXG4gICAgICAgICAgICAgICAgaWRzLnNldChub2RlLmlkLCBuaWQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgbm9kZV8xLmRlZmF1bHQobmlkLCBub2RlLm5hbWUsIG5ldyByZWN0XzEuZGVmYXVsdChub2RlLngsIG5vZGUueSwgbm9kZS53LCBub2RlLmgpKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2lkID0gdXRpbF8xLmRlZmF1bHQuZ2VuSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZHMuc2V0KHNsb3QuaWQsIHNpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBuZXcgc2xvdF8xLmRlZmF1bHQoc2lkLCBudWxsLCBzbG90Lm5hbWUsIHNsb3QudHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5hZGRTbG90KHMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaWQgPSB1dGlsXzEuZGVmYXVsdC5nZW5JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkcy5zZXQoc2xvdC5pZCwgc2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG5ldyBzbG90XzEuZGVmYXVsdChzaWQsIG51bGwsIHNsb3QubmFtZSwgc2xvdC50eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBuLmFkZFNsb3Qocyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5vZGUud2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpZCA9IHV0aWxfMS5kZWZhdWx0LmdlbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRzLnNldCh3aWRnZXQuaWQsIHdpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh3aWRnZXQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHdpZGdldHNfMS5XaWRnZXRUeXBlLkJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ID0gbmV3IHdpZGdldHNfMS5XaWRnZXRzLkJvb2xlYW4od2lkLCBudWxsLCB3aWRnZXQubmFtZSwgd2lkZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHdpZGdldHNfMS5XaWRnZXRUeXBlLk51bWJlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcgPSBuZXcgd2lkZ2V0c18xLldpZGdldHMuTnVtYmVyKHdpZCwgbnVsbCwgd2lkZ2V0Lm5hbWUsIHdpZGdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB3aWRnZXRzXzEuV2lkZ2V0VHlwZS5TdHJpbmc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ID0gbmV3IHdpZGdldHNfMS5XaWRnZXRzLlN0cmluZyh3aWQsIG51bGwsIHdpZGdldC5uYW1lLCB3aWRnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yISEgRWRpdFZpZXcubG9hZCgpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hZGRXaWRnZXQodyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVkaXRWaWV3Lm5vZGVzLnB1c2gobik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLy9+ZGF0YS5ub2Rlc1xyXG4gICAgICAgIC8vIHRvZG86IHRyZWFja3kgY29kZSB0byBjYWxjIG5vZGUuYm9keVlcclxuICAgICAgICBlZGl0Vmlldy5yZW5kZXIoZWRpdFZpZXcuY3R4KTtcclxuICAgICAgICBpZiAoZGF0YS5saW5rcykge1xyXG4gICAgICAgICAgICBkYXRhLmxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaWQgPSB1dGlsXzEuZGVmYXVsdC5nZW5JZCgpO1xyXG4gICAgICAgICAgICAgICAgaWRzLnNldChsaW5rLmlkLCBsaWQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZySWQgPSBpZHMuZ2V0KGxpbmsuZnJvbSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9JZCA9IGlkcy5nZXQobGluay50byk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGsgPSBuZXcgbGlua18xLmRlZmF1bHQobGlkLCBmcklkLCB0b0lkKTtcclxuICAgICAgICAgICAgICAgIGVkaXRWaWV3LmFkZExpbmsobGspO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgcmV0dXJuIEVkaXRWaWV3X1ZlcjE7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEVkaXRWaWV3X1ZlcjE7XHJcbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWRpdHZpZXdfdmVyMS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbWVudWJhcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21lbnViYXJcIikpO1xyXG52YXIgZWRpdHZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9lZGl0dmlld1wiKSk7XHJcbmNvbnNvbGUubG9nKFwic3RhcnQgbm9kZSBlZGl0b3JcIik7XHJcbnZhciBfbWVudUJhciA9IG51bGw7XHJcbnZhciBfZWRpdFZpZXcgPSBudWxsO1xyXG52YXIgX2N0eCA9IG51bGw7XHJcbi8vIGluaXRpYWxpemUgY2FudmFzICYgbWVudWJhclxyXG52YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuaWYgKGJvZHkpIHtcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBpZiAobWVudSkge1xyXG4gICAgICAgIG1lbnUuaWQgPSAnbWVudWJhcic7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgIH1cclxuICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICBjYW52YXMuaWQgPSAnY2FudmFzJztcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDQ7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDQ7XHJcbiAgICAgICAgX2N0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgX2VkaXRWaWV3ID0gbmV3IGVkaXR2aWV3XzEuZGVmYXVsdChjYW52YXMsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgX21lbnVCYXIgPSBuZXcgbWVudWJhcl8xLmRlZmF1bHQoX2VkaXRWaWV3KTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XHJcbn1cclxuLy8gcmVuZGVyIGNhbnZhc1xyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBpZiAoX2VkaXRWaWV3KVxyXG4gICAgICAgIF9lZGl0Vmlldy5yZW5kZXIoX2N0eCk7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5MaW5rU3RhdGUgPSB2b2lkIDA7XHJcbi8vXHJcbi8vIDIwMjAtMDYtMjYsIGpqdWlkZG9uZ1xyXG4vLyBsaW5rIGNsYXNzXHJcbi8vICAtIGxpbmsgc2xvdCB0byBzbG90XHJcbi8vXHJcbi8vIDIwMjAtMDctMTRcclxuLy8gIC0gVHlwZVNjcmlwdCBSZWZhY3RvcmluZ1xyXG4vL1xyXG52YXIgdmVjMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hdGgvdmVjMlwiKSk7XHJcbnZhciB1dGlsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbnZhciBMaW5rU3RhdGU7XHJcbihmdW5jdGlvbiAoTGlua1N0YXRlKSB7XHJcbiAgICBMaW5rU3RhdGVbTGlua1N0YXRlW1wiTm9ybWFsXCJdID0gMF0gPSBcIk5vcm1hbFwiO1xyXG4gICAgTGlua1N0YXRlW0xpbmtTdGF0ZVtcIkFuaW1hdGlvblwiXSA9IDFdID0gXCJBbmltYXRpb25cIjtcclxufSkoTGlua1N0YXRlID0gZXhwb3J0cy5MaW5rU3RhdGUgfHwgKGV4cG9ydHMuTGlua1N0YXRlID0ge30pKTtcclxudmFyIExpbmsgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaW5rKGlkLCBmcm9tLCB0bywgcDAsIHAxKSB7XHJcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAtMTsgfVxyXG4gICAgICAgIGlmIChmcm9tID09PSB2b2lkIDApIHsgZnJvbSA9IC0xOyB9XHJcbiAgICAgICAgaWYgKHRvID09PSB2b2lkIDApIHsgdG8gPSAtMTsgfVxyXG4gICAgICAgIGlmIChwMCA9PT0gdm9pZCAwKSB7IHAwID0gbmV3IHZlYzJfMS5kZWZhdWx0KDAsIDApOyB9XHJcbiAgICAgICAgaWYgKHAxID09PSB2b2lkIDApIHsgcDEgPSBuZXcgdmVjMl8xLmRlZmF1bHQoMCwgMCk7IH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gTGlua1N0YXRlLk5vcm1hbDtcclxuICAgICAgICB0aGlzLmxpbmVPZmZzZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuaWQgPSAoaWQgPCAwKSA/IHV0aWxfMS5kZWZhdWx0LmdlbklkKCkgOiBpZDtcclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tOyAvLyBmcm9tIHNsb3QgaWRcclxuICAgICAgICB0aGlzLnRvID0gdG87IC8vIHRvIHNsb3QgaWRcclxuICAgICAgICB0aGlzLnAwID0gcDA7IC8vIGZyb20gc2xvdCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMucDEgPSBwMTsgLy8gZnJvbSBzbG90IHBvc2l0aW9uXHJcbiAgICB9XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyByZW5kZXIgbGluaywgYmV6aWVyIGxpbmVcclxuICAgIExpbmsucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgY3ggPSAodGhpcy5wMC54ICsgdGhpcy5wMS54KSAvIDI7XHJcbiAgICAgICAgdmFyIGN5ID0gKHRoaXMucDAueSArIHRoaXMucDEueSkgLyAyO1xyXG4gICAgICAgIHZhciBjcDF4ID0gdXRpbF8xLmRlZmF1bHQubGVycCh0aGlzLnAwLngsIGN4LCAwLjUpO1xyXG4gICAgICAgIHZhciBjcDF5ID0gdXRpbF8xLmRlZmF1bHQubGVycCh0aGlzLnAwLnksIGN5LCAwLjEpO1xyXG4gICAgICAgIHZhciBjcDJ4ID0gdXRpbF8xLmRlZmF1bHQubGVycChjeCwgdGhpcy5wMS54LCAwLjUpO1xyXG4gICAgICAgIHZhciBjcDJ5ID0gdXRpbF8xLmRlZmF1bHQubGVycChjeSwgdGhpcy5wMS55LCAwLjkpO1xyXG4gICAgICAgIHZhciBsaW5lT2Zmc2V0ID0gMDtcclxuICAgICAgICB2YXIgb3V0TGluZVdpZHRoID0gNztcclxuICAgICAgICB2YXIgaW5uZXJMaW5lV2lkdGggPSA1O1xyXG4gICAgICAgIC8vIGFuaW1hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBMaW5rU3RhdGUuQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZU9mZnNldCArPSAxLjU7XHJcbiAgICAgICAgICAgIGxpbmVPZmZzZXQgPSB0aGlzLmxpbmVPZmZzZXQ7XHJcbiAgICAgICAgICAgIG91dExpbmVXaWR0aCA9IDEyO1xyXG4gICAgICAgICAgICBpbm5lckxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIC8vIG91dGxpbmVcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gb3V0TGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gTGlua1N0YXRlLkFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICBjdHguc2V0TGluZURhc2goWzEwLCAxMF0pO1xyXG4gICAgICAgICAgICBjdHgubGluZURhc2hPZmZzZXQgPSB0aGlzLmxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wMC54LCB0aGlzLnAwLnkpO1xyXG4gICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKGNwMXgsIGNwMXksIGN4LCBjeSk7XHJcbiAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oY3AyeCwgY3AyeSwgdGhpcy5wMS54LCB0aGlzLnAxLnkpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAvLyBpbm5lciBsaW5lXHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGlubmVyTGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNldCBmcm9tIHNsb3QgaWRcclxuICAgIExpbmsucHJvdG90eXBlLnNldEZyb20gPSBmdW5jdGlvbiAoc2xvdElkKSB7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gc2xvdElkO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNldCB0byBzbG90IGlkXHJcbiAgICBMaW5rLnByb3RvdHlwZS5zZXRUbyA9IGZ1bmN0aW9uIChzbG90SWQpIHtcclxuICAgICAgICB0aGlzLnRvID0gc2xvdElkO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNldCBwMCBwb3NpdGlvblxyXG4gICAgLy8gcG9zOiBWZWMyXHJcbiAgICBMaW5rLnByb3RvdHlwZS5zZXRQMCA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB0aGlzLnAwLnNldChwb3MpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNldCBwMSBwb3NpdGlvblxyXG4gICAgLy8gcG9zOiBWZWMyXHJcbiAgICBMaW5rLnByb3RvdHlwZS5zZXRQMSA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB0aGlzLnAxLnNldChwb3MpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNldCBhbmltYXRpb25cclxuICAgIC8vIGVuYWJsZTogdHJ1ZS9mYWxzZVxyXG4gICAgTGluay5wcm90b3R5cGUuc2V0QW5pbWF0aW9uID0gZnVuY3Rpb24gKGVuYWJsZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAoZW5hYmxlKSA/IExpbmtTdGF0ZS5Ob3JtYWwgOiBMaW5rU3RhdGUuQW5pbWF0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMaW5rO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rO1xyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy9cclxuLy8gMjAyMC0wNi0yNSwgamp1aWRkb25nXHJcbi8vIFJlY3QgY2xhc3NcclxuLy8gIC0geCwgeSwgd2lkdGgsIGhlaWdodFxyXG4vL1xyXG4vLyAyMDIwLTA3LTEzXHJcbi8vICAtIFR5cGVTY3JpcHQgUmVmYWN0b3JpbmdcclxuLy9cclxudmFyIFJlY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAwOyB9XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gMDsgfVxyXG4gICAgICAgIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7IHdpZHRoID0gMDsgfVxyXG4gICAgICAgIGlmIChoZWlnaHQgPT09IHZvaWQgMCkgeyBoZWlnaHQgPSAwOyB9XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMudyA9IDA7XHJcbiAgICAgICAgdGhpcy5oID0gMDtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53ID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oID0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcyA9IHJlY3RcclxuICAgIFJlY3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgdGhpcy54ID0gcmVjdC54O1xyXG4gICAgICAgIHRoaXMueSA9IHJlY3QueTtcclxuICAgICAgICB0aGlzLncgPSByZWN0Lnc7XHJcbiAgICAgICAgdGhpcy5oID0gcmVjdC5oO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vIHRoaXMgPSB4LHksdyxoXHJcbiAgICBSZWN0LnByb3RvdHlwZS5zZXQyID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53ID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oID0gaGVpZ2h0O1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIFJlY3QucHJvdG90eXBlLmlzUG9pbnRJblJlY3QgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54IDwgeCAmJlxyXG4gICAgICAgICAgICB0aGlzLnggKyB0aGlzLncgPiB4ICYmXHJcbiAgICAgICAgICAgIHRoaXMueSA8IHkgJiZcclxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oID4geSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8gb3V0ID0gcmVjdFxyXG4gICAgUmVjdC5zZXQgPSBmdW5jdGlvbiAob3V0LCByZWN0KSB7XHJcbiAgICAgICAgb3V0LnggPSByZWN0Lng7XHJcbiAgICAgICAgb3V0LnkgPSByZWN0Lnk7XHJcbiAgICAgICAgb3V0LncgPSByZWN0Lnc7XHJcbiAgICAgICAgb3V0LmggPSByZWN0Lmg7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8gdGhpcyA9IHgseSx3LGhcclxuICAgIFJlY3Quc2V0MiA9IGZ1bmN0aW9uIChvdXQsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBvdXQueCA9IHg7XHJcbiAgICAgICAgb3V0LnkgPSB5O1xyXG4gICAgICAgIG91dC53ID0gd2lkdGg7XHJcbiAgICAgICAgb3V0LmggPSBoZWlnaHQ7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgcmV0dXJuIFJlY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlY3Q7XHJcbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuLy9cclxuLy8gMjAyMC0wNi0yNSwgamp1aWRkb25nXHJcbi8vIDJEIHZlY3RvclxyXG4vL1xyXG4vLyAyMDIwLTA3LTEzXHJcbi8vICAtIFR5cGVTY3JpcHQgUmVmYWN0b3JpbmdcclxuLy9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlYzIoeCwgeSkge1xyXG4gICAgICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IDA7IH1cclxuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAwOyB9XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICB9XHJcbiAgICBWZWMyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdGhpcy54ID0gcG9zLng7XHJcbiAgICAgICAgdGhpcy55ID0gcG9zLnk7XHJcbiAgICB9O1xyXG4gICAgVmVjMi5wcm90b3R5cGUuc2V0MiA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfTtcclxuICAgIFZlYzIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdGhpcy54ID0gcG9zLng7XHJcbiAgICAgICAgdGhpcy55ID0gcG9zLnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLy8gb3V0ID0gYVxyXG4gICAgVmVjMi5zZXQgPSBmdW5jdGlvbiAob3V0LCBhKSB7XHJcbiAgICAgICAgb3V0LnggPSBhLng7XHJcbiAgICAgICAgb3V0LnkgPSBhLnk7XHJcbiAgICB9O1xyXG4gICAgLy8gb3V0ID0geCx5XHJcbiAgICBWZWMyLnNldDIgPSBmdW5jdGlvbiAob3V0LCB4LCB5KSB7XHJcbiAgICAgICAgb3V0LnggPSB4O1xyXG4gICAgICAgIG91dC55ID0geTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLyBvdXQgPSBhICsgYlxyXG4gICAgVmVjMi5hZGQgPSBmdW5jdGlvbiAob3V0LCBhLCBiKSB7XHJcbiAgICAgICAgb3V0LnggPSBhLnggKyBiLng7XHJcbiAgICAgICAgb3V0LnkgPSBhLnkgKyBiLnk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8gb3V0ID0gYSAtIGJcclxuICAgIFZlYzIuc3ViID0gZnVuY3Rpb24gKG91dCwgYSwgYikge1xyXG4gICAgICAgIG91dC54ID0gYS54IC0gYi54O1xyXG4gICAgICAgIG91dC55ID0gYS55IC0gYi55O1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vIG91dCA9IGEgKiBiXHJcbiAgICBWZWMyLnNjYWxlID0gZnVuY3Rpb24gKG91dCwgYSwgYikge1xyXG4gICAgICAgIG91dC54ID0gYS54ICogYjtcclxuICAgICAgICBvdXQueSA9IGEueSAqIGI7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgcmV0dXJuIFZlYzI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlYzI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlYzIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1lbnVCYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNZW51QmFyKGVkaXRWaWV3KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmVkaXRWaWV3ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVsZW0gPSBudWxsO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBNZW51QmFyLm9uU2F2ZURCXHJcbiAgICAgICAgLy8gc2F2ZSBidXR0b24gY2xpY2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgIHRoaXMub25TYXZlREIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gX3RoaXMuZWRpdFZpZXcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zYXZlREIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBNZW51QmFyLm9uTG9hZERCXHJcbiAgICAgICAgLy8gbG9hZCBidXR0b24gY2xpY2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgIHRoaXMub25Mb2FkREIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gX3RoaXMuZWRpdFZpZXcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sb2FkREIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBNZW51QmFyLm9uU2F2ZUxvY2FsXHJcbiAgICAgICAgLy8gc2F2ZSBidXR0b24gY2xpY2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgIHRoaXMub25TYXZlTG9jYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gX3RoaXMuZWRpdFZpZXcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zYXZlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gTWVudUJhci5vbkxvYWRMb2NhbFxyXG4gICAgICAgIC8vIGxvYWQgYnV0dG9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICB0aGlzLm9uTG9hZExvY2FsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIChfYSA9IF90aGlzLmVkaXRWaWV3KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubG9hZExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5lZGl0VmlldyA9IGVkaXRWaWV3OyAvLyBFZGl0VmlldyBpbnN0YW5jZVxyXG4gICAgICAgIHZhciBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51YmFyXCIpO1xyXG4gICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAocGFyZW50RWxlbSAmJiBlbGVtKSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gXCJtZW51YmFyXCI7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgIFwiPGJ1dHRvbiBpZD0nc2F2ZWRiJz5TYXZlIERCPC9idXR0b24+XCJcclxuICAgICAgICAgICAgICAgICAgICArIFwiPGJ1dHRvbiBpZD0nbG9hZGRiJz5Mb2FkIERCPC9idXR0b24+XCJcclxuICAgICAgICAgICAgICAgICAgICArIFwiPHNwYW4gc3R5bGU9J21hcmdpbjoycmVtJz48L3NwYW4+XCJcclxuICAgICAgICAgICAgICAgICAgICArIFwiPGJ1dHRvbiBpZD0nc2F2ZWxvY2FsJz5TYXZlIExvY2FsPC9idXR0b24+XCJcclxuICAgICAgICAgICAgICAgICAgICArIFwiPGJ1dHRvbiBpZD0nbG9hZGxvY2FsJz5Mb2FkIExvY2FsPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgICAgICAgIHZhciBzYXZlQnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiI3NhdmVkYlwiKTtcclxuICAgICAgICAgICAgaWYgKHNhdmVCdG4pIHtcclxuICAgICAgICAgICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25TYXZlREIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBsb2FkQnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiI2xvYWRkYlwiKTtcclxuICAgICAgICAgICAgaWYgKGxvYWRCdG4pIHtcclxuICAgICAgICAgICAgICAgIGxvYWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Mb2FkREIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzYXZlTG9jYWxCdG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZWxvY2FsXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2F2ZUxvY2FsQnRuKSB7XHJcbiAgICAgICAgICAgICAgICBzYXZlTG9jYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25TYXZlTG9jYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBsb2FkTG9jYWxCdG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGxvY2FsXCIpO1xyXG4gICAgICAgICAgICBpZiAobG9hZExvY2FsQnRuKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkTG9jYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Mb2FkTG9jYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IGVsZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1lbnVCYXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1lbnVCYXI7XHJcbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVudWJhci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk5vZGVTdGF0ZSA9IHZvaWQgMDtcclxuLy9cclxuLy8gMjAyMC0wNi0yNCwgamp1aWRkb25nXHJcbi8vIG5vZGUgY2xhc3NcclxuLy9cclxuLy8gMjAyMC0wNy0xM1xyXG4vLyAgLSBUeXBlU2NyaXB0IFJlZmFjdG9yaW5nXHJcbi8vXHJcbnZhciBzbG90XzEgPSByZXF1aXJlKFwiLi9zbG90XCIpO1xyXG52YXIgcmVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hdGgvcmVjdFwiKSk7XHJcbnZhciB2ZWMyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWF0aC92ZWMyXCIpKTtcclxudmFyIHV0aWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxudmFyIGNvbmZpZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbmZpZ1wiKSk7XHJcbnZhciB3aWRnZXRzXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzXCIpO1xyXG52YXIgTm9kZVN0YXRlO1xyXG4oZnVuY3Rpb24gKE5vZGVTdGF0ZSkge1xyXG4gICAgTm9kZVN0YXRlW05vZGVTdGF0ZVtcIk5vcm1hbFwiXSA9IDBdID0gXCJOb3JtYWxcIjtcclxuICAgIE5vZGVTdGF0ZVtOb2RlU3RhdGVbXCJIb3ZlclwiXSA9IDFdID0gXCJIb3ZlclwiO1xyXG4gICAgTm9kZVN0YXRlW05vZGVTdGF0ZVtcIlNlbGVjdFwiXSA9IDJdID0gXCJTZWxlY3RcIjtcclxuICAgIE5vZGVTdGF0ZVtOb2RlU3RhdGVbXCJFZGl0U2xvdFwiXSA9IDNdID0gXCJFZGl0U2xvdFwiO1xyXG4gICAgTm9kZVN0YXRlW05vZGVTdGF0ZVtcIkVkaXRXaWRnZXRcIl0gPSA0XSA9IFwiRWRpdFdpZGdldFwiO1xyXG59KShOb2RlU3RhdGUgPSBleHBvcnRzLk5vZGVTdGF0ZSB8fCAoZXhwb3J0cy5Ob2RlU3RhdGUgPSB7fSkpO1xyXG52YXIgTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5vZGUoaWQsIG5hbWUsIHJlY3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gLTE7IH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk5vZGVcIjsgfVxyXG4gICAgICAgIGlmIChyZWN0ID09PSB2b2lkIDApIHsgcmVjdCA9IG5ldyByZWN0XzEuZGVmYXVsdCgwLCAwLCAyMDAsIDIwMCk7IH1cclxuICAgICAgICB0aGlzLmlkID0gMDtcclxuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgwLCAwKTsgLy8gbW91c2Ugc2VsZWN0IG9mZnNldFxyXG4gICAgICAgIHRoaXMuaW5wdXRzID0gW107IC8vIGlucHV0IHNsb3RzXHJcbiAgICAgICAgdGhpcy5vdXRwdXRzID0gW107IC8vIG91dHB1dCBzbG90c1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IFtdOyAvLyB3aWRnZXRzIChudW1iZXIsIHRleHQsIGJvb2xlYW4sIGNvbWJvYm94KVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBOb2RlU3RhdGUuTm9ybWFsO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSBtb3ZlIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgLy8gZTogZXZlbnRcclxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzbG90KSB7IHJldHVybiBzbG90Lm9uTW91c2VNb3ZlKG1vdXNlUG9zLCBlKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAoc2xvdCkgeyByZXR1cm4gc2xvdC5vbk1vdXNlTW92ZShtb3VzZVBvcywgZSk7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy53aWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkgeyByZXR1cm4gd2lkZ2V0Lm9uTW91c2VNb3ZlKG1vdXNlUG9zLCBlKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gbW91c2UgZG93biBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKHNsb3QpIHsgcmV0dXJuIHNsb3Qub25Nb3VzZURvd24obW91c2VQb3MsIGUpOyB9KTtcclxuICAgICAgICAgICAgX3RoaXMub3V0cHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzbG90KSB7IHJldHVybiBzbG90Lm9uTW91c2VEb3duKG1vdXNlUG9zLCBlKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0KSB7IHJldHVybiB3aWRnZXQub25Nb3VzZURvd24obW91c2VQb3MsIGUpOyB9KTtcclxuICAgICAgICAgICAgdmFyIHNsb3RzID0gX3RoaXMuZ2V0U2VsZWN0U2xvdHMoKTtcclxuICAgICAgICAgICAgdmFyIHdpZGdldHMgPSBfdGhpcy5nZXRTZWxlY3RXaWRnZXRzKCk7XHJcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IE5vZGVTdGF0ZS5FZGl0U2xvdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh3aWRnZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0gTm9kZVN0YXRlLkVkaXRXaWRnZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBtb3VzZSB1cCBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzbG90KSB7IHJldHVybiBzbG90Lm9uTW91c2VVcChtb3VzZVBvcywgZSk7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5vdXRwdXRzLmZvckVhY2goZnVuY3Rpb24gKHNsb3QpIHsgcmV0dXJuIHNsb3Qub25Nb3VzZVVwKG1vdXNlUG9zLCBlKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0KSB7IHJldHVybiB3aWRnZXQub25Nb3VzZVVwKG1vdXNlUG9zLCBlKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXRlID0gTm9kZVN0YXRlLk5vcm1hbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBkb3VibGUgY2xpY2sgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICB0aGlzLm9uTW91c2VEQkNsaWNrID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzbG90KSB7IHJldHVybiBzbG90Lm9uTW91c2VEQkNsaWNrKG1vdXNlUG9zLCBlKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAoc2xvdCkgeyByZXR1cm4gc2xvdC5vbk1vdXNlREJDbGljayhtb3VzZVBvcywgZSk7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy53aWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkgeyByZXR1cm4gd2lkZ2V0Lm9uTW91c2VEQkNsaWNrKG1vdXNlUG9zLCBlKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXRlID0gTm9kZVN0YXRlLk5vcm1hbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaWQgPSAoaWQgPCAwKSA/IHV0aWxfMS5kZWZhdWx0LmdlbklkKCkgOiBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucmVjdCA9IHJlY3Q7XHJcbiAgICAgICAgdGhpcy5ib2R5WSA9IHJlY3QueTtcclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGFkZCBzbG90XHJcbiAgICBOb2RlLnByb3RvdHlwZS5hZGRTbG90ID0gZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgICAgICBzbG90Lm5vZGUgPSB0aGlzO1xyXG4gICAgICAgIGlmIChzbG90LnR5cGUgPT09IHNsb3RfMS5TbG90VHlwZS5JbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0cy5wdXNoKHNsb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzbG90LnR5cGUgPT09IHNsb3RfMS5TbG90VHlwZS5PdXRwdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXRzLnB1c2goc2xvdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yISEgYWRkU2xvdCgpLCBzbG90IHR5cGUgaW52YWxpZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGFjU2xvdExheW91dCgpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHJlbW92ZSBzbG90XHJcbiAgICAvLyBzbG90SWQ6IHNsb3QgaWRcclxuICAgIE5vZGUucHJvdG90eXBlLnJlbW92ZVNsb3QgPSBmdW5jdGlvbiAoc2xvdElkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRzLmZpbmQoZnVuY3Rpb24gKHNsb3QpIHsgcmV0dXJuIHNsb3RJZCA9PT0gc2xvdC5pZDsgfSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dHMgPSB0aGlzLmlucHV0cy5maWx0ZXIoZnVuY3Rpb24gKHNsb3QpIHsgcmV0dXJuIHNsb3RJZCAhPT0gc2xvdC5pZDsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3V0cHV0cy5maW5kKGZ1bmN0aW9uIChzbG90KSB7IHJldHVybiBzbG90SWQgPT09IHNsb3QuaWQ7IH0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0cyA9IHRoaXMub3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24gKHNsb3QpIHsgcmV0dXJuIHNsb3RJZCAhPT0gc2xvdC5pZDsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGFkZCB3aWRnZXRzXHJcbiAgICBOb2RlLnByb3RvdHlwZS5hZGRXaWRnZXQgPSBmdW5jdGlvbiAod2lkZ2V0KSB7XHJcbiAgICAgICAgd2lkZ2V0Lm5vZGUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHdpZGdldCk7XHJcbiAgICAgICAgdGhpcy5jbGFjU2xvdExheW91dCgpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHJlbmRlciBub2RlXHJcbiAgICAvLyBjdHg6IHJlbmRlcmluZyBjb250ZXh0IDJkXHJcbiAgICBOb2RlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnJlY3QueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucmVjdC55O1xyXG4gICAgICAgIHZhciB3ID0gdGhpcy5yZWN0Lnc7XHJcbiAgICAgICAgdmFyIGggPSB0aGlzLnJlY3QuaDtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBoaCA9IGNvbmZpZ18xLmRlZmF1bHQuVElUTEVCQVJfSEVJR0hUO1xyXG4gICAgICAgICAgICB2YXIgYnkgPSB5ICsgY29uZmlnXzEuZGVmYXVsdC5USVRMRUJBUl9IRUlHSFQ7XHJcbiAgICAgICAgICAgIHZhciBiaCA9IGggLSBjb25maWdfMS5kZWZhdWx0LlRJVExFQkFSX0hFSUdIVDtcclxuICAgICAgICAgICAgdXRpbF8xLmRlZmF1bHQucm91bmRlZFJlY3RIZWFkZXIoY3R4LCB4LCB5LCB3LCBoaCwgY29uZmlnXzEuZGVmYXVsdC5OT0RFX0FSQ19SQURJVVMsIHRoaXMuaXNGb2N1cyA/IGNvbmZpZ18xLmRlZmF1bHQuTk9ERV9IRUFERVJfQ09MT1IyIDogY29uZmlnXzEuZGVmYXVsdC5OT0RFX0hFQURFUl9DT0xPUiwgY29uZmlnXzEuZGVmYXVsdC5OT0RFX0JPUkRFUl9DT0xPUik7XHJcbiAgICAgICAgICAgIHV0aWxfMS5kZWZhdWx0LnJvdW5kZWRSZWN0Qm9keShjdHgsIHgsIGJ5LCB3LCBiaCwgY29uZmlnXzEuZGVmYXVsdC5OT0RFX0FSQ19SQURJVVMsIHRoaXMuaXNGb2N1cyA/IGNvbmZpZ18xLmRlZmF1bHQuTk9ERV9CT0RZX0NPTE9SMiA6IGNvbmZpZ18xLmRlZmF1bHQuTk9ERV9CT0RZX0NPTE9SLCBjb25maWdfMS5kZWZhdWx0Lk5PREVfQk9SREVSX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5WSA9IGhoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJlbmRlciB0aXRsZSB0ZXh0XHJcbiAgICAgICAgICAgIHZhciB0eCA9IHggKyBjb25maWdfMS5kZWZhdWx0Lk5PREVfTUFSR0lOX0xFRlQ7XHJcbiAgICAgICAgICAgIHZhciB0eSA9IHkgKyBjb25maWdfMS5kZWZhdWx0LlRJVExFQkFSX0hFSUdIVCAtIDU7XHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIyNHB4IHNlcmlmXCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMubmFtZSwgdHgsIHR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVuZGVyIGlucHV0L291dHB1dCBzbG90XHJcbiAgICAgICAgdGhpcy5pbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoc2xvdCkge1xyXG4gICAgICAgICAgICBzbG90LnJlbmRlcihjdHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3V0cHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzbG90KSB7XHJcbiAgICAgICAgICAgIHNsb3QucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gcmVuZGVyIHdpZGdldHNcclxuICAgICAgICB0aGlzLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0KSB7XHJcbiAgICAgICAgICAgIHdpZGdldC5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBtb3ZlIG5vZGUgeCx5IHBvc2l0aW9uXHJcbiAgICBOb2RlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnJlY3QueCA9IHg7XHJcbiAgICAgICAgdGhpcy5yZWN0LnkgPSB5O1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGZvY3VzIG5vZGVcclxuICAgIC8vIGZvY3VzOiB0cnVlL2ZhbHNlXHJcbiAgICBOb2RlLnByb3RvdHlwZS5zZXRGb2N1cyA9IGZ1bmN0aW9uIChmb2N1cykge1xyXG4gICAgICAgIHRoaXMuaXNGb2N1cyA9IGZvY3VzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBmb2N1cyA/IE5vZGVTdGF0ZS5TZWxlY3QgOiBOb2RlU3RhdGUuTm9ybWFsO1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGNoZWNrIHgseSBwb2ludCBpbiByZWN0P1xyXG4gICAgTm9kZS5wcm90b3R5cGUuaXNQb2ludEluUmVjdCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjdC5pc1BvaW50SW5SZWN0KHgsIHkpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGNhbGMgc2xvdCBsYXlvdXRcclxuICAgIE5vZGUucHJvdG90eXBlLmNsYWNTbG90TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5pbnB1dHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dHNbaV0ucmVjdC54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dHNbaV0ucmVjdC55ID0gaSAqIGNvbmZpZ18xLmRlZmF1bHQuU0xPVF9IRUlHSFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLm91dHB1dHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXRzW2ldLnJlY3QueCA9IHRoaXMucmVjdC53O1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dHNbaV0ucmVjdC55ID0gaSAqIGNvbmZpZ18xLmRlZmF1bHQuU0xPVF9IRUlHSFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3aWRnZXRzWSA9IE1hdGgubWF4KHRoaXMuaW5wdXRzLmxlbmd0aCwgdGhpcy5vdXRwdXRzLmxlbmd0aCkgKiBjb25maWdfMS5kZWZhdWx0LlNMT1RfSEVJR0hUO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLndpZGdldHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy53aWRnZXRzW2ldLm1vdmUoMCwgd2lkZ2V0c1kgKyBpICogY29uZmlnXzEuZGVmYXVsdC5TTE9UX0hFSUdIVCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGdldCBzZWxlY3Qgc2xvdFxyXG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0U2VsZWN0U2xvdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLmlucHV0cy5maWx0ZXIoZnVuY3Rpb24gKHNsb3QpIHsgcmV0dXJuIHNsb3Quc3RhdGUgPT09IHNsb3RfMS5TbG90U3RhdGUuU2VsZWN0OyB9KTtcclxuICAgICAgICB2YXIgbyA9IHRoaXMub3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24gKHNsb3QpIHsgcmV0dXJuIHNsb3Quc3RhdGUgPT0gc2xvdF8xLlNsb3RTdGF0ZS5TZWxlY3Q7IH0pO1xyXG4gICAgICAgIHJldHVybiBpLmNvbmNhdChvKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBnZXQgaG92ZXIgc2xvdFxyXG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0SG92ZXJTbG90cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaSA9IHRoaXMuaW5wdXRzLmZpbHRlcihmdW5jdGlvbiAoc2xvdCkgeyByZXR1cm4gc2xvdC5zdGF0ZSA9PT0gc2xvdF8xLlNsb3RTdGF0ZS5Ib3ZlcjsgfSk7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzLm91dHB1dHMuZmlsdGVyKGZ1bmN0aW9uIChzbG90KSB7IHJldHVybiBzbG90LnN0YXRlID09PSBzbG90XzEuU2xvdFN0YXRlLkhvdmVyOyB9KTtcclxuICAgICAgICByZXR1cm4gaS5jb25jYXQobyk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gZ2V0IHNlbGVjdCB3aWRnZXRzXHJcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRTZWxlY3RXaWRnZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxzID0gdGhpcy53aWRnZXRzLmZpbHRlcihmdW5jdGlvbiAod2lkZ2V0KSB7IHJldHVybiB3aWRnZXQuZ2V0U3RhdGUoKSA9PSB3aWRnZXRzXzEuV2lkZ2V0U3RhdGUuU2VsZWN0OyB9KTtcclxuICAgICAgICByZXR1cm4gc2VscztcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICByZXR1cm4gTm9kZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTm9kZTtcclxuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWF0aC9yZWN0XCIpKTtcclxudmFyIG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcclxudmFyIHNsb3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9zbG90XCIpKTtcclxudmFyIHdpZGdldHNfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHNcIik7XHJcbnZhciBTcGF3bk5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTcGF3bk5vZGUoKSB7XHJcbiAgICB9XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBzcGF3biBCb29sZWFuXHJcbiAgICAvLyBwb3M6IHt4LHl9XHJcbiAgICBTcGF3bk5vZGUuQm9vbGVhbiA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuZGVmYXVsdCgtMSwgJ0Jvb2xlYW4nLCBuZXcgcmVjdF8xLmRlZmF1bHQocG9zLngsIHBvcy55LCAyMDAsIDEwMCkpO1xyXG4gICAgICAgIG5vZGUuYWRkU2xvdChuZXcgc2xvdF8xLmRlZmF1bHQoLTEsIG51bGwsIFwiaW5cIiwgc2xvdF8xLlNsb3RUeXBlLklucHV0KSk7XHJcbiAgICAgICAgbm9kZS5hZGRTbG90KG5ldyBzbG90XzEuZGVmYXVsdCgtMSwgbnVsbCwgXCJvdXRcIiwgc2xvdF8xLlNsb3RUeXBlLk91dHB1dCkpO1xyXG4gICAgICAgIG5vZGUuYWRkV2lkZ2V0KG5ldyB3aWRnZXRzXzEuV2lkZ2V0cy5Cb29sZWFuKCkpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNwYXduIE51bWJlclxyXG4gICAgLy8gcG9zOiB7eCx5fVxyXG4gICAgU3Bhd25Ob2RlLk51bWJlciA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuZGVmYXVsdCgtMSwgJ051bWJlcicsIG5ldyByZWN0XzEuZGVmYXVsdChwb3MueCwgcG9zLnksIDIwMCwgMTAwKSk7XHJcbiAgICAgICAgbm9kZS5hZGRTbG90KG5ldyBzbG90XzEuZGVmYXVsdCgtMSwgbnVsbCwgXCJpblwiLCBzbG90XzEuU2xvdFR5cGUuSW5wdXQpKTtcclxuICAgICAgICBub2RlLmFkZFNsb3QobmV3IHNsb3RfMS5kZWZhdWx0KC0xLCBudWxsLCBcIm91dFwiLCBzbG90XzEuU2xvdFR5cGUuT3V0cHV0KSk7XHJcbiAgICAgICAgbm9kZS5hZGRXaWRnZXQobmV3IHdpZGdldHNfMS5XaWRnZXRzLk51bWJlcigpKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH07XHJcbiAgICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBzcGF3biBTdHJpbmdcclxuICAgIC8vIHBvczoge3gseX1cclxuICAgIFNwYXduTm9kZS5TdHJpbmcgPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLmRlZmF1bHQoLTEsICdTdHJpbmcnLCBuZXcgcmVjdF8xLmRlZmF1bHQocG9zLngsIHBvcy55LCAyMDAsIDEwMCkpO1xyXG4gICAgICAgIG5vZGUuYWRkU2xvdChuZXcgc2xvdF8xLmRlZmF1bHQoLTEsIG51bGwsIFwiaW5cIiwgc2xvdF8xLlNsb3RUeXBlLklucHV0KSk7XHJcbiAgICAgICAgbm9kZS5hZGRTbG90KG5ldyBzbG90XzEuZGVmYXVsdCgtMSwgbnVsbCwgXCJvdXRcIiwgc2xvdF8xLlNsb3RUeXBlLk91dHB1dCkpO1xyXG4gICAgICAgIG5vZGUuYWRkV2lkZ2V0KG5ldyB3aWRnZXRzXzEuV2lkZ2V0cy5TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc3Bhd24gbm9kZTFcclxuICAgIC8vIHBvczoge3gseX1cclxuICAgIFNwYXduTm9kZS5Ob2RlMSA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuZGVmYXVsdCgtMSwgJ05vZGUxJywgbmV3IHJlY3RfMS5kZWZhdWx0KHBvcy54LCBwb3MueSwgMjAwLCAyMDApKTtcclxuICAgICAgICBub2RlLmFkZFNsb3QobmV3IHNsb3RfMS5kZWZhdWx0KC0xLCBudWxsLCBcImluLTFcIiwgc2xvdF8xLlNsb3RUeXBlLklucHV0KSk7XHJcbiAgICAgICAgbm9kZS5hZGRTbG90KG5ldyBzbG90XzEuZGVmYXVsdCgtMSwgbnVsbCwgXCJpbi0yXCIsIHNsb3RfMS5TbG90VHlwZS5JbnB1dCkpO1xyXG4gICAgICAgIG5vZGUuYWRkU2xvdChuZXcgc2xvdF8xLmRlZmF1bHQoLTEsIG51bGwsIFwiaW4tM1wiLCBzbG90XzEuU2xvdFR5cGUuSW5wdXQpKTtcclxuICAgICAgICBub2RlLmFkZFNsb3QobmV3IHNsb3RfMS5kZWZhdWx0KC0xLCBudWxsLCBcIm91dC0xXCIsIHNsb3RfMS5TbG90VHlwZS5PdXRwdXQpKTtcclxuICAgICAgICBub2RlLmFkZFNsb3QobmV3IHNsb3RfMS5kZWZhdWx0KC0xLCBudWxsLCBcIm91dC0yXCIsIHNsb3RfMS5TbG90VHlwZS5PdXRwdXQpKTtcclxuICAgICAgICBub2RlLmFkZFNsb3QobmV3IHNsb3RfMS5kZWZhdWx0KC0xLCBudWxsLCBcIm91dC0zXCIsIHNsb3RfMS5TbG90VHlwZS5PdXRwdXQpKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBzcGF3biBub2RlMlxyXG4gICAgLy8gcG9zOiB7eCx5fVxyXG4gICAgU3Bhd25Ob2RlLk5vZGUyID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IG5vZGVfMS5kZWZhdWx0KC0xLCAnTm9kZTInLCBuZXcgcmVjdF8xLmRlZmF1bHQocG9zLngsIHBvcy55LCAyMDAsIDE1MCkpO1xyXG4gICAgICAgIG5vZGUuYWRkU2xvdChuZXcgc2xvdF8xLmRlZmF1bHQoLTEsIG51bGwsIFwiaW4tMVwiLCBzbG90XzEuU2xvdFR5cGUuSW5wdXQpKTtcclxuICAgICAgICBub2RlLmFkZFNsb3QobmV3IHNsb3RfMS5kZWZhdWx0KC0xLCBudWxsLCBcImluLTJcIiwgc2xvdF8xLlNsb3RUeXBlLklucHV0KSk7XHJcbiAgICAgICAgbm9kZS5hZGRTbG90KG5ldyBzbG90XzEuZGVmYXVsdCgtMSwgbnVsbCwgXCJvdXQtMVwiLCBzbG90XzEuU2xvdFR5cGUuT3V0cHV0KSk7XHJcbiAgICAgICAgbm9kZS5hZGRTbG90KG5ldyBzbG90XzEuZGVmYXVsdCgtMSwgbnVsbCwgXCJvdXQtMlwiLCBzbG90XzEuU2xvdFR5cGUuT3V0cHV0KSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc3Bhd24gbm9kZTNcclxuICAgIC8vIHBvczoge3gseX1cclxuICAgIFNwYXduTm9kZS5Ob2RlMyA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuZGVmYXVsdCgtMSwgJ05vZGUzJywgbmV3IHJlY3RfMS5kZWZhdWx0KHBvcy54LCBwb3MueSwgMjAwLCAxODApKTtcclxuICAgICAgICBub2RlLmFkZFNsb3QobmV3IHNsb3RfMS5kZWZhdWx0KC0xLCBudWxsLCBcImluLTFcIiwgc2xvdF8xLlNsb3RUeXBlLklucHV0KSk7XHJcbiAgICAgICAgbm9kZS5hZGRTbG90KG5ldyBzbG90XzEuZGVmYXVsdCgtMSwgbnVsbCwgXCJpbi0yXCIsIHNsb3RfMS5TbG90VHlwZS5JbnB1dCkpO1xyXG4gICAgICAgIG5vZGUuYWRkU2xvdChuZXcgc2xvdF8xLmRlZmF1bHQoLTEsIG51bGwsIFwib3V0LTFcIiwgc2xvdF8xLlNsb3RUeXBlLk91dHB1dCkpO1xyXG4gICAgICAgIG5vZGUuYWRkU2xvdChuZXcgc2xvdF8xLmRlZmF1bHQoLTEsIG51bGwsIFwib3V0LTJcIiwgc2xvdF8xLlNsb3RUeXBlLk91dHB1dCkpO1xyXG4gICAgICAgIG5vZGUuYWRkU2xvdChuZXcgc2xvdF8xLmRlZmF1bHQoLTEsIG51bGwsIFwib3V0LTNcIiwgc2xvdF8xLlNsb3RUeXBlLk91dHB1dCkpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHNwYXduIENvbnNvbGVcclxuICAgIC8vIHBvczoge3gseX1cclxuICAgIFNwYXduTm9kZS5Db25zb2xlID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IG5vZGVfMS5kZWZhdWx0KC0xLCAnQ29uc29sZScsIG5ldyByZWN0XzEuZGVmYXVsdChwb3MueCwgcG9zLnksIDIwMCwgMTAwKSk7XHJcbiAgICAgICAgbm9kZS5hZGRTbG90KG5ldyBzbG90XzEuZGVmYXVsdCgtMSwgbnVsbCwgXCJpblwiLCBzbG90XzEuU2xvdFR5cGUuSW5wdXQpKTtcclxuICAgICAgICBub2RlLmFkZFNsb3QobmV3IHNsb3RfMS5kZWZhdWx0KC0xLCBudWxsLCBcIm91dFwiLCBzbG90XzEuU2xvdFR5cGUuT3V0cHV0KSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNwYXduTm9kZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3Bhd25Ob2RlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlX3NwYXduLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUG9wdXAgPSB2b2lkIDA7XHJcbi8vXHJcbi8vIDIwMjAtMDctMDEsIGpqdWlkZG9uZ1xyXG4vLyBQb3BVcCBXaW5kb3dcclxuLy9cclxuLy8gMjAyMC0wNy0xNFxyXG4vLyAgLSBUeXBlU2NyaXB0IFJlZmFjdG9yaW5nXHJcbi8vXHJcbnZhciB3aWRnZXRzXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzXCIpO1xyXG52YXIgdXRpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG52YXIgUG9wdXA7XHJcbihmdW5jdGlvbiAoUG9wdXApIHtcclxuICAgIHZhciBJbnB1dFR5cGU7XHJcbiAgICAoZnVuY3Rpb24gKElucHV0VHlwZSkge1xyXG4gICAgICAgIElucHV0VHlwZVtJbnB1dFR5cGVbXCJCb29sZWFuXCJdID0gMF0gPSBcIkJvb2xlYW5cIjtcclxuICAgICAgICBJbnB1dFR5cGVbSW5wdXRUeXBlW1wiTnVtYmVyXCJdID0gMV0gPSBcIk51bWJlclwiO1xyXG4gICAgICAgIElucHV0VHlwZVtJbnB1dFR5cGVbXCJTdHJpbmdcIl0gPSAyXSA9IFwiU3RyaW5nXCI7XHJcbiAgICB9KShJbnB1dFR5cGUgPSBQb3B1cC5JbnB1dFR5cGUgfHwgKFBvcHVwLklucHV0VHlwZSA9IHt9KSk7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBQb3B1cC5JbnB1dFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIElucHV0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIElucHV0KCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlOyAvLyBzaG93L2hpZGUgaW5wdXQgcG9wdXBcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtID0gZG9jdW1lbnQuYm9keTsgLy8gcGFyZW50IGVsZW1lbnRcclxuICAgICAgICAgICAgdGhpcy53aWRnZXQgPSBudWxsOyAvLyBpbnB1dCB3aWRnZXRcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBQb3B1cC5JbnB1dC5vbkNvbXBsZXRlXHJcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlIGlucHV0XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IF90aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0KVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFZhbHVlKGlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gUG9wdXAuSW5wdXQub25DYW5jZWxcclxuICAgICAgICAgICAgLy8gY2FuY2VsIGlucHV0XHJcbiAgICAgICAgICAgIHRoaXMub25DYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFBvcHVwLklucHV0Lm9uQnV0dG9uQ2xpY2tcclxuICAgICAgICAgICAgLy8gY29tcGxldGUgaW5wdXRcclxuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0VmFsdWUoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IFwicG9wdXAtaW5wdXRcIjtcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtID0gZWxlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFBvcHVwLklucHV0Lm9wZW5cclxuICAgICAgICAvLyBvcGVuIGlucHV0IHBvcHVwXHJcbiAgICAgICAgSW5wdXQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAod2lkZ2V0LCB4LCB5KSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uc3R5bGUubGVmdCA9IHggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgIFwiVmFsdWUgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT0nJyBzcGVsbGNoZWNrPSdmYWxzZSc+PC9pbnB1dD48YnV0dG9uPk9LPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2lkZ2V0IGluc3RhbmNlb2Ygd2lkZ2V0c18xLldpZGdldHMuQm9vbGVhbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMud2lkZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMud2lkZ2V0IGluc3RhbmNlb2Ygd2lkZ2V0c18xLldpZGdldHMuTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcodGhpcy53aWRnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy53aWRnZXQgaW5zdGFuY2VvZiB3aWRnZXRzXzEuV2lkZ2V0cy5TdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh0aGlzLndpZGdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgUG9wdXAuSW5wdXQub3BlbiwgdHlwZSBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09IDI3KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbS5hcHBlbmRDaGlsZCh0aGlzLmVsZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dClcclxuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFBvcHVwLklucHV0LmNsb3NlXHJcbiAgICAgICAgLy8gY2xvc2UgaW5wdXQgcG9wdXBcclxuICAgICAgICBJbnB1dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Nob3cpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbS5yZW1vdmVDaGlsZCh0aGlzLmVsZW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBQb3B1cC5JbnB1dC5zZXRWYWx1ZVxyXG4gICAgICAgIC8vIGNvbXBsZXRlIGlucHV0XHJcbiAgICAgICAgSW5wdXQucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZGdldCBpbnN0YW5jZW9mIHdpZGdldHNfMS5XaWRnZXRzLkJvb2xlYW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkZ2V0LnZhbHVlID0gdmFsdWUgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMud2lkZ2V0IGluc3RhbmNlb2Ygd2lkZ2V0c18xLldpZGdldHMuTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZGdldC52YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLndpZGdldCBpbnN0YW5jZW9mIHdpZGdldHNfMS5XaWRnZXRzLlN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aWRnZXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBQb3B1cC5JbnB1dC5zZXRWYWx1ZSwgdHlwZSBlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gSW5wdXQ7XHJcbiAgICB9KCkpO1xyXG4gICAgUG9wdXAuSW5wdXQgPSBJbnB1dDtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFBvcHVwLlByb21wdFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIFByb21wdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBQcm9tcHQoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7IC8vIHNob3cvaGlkZSBpbnB1dCBwb3B1cFxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW0gPSBkb2N1bWVudC5ib2R5OyAvLyBwYXJlbnQgZWxlbWVudFxyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBQb3B1cC5Qcm9tcHQub25Db21wbGV0ZVxyXG4gICAgICAgICAgICAvLyBjb21wbGV0ZSBpbnB1dFxyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBfdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dCAmJiBfdGhpcy5jYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxsYmFjayhpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFBvcHVwLlByb21wdC5vbkNhbmNlbFxyXG4gICAgICAgICAgICAvLyBjYW5jZWwgaW5wdXRcclxuICAgICAgICAgICAgdGhpcy5vbkNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gUG9wdXAuUHJvbXB0Lm9uQnV0dG9uQ2xpY2tcclxuICAgICAgICAgICAgLy8gY29tcGxldGUgaW5wdXRcclxuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgX3RoaXMuY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2soaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IFwicG9wdXAtcHJvbXB0XCI7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IGVsZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBQb3B1cC5Qcm9tcHQub3BlblxyXG4gICAgICAgIC8vIG9wZW4gUHJvbXB0IHBvcHVwXHJcbiAgICAgICAgUHJvbXB0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKHRpdGxlLCB2YWx1ZSwgY2FsbGJhY2ssIHgsIHkpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gbnVsbDsgfVxyXG4gICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSBudWxsOyB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSB4IHx8ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gKDQ1MCAvIDIpO1xyXG4gICAgICAgICAgICB2YXIgdG9wID0geSB8fCAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSAodXRpbF8xLmRlZmF1bHQuY29udmVydFJlbVRvUGl4ZWxzKDYpIC8gMik7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuPlwiICsgdGl0bGUgKyBcIjwvc3Bhbj5WYWx1ZSAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPScnIHNwZWxsY2hlY2s9J2ZhbHNlJz48L2lucHV0PjxidXR0b24+T0s8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09IDI3KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbS5hcHBlbmRDaGlsZCh0aGlzLmVsZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dClcclxuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFBvcHVwLlByb21wdC5jbG9zZVxyXG4gICAgICAgIC8vIGNsb3NlIHByb21wdCBwb3B1cFxyXG4gICAgICAgIFByb21wdC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Nob3cpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbS5yZW1vdmVDaGlsZCh0aGlzLmVsZW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiBQcm9tcHQ7XHJcbiAgICB9KCkpO1xyXG4gICAgUG9wdXAuUHJvbXB0ID0gUHJvbXB0O1xyXG59KShQb3B1cCA9IGV4cG9ydHMuUG9wdXAgfHwgKGV4cG9ydHMuUG9wdXAgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3B1cC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNsb3RTdGF0ZSA9IGV4cG9ydHMuU2xvdFR5cGUgPSB2b2lkIDA7XHJcbnZhciByZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWF0aC9yZWN0XCIpKTtcclxudmFyIHV0aWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxudmFyIGNvbmZpZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbmZpZ1wiKSk7XHJcbnZhciB2ZWMyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWF0aC92ZWMyXCIpKTtcclxudmFyIFNsb3RUeXBlO1xyXG4oZnVuY3Rpb24gKFNsb3RUeXBlKSB7XHJcbiAgICBTbG90VHlwZVtTbG90VHlwZVtcIklucHV0XCJdID0gMF0gPSBcIklucHV0XCI7XHJcbiAgICBTbG90VHlwZVtTbG90VHlwZVtcIk91dHB1dFwiXSA9IDFdID0gXCJPdXRwdXRcIjtcclxufSkoU2xvdFR5cGUgPSBleHBvcnRzLlNsb3RUeXBlIHx8IChleHBvcnRzLlNsb3RUeXBlID0ge30pKTtcclxudmFyIFNsb3RTdGF0ZTtcclxuKGZ1bmN0aW9uIChTbG90U3RhdGUpIHtcclxuICAgIFNsb3RTdGF0ZVtTbG90U3RhdGVbXCJOb3JtYWxcIl0gPSAwXSA9IFwiTm9ybWFsXCI7XHJcbiAgICBTbG90U3RhdGVbU2xvdFN0YXRlW1wiSG92ZXJcIl0gPSAxXSA9IFwiSG92ZXJcIjtcclxuICAgIFNsb3RTdGF0ZVtTbG90U3RhdGVbXCJTZWxlY3RcIl0gPSAyXSA9IFwiU2VsZWN0XCI7XHJcbn0pKFNsb3RTdGF0ZSA9IGV4cG9ydHMuU2xvdFN0YXRlIHx8IChleHBvcnRzLlNsb3RTdGF0ZSA9IHt9KSk7XHJcbnZhciBTbG90ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2xvdChpZCwgbm9kZSwgbmFtZSwgdHlwZSwgcmVjdCkge1xyXG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gLTE7IH1cclxuICAgICAgICBpZiAobm9kZSA9PT0gdm9pZCAwKSB7IG5vZGUgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJzbG90XCI7IH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSBTbG90VHlwZS5JbnB1dDsgfVxyXG4gICAgICAgIGlmIChyZWN0ID09PSB2b2lkIDApIHsgcmVjdCA9IG5ldyByZWN0XzEuZGVmYXVsdCgwLCAwLCAwLCAwKTsgfVxyXG4gICAgICAgIHRoaXMuaWQgPSAoaWQgPCAwKSA/IHV0aWxfMS5kZWZhdWx0LmdlbklkKCkgOiBpZDtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlOyAvLyBzbG90IG93bmVyIG5vZGVcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWN0ID0gbmV3IHJlY3RfMS5kZWZhdWx0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuaGFzTGluayA9IGZhbHNlOyAvLyBzbG90IGhhcyBsaW5rP1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTbG90U3RhdGUuTm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gY3R4OiAyZCByZW5kZXJpbmcgY29udGV4dFxyXG4gICAgLy8gbm9kZTogcGFyZW50IG5vZGVcclxuICAgIFNsb3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHZhciB4ID0gbm9kZS5yZWN0LnggKyB0aGlzLnJlY3QueDtcclxuICAgICAgICB2YXIgeSA9IG5vZGUucmVjdC55ICsgbm9kZS5ib2R5WSArIHRoaXMucmVjdC55O1xyXG4gICAgICAgIHZhciBjZW50ZXIgPSB5ICsgY29uZmlnXzEuZGVmYXVsdC5TTE9UX0hFSUdIVCAvIDI7IC8vIHNsb3QgY2VudGVyXHJcbiAgICAgICAgdmFyIGljb25SID0gY29uZmlnXzEuZGVmYXVsdC5TTE9UX0lDT05fUkFESVVTOyAvLyBpY29uIHJhZGl1c1xyXG4gICAgICAgIHZhciBpY29uVyA9IGNvbmZpZ18xLmRlZmF1bHQuU0xPVF9JQ09OX1NQQUNFX1dJRFRIO1xyXG4gICAgICAgIHZhciBjeCA9IHg7IC8vIGN1cnNvciB4XHJcbiAgICAgICAgdmFyIGN5ID0geTsgLy8gY3Vyc29yIHlcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSBTbG90VHlwZS5JbnB1dCkge1xyXG4gICAgICAgICAgICBjeCArPSBjb25maWdfMS5kZWZhdWx0LlNMT1RfTUFSR0lOX0xFRlQ7XHJcbiAgICAgICAgICAgIGN4ICs9IGljb25SO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09IFNsb3RUeXBlLk91dHB1dCkge1xyXG4gICAgICAgICAgICBjeCAtPSBjb25maWdfMS5kZWZhdWx0LlNMT1RfTUFSR0lOX0xFRlQ7XHJcbiAgICAgICAgICAgIGN4IC09IGljb25SO1xyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJlbmRlciBzbG90IGljb25cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNsb3RTdGF0ZS5Ob3JtYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuaGFzTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ18xLmRlZmF1bHQuU0xPVF9JQ09OX0NPTE9SX0xJTktcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb25maWdfMS5kZWZhdWx0LlNMT1RfSUNPTl9DT0xPUl9OT1JNQUw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNsb3RTdGF0ZS5Ib3ZlcjpcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29uZmlnXzEuZGVmYXVsdC5TTE9UX0lDT05fQ09MT1JfSE9WRVI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNsb3RTdGF0ZS5TZWxlY3Q6XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbmZpZ18xLmRlZmF1bHQuU0xPVF9JQ09OX0NPTE9SX1NFTEVDVDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2N0eC5maWxsU3R5bGUgPSAgQ29uZmlnLlNMT1RfSUNPTl9DT0xPUjtcclxuICAgICAgICAgICAgdmFyIHN5ID0gY2VudGVyO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5hcmMoY3gsIHN5LCBpY29uUiwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFNsb3RUeXBlLklucHV0KSB7XHJcbiAgICAgICAgICAgIGN4ICs9IGljb25SICsgNTtcclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09IFNsb3RUeXBlLk91dHB1dCkge1xyXG4gICAgICAgICAgICBjeCAtPSBpY29uUiArIDU7XHJcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmVuZGVyIHNsb3QgbmFtZVxyXG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMjRweCBzZXJpZlwiO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XHJcbiAgICAgICAgICAgIC8vdmFyIHR4ID0geCArIGljb25XICsgQ29uZmlnLlNMT1RfTUFSR0lOX0xFRlQ7XHJcbiAgICAgICAgICAgIC8vdmFyIHR4ID0gY3g7XHJcbiAgICAgICAgICAgIHZhciB0eSA9IHkgKyBjb25maWdfMS5kZWZhdWx0LlNMT1RfSEVJR0hUIC0gY29uZmlnXzEuZGVmYXVsdC5TTE9UX1RFWFRfQkFTRV9PRkZTRVQ7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLm5hbWUsIGN4LCB0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjsgLy8gcmVzdG9yZVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFNsb3QucHJvdG90eXBlLnNldFJlY3QgPSBmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIHRoaXMucmVjdC5zZXQocmVjdCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gc2V0IGhhc0xpbmtcclxuICAgIFNsb3QucHJvdG90eXBlLnNldExpbmsgPSBmdW5jdGlvbiAoaGFzTGluaykge1xyXG4gICAgICAgIHRoaXMuaGFzTGluayA9IGhhc0xpbms7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gcmV0dXJuIHNsb3QgaWNvbiBwb3NpdG9uXHJcbiAgICBTbG90LnByb3RvdHlwZS5nZXRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgdmVjMl8xLmRlZmF1bHQoMCwgMCk7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdmFyIGxlZnQgPSBub2RlLnJlY3QueCArIHRoaXMucmVjdC54O1xyXG4gICAgICAgIHZhciB0b3AgPSBub2RlLnJlY3QueSArIG5vZGUuYm9keVkgKyB0aGlzLnJlY3QueTtcclxuICAgICAgICB2YXIgaWNvblIgPSBjb25maWdfMS5kZWZhdWx0LlNMT1RfSUNPTl9SQURJVVM7IC8vIGljb24gcmFkaXVzXHJcbiAgICAgICAgdmFyIGN4ID0gbGVmdDtcclxuICAgICAgICB2YXIgY2VudGVyID0gdG9wICsgY29uZmlnXzEuZGVmYXVsdC5TTE9UX0hFSUdIVCAvIDI7IC8vIHNsb3QgY2VudGVyXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gU2xvdFR5cGUuSW5wdXQpIHtcclxuICAgICAgICAgICAgY3ggKz0gY29uZmlnXzEuZGVmYXVsdC5TTE9UX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICBjeCArPSBpY29uUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09PSBTbG90VHlwZS5PdXRwdXQpIHtcclxuICAgICAgICAgICAgY3ggLT0gY29uZmlnXzEuZGVmYXVsdC5TTE9UX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICBjeCAtPSBpY29uUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyB2ZWMyXzEuZGVmYXVsdChjeCwgY2VudGVyKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBpcyBjb250YWluIHBvaW50P1xyXG4gICAgU2xvdC5wcm90b3R5cGUuaXNQb2ludEluUmVjdCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB2YXIgbGVmdCA9IG5vZGUucmVjdC54ICsgdGhpcy5yZWN0Lng7XHJcbiAgICAgICAgdmFyIHRvcCA9IG5vZGUucmVjdC55ICsgbm9kZS5ib2R5WSArIHRoaXMucmVjdC55O1xyXG4gICAgICAgIHZhciBpY29uVyA9IGNvbmZpZ18xLmRlZmF1bHQuU0xPVF9JQ09OX1NQQUNFX1dJRFRIO1xyXG4gICAgICAgIHZhciBjeCA9IGxlZnQ7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gU2xvdFR5cGUuSW5wdXQpIHtcclxuICAgICAgICAgICAgY3ggKz0gY29uZmlnXzEuZGVmYXVsdC5TTE9UX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICAvL2N4ICs9IGljb25SO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09IFNsb3RUeXBlLk91dHB1dCkge1xyXG4gICAgICAgICAgICBjeCAtPSBjb25maWdfMS5kZWZhdWx0LlNMT1RfTUFSR0lOX0xFRlQ7XHJcbiAgICAgICAgICAgIGN4IC09IGljb25XO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVjdCA9IG5ldyByZWN0XzEuZGVmYXVsdChjeCwgdG9wLCBpY29uVywgY29uZmlnXzEuZGVmYXVsdC5TTE9UX0hFSUdIVCk7XHJcbiAgICAgICAgcmV0dXJuIHJlY3QuaXNQb2ludEluUmVjdCh4LCB5KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBtb3VzZSBtb3ZlIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAvLyBlOiBldmVudFxyXG4gICAgU2xvdC5wcm90b3R5cGUub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5SZWN0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnkpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTbG90U3RhdGUuU2VsZWN0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNsb3RTdGF0ZS5Ib3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTbG90U3RhdGUuTm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBtb3VzZSBkb3duIGV2ZW50IGhhbmRsaW5nXHJcbiAgICBTbG90LnByb3RvdHlwZS5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChtb3VzZVBvcywgZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUG9pbnRJblJlY3QobW91c2VQb3MueCwgbW91c2VQb3MueSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNsb3RTdGF0ZS5TZWxlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIG1vdXNlIHVwIGV2ZW50IGhhbmRsaW5nXHJcbiAgICBTbG90LnByb3RvdHlwZS5vbk1vdXNlVXAgPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5SZWN0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTbG90U3RhdGUuSG92ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU2xvdFN0YXRlLk5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gZG91YmxlIGNsaWNrIGV2ZW50IGhhbmRsaW5nXHJcbiAgICBTbG90LnByb3RvdHlwZS5vbk1vdXNlREJDbGljayA9IGZ1bmN0aW9uIChtb3VzZVBvcywgZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUG9pbnRJblJlY3QobW91c2VQb3MueCwgbW91c2VQb3MueSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNsb3RTdGF0ZS5TZWxlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBTbG90O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTbG90O1xyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsb3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy9cclxuLy8gMjAyMC0wNi0yNiwgamp1aWRkb25nXHJcbi8vIFV0aWxpdHkgY2xhc3NcclxuLy9cclxuLy8gMjAyMC0wNy0xM1xyXG4vLyAgLSBUeXBlU2NyaXB0IFJlZmFjdG9yaW5nXHJcbi8vXHJcbnZhciBVdGlsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXRpbCgpIHtcclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGdlbmVyYXRlIHVuaXF1ZSBpZFxyXG4gICAgVXRpbC5nZW5JZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBVdGlsLmluYyArPSAxO1xyXG4gICAgICAgIHJldHVybiBVdGlsLmluYztcclxuICAgIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBpbml0aWFsaXplIGlkIHNlZWRcclxuICAgIFV0aWwuc2V0U2VlZCA9IGZ1bmN0aW9uIChzZWVkKSB7XHJcbiAgICAgICAgVXRpbC5zZWVkID0gc2VlZDtcclxuICAgICAgICBVdGlsLmluYyA9IHNlZWQ7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgVXRpbC5sZXJwID0gZnVuY3Rpb24gKHZhbHVlMSwgdmFsdWUyLCBhbW91bnQpIHtcclxuICAgICAgICBhbW91bnQgPSBhbW91bnQgPCAwID8gMCA6IGFtb3VudDtcclxuICAgICAgICBhbW91bnQgPSBhbW91bnQgPiAxID8gMSA6IGFtb3VudDtcclxuICAgICAgICByZXR1cm4gdmFsdWUxICsgKHZhbHVlMiAtIHZhbHVlMSkgKiBhbW91bnQ7XHJcbiAgICB9O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gY29udmVydCByZW0gdG8gcGl4ZWxcclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM2NTMyMzA3L3JlbS1weC1pbi1qYXZhc2NyaXB0XHJcbiAgICBVdGlsLmNvbnZlcnRSZW1Ub1BpeGVscyA9IGZ1bmN0aW9uIChyZW0pIHtcclxuICAgICAgICByZXR1cm4gcmVtICogcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpO1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHJvdW5kZWRSZWN0XHJcbiAgICBVdGlsLnJvdW5kZWRSZWN0ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzLCBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGxTdHlsZSA9PT0gdm9pZCAwKSB7IGZpbGxTdHlsZSA9IG51bGw7IH1cclxuICAgICAgICBpZiAoc3Ryb2tlU3R5bGUgPT09IHZvaWQgMCkgeyBzdHJva2VTdHlsZSA9IG51bGw7IH1cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5ICsgcmFkaXVzKTtcclxuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5hcmNUbyh4LCB5ICsgaGVpZ2h0LCB4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0LCByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICBjdHguYXJjVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMsIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCAtIHJhZGl1cywgeSwgcmFkaXVzKTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyByYWRpdXMsIHkpO1xyXG4gICAgICAgIGN0eC5hcmNUbyh4LCB5LCB4LCB5ICsgcmFkaXVzLCByYWRpdXMpO1xyXG4gICAgICAgIGlmIChmaWxsU3R5bGUpIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIHJvdW5kZWRSZWN0Qm9keVxyXG4gICAgVXRpbC5yb3VuZGVkUmVjdEJvZHkgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMsIGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5hcmNUbyh4LCB5ICsgaGVpZ2h0LCB4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0LCByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICBjdHguYXJjVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMsIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDU7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSA1O1xyXG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBjaGVjayBhdmlsYWJsZSBzdG9yYWdlXHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9rby9kb2NzL1dlYi9BUEkvV2ViX1N0b3JhZ2VfQVBJL1VzaW5nX3RoZV9XZWJfU3RvcmFnZV9BUElcclxuICAgIC8vIGV4KSBVdGlsLnN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpXHJcbiAgICBVdGlsLnN0b3JhZ2VBdmFpbGFibGUgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHZhciBzdG9yYWdlID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL3N0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG4gICAgICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3jrpbwg7KCc7Jm47ZWcIOuqqOuToCDruIzrnbzsmrDsoIBcclxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgICAgICAgICAvLyDsvZTrk5zqsIAg7KG07J6s7ZWY7KeAIOyViuydhCDsiJjrj4Qg7J6I6riwIOuWhOusuOyXkCDsnbTrpoQg7ZWE65Oc64+EIO2ZleyduO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3jrpbwg7KCc7Jm47ZWcIOuqqOuToCDruIzrnbzsmrDsoIBcclxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcclxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcclxuICAgICAgICAgICAgICAgIC8vIOydtOuvuCDsoIDsnqXrkJwg6rKD7J207J6I64qUIOqyveyasOyXkOunjCBRdW90YUV4Y2VlZGVkRXJyb3Lrpbwg7ZmV7J247ZWY7Iut7Iuc7JikLlxyXG4gICAgICAgICAgICAgICAgKChzdG9yYWdlICE9PSBudWxsKSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBVdGlsLnNlZWQgPSAxMDAwMDtcclxuICAgIFV0aWwuaW5jID0gVXRpbC5zZWVkO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gcm91bmRlZFJlY3RIZWFkZXJcclxuICAgIFV0aWwucm91bmRlZFJlY3RIZWFkZXIgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMsIGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5ICsgcmFkaXVzKTtcclxuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LmFyY1RvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoIC0gcmFkaXVzLCB5LCByYWRpdXMpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cywgeSk7XHJcbiAgICAgICAgY3R4LmFyY1RvKHgsIHksIHgsIHkgKyByYWRpdXMsIHJhZGl1cyk7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDU7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSA1O1xyXG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVXRpbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVXRpbDtcclxuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLldpZGdldHMgPSBleHBvcnRzLldpZGdldFR5cGUgPSBleHBvcnRzLldpZGdldFN0YXRlID0gdm9pZCAwO1xyXG4vL1xyXG4vLyAyMDIwLTA2LTMwLCBqanVpZGRvbmdcclxuLy8gd2lkZ2V0c1xyXG4vLyAgLSBpbnB1dCBudW1iZXJcclxuLy8gIC0gaW5wdXQgYm9vbGVhblxyXG4vLyAgLSBpbnB1dCBzdHJpbmdcclxuLy8gIC0gaW5wdXQgY29tYm9ib3hcclxuLy9cclxuLy8gMjAyMC0wNy0xNFxyXG4vLyAgLSBUeXBlU2NyaXB0IFJlZmFjdG9yaW5nXHJcbi8vXHJcbnZhciByZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWF0aC9yZWN0XCIpKTtcclxudmFyIHZlYzJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXRoL3ZlYzJcIikpO1xyXG52YXIgdXRpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG52YXIgY29uZmlnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29uZmlnXCIpKTtcclxudmFyIFdpZGdldFN0YXRlO1xyXG4oZnVuY3Rpb24gKFdpZGdldFN0YXRlKSB7XHJcbiAgICBXaWRnZXRTdGF0ZVtXaWRnZXRTdGF0ZVtcIk5vcm1hbFwiXSA9IDBdID0gXCJOb3JtYWxcIjtcclxuICAgIFdpZGdldFN0YXRlW1dpZGdldFN0YXRlW1wiSG92ZXJcIl0gPSAxXSA9IFwiSG92ZXJcIjtcclxuICAgIFdpZGdldFN0YXRlW1dpZGdldFN0YXRlW1wiU2VsZWN0XCJdID0gMl0gPSBcIlNlbGVjdFwiO1xyXG59KShXaWRnZXRTdGF0ZSA9IGV4cG9ydHMuV2lkZ2V0U3RhdGUgfHwgKGV4cG9ydHMuV2lkZ2V0U3RhdGUgPSB7fSkpO1xyXG52YXIgV2lkZ2V0VHlwZTtcclxuKGZ1bmN0aW9uIChXaWRnZXRUeXBlKSB7XHJcbiAgICBXaWRnZXRUeXBlW1dpZGdldFR5cGVbXCJCb29sZWFuXCJdID0gMF0gPSBcIkJvb2xlYW5cIjtcclxuICAgIFdpZGdldFR5cGVbV2lkZ2V0VHlwZVtcIk51bWJlclwiXSA9IDFdID0gXCJOdW1iZXJcIjtcclxuICAgIFdpZGdldFR5cGVbV2lkZ2V0VHlwZVtcIlN0cmluZ1wiXSA9IDJdID0gXCJTdHJpbmdcIjtcclxufSkoV2lkZ2V0VHlwZSA9IGV4cG9ydHMuV2lkZ2V0VHlwZSB8fCAoZXhwb3J0cy5XaWRnZXRUeXBlID0ge30pKTtcclxudmFyIFdpZGdldHM7XHJcbihmdW5jdGlvbiAoV2lkZ2V0cykge1xyXG4gICAgLy8gd2lkZ2V0cyBiYXNlIGNsYXNzXHJcbiAgICB2YXIgQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBCYXNlKGlkLCBuYW1lLCB0eXBlLCBub2RlLCByZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXaWRnZXRTdGF0ZS5Ob3JtYWw7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICAgICAgdGhpcy5yZWN0ID0gcmVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQmFzZS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9O1xyXG4gICAgICAgIEJhc2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHsgfTtcclxuICAgICAgICBCYXNlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWN0LnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnJlY3QueSA9IHk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBCYXNlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuc3RhdGU7IH07XHJcbiAgICAgICAgQmFzZS5wcm90b3R5cGUuaXNQb2ludEluUmVjdCA9IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBmYWxzZTsgfTtcclxuICAgICAgICBCYXNlLnByb3RvdHlwZS5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChtb3VzZVBvcywgZSkgeyB9O1xyXG4gICAgICAgIEJhc2UucHJvdG90eXBlLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7IH07XHJcbiAgICAgICAgQmFzZS5wcm90b3R5cGUub25Nb3VzZVVwID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7IH07XHJcbiAgICAgICAgQmFzZS5wcm90b3R5cGUub25Nb3VzZURCQ2xpY2sgPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHsgfTtcclxuICAgICAgICByZXR1cm4gQmFzZTtcclxuICAgIH0oKSk7XHJcbiAgICBXaWRnZXRzLkJhc2UgPSBCYXNlO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gV2lkZ2V0cy5OdW1iZXJcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHZhciBOdW1iZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKE51bWJlciwgX3N1cGVyKTtcclxuICAgICAgICBmdW5jdGlvbiBOdW1iZXIoaWQsIG5vZGUsIG5hbWUsIHZhbHVlLCByZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gLTE7IH1cclxuICAgICAgICAgICAgaWYgKG5vZGUgPT09IHZvaWQgMCkgeyBub2RlID0gbnVsbDsgfVxyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIm51bWJlclwiOyB9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0gMDsgfVxyXG4gICAgICAgICAgICBpZiAocmVjdCA9PT0gdm9pZCAwKSB7IHJlY3QgPSBuZXcgcmVjdF8xLmRlZmF1bHQoMCwgMCwgMTAwLCBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfSEVJR0hUKTsgfVxyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAoaWQgPCAwKSA/IHV0aWxfMS5kZWZhdWx0LmdlbklkKCkgOiBpZCwgbmFtZSwgV2lkZ2V0VHlwZS5OdW1iZXIsIG5vZGUsIHJlY3QpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIF90aGlzLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgX3RoaXMucHJldlBvcyA9IG5ldyB2ZWMyXzEuZGVmYXVsdCgwLCAwKTtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBXaWRnZXRzLk51bWJlci5vbk1vdXNlTW92ZVxyXG4gICAgICAgICAgICAvLyBtb3VzZSBtb3ZlIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgICAgIC8vIGU6IGV2ZW50XHJcbiAgICAgICAgICAgIF90aGlzLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFdpZGdldFN0YXRlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGN1clBvcyA9IG5ldyBWZWMyKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkZWx0YSA9IG5ldyBWZWMyKDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmVjMi5zdWIoZGVsdGEsIGN1clBvcywgdGhpcy5wcmV2UG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByZXZQb3Muc2V0KGN1clBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy52YWx1ZSArPSBkZWx0YS54O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFdpZGdldHMuTnVtYmVyLm9uTW91c2VEb3duXHJcbiAgICAgICAgICAgIC8vIG1vdXNlIGRvd24gZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICAgICAgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1BvaW50SW5SZWN0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSBXaWRnZXRTdGF0ZS5TZWxlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJldlBvcy5zZXQyKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBXaWRnZXRzLk51bWJlci5vbk1vdXNlVXBcclxuICAgICAgICAgICAgLy8gbW91c2UgdXAgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICAgICAgX3RoaXMub25Nb3VzZVVwID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNQb2ludEluUmVjdChtb3VzZVBvcy54LCBtb3VzZVBvcy55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0gV2lkZ2V0U3RhdGUuSG92ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IFdpZGdldFN0YXRlLk5vcm1hbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBXaWRnZXRzLk51bWJlci5vbk1vdXNlREJDbGlja1xyXG4gICAgICAgICAgICAvLyBkb3VibGUgY2xpY2sgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICAgICAgX3RoaXMub25Nb3VzZURCQ2xpY2sgPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1BvaW50SW5SZWN0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSBXaWRnZXRTdGF0ZS5TZWxlY3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIF90aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFdpZGdldHMuTnVtYmVyLmdldFZhbHVlXHJcbiAgICAgICAgTnVtYmVyLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudmFsdWU7IH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFdpZGdldHMuTnVtYmVyLnJlbmRlclxyXG4gICAgICAgIC8vIGN0eDogcmVuZGVyaW5nIGNvbnRleHQgMmRcclxuICAgICAgICBOdW1iZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHggPSBub2RlLnJlY3QueCArIHRoaXMucmVjdC54ICsgY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICB2YXIgeSA9IG5vZGUucmVjdC55ICsgbm9kZS5ib2R5WSArIHRoaXMucmVjdC55ICsgY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX01BUkdJTl9UT1A7XHJcbiAgICAgICAgICAgIHZhciB3ID0gbm9kZS5yZWN0LncgLSBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfTUFSR0lOX0xFRlQgKiAyO1xyXG4gICAgICAgICAgICB1dGlsXzEuZGVmYXVsdC5yb3VuZGVkUmVjdChjdHgsIHgsIHksIHcsIHRoaXMucmVjdC5oLCAxLCBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfQkdfQ09MT1IpO1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgdmFsdWVcclxuICAgICAgICAgICAgICAgIHZhciB0eCA9IHggKyB3IC8gMjsgLy8rIENvbmZpZy5OT0RFX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5ID0geSArIHRoaXMucmVjdC5oIC0gY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX1RFWFRfQkFTRV9PRkZTRVQ7XHJcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiMjRweCBzZXJpZlwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX1RFWFRfQ09MT1I7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJcIiArIHRoaXMudmFsdWUsIHR4LCB0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiOyAvLyByZXN0b3JlXHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFdpZGdldHMuTnVtYmVyLmlzUG9pbnRJblJlY3RcclxuICAgICAgICAvLyBpcyBjb250YWluIHBvaW50P1xyXG4gICAgICAgIE51bWJlci5wcm90b3R5cGUuaXNQb2ludEluUmVjdCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciB4eCA9IG5vZGUucmVjdC54ICsgdGhpcy5yZWN0LnggKyBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfTUFSR0lOX0xFRlQ7XHJcbiAgICAgICAgICAgIHZhciB5eSA9IG5vZGUucmVjdC55ICsgbm9kZS5ib2R5WSArIHRoaXMucmVjdC55ICsgY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX01BUkdJTl9UT1A7XHJcbiAgICAgICAgICAgIHZhciB3ID0gbm9kZS5yZWN0LncgLSBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfTUFSR0lOX0xFRlQgKiAyO1xyXG4gICAgICAgICAgICB2YXIgaCA9IHRoaXMucmVjdC5oO1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IG5ldyByZWN0XzEuZGVmYXVsdCh4eCwgeXksIHcsIGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjdC5pc1BvaW50SW5SZWN0KHgsIHkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiBOdW1iZXI7XHJcbiAgICB9KEJhc2UpKTtcclxuICAgIFdpZGdldHMuTnVtYmVyID0gTnVtYmVyO1xyXG4gICAgOyAvLyB+V2lkZ2V0cy5OdW1iZXJcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFdpZGdldHMuQm9vbGVhblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIEJvb2xlYW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKEJvb2xlYW4sIF9zdXBlcik7XHJcbiAgICAgICAgLy9wcmV2UG9zOiBWZWMyID0gbmV3IFZlYzIoMCwgMCk7XHJcbiAgICAgICAgZnVuY3Rpb24gQm9vbGVhbihpZCwgbm9kZSwgbmFtZSwgdmFsdWUsIHJlY3QpIHtcclxuICAgICAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAtMTsgfVxyXG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gdm9pZCAwKSB7IG5vZGUgPSBudWxsOyB9XHJcbiAgICAgICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwibnVtYmVyXCI7IH1cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSBmYWxzZTsgfVxyXG4gICAgICAgICAgICBpZiAocmVjdCA9PT0gdm9pZCAwKSB7IHJlY3QgPSBuZXcgcmVjdF8xLmRlZmF1bHQoMCwgMCwgMTAwLCBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfSEVJR0hUKTsgfVxyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAoaWQgPCAwKSA/IHV0aWxfMS5kZWZhdWx0LmdlbklkKCkgOiBpZCwgbmFtZSwgV2lkZ2V0VHlwZS5Cb29sZWFuLCBub2RlLCByZWN0KSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBfdGhpcy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5uYW1lID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBXaWRnZXRzLkJvb2xlYW4ub25Nb3VzZU1vdmVcclxuICAgICAgICAgICAgLy8gbW91c2UgbW92ZSBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgICAgICAvLyBlOiBldmVudFxyXG4gICAgICAgICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChtb3VzZVBvcywgZSkge1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFdpZGdldHMuQm9vbGVhbi5vbk1vdXNlRG93blxyXG4gICAgICAgICAgICAvLyBtb3VzZSBkb3duIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNQb2ludEluUmVjdChtb3VzZVBvcy54LCBtb3VzZVBvcy55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0gV2lkZ2V0U3RhdGUuU2VsZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wcmV2UG9zLnNldDIoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFdpZGdldHMuQm9vbGVhbi5vbk1vdXNlVXBcclxuICAgICAgICAgICAgLy8gbW91c2UgdXAgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICAgICAgX3RoaXMub25Nb3VzZVVwID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNQb2ludEluUmVjdChtb3VzZVBvcy54LCBtb3VzZVBvcy55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gKF90aGlzLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5TZWxlY3QpID8gIV90aGlzLnZhbHVlIDogX3RoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSBXaWRnZXRTdGF0ZS5Ib3ZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0gV2lkZ2V0U3RhdGUuTm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFdpZGdldHMuQm9vbGVhbi5vbk1vdXNlREJDbGlja1xyXG4gICAgICAgICAgICAvLyBkb3VibGUgY2xpY2sgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICAgICAgX3RoaXMub25Nb3VzZURCQ2xpY2sgPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gV2lkZ2V0cy5Cb29sZWFuLmdldFZhbHVlXHJcbiAgICAgICAgQm9vbGVhbi5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnZhbHVlOyB9O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBXaWRnZXRzLkJvb2xlYW4ucmVuZGVyXHJcbiAgICAgICAgLy8gY3R4OiByZW5kZXJpbmcgY29udGV4dCAyZFxyXG4gICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHggPSBub2RlLnJlY3QueCArIHRoaXMucmVjdC54ICsgY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICB2YXIgeSA9IG5vZGUucmVjdC55ICsgbm9kZS5ib2R5WSArIHRoaXMucmVjdC55ICsgY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX01BUkdJTl9UT1A7XHJcbiAgICAgICAgICAgIHZhciB3ID0gbm9kZS5yZWN0LncgLSBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfTUFSR0lOX0xFRlQgKiAyO1xyXG4gICAgICAgICAgICB1dGlsXzEuZGVmYXVsdC5yb3VuZGVkUmVjdChjdHgsIHgsIHksIHcsIHRoaXMucmVjdC5oLCAxLCBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfQkdfQ09MT1IpO1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgdmFsdWVcclxuICAgICAgICAgICAgICAgIHZhciB0eCA9IHggKyB3IC8gMjsgLy8rIENvbmZpZy5OT0RFX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5ID0geSArIHRoaXMucmVjdC5oIC0gY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX1RFWFRfQkFTRV9PRkZTRVQ7XHJcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiMjRweCBzZXJpZlwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX1RFWFRfQ09MT1I7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJcIiArIHRoaXMudmFsdWUsIHR4LCB0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiOyAvLyByZXN0b3JlXHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFdpZGdldHMuQm9vbGVhbi5pc1BvaW50SW5SZWN0XHJcbiAgICAgICAgLy8gaXMgY29udGFpbiBwb2ludD9cclxuICAgICAgICBCb29sZWFuLnByb3RvdHlwZS5pc1BvaW50SW5SZWN0ID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHh4ID0gbm9kZS5yZWN0LnggKyB0aGlzLnJlY3QueCArIGNvbmZpZ18xLmRlZmF1bHQuV0lER0VUU19NQVJHSU5fTEVGVDtcclxuICAgICAgICAgICAgdmFyIHl5ID0gbm9kZS5yZWN0LnkgKyBub2RlLmJvZHlZICsgdGhpcy5yZWN0LnkgKyBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfTUFSR0lOX1RPUDtcclxuICAgICAgICAgICAgdmFyIHcgPSBub2RlLnJlY3QudyAtIGNvbmZpZ18xLmRlZmF1bHQuV0lER0VUU19NQVJHSU5fTEVGVCAqIDI7XHJcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5yZWN0Lmg7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gbmV3IHJlY3RfMS5kZWZhdWx0KHh4LCB5eSwgdywgaCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZWN0LmlzUG9pbnRJblJlY3QoeCwgeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW47XHJcbiAgICB9KEJhc2UpKTtcclxuICAgIFdpZGdldHMuQm9vbGVhbiA9IEJvb2xlYW47XHJcbiAgICA7IC8vIH5XaWRnZXRzLkJvb2xlYW5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFdpZGdldHMuU3RyaW5nXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgU3RyaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgIF9fZXh0ZW5kcyhTdHJpbmcsIF9zdXBlcik7XHJcbiAgICAgICAgLy9wcmV2UG9zOlZlYzIgPSBuZXcgVmVjMigwLDApO1xyXG4gICAgICAgIGZ1bmN0aW9uIFN0cmluZyhpZCwgbm9kZSwgbmFtZSwgdmFsdWUsIHJlY3QpIHtcclxuICAgICAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAtMTsgfVxyXG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gdm9pZCAwKSB7IG5vZGUgPSBudWxsOyB9XHJcbiAgICAgICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwic3RyaW5nXCI7IH1cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSBcImVtcHR5XCI7IH1cclxuICAgICAgICAgICAgaWYgKHJlY3QgPT09IHZvaWQgMCkgeyByZWN0ID0gbmV3IHJlY3RfMS5kZWZhdWx0KDAsIDAsIDEwMCwgY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX0hFSUdIVCk7IH1cclxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgKGlkIDwgMCkgPyB1dGlsXzEuZGVmYXVsdC5nZW5JZCgpIDogaWQsIG5hbWUsIFdpZGdldFR5cGUuU3RyaW5nLCBub2RlLCByZWN0KSB8fCB0aGlzO1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFdpZGdldHMuU3RyaW5nLm9uTW91c2VNb3ZlXHJcbiAgICAgICAgICAgIC8vIG1vdXNlIG1vdmUgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICAgICAgLy8gZTogZXZlbnRcclxuICAgICAgICAgICAgX3RoaXMub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBXaWRnZXRzLlN0cmluZy5vbk1vdXNlRG93blxyXG4gICAgICAgICAgICAvLyBtb3VzZSBkb3duIGV2ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKG1vdXNlUG9zLCBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNQb2ludEluUmVjdChtb3VzZVBvcy54LCBtb3VzZVBvcy55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0gV2lkZ2V0U3RhdGUuU2VsZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wcmV2UG9zLnNldDIoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFdpZGdldHMuU3RyaW5nLm9uTW91c2VVcFxyXG4gICAgICAgICAgICAvLyBtb3VzZSB1cCBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgICAgICBfdGhpcy5vbk1vdXNlVXAgPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1BvaW50SW5SZWN0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnZhbHVlID0gKHRoaXMuc3RhdGUgPT09ICBXSURHRVRfU1RBVEVfU0VMRUNUKT8gIXRoaXMudmFsdWUgOiB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0gV2lkZ2V0U3RhdGUuSG92ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IFdpZGdldFN0YXRlLk5vcm1hbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBXaWRnZXRzLlN0cmluZy5vbk1vdXNlREJDbGlja1xyXG4gICAgICAgICAgICAvLyBkb3VibGUgY2xpY2sgZXZlbnQgaGFuZGxpbmdcclxuICAgICAgICAgICAgX3RoaXMub25Nb3VzZURCQ2xpY2sgPSBmdW5jdGlvbiAobW91c2VQb3MsIGUpIHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gV2lkZ2V0cy5TdHJpbmcucmVuZGVyXHJcbiAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudmFsdWU7IH07XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFdpZGdldHMuU3RyaW5nLnJlbmRlclxyXG4gICAgICAgIC8vIGN0eDogcmVuZGVyaW5nIGNvbnRleHQgMmRcclxuICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHggPSBub2RlLnJlY3QueCArIHRoaXMucmVjdC54ICsgY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICB2YXIgeSA9IG5vZGUucmVjdC55ICsgbm9kZS5ib2R5WSArIHRoaXMucmVjdC55ICsgY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX01BUkdJTl9UT1A7XHJcbiAgICAgICAgICAgIHZhciB3ID0gbm9kZS5yZWN0LncgLSBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfTUFSR0lOX0xFRlQgKiAyO1xyXG4gICAgICAgICAgICB1dGlsXzEuZGVmYXVsdC5yb3VuZGVkUmVjdChjdHgsIHgsIHksIHcsIHRoaXMucmVjdC5oLCAxLCBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfQkdfQ09MT1IpO1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgdmFsdWVcclxuICAgICAgICAgICAgICAgIHZhciB0eCA9IHggKyB3IC8gMjsgLy8rIENvbmZpZy5OT0RFX01BUkdJTl9MRUZUO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5ID0geSArIHRoaXMucmVjdC5oIC0gY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX1RFWFRfQkFTRV9PRkZTRVQ7XHJcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiMjRweCBzZXJpZlwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29uZmlnXzEuZGVmYXVsdC5XSURHRVRTX1RFWFRfQ09MT1I7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy52YWx1ZSwgdHgsIHR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7IC8vIHJlc3RvcmVcclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gV2lkZ2V0cy5TdHJpbmcuaXNQb2ludEluUmVjdFxyXG4gICAgICAgIC8vIGlzIGNvbnRhaW4gcG9pbnQ/XHJcbiAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5pc1BvaW50SW5SZWN0ID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHh4ID0gbm9kZS5yZWN0LnggKyB0aGlzLnJlY3QueCArIGNvbmZpZ18xLmRlZmF1bHQuV0lER0VUU19NQVJHSU5fTEVGVDtcclxuICAgICAgICAgICAgdmFyIHl5ID0gbm9kZS5yZWN0LnkgKyBub2RlLmJvZHlZICsgdGhpcy5yZWN0LnkgKyBjb25maWdfMS5kZWZhdWx0LldJREdFVFNfTUFSR0lOX1RPUDtcclxuICAgICAgICAgICAgdmFyIHcgPSBub2RlLnJlY3QudyAtIGNvbmZpZ18xLmRlZmF1bHQuV0lER0VUU19NQVJHSU5fTEVGVCAqIDI7XHJcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5yZWN0Lmg7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gbmV3IHJlY3RfMS5kZWZhdWx0KHh4LCB5eSwgdywgaCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZWN0LmlzUG9pbnRJblJlY3QoeCwgeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZztcclxuICAgIH0oQmFzZSkpO1xyXG4gICAgV2lkZ2V0cy5TdHJpbmcgPSBTdHJpbmc7XHJcbiAgICA7IC8vIH5XaWRnZXRzLlN0cmluZ1xyXG59KShXaWRnZXRzID0gZXhwb3J0cy5XaWRnZXRzIHx8IChleHBvcnRzLldpZGdldHMgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aWRnZXRzLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=