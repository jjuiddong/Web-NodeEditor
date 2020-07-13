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