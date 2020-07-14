//
// 2020-06-30, jjuiddong
// widgets
//  - input number
//  - input boolean
//  - input string
//  - input combobox
//
// 2020-07-14
//  - TypeScript Refactoring
//
import Rect from './math/rect'
import Vec2 from './math/vec2'
import Util from './util'
import Config from './config'
import Node from './node'

export enum WidgetState {
  Normal,
  Hover,
  Select,
}

export enum WidgetType {
  Boolean,
  Number,
  String
}

export namespace Widgets {

  // widgets base class
  export class Base {
    id: number
    name: string
    node: Node | null = null
    type: WidgetType
    rect: Rect
    state: WidgetState = WidgetState.Normal;

    constructor(id: number, name: string, type: WidgetType, node: Node | null, rect: Rect) {
      this.id = id
      this.name = name
      this.type = type
      this.node = node;
      this.rect = rect
    }

    getValue():any {return 0}
    render(ctx: CanvasRenderingContext2D): void { }
    move(x: number, y: number): void { 
      this.rect.x = x;
      this.rect.y = y;
    }
    getState(): WidgetState {return this.state;}
    isPointInRect(x: number, y: number): boolean {return false}
    onMouseMove(mousePos: Vec2, e: MouseEvent): void {}
    onMouseDown(mousePos: Vec2, e: MouseEvent): void {}
    onMouseUp(mousePos: Vec2, e: MouseEvent): void {}
    onMouseDBClick(mousePos: Vec2, e: MouseEvent): void {}
  }

  //--------------------------------------------------------------------------------
  // Widgets.Number
  //--------------------------------------------------------------------------------
  export class Number extends Base {
    value: number = 0;
    prevPos: Vec2 = new Vec2(0, 0);

    constructor(
      id: number = -1,
      node: Node | null = null,
      name: string = "number",
      value: number = 0,
      rect: Rect = new Rect(0, 0, 100, Config.WIDGETS_HEIGHT)
    ) {
      super( (id < 0) ? Util.genId() : id, name, WidgetType.Number, node, rect);
      this.value = value;
    }

    //--------------------------------------------------------------------------------
    // Widgets.Number.getValue
    getValue():number {return this.value}

    //--------------------------------------------------------------------------------
    // Widgets.Number.render
    // ctx: rendering context 2d
    render(ctx: CanvasRenderingContext2D) {
      const node = this.node;
      if (!node)
        return;

      const x: number = node.rect.x + this.rect.x + Config.WIDGETS_MARGIN_LEFT;
      const y: number =
        node.rect.y + node.bodyY + this.rect.y + Config.WIDGETS_MARGIN_TOP;
      const w: number = node.rect.w - Config.WIDGETS_MARGIN_LEFT * 2;

      Util.roundedRect(ctx, x, y, w, this.rect.h, 1, Config.WIDGETS_BG_COLOR);

      {
        // render value
        var tx = x + w / 2; //+ Config.NODE_MARGIN_LEFT;
        var ty = y + this.rect.h - Config.WIDGETS_TEXT_BASE_OFFSET;
        ctx.font = "24px serif";
        ctx.textAlign = "center";
        ctx.fillStyle = Config.WIDGETS_TEXT_COLOR;
        ctx.fillText(`${this.value}`, tx, ty);
      }

      ctx.textAlign = "left"; // restore
    };

    //--------------------------------------------------------------------------------
    // Widgets.Number.isPointInRect
    // is contain point?
    isPointInRect(x: number, y: number): boolean {
      const node = this.node;
      if (!node)
        return false;

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
    onMouseMove = (mousePos: Vec2, e: MouseEvent) => {
      if (this.state === WidgetState.Select) {
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
    onMouseDown = (mousePos: Vec2, e: MouseEvent) => {
      if (this.isPointInRect(mousePos.x, mousePos.y)) {
        this.state = WidgetState.Select;
        this.prevPos.set2(e.offsetX, e.offsetY);
      }
    };

    //--------------------------------------------------------------------------------
    // Widgets.Number.onMouseUp
    // mouse up event handling
    onMouseUp = (mousePos: Vec2, e: MouseEvent) => {
      if (this.isPointInRect(mousePos.x, mousePos.y)) {
        this.state = WidgetState.Hover;
      } else {
        this.state = WidgetState.Normal;
      }
    };

    //--------------------------------------------------------------------------------
    // Widgets.Number.onMouseDBClick
    // double click event handling
    onMouseDBClick = (mousePos: Vec2, e: MouseEvent) => {
      if (this.isPointInRect(mousePos.x, mousePos.y)) {
        this.state = WidgetState.Select;
      }
    };
  }; // ~Widgets.Number

  //--------------------------------------------------------------------------------
  // Widgets.Boolean
  //--------------------------------------------------------------------------------
  export class Boolean extends Base {
    value: boolean = false;
    name: string = "number"
    //prevPos: Vec2 = new Vec2(0, 0);

    constructor(
      id: number = -1,
      node: Node | null = null,
      name: string = "number",
      value: boolean = false,
      rect: Rect = new Rect(0, 0, 100, Config.WIDGETS_HEIGHT)
    ) {
      super((id < 0)? Util.genId() : id, name, WidgetType.Boolean, node, rect);
      this.value = value;
    }

    //--------------------------------------------------------------------------------
    // Widgets.Boolean.getValue
    getValue():boolean {return this.value}

    //--------------------------------------------------------------------------------
    // Widgets.Boolean.render
    // ctx: rendering context 2d
    render(ctx: CanvasRenderingContext2D) {
      const node = this.node;
      if (!node)
        return;

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
        ctx.fillText(`${this.value}`, tx, ty);
      }

      ctx.textAlign = "left"; // restore
    };

    //--------------------------------------------------------------------------------
    // Widgets.Boolean.isPointInRect
    // is contain point?
    isPointInRect(x: number, y: number): boolean {
      const node = this.node;
      if (!node)
        return false;

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
    onMouseMove = (mousePos: Vec2, e: MouseEvent) => {
    };

    //--------------------------------------------------------------------------------
    // Widgets.Boolean.onMouseDown
    // mouse down event handling
    onMouseDown = (mousePos: Vec2, e: MouseEvent) => {
      if (this.isPointInRect(mousePos.x, mousePos.y)) {
        this.state = WidgetState.Select;
        //this.prevPos.set2(e.offsetX, e.offsetY);
      }
    };

    //--------------------------------------------------------------------------------
    // Widgets.Boolean.onMouseUp
    // mouse up event handling
    onMouseUp = (mousePos: Vec2, e: MouseEvent) => {
      if (this.isPointInRect(mousePos.x, mousePos.y)) {
        this.value = (this.state === WidgetState.Select) ? !this.value : this.value;
        this.state = WidgetState.Hover;
      } else {
        this.state = WidgetState.Normal;
      }
    };

    //--------------------------------------------------------------------------------
    // Widgets.Boolean.onMouseDBClick
    // double click event handling
    onMouseDBClick = (mousePos: Vec2, e: MouseEvent) => {
    };
  }; // ~Widgets.Boolean


  //--------------------------------------------------------------------------------
  // Widgets.String
  //--------------------------------------------------------------------------------
  export class String extends Base {
    value:string // string value
    //prevPos:Vec2 = new Vec2(0,0);

    constructor(
        id: number = -1,
        node:Node | null = null,
        name:string = "string",
        value:string = "empty",
        rect:Rect = new Rect(0, 0, 100, Config.WIDGETS_HEIGHT),
    ) {
      super((id < 0)? Util.genId():id, name, WidgetType.String, node, rect);
      this.value = value
    }

    //--------------------------------------------------------------------------------
    // Widgets.String.render
    getValue():string {return this.value}

    //--------------------------------------------------------------------------------
    // Widgets.String.render
    // ctx: rendering context 2d
    render(ctx:CanvasRenderingContext2D) {
      const node = this.node;
      if (!node)
        return;

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
    isPointInRect(x:number, y:number) : boolean {
      const node = this.node;
      if (!node)
        return false;

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
    onMouseMove = (mousePos:Vec2, e:MouseEvent) => {
    };

    //--------------------------------------------------------------------------------
    // Widgets.String.onMouseDown
    // mouse down event handling
    onMouseDown = (mousePos:Vec2, e:MouseEvent) => {
      if (this.isPointInRect(mousePos.x, mousePos.y)) {
        this.state = WidgetState.Select;
        //this.prevPos.set2(e.offsetX, e.offsetY);
      }
    };

    //--------------------------------------------------------------------------------
    // Widgets.String.onMouseUp
    // mouse up event handling
    onMouseUp = (mousePos:Vec2, e:MouseEvent) => {
      if (this.isPointInRect(mousePos.x, mousePos.y)) {
        //this.value = (this.state ===  WIDGET_STATE_SELECT)? !this.value : this.value;
        this.state = WidgetState.Hover;
      } else {
        this.state = WidgetState.Normal;
      }
    };

    //--------------------------------------------------------------------------------
    // Widgets.String.onMouseDBClick
    // double click event handling
    onMouseDBClick = (mousePos:Vec2, e:MouseEvent) => {
    };
  }; // ~Widgets.String

}
