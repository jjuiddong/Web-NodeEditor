"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//
// 2020-06-25, jjuiddong
// Node Editor View class
//  - render canvas
//  - render node
//  - render link
//
// 2020-07-13
//  - TypeScript Refactoring
//
var vec2_1 = __importDefault(require("./math/vec2"));
var context_menu_1 = __importDefault(require("./context_menu"));
var node_1 = require("./node");
var slot_1 = require("./slot");
var link_1 = __importDefault(require("./link"));
var widgets_1 = require("./widgets");
var node_spawn_1 = __importDefault(require("./node_spawn"));
var popup_1 = require("./popup");
var editview_ver1_1 = __importDefault(require("./editview_ver1"));
var EditState;
(function (EditState) {
    EditState[EditState["Normal"] = 0] = "Normal";
    EditState[EditState["Scroll"] = 1] = "Scroll";
    EditState[EditState["MoveNode"] = 2] = "MoveNode";
    EditState[EditState["EditLink"] = 3] = "EditLink";
    EditState[EditState["EditWidget"] = 4] = "EditWidget";
})(EditState || (EditState = {}));
var EditView = /** @class */ (function () {
    function EditView(canvas, width, // view width
    height // view height
    ) {
        var _this = this;
        this.ctx = null;
        this.state = EditState.Normal;
        this.isFocus = false;
        this.width = 0;
        this.height = 0;
        this.offset = new vec2_1.default(1000, 1000);
        this.scale = 1;
        this.size = new vec2_1.default(2000, 2000);
        this.isScroll = false;
        this.clickPos = new vec2_1.default(0, 0);
        this.prevPos = new vec2_1.default(0, 0);
        this.mousePos = new vec2_1.default(0, 0);
        this.pattern = null;
        this.editLink = null;
        this.editWidget = null;
        this.links = [];
        this.nodes = [];
        this.menu = null;
        this.input = new popup_1.Popup.Input();
        this.prompt = new popup_1.Popup.Prompt();
        //--------------------------------------------------------------------------------
        // recalc node position, link position
        // node : move node
        this.calcNodeLayoutAll = function () {
            // nothing~
        };
        //--------------------------------------------------------------------------------
        // return mouse original pos
        // calc zoom in/out, offset
        this.getOriginalPos = function (x, y) {
            var mousePos = new vec2_1.default(x, y);
            var offsetScale = new vec2_1.default();
            vec2_1.default.scale(offsetScale, _this.offset, _this.scale);
            var curPos = new vec2_1.default();
            vec2_1.default.add(curPos, mousePos, offsetScale);
            vec2_1.default.scale(curPos, curPos, 1 / _this.scale); // convert to original pos
            return curPos;
        };
        //--------------------------------------------------------------------------------
        // Context Menu Remove
        // remove select nodes
        this.onRemove = function () {
            // collect remove link
            var rmLinks = [];
            for (var _i = 0, _a = _this.nodes; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.isFocus) {
                    for (var _b = 0, _c = node.inputs; _b < _c.length; _b++) {
                        var slot = _c[_b];
                        rmLinks = rmLinks.concat(_this.getLinkFromSlot(slot.id));
                    }
                    for (var _d = 0, _e = node.outputs; _d < _e.length; _d++) {
                        var slot = _e[_d];
                        rmLinks = rmLinks.concat(_this.getLinkFromSlot(slot.id));
                    }
                }
            }
            _this.removeLinks(rmLinks);
            // remove node
            _this.nodes = _this.nodes.filter(function (node) { return !node.isFocus; });
        };
        //--------------------------------------------------------------------------------
        // mouse move event handling
        this.onMouseMove = function (e) {
            if (_this.isScroll) {
                var delta = new vec2_1.default();
                vec2_1.default.sub(delta, _this.prevPos, new vec2_1.default(e.offsetX, e.offsetY));
                vec2_1.default.set2(_this.prevPos, e.offsetX, e.offsetY);
                vec2_1.default.scale(delta, delta, 1 / _this.scale);
                vec2_1.default.add(_this.offset, _this.offset, delta);
            }
            var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
            var selNode = null;
            _this.nodes.forEach(function (node) {
                if (node.state === node_1.NodeState.Select) {
                    selNode = node;
                    node.move(mousePos.x + node.offset.x, mousePos.y + node.offset.y);
                    if (_this.state === EditState.MoveNode)
                        _this.calcNodeLayout(selNode);
                }
                if (node.state === node_1.NodeState.EditWidget) {
                    // nothing~
                }
                else {
                    if (node.isPointInRect(mousePos.x, mousePos.y))
                        node.onMouseMove(mousePos, e);
                }
            });
            if (_this.editLink && _this.state === EditState.EditLink) {
                _this.editLink.setP1(mousePos);
            }
            if (_this.editWidget && _this.state === EditState.EditWidget) {
                _this.editWidget.onMouseMove(mousePos, e);
            }
        };
        //--------------------------------------------------------------------------------
        // mouse down event handling
        this.onMouseDown = function (e) {
            if (e.button === 0) {
                _this.onMouseLeftDown(e);
            }
        };
        //--------------------------------------------------------------------------------
        // mouse left button down event handling
        this.onMouseLeftDown = function (e) {
            var _a;
            (_a = _this.menu) === null || _a === void 0 ? void 0 : _a.close();
            var isSelect = false;
            var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
            _this.nodes.forEach(function (node) {
                if (node.isPointInRect(mousePos.x, mousePos.y)) {
                    isSelect = true;
                    node.onMouseDown(mousePos, e);
                    if (node.state === node_1.NodeState.EditSlot) {
                        _this.state = EditState.EditLink;
                        var selSlot = node.getSelectSlots()[0];
                        _this.editLink = new link_1.default(-1, selSlot.id, -1, selSlot.getPos(), mousePos);
                    }
                    else if (node.state === node_1.NodeState.EditWidget) {
                        _this.state = EditState.EditWidget;
                        _this.editWidget = node.getSelectWidgets()[0];
                    }
                    else {
                        _this.state = EditState.MoveNode;
                        node.setFocus(true);
                        node.offset.set2(node.rect.x - mousePos.x, node.rect.y - mousePos.y);
                    }
                }
                else {
                    node.isFocus = false;
                }
            });
            // scroll?
            if (!isSelect) {
                _this.isScroll = true;
                _this.state = EditState.Scroll;
                _this.clickPos.set2(e.offsetX, e.offsetY);
                _this.prevPos.set2(e.offsetX, e.offsetY);
            }
        };
        //--------------------------------------------------------------------------------
        // mouse up event handling
        this.onMouseUp = function (e) {
            var _a, _b;
            if (e.button === 0) {
                _this.onMouseLeftUp(e);
            }
            else if (e.button === 2) {
                // mouse right button down
                var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
                _this.mousePos.set(mousePos);
                // // check focus node
                var nodes = _this.nodes.filter(function (node) { return node.isFocus; });
                (_a = _this.menu) === null || _a === void 0 ? void 0 : _a.setMenuEnable("Remove", nodes.length > 0);
                (_b = _this.menu) === null || _b === void 0 ? void 0 : _b.open(e.offsetX + 5, e.offsetY + 5);
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };
        //--------------------------------------------------------------------------------
        // mouse left up event handling
        this.onMouseLeftUp = function (e) {
            _this.isScroll = false;
            var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
            //var selSlot: Slot | null = null;
            //var selWidget = null;
            _this.nodes.forEach(function (node) {
                var isInRect = node.isPointInRect(mousePos.x, mousePos.y);
                if (node.state !== node_1.NodeState.Normal) {
                    if (isInRect) {
                        var widgets = node.getSelectWidgets();
                        if (widgets.length > 0) {
                            var selWidget = widgets[0];
                            // eidt widget?
                            if (_this.editWidget && _this.state === EditState.EditWidget) {
                                if (!(selWidget instanceof widgets_1.Widgets.Boolean)) {
                                    _this.input.open(_this.editWidget, e.offsetX, e.offsetY);
                                }
                            }
                        }
                    }
                    node.onMouseUp(mousePos, e);
                }
                else if (isInRect) {
                    node.onMouseUp(mousePos, e);
                    var slots = node.getHoverSlots();
                    if (slots.length > 0) {
                        var selSlot = slots[0];
                        if (_this.editLink && selSlot && _this.state === EditState.EditLink) {
                            _this.editLink.setTo(selSlot.id);
                            _this.addLink(_this.editLink);
                        }
                    }
                }
            });
            _this.editLink = null;
            _this.editWidget = null;
            _this.state = EditState.Normal;
        };
        //--------------------------------------------------------------------------------
        // mouse up event handling
        this.onMouseDBClick = function (e) {
            var mousePos = _this.getOriginalPos(e.offsetX, e.offsetY);
            _this.nodes.forEach(function (node) {
                if (node.isPointInRect(mousePos.x, mousePos.y)) {
                    node.onMouseDBClick(mousePos, e);
                    // remove select slot link
                    var slots = node.getSelectSlots();
                    if (slots.length > 0) {
                        var selSlot = slots[0];
                        var rmLinks = _this.getLinkFromSlot(selSlot.id);
                        _this.removeLinks(rmLinks);
                    }
                }
            });
        };
        //--------------------------------------------------------------------------------
        // mouse wheel event handling
        this.onMouseWheel = function (e) {
            var curPos = new vec2_1.default();
            var mousePos = new vec2_1.default(e.offsetX, e.offsetY);
            vec2_1.default.scale(curPos, _this.offset, _this.scale);
            vec2_1.default.add(curPos, curPos, mousePos);
            var s;
            if (e.deltaY > 0) {
                s = 0.8;
            }
            else {
                s = 1.2;
            }
            _this.scale *= s;
            var newPos = new vec2_1.default();
            vec2_1.default.scale(newPos, curPos, s);
            var delta = new vec2_1.default();
            vec2_1.default.sub(delta, newPos, mousePos);
            vec2_1.default.set2(_this.offset, delta.x / _this.scale, delta.y / _this.scale);
        };
        if (!canvas)
            return;
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function () {
            if (ctx)
                _this.pattern = ctx.createPattern(img, 'repeat');
        };
        img.src = '../imgs/grid.png';
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        var menu = new context_menu_1.default();
        menu.addMenu("Add");
        menu.addMenu("Remove", this.onRemove);
        menu.addMenu("Group", function () { return console.log("Group"); });
        menu.addSubMenu("Add", "Variable");
        menu.addSubMenu("Add", "Function");
        menu.addSubMenu("Add&Variable", "Boolean", function (a) {
            return _this.nodes.push(node_spawn_1.default.Boolean(_this.mousePos));
        });
        menu.addSubMenu("Add&Variable", "Number", function () {
            return _this.nodes.push(node_spawn_1.default.Number(_this.mousePos));
        });
        menu.addSubMenu("Add&Variable", "String", function () {
            return _this.nodes.push(node_spawn_1.default.String(_this.mousePos));
        });
        menu.addSubMenu("Add&Function", "Node1", function () {
            return _this.nodes.push(node_spawn_1.default.Node1(_this.mousePos));
        });
        menu.addSubMenu("Add&Function", "Node2", function () {
            return _this.nodes.push(node_spawn_1.default.Node2(_this.mousePos));
        });
        menu.addSubMenu("Add&Function", "Node3", function () {
            return _this.nodes.push(node_spawn_1.default.Node3(_this.mousePos));
        });
        menu.addSubMenu("Add&Function", "Node4");
        menu.addSubMenu("Add&Function", "Console", function () {
            return _this.nodes.push(node_spawn_1.default.Console(_this.mousePos));
        });
        this.menu = menu;
        canvas.addEventListener("mousemove", this.onMouseMove);
        canvas.addEventListener("mousedown", this.onMouseDown);
        canvas.addEventListener("mouseup", this.onMouseUp);
        canvas.addEventListener("dblclick", this.onMouseDBClick);
        canvas.addEventListener("wheel", this.onMouseWheel);
    }
    EditView.prototype.render = function (ctx) {
        if (!ctx)
            return;
        ctx.save();
        ctx.scale(this.scale, this.scale);
        ctx.translate(-this.offset.x, -this.offset.y);
        // render background grid
        ctx.fillStyle = "rgba(0,0,0,1)";
        if (this.pattern) {
            ctx.fillStyle = this.pattern;
            ctx.imageSmoothingEnabled = false;
            ctx.fillRect(this.offset.x, this.offset.y, this.width / this.scale, this.height / this.scale);
            ctx.imageSmoothingEnabled = true;
        }
        // render link
        this.links.forEach(function (link) { return link.render(ctx); });
        // render nodes
        this.nodes.forEach(function (node) { return node.render(ctx); });
        if (this.editLink)
            this.editLink.render(ctx);
        ctx.restore();
        // debugging information
        {
            var ty = 30;
            ctx.font = "20px serif";
            ctx.fillStyle = "rgba(255,255,255,1)";
            ctx.fillText("Scroll : " +
                this.offset.x.toFixed(2) +
                ", " +
                this.offset.y.toFixed(2), 0, (ty += 24));
            ctx.fillText("Zoom : " + this.scale.toFixed(2), 0, (ty += 24));
            ctx.fillText("State : " + this.state, 0, (ty += 24));
        }
    };
    //--------------------------------------------------------------------------------
    // get slot
    EditView.prototype.getSlotInNode = function (node, slotId) {
        var result1 = node.inputs.filter(function (slot) { return slot.id === slotId; });
        if (result1.length > 0)
            return result1[0];
        var result2 = node.outputs.filter(function (slot) { return slot.id === slotId; });
        if (result2.length > 0)
            return result2[0];
        return null;
    };
    ;
    //--------------------------------------------------------------------------------
    // get slot
    // return slot has slotId
    EditView.prototype.getSlot = function (slotId) {
        var _this = this;
        var slot = null;
        this.nodes.forEach(function (node) {
            var result = _this.getSlotInNode(node, slotId);
            if (result) {
                slot = result;
            }
        });
        return slot;
    };
    ;
    //--------------------------------------------------------------------------------
    // get node from slot
    // return node has slot
    EditView.prototype.getNodeFromSlot = function (slotId) {
        var _this = this;
        var nodeHasSlot = null;
        this.nodes.forEach(function (node) {
            var result = _this.getSlotInNode(node, slotId);
            if (result) {
                nodeHasSlot = node;
            }
        });
        return nodeHasSlot;
    };
    ;
    //--------------------------------------------------------------------------------
    // get link has slot
    // return link array
    EditView.prototype.getLinkFromSlot = function (slotId) {
        var links = this.links.filter(function (link) { return link.from === slotId || link.to === slotId; });
        return links;
    };
    ;
    //--------------------------------------------------------------------------------
    // add link
    // link: Link instance
    EditView.prototype.addLink = function (newLink) {
        //this.editLink.setTo(selSlot.id);
        //this.editLink.setP1(selSlot.getPos());
        var frSlot = this.getSlot(newLink.from);
        var toSlot = this.getSlot(newLink.to);
        var frNode = this.getNodeFromSlot(newLink.from);
        var toNode = this.getNodeFromSlot(newLink.to);
        var existLink = this.links.find(function (link) {
            return (link.from === newLink.from && link.to === newLink.to) ||
                (link.to === newLink.from && link.from === newLink.to);
        });
        // check valid link?
        if (!newLink.to ||
            !newLink.from ||
            newLink.to === newLink.from ||
            frNode === toNode ||
            existLink ||
            !frSlot ||
            !toSlot ||
            (frSlot && toSlot && frSlot.type === toSlot.type)) {
            // invalid link, ignore
        }
        else {
            // valid link
            // exchange from=input, to=output
            var input = frSlot.type === slot_1.SlotType.Input ? frSlot : toSlot;
            var output = toSlot.type === slot_1.SlotType.Output ? toSlot : frSlot;
            newLink.setFrom(input.id);
            newLink.setP0(input.getPos());
            newLink.setTo(output.id);
            newLink.setP1(output.getPos());
            frSlot.setLink(true);
            toSlot.setLink(true);
            this.links.push(newLink);
        }
    };
    //--------------------------------------------------------------------------------
    // recalc link from,to position
    // node : move node
    EditView.prototype.calcNodeLayout = function (node) {
        var _this = this;
        var calcFn = function (links, slot) {
            var link1 = links.filter(function (link) { return link.to === slot.id; });
            link1.forEach(function (link) { return link.setP1(slot.getPos()); });
            var link2 = links.filter(function (link) { return link.from === slot.id; });
            link2.forEach(function (link) { return link.setP0(slot.getPos()); });
        };
        node.inputs.forEach(function (slot) { return calcFn(_this.links, slot); });
        node.outputs.forEach(function (slot) { return calcFn(_this.links, slot); });
    };
    ;
    //--------------------------------------------------------------------------------
    // Remove Links
    // rmLinks: array link
    EditView.prototype.removeLinks = function (rmLinks) {
        var _this = this;
        // remove link
        this.links = this.links.filter(function (link) { return !rmLinks.find(function (r) { return r.id === link.id; }); });
        // refresh slot state
        rmLinks.forEach(function (link) {
            var frSlot = _this.getSlot(link.from);
            var toSlot = _this.getSlot(link.to);
            if (frSlot) {
                frSlot.setLink(_this.getLinkFromSlot(frSlot.id).length !== 0);
            }
            if (toSlot) {
                toSlot.setLink(_this.getLinkFromSlot(toSlot.id).length !== 0);
            }
        });
    };
    ;
    //--------------------------------------------------------------------------------
    // close document
    // remove node, link, etc
    EditView.prototype.closeDocument = function () {
        this.nodes = [];
        this.links = [];
        this.editLink = null;
        this.editWidget = null;
        this.input.close();
    };
    //--------------------------------------------------------------------------------
    // save node data to database
    EditView.prototype.saveDB = function () {
        var _this = this;
        this.prompt.open('Input Title', 'nodeTitleName', function (value) {
            editview_ver1_1.default.saveDB(_this, value);
        });
    };
    ;
    //--------------------------------------------------------------------------------
    // load node data from database
    EditView.prototype.loadDB = function () {
        var _this = this;
        this.prompt.open('Input Title', 'nodeTitleName', function (value) {
            editview_ver1_1.default.loadFromDB(_this, value);
        });
    };
    ;
    //--------------------------------------------------------------------------------
    // save node data to local storage
    EditView.prototype.saveLocalStorage = function () {
        editview_ver1_1.default.saveLocalStorage(this, 'title');
    };
    ;
    //--------------------------------------------------------------------------------
    // load node data from local storage
    EditView.prototype.loadLocalStorage = function () {
        editview_ver1_1.default.loadFromLocalStorage(this);
    };
    ;
    return EditView;
}());
exports.default = EditView;
//# sourceMappingURL=editview.js.map