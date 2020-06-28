//
// 2020-06-25, jjuiddong
// Slot class
//

// slot type
const SLOT_TYPE_INPUT = 0;
const SLOT_TYPE_OUTPUT = 1;

// slot state
const SLOT_STATE_NORMAL = 0;
const SLOT_STATE_HOVER = 1;
const SLOT_STATE_SELECT = 2;

// slot type
const Slot = class {
  constructor(
    option = {
      node: null,
      id: null,
      name: "slot",
      type: SLOT_TYPE_INPUT,
      rect: new Rect(),
    }
  ) {
    this.state = SLOT_STATE_NORMAL;
    this.node = option.node;
    this.id = option.id || Util.genId();
    this.name = option.name || "slot";
    this.type = option.type || SLOT_TYPE_INPUT;
    this.rect = option.rect || new Rect(0, 0, 0, 0);
    this.hasLink = false;
  }

  //--------------------------------------------------------------------------------
  // ctx: 2d rendering context
  // node: parent node
  render = function (ctx) {
    const node = this.node;
    const x = node.rect.x + this.rect.x;
    const y = node.rect.y + node.bodyY + this.rect.y;
    const center = y + Config.SLOT_HEIGHT / 2; // slot center
    const iconR = Config.SLOT_ICON_RADIUS; // icon radius
    const iconW = Config.SLOT_ICON_SPACE_WIDTH;

    var cx = x; // cursor x
    var cy = y; // cursor y

    if (this.type === SLOT_TYPE_INPUT) {
      cx += Config.SLOT_MARGIN_LEFT;
      cx += iconR;
    } else if (this.type === SLOT_TYPE_OUTPUT) {
      cx -= Config.SLOT_MARGIN_LEFT;
      cx -= iconR;
    }

    {
      // render slot icon
      switch (this.state) {
        case SLOT_STATE_NORMAL:
          ctx.fillStyle = this.hasLink
            ? Config.SLOT_ICON_COLOR_LINK
            : Config.SLOT_ICON_COLOR_NORMAL;
          break;
        case SLOT_STATE_HOVER:
          ctx.fillStyle = Config.SLOT_ICON_COLOR_HOVER;
          break;
        case SLOT_STATE_SELECT:
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

    if (this.type === SLOT_TYPE_INPUT) {
      cx += iconR + 5;
      ctx.textAlign = "left";
    } else if (this.type === SLOT_TYPE_OUTPUT) {
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
  setRect = function (rect) {
    rect.set(this.rect, rect);
  };

  //--------------------------------------------------------------------------------
  // set hasLink
  setLink = function(hasLink) {
    this.hasLink = hasLink;
  }

  //--------------------------------------------------------------------------------
  // return slot icon positon
  getPos = function () {
    const node = this.node;
    const left = node.rect.x + this.rect.x;
    const top = node.rect.y + node.bodyY + this.rect.y;
    const iconR = Config.SLOT_ICON_RADIUS; // icon radius
    var cx = left;
    const center = top + Config.SLOT_HEIGHT / 2; // slot center

    if (this.type === SLOT_TYPE_INPUT) {
      cx += Config.SLOT_MARGIN_LEFT;
      cx += iconR;
    } else if (this.type === SLOT_TYPE_OUTPUT) {
      cx -= Config.SLOT_MARGIN_LEFT;
      cx -= iconR;
    }

    return new Vec2(cx, center);
  };

  //--------------------------------------------------------------------------------
  // is contain point?
  isPointInRect = function (x, y) {
    const node = this.node;
    const left = node.rect.x + this.rect.x;
    const top = node.rect.y + node.bodyY + this.rect.y;
    const iconW = Config.SLOT_ICON_SPACE_WIDTH;
    var cx = left;

    if (this.type === SLOT_TYPE_INPUT) {
      cx += Config.SLOT_MARGIN_LEFT;
      //cx += iconR;
    } else if (this.type === SLOT_TYPE_OUTPUT) {
      cx -= Config.SLOT_MARGIN_LEFT;
      cx -= iconW;
    }

    const rect = new Rect(cx, top, iconW, Config.SLOT_HEIGHT);
    return rect.isPointInRect(x, y);
  };

  //--------------------------------------------------------------------------------
  // mouse move event handling
  // e: event
  onMouseMove = function (mousePos, e) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      if (this.state !== SLOT_STATE_SELECT) this.state = SLOT_STATE_HOVER;
    } else {
      this.state = SLOT_STATE_NORMAL;
    }
  };

  //--------------------------------------------------------------------------------
  // mouse down event handling
  onMouseDown = function (mousePos) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = SLOT_STATE_SELECT;
    }
  };

  //--------------------------------------------------------------------------------
  // mouse up event handling
  onMouseUp = function (mousePos) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = SLOT_STATE_HOVER;
    }
  };

  //--------------------------------------------------------------------------------
  // double click event handling
  onMouseDBClick = function (mousePos) {
    if (this.isPointInRect(mousePos.x, mousePos.y)) {
      this.state = SLOT_STATE_SELECT;
    }
  };
};
