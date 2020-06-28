//
// 2020-06-26, jjuiddong
// link class
//  - link slot to slot
//
const Link = class {
  constructor(
    option = {
      id: null,
      from: 0,
      to: 0,
      p0: new Vec2(0, 0),
      p1: new Vec2(0, 0),
    }
  ) {
    this.id = option.id || Util.genId();
    this.from = option.from || 0; // from slot id
    this.to = option.to || 0; // to slot id
    this.p0 = option.p0 || new Vec2(0, 0); // from slot position
    this.p1 = option.p1 || new Vec2(0, 0); // from slot position
  }

  //--------------------------------------------------------------------------------
  // render link, bezier line
  render = function (ctx) {
    var cx = (this.p0.x + this.p1.x) / 2;
    var cy = (this.p0.y + this.p1.y) / 2;
    var cp1x = Util.lerp(this.p0.x, cx, 0.5);
    var cp1y = Util.lerp(this.p0.y, cy, 0.1);
    var cp2x = Util.lerp(cx, this.p1.x, 0.5);
    var cp2y = Util.lerp(cy, this.p1.y, 0.9);

    // outline
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(this.p0.x, this.p0.y);
    ctx.quadraticCurveTo(cp1x, cp1y, cx, cy);
    ctx.quadraticCurveTo(cp2x, cp2y, this.p1.x, this.p1.y);
    ctx.stroke();
    // inner line
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(255,255,255,1)";
    ctx.stroke();
  };

  //--------------------------------------------------------------------------------
  // set from slot id
  setFrom = function (slotId) {
    this.from = slotId;
  };

  //--------------------------------------------------------------------------------
  // set to slot id
  setTo = function (slotId) {
    this.to = slotId;
  };

  //--------------------------------------------------------------------------------
  // set p0 position
  // pos: Vec2
  setP0 = function (pos) {
    this.p0.set(pos);
  };

  //--------------------------------------------------------------------------------
  // set p1 position
  // pos: Vec2
  setP1 = function (pos) {
    this.p1.set(pos);
  };
};
