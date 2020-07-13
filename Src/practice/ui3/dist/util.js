"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// 2020-06-26, jjuiddong
// Utility class
//
//  - 2020-07-13
//    - TypeScript Refactoring
//
var Util = /** @class */ (function () {
    function Util() {
    }
    //--------------------------------------------------------------------------------
    // generate unique id
    Util.genId = function () {
        Util.inc += 1;
        return Util.inc;
    };
    //--------------------------------------------------------------------------------
    // initialize id seed
    Util.setSeed = function (seed) {
        Util.seed = seed;
        Util.inc = seed;
    };
    //--------------------------------------------------------------------------------
    Util.lerp = function (value1, value2, amount) {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;
        return value1 + (value2 - value1) * amount;
    };
    //--------------------------------------------------------------------------------
    // convert rem to pixel
    // https://stackoverflow.com/questions/36532307/rem-px-in-javascript
    Util.convertRemToPixels = function (rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };
    //--------------------------------------------------------------------------------
    // roundedRect
    Util.roundedRect = function (ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.lineTo(x + width - radius, y + height);
        ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        ctx.lineTo(x + width, y + radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.lineTo(x + radius, y);
        ctx.arcTo(x, y, x, y + radius, radius);
        if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fill();
        }
        if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
            ctx.stroke();
        }
    };
    //--------------------------------------------------------------------------------
    // roundedRectBody
    Util.roundedRectBody = function (ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + height - radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.lineTo(x + width - radius, y + height);
        ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x, y);
        ctx.save();
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.restore();
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    };
    //--------------------------------------------------------------------------------
    // check avilable storage
    // https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    // ex) Util.storageAvailable('localStorage')
    Util.storageAvailable = function (type) {
        // var storage;
        // try {
        //   storage = window[type];
        //   var x = '__storage_test__';
        //   storage.setItem(x, x);
        //   storage.removeItem(x);
        //   return true;
        // }
        // catch (e) {
        //   return e instanceof DOMException && (
        //     // Firefox를 제외한 모든 브라우저
        //     e.code === 22 ||
        //     // Firefox
        //     e.code === 1014 ||
        //     // 코드가 존재하지 않을 수도 있기 떄문에 이름 필드도 확인합니다.
        //     // Firefox를 제외한 모든 브라우저
        //     e.name === 'QuotaExceededError' ||
        //     // Firefox
        //     e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        //     // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
        //     (storage && storage.length !== 0);
        // }
    };
    Util.seed = 10000;
    Util.inc = Util.seed;
    //--------------------------------------------------------------------------------
    // roundedRectHeader
    Util.roundedRectHeader = function (ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x + width, y + radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.lineTo(x + radius, y);
        ctx.arcTo(x, y, x, y + radius, radius);
        ctx.save();
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.restore();
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    };
    return Util;
}());
exports.default = Util;
;
//# sourceMappingURL=util.js.map