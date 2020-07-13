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
var rect_1 = __importDefault(require("./math/rect"));
var vec2_1 = __importDefault(require("./math/vec2"));
var util_1 = __importDefault(require("./util"));
var config_1 = __importDefault(require("./config"));
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