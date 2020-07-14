//
// 2020-06-24, jjuiddong
// node class
//
// 2020-07-13
//  - TypeScript Refactoring
//
import Slot, { SlotType, SlotState } from './slot'
import Rect from './math/rect'
import Vec2 from './math/vec2'
import Util from './util'
import Config from './config'
import {Widgets, WidgetState} from './widgets'

export enum NodeState {
  Normal,
  Hover,
  Select,
  EditSlot,
  EditWidget,
}

export default class Node {
  id: number = 0
  isFocus: boolean = false;
  name: string
  offset: Vec2 = new Vec2(0, 0) // mouse select offset
  rect: Rect // node rect
  bodyY: number // node body rect y
  inputs: Slot[] = [] // input slots
  outputs: Slot[] = [] // output slots
  widgets: Widgets.Base[] = [] // widgets (number, text, boolean, combobox)
  state: NodeState = NodeState.Normal;

  constructor(
    id: number = -1,
    name: string = "Node",
    rect: Rect = new Rect(0, 0, 200, 200),
  ) {
    this.id = (id < 0) ? Util.genId() : id;
    this.name = name;
    this.rect = rect;
    this.bodyY = rect.y;
  }

  //--------------------------------------------------------------------------------
  // add slot
  addSlot(slot: Slot) {
    slot.node = this;
    if (slot.type === SlotType.Input) {
      this.inputs.push(slot);
    } else if (slot.type === SlotType.Output) {
      this.outputs.push(slot);
    } else {
      console.log("error!! addSlot(), slot type invalid");
    }
    this.clacSlotLayout();
  };

  //--------------------------------------------------------------------------------
  // remove slot
  // slotId: slot id
  removeSlot(slotId: number) {
    if (this.inputs.find((slot) => slotId === slot.id)) {
      this.inputs = this.inputs.filter((slot) => slotId !== slot.id);
    } else if (this.outputs.find((slot) => slotId === slot.id)) {
      this.outputs = this.outputs.filter((slot) => slotId !== slot.id);
    }
  };

  //--------------------------------------------------------------------------------
  // add widgets
  addWidget(widget:Widgets.Base) {
    widget.node = this;
    this.widgets.push(widget);
    this.clacSlotLayout();
  };

  //--------------------------------------------------------------------------------
  // render node
  // ctx: rendering context 2d
  render(ctx: CanvasRenderingContext2D) {
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
  move(x: number, y: number) {
    this.rect.x = x;
    this.rect.y = y;
  };

  //--------------------------------------------------------------------------------
  // focus node
  // focus: true/false
  setFocus(focus: boolean) {
    this.isFocus = focus;
    this.state = focus ? NodeState.Select : NodeState.Normal;
  }

  //--------------------------------------------------------------------------------
  // check x,y point in rect?
  isPointInRect(x: number, y: number): boolean {
    return this.rect.isPointInRect(x, y);
  };

  //--------------------------------------------------------------------------------
  // calc slot layout
  clacSlotLayout() {
    var i = 0;
    for (i = 0; i < this.inputs.length; ++i) {
      this.inputs[i].rect.x = 0;
      this.inputs[i].rect.y = i * Config.SLOT_HEIGHT;
    }
    for (i = 0; i < this.outputs.length; ++i) {
      this.outputs[i].rect.x = this.rect.w;
      this.outputs[i].rect.y = i * Config.SLOT_HEIGHT;
    }

    const widgetsY =
      Math.max(this.inputs.length, this.outputs.length) * Config.SLOT_HEIGHT;
    for (i = 0; i < this.widgets.length; ++i) {
      this.widgets[i].move(0, widgetsY + i * Config.SLOT_HEIGHT);
    }
  };

  //--------------------------------------------------------------------------------
  // get select slot
  getSelectSlots(): Slot[] {
    var i = this.inputs.filter((slot) => slot.state === SlotState.Select);
    var o = this.outputs.filter(
      (slot) => slot.state == SlotState.Select
    );
    return i.concat(o);
  };

  //--------------------------------------------------------------------------------
  // get hover slot
  getHoverSlots(): Slot[] {
    var i = this.inputs.filter((slot) => slot.state === SlotState.Hover);
    var o = this.outputs.filter((slot) => slot.state === SlotState.Hover);
    return i.concat(o);
  };

  //--------------------------------------------------------------------------------
  // get select widgets
  getSelectWidgets() : Widgets.Base[] {
     var sels = this.widgets.filter((widget) => widget.getState() == WidgetState.Select);
     return sels;
  };

  //--------------------------------------------------------------------------------
  // mouse move event handling
  // e: event
  onMouseMove = (mousePos: Vec2, e: MouseEvent) => {
    this.inputs.forEach((slot) => slot.onMouseMove(mousePos, e));
    this.outputs.forEach((slot) => slot.onMouseMove(mousePos, e));
    this.widgets.forEach((widget) => widget.onMouseMove(mousePos, e));
  };

  //--------------------------------------------------------------------------------
  // mouse down event handling
  onMouseDown = (mousePos: Vec2, e: MouseEvent) => {
    this.inputs.forEach((slot) => slot.onMouseDown(mousePos, e));
    this.outputs.forEach((slot) => slot.onMouseDown(mousePos, e));
    this.widgets.forEach((widget) => widget.onMouseDown(mousePos, e));

    var slots = this.getSelectSlots();
    var widgets = this.getSelectWidgets();
    if (slots.length > 0) {
      this.state = NodeState.EditSlot;
    } else if (widgets.length > 0) {
      this.state = NodeState.EditWidget;
    }
  };

  //--------------------------------------------------------------------------------
  // mouse up event handling
  onMouseUp = (mousePos: Vec2, e: MouseEvent) => {
    this.inputs.forEach((slot) => slot.onMouseUp(mousePos, e));
    this.outputs.forEach((slot) => slot.onMouseUp(mousePos, e));
    this.widgets.forEach((widget) => widget.onMouseUp(mousePos, e));
    this.state = NodeState.Normal;
  };

  //--------------------------------------------------------------------------------
  // double click event handling
  onMouseDBClick = (mousePos: Vec2, e: MouseEvent) => {
    this.inputs.forEach((slot) => slot.onMouseDBClick(mousePos, e));
    this.outputs.forEach((slot) => slot.onMouseDBClick(mousePos, e));
    this.widgets.forEach((widget) => widget.onMouseDBClick(mousePos, e));
    this.state = NodeState.Normal;
  };
};
