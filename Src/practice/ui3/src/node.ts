//
// 2020-06-24, jjuiddong
// node class
//
//  - 2020-07-13
//    - TypeScript Refactoring
//
import Rect from './math/rect'
import Vec2 from './math/vec2'
import Util from './util'
import Config from './config'

// node state
const NODE_STATE_NORMAL = 0;
const NODE_STATE_HOVER = 1;
const NODE_STATE_SELECT = 2;
const NODE_STATE_EDIT_SLOT = 3;
const NODE_STATE_EDIT_WIDGET = 4;

export default class Node {
  id: number = 0
  isFocus:boolean = false;
  name: string
  offset: Vec2
  rect: Rect
  bodyY: number
  inputs: any[]
  outputs: any[]
  widgets: any[]
  state: number

  constructor(
    id: number|null = null,
    name: string = "Node",
    rect: Rect = new Rect(0, 0, 200, 200),
  ) {
    this.id = id || Util.genId();
    this.name = name;
    this.offset = new Vec2(0, 0); // mouse select offset
    this.rect = rect; // node rect
    this.bodyY = rect.y; // node body rect y
    this.inputs = []; // input slots
    this.outputs = []; // output slots
    this.widgets = []; // widgets (number, text, boolean, combobox)
    this.state = NODE_STATE_NORMAL;
  }

  // //--------------------------------------------------------------------------------
  // // add slot
  // addSlot = function (slot) {
  //   slot.node = this;
  //   if (slot.type === SLOT_TYPE_INPUT) {
  //     this.inputs.push(slot);
  //   } else if (slot.type === SLOT_TYPE_OUTPUT) {
  //     this.outputs.push(slot);
  //   } else {
  //     console.log("error!! addSlot(), slot type invalid");
  //   }
  //   this.clacSlotLayout();
  // };

  // //--------------------------------------------------------------------------------
  // // remove slot
  // // slotId: slot id
  // removeSlot = function (slotId) {
  //   if (this.inputs.find((slot) => slotId === slot.id)) {
  //     this.inputs = this.inputs.filter((slot) => slotId !== slot.id);
  //   } else if (this.outputs.find((slot) => slotId === slot.id)) {
  //     this.outputs = this.outputs.filter((slot) => slotId !== slot.id);
  //   }
  // };

  // //--------------------------------------------------------------------------------
  // // add widgets
  // addWidget = function (widget) {
  //   widget.node = this;
  //   this.widgets.push(widget);
  //   this.clacSlotLayout();
  // };

  //--------------------------------------------------------------------------------
  // render node
  // ctx: rendering context 2d
  render(ctx:CanvasRenderingContext2D) {
    var x = this.rect.x;
    var y = this.rect.y;
    var w = this.rect.w;
    var h = this.rect.h;

    {
      const hh = Config.TITLEBAR_HEIGHT;
      const by = y + Config.TITLEBAR_HEIGHT;
      const bh = h - Config.TITLEBAR_HEIGHT;
      Util.roundedRectHeader(
        ctx,
        x,
        y,
        w,
        hh,
        Config.NODE_ARC_RADIUS,
        this.isFocus ? Config.NODE_HEADER_COLOR2 : Config.NODE_HEADER_COLOR,
        Config.NODE_BORDER_COLOR
      );
      Util.roundedRectBody(
        ctx,
        x,
        by,
        w,
        bh,
        Config.NODE_ARC_RADIUS,
        this.isFocus ? Config.NODE_BODY_COLOR2 : Config.NODE_BODY_COLOR,
        Config.NODE_BORDER_COLOR
      );
      this.bodyY = hh;
    }

    {
      // render title text
      var tx = x + Config.NODE_MARGIN_LEFT;
      var ty = y + Config.TITLEBAR_HEIGHT - 5;
      ctx.font = "24px serif";
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillText(this.name, tx, ty);
    }

    // render input/output slot
    this.inputs.forEach((slot) => {
      slot.render(ctx);
    });
    this.outputs.forEach((slot) => {
      slot.render(ctx);
    });

    // render widgets
    this.widgets.forEach((widget) => {
      widget.render(ctx);
    });
  };

  //--------------------------------------------------------------------------------
  // move node x,y position
  move(x:number, y:number) {
    this.rect.x = x;
    this.rect.y = y;
  };

  //--------------------------------------------------------------------------------
  // focus node
  // focus: true/false
  setFocus(focus:boolean) {
    this.isFocus = focus;
    this.state = focus ? NODE_STATE_SELECT : NODE_STATE_NORMAL;
  }

  //--------------------------------------------------------------------------------
  // check x,y point in rect?
  isPointInRect(x:number, y:number) {
    return this.rect.isPointInRect(x, y);
  };

  // //--------------------------------------------------------------------------------
  // // calc slot layout
  // clacSlotLayout = function () {
  //   var i = 0;
  //   for (i = 0; i < this.inputs.length; ++i) {
  //     this.inputs[i].rect.x = 0;
  //     this.inputs[i].rect.y = i * Config.SLOT_HEIGHT;
  //   }
  //   for (i = 0; i < this.outputs.length; ++i) {
  //     this.outputs[i].rect.x = this.rect.w;
  //     this.outputs[i].rect.y = i * Config.SLOT_HEIGHT;
  //   }

  //   const widgetsY =
  //     Math.max(this.inputs.length, this.outputs.length) * Config.SLOT_HEIGHT;
  //   for (i = 0; i < this.widgets.length; ++i) {
  //     this.widgets[i].rect.x = 0;
  //     this.widgets[i].rect.y = widgetsY + i * Config.SLOT_HEIGHT;
  //   }
  // };

  // //--------------------------------------------------------------------------------
  // // get select slot
  // getSelectSlots = function () {
  //   var i = this.inputs.filter((element) => element.state == SLOT_STATE_SELECT);
  //   var o = this.outputs.filter(
  //     (element) => element.state == SLOT_STATE_SELECT
  //   );
  //   return i.concat(o);
  // };

  // //--------------------------------------------------------------------------------
  // // get hover slot
  // getHoverSlots = function () {
  //   var i = this.inputs.filter((element) => element.state == SLOT_STATE_HOVER);
  //   var o = this.outputs.filter((element) => element.state == SLOT_STATE_HOVER);
  //   return i.concat(o);
  // };

  // //--------------------------------------------------------------------------------
  // // get select widgets
  // getSelectWidgets = function () {
  //   var sels = this.widgets.filter((element) => element.state == WIDGET_STATE_SELECT);
  //   return sels;
  // };

  // //--------------------------------------------------------------------------------
  // // mouse move event handling
  // // e: event
  // onMouseMove = function (mousePos, e) {
  //   this.inputs.forEach((element) => element.onMouseMove(mousePos, e));
  //   this.outputs.forEach((element) => element.onMouseMove(mousePos, e));
  //   this.widgets.forEach((element) => element.onMouseMove(mousePos, e));
  // };

  // //--------------------------------------------------------------------------------
  // // mouse down event handling
  // onMouseDown = function (mousePos, e) {
  //   this.inputs.forEach((element) => element.onMouseDown(mousePos, e));
  //   this.outputs.forEach((element) => element.onMouseDown(mousePos, e));
  //   this.widgets.forEach((element) => element.onMouseDown(mousePos, e));

  //   var slots = this.getSelectSlots();
  //   var widgets = this.getSelectWidgets();
  //   if (slots.length > 0) {
  //     this.state = NODE_STATE_EDIT_SLOT;
  //   } else if (widgets.length > 0) {
  //     this.state = NODE_STATE_EDIT_WIDGET;
  //   }
  // };

  // //--------------------------------------------------------------------------------
  // // mouse up event handling
  // onMouseUp = function (mousePos, e) {
  //   this.inputs.forEach((element) => element.onMouseUp(mousePos, e));
  //   this.outputs.forEach((element) => element.onMouseUp(mousePos, e));
  //   this.widgets.forEach((element) => element.onMouseUp(mousePos, e));
  //   this.state = NODE_STATE_NORMAL;
  // };

  // //--------------------------------------------------------------------------------
  // // double click event handling
  // onMouseDBClick = function (mousePos, e) {
  //   this.inputs.forEach((element) => element.onMouseDBClick(mousePos, e));
  //   this.outputs.forEach((element) => element.onMouseDBClick(mousePos, e));
  //   this.widgets.forEach((element) => element.onMouseDBClick(mousePos, e));
  //   this.state = NODE_STATE_NORMAL;
  // };
};
