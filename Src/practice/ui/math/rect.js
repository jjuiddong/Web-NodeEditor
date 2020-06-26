//
// 2020-06-25, jjuiddong
// Rect class
//  - x, y, width, height
//
const Rect = class {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }

  // this = rect
  set = function (rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.w = rect.w;
    this.h = rect.h;
  };

  // this = x,y,w,h
  set2 = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  };

  isPointInRect = function (x, y) {
    return (
      this.x < x &&
      this.x + this.w > x &&
      this.y < y &&
      this.y + this.h > y
    );
  };
};

// out = rect
Rect.set = function (out, rect) {
  out.x = rect.x;
  out.y = rect.y;
  out.w = rect.w;
  out.h = rect.h;
};

// this = x,y,w,h
Rect.set2 = function (out, x, y, width, height) {
  out.x = x;
  out.y = y;
  out.w = width;
  out.h = height;
};
