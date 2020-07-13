"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __importDefault(require("./math/rect"));
var node_1 = __importDefault(require("./node"));
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