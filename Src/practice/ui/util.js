//
// 2020-06-26, jjuiddong
// Utility class
//
const Util = class {
  constructor() {}
};

Util.seed = 10000;
Util.inc = Util.seed;

//--------------------------------------------------------------------------------
// generate unique id
Util.genId = function() {
    Util.inc += 1;
    return Util.inc;
}

//--------------------------------------------------------------------------------
Util.lerp = function (value1, value2, amount) {
  amount = amount < 0 ? 0 : amount;
  amount = amount > 1 ? 1 : amount;
  return value1 + (value2 - value1) * amount;
}

//--------------------------------------------------------------------------------
// convert rem to pixel
// https://stackoverflow.com/questions/36532307/rem-px-in-javascript
Util.convertRemToPixels = function (rem) {    
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

