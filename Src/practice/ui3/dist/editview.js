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
var vec2_1 = __importDefault(require("./math/vec2"));
var context_menu_1 = __importDefault(require("./context_menu"));
var node_spawn_1 = __importDefault(require("./node_spawn"));
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