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
var rect_1 = __importDefault(require("./math/rect"));
var vec2_1 = __importDefault(require("./math/vec2"));
var util_1 = __importDefault(require("./util"));
var config_1 = __importDefault(require("./config"));
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