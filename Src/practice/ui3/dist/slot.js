"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotState = exports.SlotType = void 0;
var rect_1 = __importDefault(require("./math/rect"));
var util_1 = __importDefault(require("./util"));
var config_1 = __importDefault(require("./config"));
var vec2_1 = __importDefault(require("./math/vec2"));
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