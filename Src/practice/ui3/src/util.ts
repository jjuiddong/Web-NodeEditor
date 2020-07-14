//
// 2020-06-26, jjuiddong
// Utility class
//
// 2020-07-13
//  - TypeScript Refactoring
//
export default class Util {
  static seed: number = 10000;
  static inc: number = Util.seed;

  constructor() { }

  //--------------------------------------------------------------------------------
  // generate unique id
  static genId() {
    Util.inc += 1;
    return Util.inc;
  }

  //--------------------------------------------------------------------------------
  // initialize id seed
  static setSeed(seed: number) {
    Util.seed = seed;
    Util.inc = seed;
  }

  //--------------------------------------------------------------------------------
  static lerp(value1: number, value2: number, amount: number) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
  }

  //--------------------------------------------------------------------------------
  // convert rem to pixel
  // https://stackoverflow.com/questions/36532307/rem-px-in-javascript
  static convertRemToPixels(rem: number) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  //--------------------------------------------------------------------------------
  // roundedRect
  static roundedRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fillStyle: string|null = null,
    strokeStyle: string|null = null) {

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
  }

  //--------------------------------------------------------------------------------
  // roundedRectHeader
  static roundedRectHeader = function (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fillStyle: string,
    strokeStyle: string) {

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
  }

  //--------------------------------------------------------------------------------
  // roundedRectBody
  static roundedRectBody(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fillStyle: string,
    strokeStyle: string) {

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
  }

  //--------------------------------------------------------------------------------
  // check avilable storage
  // https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  // ex) Util.storageAvailable('localStorage')
  static storageAvailable(type:any) : boolean {
    var storage : Storage | null = null;
    try {
      //storage = window[type];
      storage = window.localStorage;
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch (e) {
      return e instanceof DOMException && (
          // Firefox를 제외한 모든 브라우저
         e.code === 22 ||
        // Firefox
         e.code === 1014 ||
        // 코드가 존재하지 않을 수도 있기 떄문에 이름 필드도 확인합니다.
        // Firefox를 제외한 모든 브라우저
         e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
        ((storage !== null) && storage.length !== 0);
    }
    return false
  }
};
