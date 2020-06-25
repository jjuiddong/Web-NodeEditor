//
// 2020-06-25, jjuiddong
// Node Editor View class
//  - render canvas
//  - render node
//
const EditView = class {
  constructor(ctx, option = { width: 800, height: 600 }) {
    this.ctx = ctx;
    this.width = option.width;
    this.height = option.height;
    this.offset = new vec2(1000, 1000); // canvas offset
    this.size = new vec2(2000, 2000); // total editor canvas size
    this.isScroll = false; // mouse click scroll
    this.clickPos = new vec2(0, 0);
    this.prevPos = new vec2(0, 0);

    this.pattern;
    this.img = new Image();
    this.img.onload = () => {
      this.pattern = ctx.createPattern(this.img, "repeat");
    };
    this.img.src = "imgs/grid.png";
    this.scale = 1;

    var wnd1 = new Window((option = { x: 1010, y: 1010, w: 200, h: 200 }));
    var wnd2 = new Window((option = { x: 1210, y: 1210, w: 200, h: 200 }));
    this.wnds = [wnd1, wnd2];

    canvas.addEventListener("mousemove", this.onMouseMove);
    canvas.addEventListener("mousedown", this.onMouseDown);
    canvas.addEventListener("mouseup", this.onMouseUp);
    canvas.addEventListener("wheel", this.onMouseWheel);
  }

  //--------------------------------------------------------------------------------
  // render edit view
  render = function (ctx) {
    ctx.save();

    ctx.scale(this.scale, this.scale);
    ctx.translate(-this.offset.x, -this.offset.y);
    // render background grid
    ctx.fillStyle = "rgba(0,0,0,1)";
    if (this.pattern) {
      ctx.fillStyle = this.pattern;
      ctx.imageSmoothingEnabled = false;
      ctx.fillRect(
        this.offset.x,
        this.offset.y,
        this.width / this.scale,
        this.height / this.scale
      );
      ctx.imageSmoothingEnabled = true;
    }
    // render windows
    this.wnds.forEach((wnd) => wnd.render(ctx));
    ctx.restore();

    // debuggin
    ctx.font = "24px serif";
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fillText('Zoom : ' + this.scale.toFixed(2), 0, 24);
  };

  //--------------------------------------------------------------------------------
  // mouse move event handling
  onMouseMove = (e) => {
    if (this.isScroll) {
      var delta = new vec2();
      vec2.sub(delta, this.prevPos, new vec2(e.offsetX, e.offsetY));
      vec2.set(this.prevPos, e.offsetX, e.offsetY);
      vec2.scale(delta, delta, 1 / this.scale)
      vec2.add(this.offset, this.offset, delta);
    }

    this.wnds.forEach((wnd) => {
      if (wnd.state === 1) {
        const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);
        wnd.move(mousePos.x + wnd.offset[0], mousePos.y + wnd.offset[1]);
      }
    });
  };

  //--------------------------------------------------------------------------------
  // mouse down event handling
  onMouseDown = (e) => {
    var isSelect = false;

    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

    this.wnds.forEach((wnd) => {
      if (wnd.isPointInRect(mousePos.x, mousePos.y)) {
        isSelect = true;
        wnd.state = 1;
        wnd.offset = [wnd.rect[0] - mousePos.x, wnd.rect[1] - mousePos.y];
      }
    });

    if (!isSelect) {
      this.isScroll = true;
      this.clickPos.set(e.offsetX, e.offsetY);
      this.prevPos.set(e.offsetX, e.offsetY);
    }
  };

  //--------------------------------------------------------------------------------
  // mouse up event handling
  onMouseUp = (e) => {
    this.isScroll = false;
    this.wnds.forEach((wnd) => (wnd.state = 0));
  };

  //--------------------------------------------------------------------------------
  // mouse wheel event handling
  onMouseWheel = (e) => {
    var curPos = new vec2();
    var mousePos = new vec2(e.offsetX, e.offsetY);
    vec2.scale(curPos, this.offset, this.scale);
    vec2.add(curPos, curPos, mousePos);

    var s;
    if (e.deltaY > 0) {
      s = 0.8;
    } else {
      s = 1.2;
    }
    this.scale *= s;

    var newPos = new vec2();
    vec2.scale(newPos, curPos, s);

    var delta = new vec2();
    vec2.sub(delta, newPos, mousePos);
    vec2.set(this.offset, delta.x / this.scale, delta.y / this.scale)
  };

  //--------------------------------------------------------------------------------
  // return mouse original pos
  // calc zoom in/out, offset
  getOriginalPos = (x, y) => {
    var mousePos = new vec2(x, y);
    var offsetScale = new vec2();
    vec2.scale(offsetScale, this.offset, this.scale);
    var curPos = new vec2();
    vec2.add(curPos, mousePos, offsetScale);
    vec2.scale(curPos, curPos, 1 / this.scale); // convert to original pos
    return curPos;
  }

};
