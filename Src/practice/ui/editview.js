//
// 2020-06-25, jjuiddong
// Node Editor View class
//  - render canvas
//  - render node
//
const EDIT_STATE_NORMAL = 0;
const EDIT_STATE_SCROLL = 1;
const EDIT_STATE_MOVE_NODE = 2;
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

    // test code
    var node1 = new Node((option = { rect: new Rect(1110, 1210, 200, 200) }));
    var node2 = new Node((option = { rect: new Rect(1510, 1310, 200, 200) }));
    this.nodes = [node1, node2];
    //~

    canvas.addEventListener("mousemove", this.onMouseMove);
    canvas.addEventListener("mousedown", this.onMouseDown);
    canvas.addEventListener("mouseup", this.onMouseUp);
    canvas.addEventListener("dblclick", this.onMouseDBClick);
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
    // render nodes
    this.nodes.forEach((node) => node.render(ctx));

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
  // get slot
  getSlotInNode = function (node, slotId) {
    var result1 = node.inputs.filter((slot) => slot.id === slotId);
    if (result1.length > 0) return result1[0];
    var result2 = node.outputs.filter((slot) => slot.id === slotId);
    if (result2.length > 0) return result2[0];
  };

  //--------------------------------------------------------------------------------
  // get slot
  // return slot has slotId
  getSlot = function (slotId) {
    var slot = null;
    this.nodes.forEach((node) => {
      var result = this.getSlotInNode(node, slotId);
      if (result) {
        slot = result;
      }
    });
    return slot;
  };

  //--------------------------------------------------------------------------------
  // get node from slot
  // return node has slot
  getNodeFromSlot = function (slotId) {
    var nodeHasSlot = null;
    this.nodes.forEach((node) => {
      var result = this.getSlotInNode(node, slotId);
      if (result) {
        nodeHasSlot = node;
      }
    });
    return nodeHasSlot;
  };

  //--------------------------------------------------------------------------------
  // get link has slot
  // return link array
  getLinkFromSlot = function (slotId) {
    const links = this.links.filter(
      (link) => link.from === slotId || link.to === slotId
    );
    return links;
  };

  //--------------------------------------------------------------------------------
  // recalc link from,to position
  // node : move node
  calcNodeLayout = function (node) {
    var calcFn = (links, slot) => {
      var link1 = links.filter((link) => link.to === slot.id);
      link1.forEach((link) => link.setP1(slot.getPos()));
      var link2 = links.filter((link) => link.from === slot.id);
      link2.forEach((link) => link.setP0(slot.getPos()));
    };
    node.inputs.forEach((slot) => calcFn(this.links, slot));
    node.outputs.forEach((slot) => calcFn(this.links, slot));
  };

  //--------------------------------------------------------------------------------
  // recal node position, link position
  // node : move node
  calcNodeLayoutAll = function () {
    // nothing~
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
    var selNode = null;
    this.nodes.forEach((node) => {
      if (node.state !== NODE_STATE_SELECT) {
        if (node.isPointInRect(mousePos.x, mousePos.y))
          node.onMouseMove(mousePos, e);
      } else if (node.state === NODE_STATE_SELECT) {
        selNode = node;
        node.move(mousePos.x + node.offset.x, mousePos.y + node.offset.y);
      }
    });

    if (this.editLink && this.state === EDIT_STATE_EDIT_LINK) {
      this.editLink.setP1(mousePos);
    }
    if (selNode && this.state === EDIT_STATE_MOVE_NODE) {
      this.calcNodeLayout(selNode);
    }
  };

  //--------------------------------------------------------------------------------
  // mouse down event handling
  onMouseDown = (e) => {
    var isSelect = false;
    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

    var selSlot = null;
    this.nodes.forEach((node) => {
      if (node.isPointInRect(mousePos.x, mousePos.y)) {
        isSelect = true;
        node.onMouseDown(mousePos);
        if (node.state === NODE_STATE_EDIT_SLOT) {
          this.state = EDIT_STATE_EDIT_LINK;
          selSlot = node.getSelectSlots()[0];
        } else {
          this.state = EDIT_STATE_MOVE_NODE;
          node.state = NODE_STATE_SELECT;
          node.offset.set2(node.rect.x - mousePos.x, node.rect.y - mousePos.y);
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
    this.nodes.forEach((node) => {
      node.state = NODE_STATE_NORMAL;
      if (node.isPointInRect(mousePos.x, mousePos.y)) {
        node.onMouseUp(mousePos);

        const slots = node.getHoverSlots();
        if (slots.length > 0) {
          selSlot = slots[0];
        }
      }
    });

    // create link?
    if (this.editLink && selSlot && this.state === EDIT_STATE_EDIT_LINK) {
      this.editLink.setTo(selSlot.id);
      this.editLink.setP1(selSlot.getPos());

      const frSlot = this.getSlot(this.editLink.from);
      const toSlot = this.getSlot(this.editLink.to);
      const frNode = this.getNodeFromSlot(this.editLink.from);
      const toNode = this.getNodeFromSlot(this.editLink.to);

      const existLink = this.links.find(
        (link) =>
          (link.from === this.editLink.from && link.to === this.editLink.to) ||
          (link.to === this.editLink.from && link.from === this.editLink.to)
      );

      // check valid link?
      if (
        !this.editLink.to ||
        !this.editLink.from ||
        this.editLink.to === this.editLink.from ||
        frNode === toNode ||
        existLink ||
        !frSlot ||
        !toSlot ||
        (frSlot && toSlot && frSlot.type === toSlot.type)
      ) {
        // invalid link, ignore
      } else {
        // valid link
        // exchange from=input, to=output
        const input = (frSlot.type === SLOT_TYPE_INPUT)? frSlot : toSlot;
        const output = (toSlot.type === SLOT_TYPE_OUTPUT)? toSlot : frSlot;
        this.editLink.setFrom(input.id);
        this.editLink.setP0(input.getPos());
        this.editLink.setTo(output.id);
        this.editLink.setP1(output.getPos());

        frSlot.setLink(true);
        toSlot.setLink(true);
        this.links.push(this.editLink);
      }
    }

    this.editLink = null;
    this.state = EDIT_STATE_NORMAL;
  };

  //--------------------------------------------------------------------------------
  // mouse up event handling
  onMouseDBClick = (e) => {
    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

    var selSlot = null;
    this.nodes.forEach((node) => {
      node.state = NODE_STATE_NORMAL;
      if (node.isPointInRect(mousePos.x, mousePos.y)) {
        node.onMouseDBClick(mousePos);

        const slots = node.getSelectSlots();
        if (slots.length > 0) {
          selSlot = slots[0];
        }
      }
    });

    // remove select slot link
    if (selSlot) {
      var rmLinks = this.getLinkFromSlot(selSlot.id);
      this.links = this.links.filter(
        (link) => !rmLinks.find((r) => r.id === link.id)
      );

      // refresh slot state
      rmLinks.forEach((link) => {
        var frSlot = this.getSlot(link.from);
        var toSlot = this.getSlot(link.to);
        if (frSlot) {
          frSlot.setLink(this.getLinkFromSlot(frSlot.id).length !== 0);
        }
        if (toSlot) {
          toSlot.setLink(this.getLinkFromSlot(toSlot.id).length !== 0);
        }
      });
    }
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
};
