//
// 2020-06-26, jjuiddong
// link class
//  - link slot to slot
//
// 2020-07-14
//  - TypeScript Refactoring
//
import Vec2 from './math/vec2'
import Util from './util'

export enum LinkState {
  Normal,
  Animation
}

export default class Link {
  id: number
  from: number // slot id
  to: number // slot id
  p0: Vec2 // from slot pos
  p1: Vec2 // to slot pos
  state: LinkState = LinkState.Normal
  lineOffset: number = 0

  constructor(
    id: number = -1,
    from: number = -1,
    to: number = -1,
    p0: Vec2 = new Vec2(0, 0),
    p1: Vec2 = new Vec2(0, 0),
  ) {
    this.id = (id < 0)? Util.genId() : id;
    this.from = from; // from slot id
    this.to = to; // to slot id
    this.p0 = p0; // from slot position
    this.p1 = p1; // from slot position
  }

  //--------------------------------------------------------------------------------
  // render link, bezier line
  render(ctx: CanvasRenderingContext2D) {
    var cx = (this.p0.x + this.p1.x) / 2;
    var cy = (this.p0.y + this.p1.y) / 2;
    var cp1x = Util.lerp(this.p0.x, cx, 0.5);
    var cp1y = Util.lerp(this.p0.y, cy, 0.1);
    var cp2x = Util.lerp(cx, this.p1.x, 0.5);
    var cp2y = Util.lerp(cy, this.p1.y, 0.9);

    var lineOffset = 0;
    var outLineWidth = 7;
    var innerLineWidth = 5;

    // animation
    if (this.state === LinkState.Animation) {
      this.lineOffset += 1.5;
      lineOffset = this.lineOffset;
      outLineWidth = 12;
      innerLineWidth = 10;
    }

    ctx.save();
    // outline
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = outLineWidth;
    ctx.beginPath();

    if (this.state === LinkState.Animation) {
      ctx.setLineDash([10, 10]);
      ctx.lineDashOffset = this.lineOffset;
    }

    ctx.moveTo(this.p0.x, this.p0.y);
    ctx.quadraticCurveTo(cp1x, cp1y, cx, cy);
    ctx.quadraticCurveTo(cp2x, cp2y, this.p1.x, this.p1.y);
    ctx.stroke();
    // inner line
    ctx.lineWidth = innerLineWidth;
    ctx.strokeStyle = "rgba(255,255,255,1)";
    ctx.stroke();
    ctx.restore();
  };

  //--------------------------------------------------------------------------------
  // set from slot id
  setFrom(slotId: number) {
    this.from = slotId;
  };

  //--------------------------------------------------------------------------------
  // set to slot id
  setTo(slotId: number) {
    this.to = slotId;
  };

  //--------------------------------------------------------------------------------
  // set p0 position
  // pos: Vec2
  setP0(pos: Vec2) {
    this.p0.set(pos);
  };

  //--------------------------------------------------------------------------------
  // set p1 position
  // pos: Vec2
  setP1(pos: Vec2) {
    this.p1.set(pos);
  };

  //--------------------------------------------------------------------------------
  // set animation
  // enable: true/false
  setAnimation(enable: boolean) {
    this.state = (enable) ? LinkState.Normal : LinkState.Animation;
  }

};
