//
// 2020-06-25, jjuiddong
// Node Editor View class
//  - render canvas
//  - render node
//  - render link
//
const EDIT_STATE_NORMAL = 0;
const EDIT_STATE_SCROLL = 1;
const EDIT_STATE_MOVE_NODE = 2;
const EDIT_STATE_EDIT_LINK = 3;
const EDIT_STATE_EDIT_WIDGET = 4;

const EditView = class {
  constructor(ctx, option = { width: 800, height: 600 }) {
    this.state = EDIT_STATE_NORMAL;
    this.ctx = ctx; // rendering context 2d
    this.isFocus = false; // focus?
    this.width = option.width; // view width
    this.height = option.height; // view height
    this.offset = new Vec2(1000, 1000); // canvas scroll offset
    this.scale = 1; // canvas scaling
    this.size = new Vec2(2000, 2000); // total editor canvas size
    this.isScroll = false; // mouse click scroll?
    this.clickPos = new Vec2(0, 0); // click pos, view space position
    this.prevPos = new Vec2(0, 0); // previous pos, view space position
    this.mousePos = new Vec2(0, 0); // click pos, canvas space position
    this.pattern; // background image pattern
    this.img = new Image(); // background image
    this.img.onload = () => {
      this.pattern = ctx.createPattern(this.img, "repeat");
    };
    this.img.src = "imgs/grid.png";
    this.editLink = null; // current edit link
    this.editWidget = null; // current edit widget
    this.links = []; // all link
    this.nodes = []; // all node
    this.menu = null; // context menu
    this.input = new Popup.Input(); // input popup
    this.prompt = new Popup.Prompt(); // prompt popup

    var menu = new ContextMenu();
    menu.addMenu("Add");
    menu.addMenu("Remove", this.onRemove);
    menu.addMenu("Group", () => console.log("Group"));
    menu.addSubMenu("Add", "Variable");
    menu.addSubMenu("Add", "Function");
    menu.addSubMenu("Add&Variable", "Boolean", () =>
      this.nodes.push(SpawnNode.Boolean(this.mousePos))
    );
    menu.addSubMenu("Add&Variable", "Number", () =>
      this.nodes.push(SpawnNode.Number(this.mousePos))
    );
    menu.addSubMenu("Add&Variable", "String", () =>
      this.nodes.push(SpawnNode.String(this.mousePos))
    );

    menu.addSubMenu("Add&Function", "Node1", () =>
      this.nodes.push(SpawnNode.Node1(this.mousePos))
    );
    menu.addSubMenu("Add&Function", "Node2", () =>
      this.nodes.push(SpawnNode.Node2(this.mousePos))
    );
    menu.addSubMenu("Add&Function", "Node3", () =>
      this.nodes.push(SpawnNode.Node3(this.mousePos))
    );
    menu.addSubMenu("Add&Function", "Node4");
    menu.addSubMenu("Add&Function", "Console", () =>
      this.nodes.push(SpawnNode.Console(this.mousePos))
    );
    this.menu = menu;

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

    // render link
    this.links.forEach((link) => link.render(ctx));
    // render nodes
    this.nodes.forEach((node) => node.render(ctx));
    if (this.editLink) this.editLink.render(ctx);

    ctx.restore();

    // debugging information
    {
      var ty = 30;
      ctx.font = "20px serif";
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.fillText(
        "Scroll : " +
          this.offset.x.toFixed(2) +
          ", " +
          this.offset.y.toFixed(2),
        0,
        (ty += 24)
      );
      ctx.fillText("Zoom : " + this.scale.toFixed(2), 0, (ty += 24));
      ctx.fillText("State : " + this.state, 0, (ty += 24));
    }
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
  // add link
  // link: Link instance
  addLink = function(newLink) {
    //this.editLink.setTo(selSlot.id);
    //this.editLink.setP1(selSlot.getPos());
    const frSlot = this.getSlot(newLink.from);
    const toSlot = this.getSlot(newLink.to);
    const frNode = this.getNodeFromSlot(newLink.from);
    const toNode = this.getNodeFromSlot(newLink.to);

    const existLink = this.links.find(
      (link) =>
        (link.from === newLink.from && link.to === newLink.to) ||
        (link.to === newLink.from && link.from === newLink.to)
    );

    // check valid link?
    if (
      !newLink.to ||
      !newLink.from ||
      newLink.to === newLink.from ||
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
      const input = frSlot.type === SLOT_TYPE_INPUT ? frSlot : toSlot;
      const output = toSlot.type === SLOT_TYPE_OUTPUT ? toSlot : frSlot;
      newLink.setFrom(input.id);
      newLink.setP0(input.getPos());
      newLink.setTo(output.id);
      newLink.setP1(output.getPos());

      frSlot.setLink(true);
      toSlot.setLink(true);
      this.links.push(newLink);
    }
  }

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
  // Remove Links
  // rmLinks: array link
  removeLinks = function (rmLinks) {
    // remove link
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
  };

  //--------------------------------------------------------------------------------
  // close document
  // remove node, link, etc
  closeDocument = function () {
    this.nodes = [];
    this.links = [];
    this.editLink = null;
    this.editWidget = null;
    this.input.close();
  }

  //--------------------------------------------------------------------------------
  // save node data to database
  saveDB = function () {
    this.prompt.open('Input Title', 'nodeTitleName', (value) => {
      EditView_Ver1.saveDB(this, value);
    });
  };

  //--------------------------------------------------------------------------------
  // load node data from database
  loadDB = function () {
     this.prompt.open('Input Title', 'nodeTitleName', (value) => {
       EditView_Ver1.loadFromDB(this, value);
     });
  };

  //--------------------------------------------------------------------------------
  // save node data to local storage
  saveLocalStorage = function () {
     EditView_Ver1.saveLocalStorage(this, 'title');
  };

  //--------------------------------------------------------------------------------
  // load node data from local storage
  loadLocalStorage = function () {
    EditView_Ver1.loadFromLocalStorage(this);
  };

  //--------------------------------------------------------------------------------
  // Context Menu Remove
  // remove select nodes
  onRemove = () => {
    // collect remove link
    var rmLinks = [];
    for (var node of this.nodes) {
      if (node.isFocus) {
        for (var slot of node.inputs) {
          rmLinks = rmLinks.concat(this.getLinkFromSlot(slot.id));
        }
        for (var slot of node.outputs) {
          rmLinks = rmLinks.concat(this.getLinkFromSlot(slot.id));
        }
      }
    }
    this.removeLinks(rmLinks);

    // remove node
    this.nodes = this.nodes.filter((node) => !node.isFocus);
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
      if (node.state === NODE_STATE_SELECT) {
        selNode = node;
        node.move(mousePos.x + node.offset.x, mousePos.y + node.offset.y);
        if (this.state === EDIT_STATE_MOVE_NODE) this.calcNodeLayout(selNode);
      }
      if (node.state === NODE_STATE_EDIT_WIDGET) {
        // nothing~
      } else {
        if (node.isPointInRect(mousePos.x, mousePos.y))
          node.onMouseMove(mousePos, e);
      }
    });

    if (this.editLink && this.state === EDIT_STATE_EDIT_LINK) {
      this.editLink.setP1(mousePos);
    }
    if (this.editWidget && this.state === EDIT_STATE_EDIT_WIDGET) {
      this.editWidget.onMouseMove(mousePos, e);
    }
  };

  //--------------------------------------------------------------------------------
  // mouse down event handling
  onMouseDown = (e) => {
    if (e.button === 0) {
      this.onMouseLeftDown(e);
    }
  };

  //--------------------------------------------------------------------------------
  // mouse left button down event handling
  onMouseLeftDown = (e) => {
    this.menu.close();
    var isSelect = false;
    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

    var selSlot = null;
    var selWidget = null;
    this.nodes.forEach((node) => {
      if (node.isPointInRect(mousePos.x, mousePos.y)) {
        isSelect = true;
        node.onMouseDown(mousePos, e);
        if (node.state === NODE_STATE_EDIT_SLOT) {
          this.state = EDIT_STATE_EDIT_LINK;
          selSlot = node.getSelectSlots()[0];
        } else if (node.state === NODE_STATE_EDIT_WIDGET) {
          this.state = EDIT_STATE_EDIT_WIDGET;
          selWidget = node.getSelectWidgets()[0];
        } else {
          this.state = EDIT_STATE_MOVE_NODE;
          node.setFocus(true);
          node.offset.set2(node.rect.x - mousePos.x, node.rect.y - mousePos.y);
        }
      } else {
        node.isFocus = false;
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

    // eidt widget
    if (selWidget && this.state === EDIT_STATE_EDIT_WIDGET) {
      this.editWidget = selWidget;
    }
  };

  //--------------------------------------------------------------------------------
  // mouse up event handling
  onMouseUp = (e) => {
    if (e.button === 0) {
      this.onMouseLeftUp(e);
    } else if (e.button === 2) {
      // mouse right button down
      const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);
      this.mousePos.set(mousePos);

      // check focus node
      const nodes = this.nodes.filter((node) => node.isFocus);
      this.menu.setMenuEnable("Remove", nodes.length > 0);

      this.menu.open(e.offsetX + 5, e.offsetY + 5);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  };

  //--------------------------------------------------------------------------------
  // mouse left up event handling
  onMouseLeftUp = (e) => {
    this.isScroll = false;
    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

    var selSlot = null;
    var selWidget = null;
    this.nodes.forEach((node) => {
      const isInRect = node.isPointInRect(mousePos.x, mousePos.y);
      if (node.state !== NODE_STATE_NORMAL) {
        if (isInRect) {
          const widgets = node.getSelectWidgets();
          if (widgets.length > 0) {
            selWidget = widgets[0];
          }
        }
        node.onMouseUp(mousePos, e);
      } else if (isInRect) {
        node.onMouseUp(mousePos, e);

        const slots = node.getHoverSlots();
        if (slots.length > 0) {
          selSlot = slots[0];
        }
      }
    });

    // create link?
    if (this.editLink && selSlot && this.state === EDIT_STATE_EDIT_LINK) {
      this.editLink.setTo(selSlot.id);
      this.addLink(this.editLink);
    }

    // eidt widget?
    if (selWidget && this.editWidget && this.state === EDIT_STATE_EDIT_WIDGET) {
      if (!(selWidget instanceof Widgets.Boolean)) {
        this.input.open(this.editWidget, e.offsetX, e.offsetY);
      }
    }

    this.editLink = null;
    this.editWidget = null;
    this.state = EDIT_STATE_NORMAL;
  };

  //--------------------------------------------------------------------------------
  // mouse up event handling
  onMouseDBClick = (e) => {
    const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

    var selSlot = null;
    this.nodes.forEach((node) => {
      if (node.isPointInRect(mousePos.x, mousePos.y)) {
        node.onMouseDBClick(mousePos, e);

        const slots = node.getSelectSlots();
        if (slots.length > 0) {
          selSlot = slots[0];
        }
      }
    });

    // remove select slot link
    if (selSlot) {
      var rmLinks = this.getLinkFromSlot(selSlot.id);
      this.removeLinks(rmLinks);
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
