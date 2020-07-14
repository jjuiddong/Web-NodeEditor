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
var rect_1 = __importDefault(require("./math/rect"));
var node_1 = __importDefault(require("./node"));
var slot_1 = __importStar(require("./slot"));
var widgets_1 = require("./widgets");
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