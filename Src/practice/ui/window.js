//
// 2020-06-24, jjuiddong
// window class
//
const Window = class {
  constructor(option = {x:0, y:0, w:200, h:200}) {
    this.state = 0;
    this.title = "Window";
    this.offset = [0, 0];
    this.rect = [option.x, option.y, option.w, option.h];
  }

  // draw window
  draw = function (ctx) {
    var x = this.rect[0];
    var y = this.rect[1];
    var w = this.rect[2];
    var h = this.rect[3];

    {
        const hh = Config.TITLEBAR_HEIGHT;
        const by = y + Config.TITLEBAR_HEIGHT;
        const bh = h - Config.TITLEBAR_HEIGHT;
        roundedRectHeader(ctx, x, y, w, hh, Config.WINDOW_ARC_RADIUS);
        roundedRectBody(ctx, x, by, w, bh, Config.WINDOW_ARC_RADIUS);
    }

    {
      // render title text
      var tx = x + Config.WINDOW_MARGIN_LEFT;
      var ty = y + Config.TITLEBAR_HEIGHT - 5;
      ctx.font = "24px serif";
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillText(this.title, tx, ty);
    }

  };

  // move window x,y position
  move = function (x, y) {
    this.rect[0] = x;
    this.rect[1] = y;
  };

  // check x,y point in rect?
  isPointInRect(x, y) {
    if (
      this.rect[0] < x &&
      this.rect[0] + this.rect[2] > x &&
      this.rect[1] < y &&
      this.rect[1] + this.rect[3] > y
    )
      return true;
    return false;
  }
};

function roundedRect(ctx, x, y, width, height, radius) {
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
  ctx.stroke();
}

function roundedRectHeader(ctx, x, y, width, height, radius) {
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
  ctx.fillStyle = "rgba(255,255,0,1)";
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = Config.WINDOW_BORDER_COLOR;
  ctx.stroke();
}

function roundedRectBody(ctx, x, y, width, height, radius) {
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
  ctx.fillStyle = "rgba(255,255,255,1)";
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = Config.WINDOW_BORDER_COLOR;
  ctx.stroke();
}
