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
var vec2_1 = __importDefault(require("./math/vec2"));
var util_1 = __importDefault(require("./util"));
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