//
// 2020-06-25, jjuiddong
// Slot class
//
// 2020-07-14
//  - TypeScript Refactoring
//
import Node from './node'
import Rect from './math/rect'
import Util from './util'
import Config from './config'
import Vec2 from './math/vec2';

export enum SlotType {
  Input,
  Output
}

export enum SlotState {
  Normal,
  Hover,
  Select
}

export default class Slot {
  id: number
  name: string
  type: SlotType
  node: Node | null // owner node
  rect: Rect
  hasLink: boolean
  state: SlotState

  constructor(
    id: number = -1,
    node: Node | null = null,
    name: string = "slot",
    type: SlotType = SlotType.Input,
    rect: Rect = new Rect(0, 0, 0, 0),
  ) {
    this.id = (id < 0) ? Util.genId() : id;
    this.node = node; // slot owner node
    this.name = name;
    this.type = type;
    this.rect = new Rect(0, 0, 0, 0);
    this.hasLink = false; // slot has link?
    this.state = SlotState.Normal;
  }

  //--------------------------------------------------------------------------------
  // ctx: 2d rendering context
  // node: parent node
  render(ctx: CanvasRenderingContext2D) {
    if (!this.node)
      return;

    var node: Node = this.node;
    const x = node.rect.x + this.rect.x;
    const y = node.rect.y + node.bodyY + this.rect.y;
    const center = y + Config.SLOT_HEIGHT / 2; // slot center
    const iconR = Config.SLOT_ICON_RADIUS; // icon radius
    const iconW = Config.SLOT_ICON_SPACE_WIDTH;

    var cx = x; // cursor x
    var cy = y; // cursor y

    if (this.type === SlotType.Input) {
      cx += Config.SLOT_MARGIN_LEFT;
      cx += iconR;
    } else if (this.type === SlotType.Output) {
      cx -= Config.SLOT_MARGIN_LEFT;
      cx -= iconR;
    }

    {
      // render slot icon
      switch (this.state) {
        case SlotState.Normal:
          ctx.fillStyle = this.hasLink
            ? Config.SLOT_ICON_COLOR_LINK
            : Config.SLOT_ICON_COLOR_NORMAL;
          break;
        case SlotState.Hover:
          ctx.fillStyle = Config.SLOT_ICON_COLOR_HOVER;
          break;
        case SlotState.Select:
          ctx.fillStyle = Config.SLOT_ICON_COLOR_SELECT;
          break;
      }

      //ctx.fillStyle =  Config.SLOT_ICON_COLOR;
      const sy = center;
      ctx.beginPath();
      ctx.arc(cx, sy, iconR, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    if (this.type === SlotType.Input) {
      cx += iconR + 5;
      ctx.textAlign = "left";
    } else if (this.type === SlotType.Output) {
      cx -= iconR + 5;
      ctx.textAlign = "right";
    }

    {
      // render slot name
      ctx.font = "24px serif";
      ctx.fillStyle = "rgba(0,0,0,1)";
      //var tx = x + iconW + Config.SLOT_MARGIN_LEFT;
      //var tx = cx;
      var ty = y + Config.SLOT_HEIGHT - Config.SLOT_TEXT_BASE_OFFSET;
      ctx.fillText(this.name, cx, ty);
    }

    ctx.textAlign = "left"; // restore
  };

  //--------------------------------------------------------------------------------
  setRect(rect: Rect) {
    this.rect.set(rect);
  };

  //--------------------------------------------------------------------------------
  // set hasLink
  setLink(hasLink: boolean) {
    this.hasLink = hasLink;
  }

  //--------------------------------------------------------------------------------
  // return slot icon positon
  getPos(): Vec2 {
    if (!this.node)
      return new Vec2(0, 0)

    const node: Node = this.node;
    const left = node.rect.x + this.rect.x;
    const top = node.rect.y + node.bodyY + this.rect.y;
    const iconR = Config.SLOT_ICON_RADIUS; // icon radius
    var cx = left;
    const center = top + Config.SLOT_HEIGHT / 2; // slot center

    if (this.type === SlotType.Input) {
      cx += Config.SLOT_MARGIN_LEFT;
      cx += iconR;
    } else if (this.type === SlotType.Output) {
      cx -= Config.SLOT_MARGIN_LEFT;
      cx -= iconR;
    }

    return new Vec2(cx, center);
  };

  //--------------------------------------------------------------------------------
  // is contain point?
  isPointInRect(x: number, y: number): boolean {
    if (!this.node)
      return false;

    const node = this.node;
    const left = node.rect.x + this.rect.x;
    const top = node.rect.y + node.bodyY + this.rect.y;
    const iconW = Config.SLOT_ICON_SPACE_WIDTH;
    var cx = left;

    if (this.type === SlotType.Input) {
      cx += Config.SLOT_MARGIN_LEFT;
      //cx += iconR;
    } else if (this.type === SlotType.Output) {
      cx -= Config.SLOT_MARGIN_LEFT;
      cx -= iconW;
    }

    const rect = new Rect(cx, top, iconW, Config.SLOT_HEIGHT);
    return rect.isPointInRect(x, y);
  };

  //--------------------------------------------------------------------------------
  // mouse move event handling
  // e: event
  onMouseMove(mousePos: Vec2, e: MouseEvent) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      if (this.state !== SlotState.Select) this.state = SlotState.Hover;
    } else {
      this.state = SlotState.Normal;
    }
  };

  //--------------------------------------------------------------------------------
  // mouse down event handling
  onMouseDown(mousePos: Vec2, e: MouseEvent) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = SlotState.Select;
    }
  };

  //--------------------------------------------------------------------------------
  // mouse up event handling
  onMouseUp(mousePos: Vec2, e: MouseEvent) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = SlotState.Hover;
    } else {
      this.state = SlotState.Normal;
    }
  };

  //--------------------------------------------------------------------------------
  // double click event handling
  onMouseDBClick(mousePos: Vec2, e: MouseEvent) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = SlotState.Select;
    }
  };
};
