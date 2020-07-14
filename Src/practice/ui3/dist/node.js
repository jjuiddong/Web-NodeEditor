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
var slot_1 = require("./slot");
var rect_1 = __importDefault(require("./math/rect"));
var vec2_1 = __importDefault(require("./math/vec2"));
var util_1 = __importDefault(require("./util"));
var config_1 = __importDefault(require("./config"));
var widgets_1 = require("./widgets");
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