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