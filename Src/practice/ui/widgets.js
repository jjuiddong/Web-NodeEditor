//
// 2020-06-30, jjuiddong
// widgets
//  - input number
//  - input boolean
//  - input string
//  - input combobox
//

const WIDGET_STATE_NORMAL = 0;
const WIDGET_STATE_HOVER = 1;
const WIDGET_STATE_SELECT = 2;

const WIDGET_TYPE_BOOLEAN = 0;
const WIDGET_TYPE_NUMBER = 1;
const WIDGET_TYPE_STRING = 2;

const Widgets = class {};

//--------------------------------------------------------------------------------
// Widgets.Number
//--------------------------------------------------------------------------------
Widgets.Number = class {
  constructor(
    option = {
      id: null,
      node: null,
      name: "number",
      value: 0,
      rect: new Rect(),
    }
  ) {
    this.id = option.id || Util.genId();
    this.node = option.node; // owner node
    this.type = WIDGET_TYPE_NUMBER; // number type
    this.value = option.value || 0; // number value
    this.rect = option.rect || new Rect(0, 0, 100, Config.WIDGETS_HEIGHT);
    this.prevPos = new Vec2(0,0);
    this.state = WIDGET_STATE_NORMAL;    
  }

  //--------------------------------------------------------------------------------
  // Widgets.Number.render
  // ctx: rendering context 2d
  render = function (ctx) {
    const node = this.node;
    const x = node.rect.x + this.rect.x + Config.WIDGETS_MARGIN_LEFT;
    const y =
      node.rect.y + node.bodyY + this.rect.y + Config.WIDGETS_MARGIN_TOP;
    const w = node.rect.w - Config.WIDGETS_MARGIN_LEFT * 2;

    Util.roundedRect(ctx, x, y, w, this.rect.h, 1, Config.WIDGETS_BG_COLOR);

    {
      // render value
      var tx = x + w / 2; //+ Config.NODE_MARGIN_LEFT;
      var ty = y + this.rect.h - Config.WIDGETS_TEXT_BASE_OFFSET;
      ctx.font = "24px serif";
      ctx.textAlign = "center";
      ctx.fillStyle = Config.WIDGETS_TEXT_COLOR;
      ctx.fillText(this.value, tx, ty);
    }

    ctx.textAlign = "left"; // restore
  };

  //--------------------------------------------------------------------------------
  // Widgets.Number.isPointInRect
  // is contain point?
  isPointInRect = function (x, y) {
    const node = this.node;
    const xx = node.rect.x + this.rect.x + Config.WIDGETS_MARGIN_LEFT;
    const yy =
      node.rect.y + node.bodyY + this.rect.y + Config.WIDGETS_MARGIN_TOP;
    const w = node.rect.w - Config.WIDGETS_MARGIN_LEFT * 2;
    const h = this.rect.h;

    const rect = new Rect(xx, yy, w, h);
    return rect.isPointInRect(x, y);
  };

  //--------------------------------------------------------------------------------
  // Widgets.Number.onMouseMove
  // mouse move event handling
  // e: event
  onMouseMove = function (mousePos, e) {
    if (this.state === WIDGET_STATE_SELECT) {
      // const curPos = new Vec2(e.offsetX, e.offsetY);
      // const delta = new Vec2(0,0);
      // Vec2.sub(delta, curPos, this.prevPos);
      // this.prevPos.set(curPos);
      // this.value += delta.x;
    }
  };

  //--------------------------------------------------------------------------------
  // Widgets.Number.onMouseDown
  // mouse down event handling
  onMouseDown = function (mousePos, e) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = WIDGET_STATE_SELECT;
      this.prevPos.set2(e.offsetX, e.offsetY);
    }
  };

  //--------------------------------------------------------------------------------
  // Widgets.Number.onMouseUp
  // mouse up event handling
  onMouseUp = function (mousePos, e) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = WIDGET_STATE_HOVER;
    } else {
      this.state = WIDGET_STATE_NORMAL;
    }
  };

  //--------------------------------------------------------------------------------
  // Widgets.Number.onMouseDBClick
  // double click event handling
  onMouseDBClick = function (mousePos, e) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = WIDGET_STATE_SELECT;
    }
  };  
}; // ~Widgets.Number

//--------------------------------------------------------------------------------
// Widgets.Boolean
//--------------------------------------------------------------------------------
Widgets.Boolean = class {
  constructor(
    option = {
      node: null,
      name: "number",
      value: false,
      rect: new Rect(),
    }
  ) {
    this.id = Util.genId();
    this.node = option.node; // owner node
    this.type = WIDGET_TYPE_BOOLEAN; // boolean type
    this.value = option.value || false; // boolean value
    this.rect = option.rect || new Rect(0, 0, 100, Config.WIDGETS_HEIGHT);
    this.prevPos = new Vec2(0,0);
    this.state = WIDGET_STATE_NORMAL;    
  }

  //--------------------------------------------------------------------------------
  // Widgets.Boolean.render
  // ctx: rendering context 2d
  render = function (ctx) {
    const node = this.node;
    const x = node.rect.x + this.rect.x + Config.WIDGETS_MARGIN_LEFT;
    const y =
      node.rect.y + node.bodyY + this.rect.y + Config.WIDGETS_MARGIN_TOP;
    const w = node.rect.w - Config.WIDGETS_MARGIN_LEFT * 2;

    Util.roundedRect(ctx, x, y, w, this.rect.h, 1, Config.WIDGETS_BG_COLOR);

    {
      // render value
      var tx = x + w / 2; //+ Config.NODE_MARGIN_LEFT;
      var ty = y + this.rect.h - Config.WIDGETS_TEXT_BASE_OFFSET;
      ctx.font = "24px serif";
      ctx.textAlign = "center";
      ctx.fillStyle = Config.WIDGETS_TEXT_COLOR;
      ctx.fillText(this.value, tx, ty);
    }

    ctx.textAlign = "left"; // restore
  };

  //--------------------------------------------------------------------------------
  // Widgets.Boolean.isPointInRect
  // is contain point?
  isPointInRect = function (x, y) {
    const node = this.node;
    const xx = node.rect.x + this.rect.x + Config.WIDGETS_MARGIN_LEFT;
    const yy =
      node.rect.y + node.bodyY + this.rect.y + Config.WIDGETS_MARGIN_TOP;
    const w = node.rect.w - Config.WIDGETS_MARGIN_LEFT * 2;
    const h = this.rect.h;

    const rect = new Rect(xx, yy, w, h);
    return rect.isPointInRect(x, y);
  };

  //--------------------------------------------------------------------------------
  // Widgets.Boolean.onMouseMove
  // mouse move event handling
  // e: event
  onMouseMove = function (mousePos, e) {
  };

  //--------------------------------------------------------------------------------
  // Widgets.Boolean.onMouseDown
  // mouse down event handling
  onMouseDown = function (mousePos, e) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = WIDGET_STATE_SELECT;
      this.prevPos.set2(e.offsetX, e.offsetY);
    }
  };

  //--------------------------------------------------------------------------------
  // Widgets.Boolean.onMouseUp
  // mouse up event handling
  onMouseUp = function (mousePos, e) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.value = (this.state ===  WIDGET_STATE_SELECT)? !this.value : this.value;
      this.state = WIDGET_STATE_HOVER;
    } else {
      this.state = WIDGET_STATE_NORMAL;
    }
  };

  //--------------------------------------------------------------------------------
  // Widgets.Boolean.onMouseDBClick
  // double click event handling
  onMouseDBClick = function (mousePos, e) {
  };
}; // ~Widgets.Boolean

//--------------------------------------------------------------------------------
// Widgets.String
//--------------------------------------------------------------------------------
Widgets.String = class {
  constructor(
    option = {
      node: null,
      name: "number",
      value: "empty",
      rect: new Rect(),
    }
  ) {
    this.id = Util.genId();
    this.node = option.node; // owner node
    this.type = WIDGET_TYPE_STRING; // string type
    this.value = option.value || "empty"; // string value
    this.rect = option.rect || new Rect(0, 0, 100, Config.WIDGETS_HEIGHT);
    this.prevPos = new Vec2(0,0);
    this.state = WIDGET_STATE_NORMAL;    
  }

  //--------------------------------------------------------------------------------
  // Widgets.String.render
  // ctx: rendering context 2d
  render = function (ctx) {
    const node = this.node;
    const x = node.rect.x + this.rect.x + Config.WIDGETS_MARGIN_LEFT;
    const y =
      node.rect.y + node.bodyY + this.rect.y + Config.WIDGETS_MARGIN_TOP;
    const w = node.rect.w - Config.WIDGETS_MARGIN_LEFT * 2;

    Util.roundedRect(ctx, x, y, w, this.rect.h, 1, Config.WIDGETS_BG_COLOR);

    {
      // render value
      var tx = x + w / 2; //+ Config.NODE_MARGIN_LEFT;
      var ty = y + this.rect.h - Config.WIDGETS_TEXT_BASE_OFFSET;
      ctx.font = "24px serif";
      ctx.textAlign = "center";
      ctx.fillStyle = Config.WIDGETS_TEXT_COLOR;
      ctx.fillText(this.value, tx, ty);
    }

    ctx.textAlign = "left"; // restore
  };

  //--------------------------------------------------------------------------------
  // Widgets.String.isPointInRect
  // is contain point?
  isPointInRect = function (x, y) {
    const node = this.node;
    const xx = node.rect.x + this.rect.x + Config.WIDGETS_MARGIN_LEFT;
    const yy =
      node.rect.y + node.bodyY + this.rect.y + Config.WIDGETS_MARGIN_TOP;
    const w = node.rect.w - Config.WIDGETS_MARGIN_LEFT * 2;
    const h = this.rect.h;

    const rect = new Rect(xx, yy, w, h);
    return rect.isPointInRect(x, y);
  };

  //--------------------------------------------------------------------------------
  // Widgets.String.onMouseMove
  // mouse move event handling
  // e: event
  onMouseMove = function (mousePos, e) {
  };

  //--------------------------------------------------------------------------------
  // Widgets.String.onMouseDown
  // mouse down event handling
  onMouseDown = function (mousePos, e) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = WIDGET_STATE_SELECT;
      this.prevPos.set2(e.offsetX, e.offsetY);
    }
  };

  //--------------------------------------------------------------------------------
  // Widgets.String.onMouseUp
  // mouse up event handling
  onMouseUp = function (mousePos, e) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      //this.value = (this.state ===  WIDGET_STATE_SELECT)? !this.value : this.value;
      this.state = WIDGET_STATE_HOVER;
    } else {
      this.state = WIDGET_STATE_NORMAL;
    }
  };

  //--------------------------------------------------------------------------------
  // Widgets.String.onMouseDBClick
  // double click event handling
  onMouseDBClick = function (mousePos, e) {
  };
}; // ~Widgets.String
