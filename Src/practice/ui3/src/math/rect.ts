//
// 2020-06-25, jjuiddong
// Rect class
//  - x, y, width, height
//
// 2020-07-13
//  - TypeScript Refactoring
//
export default class Rect {
  x: number = 0;
  y: number = 0;
  w: number = 0;
  h: number = 0;

  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 0,
    height: number = 0) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }

  // this = rect
  set(rect: Rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.w = rect.w;
    this.h = rect.h;
  };

  // this = x,y,w,h
  set2(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  };

  isPointInRect(x: number, y: number) {
    return (
      this.x < x &&
      this.x + this.w > x &&
      this.y < y &&
      this.y + this.h > y
    );
  };

  // out = rect
  static set(out: Rect, rect: Rect) {
    out.x = rect.x;
    out.y = rect.y;
    out.w = rect.w;
    out.h = rect.h;
  };

  // this = x,y,w,h
  static set2(out: Rect, x: number, y: number, width: number, height: number) {
    out.x = x;
    out.y = y;
    out.w = width;
    out.h = height;
  };

};

