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

//--------------------------------------------------------------------------------
// roundedRect
Util.roundedRect = function(ctx, x, y, width, height, radius,
  fillStyle, strokeStyle ) {
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
Util.roundedRectHeader = function(ctx, x, y, width, height, radius, 
  fillStyle, strokeStyle) {
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
Util.roundedRectBody = function(ctx, x, y, width, height, radius, 
  fillStyle, strokeStyle) {
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
