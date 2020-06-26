//
// 2020-06-24, jjuiddong
// window class
//

// window state
const WINDOW_STATE_NORMAL = 0;
const WINDOW_STATE_HOVER = 1;
const WINDOW_STATE_SELECT = 2;
const WINDOW_STATE_EDIT_SLOT = 1;

const Window = class {
  constructor(option = {rect:new Rect(0,0,200,200)}) {
    this.id = Util.genId();
    this.state = WINDOW_STATE_NORMAL;
    this.title = "Window";
    this.offset = new Vec2(0,0);
    this.rect = option.rect;
    this.bodyY = option.rect.y;
    this.inputs = [
      new Slot({window:this, name:"in-1", type:SLOT_TYPE_INPUT}),
      new Slot({window:this, name:"in-2", type:SLOT_TYPE_INPUT}),
      new Slot({window:this, name:"in-3", type:SLOT_TYPE_INPUT}),
    ];
    this.outputs = [
      new Slot({window:this, name:"out-1", type:SLOT_TYPE_OUTPUT}),
      new Slot({window:this, name:"out-2", type:SLOT_TYPE_OUTPUT}),
      new Slot({window:this, name:"out-3", type:SLOT_TYPE_OUTPUT}),
    ];
    this.links = [];
    this.clacSlotLayout();
  }

  //--------------------------------------------------------------------------------
  // render window
  render = function (ctx) {
    var x = this.rect.x;
    var y = this.rect.y;
    var w = this.rect.w;
    var h = this.rect.h;

    {
        const hh = Config.TITLEBAR_HEIGHT;
        const by = y + Config.TITLEBAR_HEIGHT;
        const bh = h - Config.TITLEBAR_HEIGHT;
        roundedRectHeader(ctx, x, y, w, hh, Config.WINDOW_ARC_RADIUS);
        roundedRectBody(ctx, x, by, w, bh, Config.WINDOW_ARC_RADIUS);
        this.bodyY = hh;
    }

    {
      // render title text
      var tx = x + Config.WINDOW_MARGIN_LEFT;
      var ty = y + Config.TITLEBAR_HEIGHT - 5;
      ctx.font = "24px serif";
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillText(this.title, tx, ty);
    }

    {
      // render input/output slot
      this.inputs.forEach(element => {
        element.render(ctx);
      });
      this.outputs.forEach(element => {
        element.render(ctx);
      });
    }

  };

  //--------------------------------------------------------------------------------
  // move window x,y position
  move = function (x, y) {
    this.rect.x = x;
    this.rect.y = y;
  };

  //--------------------------------------------------------------------------------
  // check x,y point in rect?
  isPointInRect = function(x, y) {
    return this.rect.isPointInRect(x,y);
  }

  //--------------------------------------------------------------------------------
  // calc slot layout
  clacSlotLayout = function() {
    var i = 0;
    for (i=0; i < this.inputs.length; ++i) {
      this.inputs[i].rect.x = 0;
      this.inputs[i].rect.y = i * Config.SLOT_HEIGHT;
    }
    for (i=0; i < this.outputs.length; ++i) {
      this.outputs[i].rect.x = this.rect.w;
      this.outputs[i].rect.y = i * Config.SLOT_HEIGHT;
    }
  }

  //--------------------------------------------------------------------------------
  // get select slot
  getSelectSlots = function() {
    var i = this.inputs.filter((element) => element.state == SLOT_STATE_SELECT);
    var o = this.outputs.filter((element) => element.state == SLOT_STATE_SELECT);
    return i.concat(o);
  }

  //--------------------------------------------------------------------------------
  // get hover slot
  getHoverSlots = function() {
    var i = this.inputs.filter((element) => element.state == SLOT_STATE_HOVER);
    var o = this.outputs.filter((element) => element.state == SLOT_STATE_HOVER);
    return i.concat(o);
  }

  //--------------------------------------------------------------------------------
  // mouse move event handling
  // e: event
  onMouseMove = function(mousePos, e) {
    this.inputs.forEach((element) => element.onMouseMove(mousePos, e));
    this.outputs.forEach((element) => element.onMouseMove(mousePos, e));
  }

  //--------------------------------------------------------------------------------
  // mouse down event handling
  // e: event
  onMouseDown = function(mousePos) {
    this.inputs.forEach((element) => element.onMouseDown(mousePos));
    this.outputs.forEach((element) => element.onMouseDown(mousePos));

    var slots = this.getSelectSlots();
    if (slots.length > 0) {
      this.state = WINDOW_STATE_EDIT_SLOT;
    }
  }

  //--------------------------------------------------------------------------------
  // mouse up event handling
  // e: event
  onMouseUp = function(mousePos) {
    this.inputs.forEach((element) => element.onMouseUp(mousePos));
    this.outputs.forEach((element) => element.onMouseUp(mousePos));

    this.state = WINDOW_STATE_NORMAL;
  }

};

//--------------------------------------------------------------------------------
// roundedRect
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

//--------------------------------------------------------------------------------
// roundedRectHeader
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

//--------------------------------------------------------------------------------
// roundedRectBody
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
