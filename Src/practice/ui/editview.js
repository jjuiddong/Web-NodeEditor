//
// 2020-06-25, jjuiddong
// Node Editor View class
//  - render canvas
//  - render node
//
const EDIT_STATE_NORMAL = 0;
const EDIT_STATE_SCROLL = 1;
const EDIT_STATE_MOVE_WINDOW = 2;
const EDIT_STATE_EDIT_LINK = 3;

const EditView = class {
  constructor(ctx, option = { width: 800, height: 600 }) {
    this.state = EDIT_STATE_NORMAL;
    this.ctx = ctx;
    this.width = option.width;
    this.height = option.height;
    this.offset = new Vec2(1000, 1000); // canvas offset
    this.size = new Vec2(2000, 2000); // total editor canvas size
    this.isScroll = false; // mouse click scroll
    this.clickPos = new Vec2(0, 0);
    this.prevPos = new Vec2(0, 0);
    this.pattern;
    this.img = new Image();
    this.img.onload = () => {
      this.pattern = ctx.createPattern(this.img, "repeat");
    };
    this.img.src = "imgs/grid.png";
    this.scale = 1;
    this.editLink = null;
    this.links = [];

    var wnd1 = new Window((option = { rect: new Rect(1010, 1010, 200, 200) }));
    var wnd2 = new Window((option = { rect: new Rect(1210, 1210, 200, 200) }));
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

    this.links.forEach((elements) => elements.render(ctx));
    if (this.editLink) this.editLink.render(ctx);

    ctx.restore();

    // debugging
    ctx.font = "20px serif";
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fillText(
      "Scroll : " + this.offset.x.toFixed(2) + ", " + this.offset.y.toFixed(2),
      0,
      24
    );
    ctx.fillText("Zoom : " + this.scale.toFixed(2), 0, 48);
    ctx.fillText("State : " + this.state, 0, 72);
  };

  //--------------------------------------------------------------------------------
  // recal link position
  // window : move window
  calcWindowLayout = function(window) {    
    var calcFn = function(links, slot) {
      var link1 = links.find((link) => link.to === slot.id);
      if (link1) {
        link1.setP1(slot.getPos());
      }
      var link2 = links.find((link) => link.from === slot.id);
      if (link2) {
        link2.setP0(slot.getPos());
      }
    }
    window.inputs.forEach(slot => calcFn(this.links, slot));
    window.outputs.forEach(slot => calcFn(this.links, slot));
  }

  //--------------------------------------------------------------------------------
  // recal window position, link position
  // window : move window
  calcWindowLayoutAll = function() {
    // nothing~
  }

  //--------------------------------------------------------------------------------
  // mouse move event handling
  onMouseMove = (e) => {
    if (this.isScroll) {
      var delta = new Vec2();
      Vec2.sub(delta, this.prevPos, new Vec2(e.offsetX, e.offsetY));
      Vec2.set2(this.prevPos, e.offsetX, e.offsetY);
      Vec2.scale(delta, delta, 1 / this.scale);
      Vec2.add(this.offset, this.offset, delta);
    }

    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);
    var selWnd = null;
    this.wnds.forEach((wnd) => {
      if (wnd.state !== WINDOW_STATE_SELECT) {
        if (wnd.isPointInRect(mousePos.x, mousePos.y))
          wnd.onMouseMove(mousePos, e);
      } else if (wnd.state === WINDOW_STATE_SELECT) {
        selWnd = wnd;
        wnd.move(mousePos.x + wnd.offset.x, mousePos.y + wnd.offset.y);
      }
    });

    if (this.editLink && this.state === EDIT_STATE_EDIT_LINK) {
      this.editLink.setP1(mousePos);
    }
    if (selWnd && (this.state === EDIT_STATE_MOVE_WINDOW)) {
      this.calcWindowLayout(selWnd);
    }

  };

  //--------------------------------------------------------------------------------
  // mouse down event handling
  onMouseDown = (e) => {
    var isSelect = false;
    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

    var selSlot = null;
    this.wnds.forEach((wnd) => {
      if (wnd.isPointInRect(mousePos.x, mousePos.y)) {
        isSelect = true;
        wnd.onMouseDown(mousePos, e);
        if (wnd.state === WINDOW_STATE_EDIT_SLOT) {
          this.state = EDIT_STATE_EDIT_LINK;
          selSlot = wnd.getSelectSlots()[0];
        } else {
          this.state = EDIT_STATE_MOVE_WINDOW;
          wnd.state = WINDOW_STATE_SELECT;
          wnd.offset.set2(wnd.rect.x - mousePos.x, wnd.rect.y - mousePos.y);
        }
      }
    });

    // scroll?
    if (!isSelect) {
      this.isScroll = true;
      this.state = EDIT_STATE_SCROLL;
      this.clickPos.set2(e.offsetX, e.offsetY);
      this.prevPos.set2(e.offsetX, e.offsetY);
    }

    // edit link
    if (selSlot && this.state === EDIT_STATE_EDIT_LINK) {
      this.editLink = new Link(
        (option = {
          from: selSlot.id,
          p0: selSlot.getPos(),
          p1: mousePos,
        })
      );
    }
  };

  //--------------------------------------------------------------------------------
  // mouse up event handling
  onMouseUp = (e) => {
    this.isScroll = false;

    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);
    var selSlot = null;
    this.wnds.forEach((wnd) => {
      wnd.state = WINDOW_STATE_NORMAL;
      if (wnd.isPointInRect(mousePos.x, mousePos.y)) {
        wnd.onMouseUp(mousePos, e);

        const slots = wnd.getHoverSlots();
        if (slots.length > 0) {
          selSlot = slots[0];
        }
      }
    });

    if (this.editLink && selSlot && (this.state === EDIT_STATE_EDIT_LINK)) {
      this.editLink.setTo(selSlot.id);
      this.editLink.setP1(selSlot.getPos());
      this.links.push(this.editLink);
    }

    this.editLink = null;
    this.state = EDIT_STATE_NORMAL;
  };

  //--------------------------------------------------------------------------------
  // mouse wheel event handling
  onMouseWheel = (e) => {
    var curPos = new Vec2();
    var mousePos = new Vec2(e.offsetX, e.offsetY);
    Vec2.scale(curPos, this.offset, this.scale);
    Vec2.add(curPos, curPos, mousePos);

    var s;
    if (e.deltaY > 0) {
      s = 0.8;
    } else {
      s = 1.2;
    }
    this.scale *= s;

    var newPos = new Vec2();
    Vec2.scale(newPos, curPos, s);

    var delta = new Vec2();
    Vec2.sub(delta, newPos, mousePos);
    Vec2.set2(this.offset, delta.x / this.scale, delta.y / this.scale);
  };

  //--------------------------------------------------------------------------------
  // return mouse original pos
  // calc zoom in/out, offset
  getOriginalPos = (x, y) => {
    var mousePos = new Vec2(x, y);
    var offsetScale = new Vec2();
    Vec2.scale(offsetScale, this.offset, this.scale);
    var curPos = new Vec2();
    Vec2.add(curPos, mousePos, offsetScale);
    Vec2.scale(curPos, curPos, 1 / this.scale); // convert to original pos
    return curPos;
  };
};
