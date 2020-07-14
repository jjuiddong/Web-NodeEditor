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
import Vec2 from './math/vec2'
import ContextMenu from './context_menu'
import Node, { NodeState } from './node'
import Slot, { SlotType, SlotState } from './slot'
import Link, { LinkState } from './link'
import {Widgets, WidgetState} from './widgets'
import SpawnNode from './node_spawn'
import {Popup} from './popup'
import EditView_Ver1 from './editview_ver1'

enum EditState {
    Normal,
    Scroll,
    MoveNode,
    EditLink,
    EditWidget,
}

export default class EditView {
    ctx: CanvasRenderingContext2D | null = null
    state: EditState = EditState.Normal;
    isFocus: boolean = false
    width: number = 0
    height: number = 0
    offset: Vec2 = new Vec2(1000, 1000)
    scale: number = 1
    size: Vec2 = new Vec2(2000, 2000)
    isScroll: boolean = false
    clickPos: Vec2 = new Vec2(0, 0)
    prevPos: Vec2 = new Vec2(0, 0)
    mousePos: Vec2 = new Vec2(0, 0)
    pattern: CanvasPattern | null = null
    editLink: Link | null = null;
    editWidget: Widgets.Base|null = null;
    links: Link[] = []
    nodes: Node[] = []
    menu: ContextMenu | null = null;
    input: Popup.Input = new Popup.Input();
    prompt: Popup.Prompt = new Popup.Prompt();

    constructor(canvas: HTMLCanvasElement | null,
        width: number, // view width
        height: number // view height
    ) {
        if (!canvas)
            return;

        var ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        var img: CanvasImageSource = new Image();
        img.onload = () => {
            if (ctx)
                this.pattern = ctx.createPattern(img, 'repeat');
        }
        img.src = '../imgs/grid.png';

        this.ctx = ctx;
        this.width = width;
        this.height = height;

        var menu = new ContextMenu();
        menu.addMenu("Add");
        menu.addMenu("Remove", this.onRemove);
        menu.addMenu("Group", () => console.log("Group"));
        menu.addSubMenu("Add", "Variable");
        menu.addSubMenu("Add", "Function");
        menu.addSubMenu("Add&Variable", "Boolean", (a: any) =>
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

    render(ctx: CanvasRenderingContext2D | null): void {
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
    }

    //--------------------------------------------------------------------------------
    // get slot
    getSlotInNode(node: Node, slotId: number): Slot | null {
        var result1 = node.inputs.filter((slot) => slot.id === slotId);
        if (result1.length > 0) return result1[0];
        var result2 = node.outputs.filter((slot) => slot.id === slotId);
        if (result2.length > 0) return result2[0];
        return null;
    };

    //--------------------------------------------------------------------------------
    // get slot
    // return slot has slotId
    getSlot(slotId: number): Slot | null {
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
    getNodeFromSlot(slotId: number): Node | null {
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
    getLinkFromSlot(slotId: number): Link[] {
        const links = this.links.filter(
            (link) => link.from === slotId || link.to === slotId
        );
        return links;
    };

    //--------------------------------------------------------------------------------
    // add link
    // link: Link instance
    addLink(newLink: Link) {
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
            const input = frSlot.type === SlotType.Input ? frSlot : toSlot;
            const output = toSlot.type === SlotType.Output ? toSlot : frSlot;
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
    calcNodeLayout(node: Node) {
        var calcFn = (links: Link[], slot: Slot) => {
            var link1 = links.filter((link) => link.to === slot.id);
            link1.forEach((link) => link.setP1(slot.getPos()));
            var link2 = links.filter((link) => link.from === slot.id);
            link2.forEach((link) => link.setP0(slot.getPos()));
        };
        node.inputs.forEach((slot) => calcFn(this.links, slot));
        node.outputs.forEach((slot) => calcFn(this.links, slot));
    };

    //--------------------------------------------------------------------------------
    // recalc node position, link position
    // node : move node
    calcNodeLayoutAll = function () {
        // nothing~
    };

    //--------------------------------------------------------------------------------
    // return mouse original pos
    // calc zoom in/out, offset
    getOriginalPos = (x: number, y: number) => {
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
    removeLinks(rmLinks: Link[]) {
        // remove link
        this.links = this.links.filter(
            (link) => !rmLinks.find((r) => r.id === link.id)
        );

        // refresh slot state
        rmLinks.forEach((link) => {
            var frSlot: Slot | null = this.getSlot(link.from);
            var toSlot: Slot | null = this.getSlot(link.to);
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
    closeDocument() {
        this.nodes = [];
        this.links = [];
        this.editLink = null;
        this.editWidget = null;
        this.input.close();
    }

    //--------------------------------------------------------------------------------
    // save node data to database
    saveDB() {
        this.prompt.open('Input Title', 'nodeTitleName', (value:any):void => {
            EditView_Ver1.saveDB(this, value);
        });
    };

    //--------------------------------------------------------------------------------
    // load node data from database
    loadDB() {
        this.prompt.open('Input Title', 'nodeTitleName', (value:any) => {
            EditView_Ver1.loadFromDB(this, value);
        });
    };

    //--------------------------------------------------------------------------------
    // save node data to local storage
    saveLocalStorage() {
        EditView_Ver1.saveLocalStorage(this, 'title');
    };

    //--------------------------------------------------------------------------------
    // load node data from local storage
    loadLocalStorage() {
        EditView_Ver1.loadFromLocalStorage(this);
    };

    //--------------------------------------------------------------------------------
    // Context Menu Remove
    // remove select nodes
    onRemove = () => {
        // collect remove link
        var rmLinks: Link[] = [];
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
    onMouseMove = (e: MouseEvent) => {
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
            if (node.state === NodeState.Select) {
                selNode = node;
                node.move(mousePos.x + node.offset.x, mousePos.y + node.offset.y);
                if (this.state === EditState.MoveNode) this.calcNodeLayout(selNode);
            }
            if (node.state === NodeState.EditWidget) {
                // nothing~
            } else {
                if (node.isPointInRect(mousePos.x, mousePos.y))
                    node.onMouseMove(mousePos, e);
            }
        });

        if (this.editLink && this.state === EditState.EditLink) {
            this.editLink.setP1(mousePos);
        }
        if (this.editWidget && this.state === EditState.EditWidget) {
          this.editWidget.onMouseMove(mousePos, e);
        }
    }

    //--------------------------------------------------------------------------------
    // mouse down event handling
    onMouseDown = (e: MouseEvent) => {
        if (e.button === 0) {
            this.onMouseLeftDown(e);
        }
    }

    //--------------------------------------------------------------------------------
    // mouse left button down event handling
    onMouseLeftDown = (e: MouseEvent) => {
        this.menu?.close();
        var isSelect = false;
        const mousePos: Vec2 = this.getOriginalPos(e.offsetX, e.offsetY);

        this.nodes.forEach((node) => {
            if (node.isPointInRect(mousePos.x, mousePos.y)) {
                isSelect = true;
                node.onMouseDown(mousePos, e);
                if (node.state === NodeState.EditSlot) {
                    this.state = EditState.EditLink;
                    var selSlot: Slot = node.getSelectSlots()[0];
                    this.editLink = new Link(-1, selSlot.id, -1, selSlot.getPos(), mousePos);
                } else if (node.state === NodeState.EditWidget) {
                    this.state = EditState.EditWidget;
                    this.editWidget = node.getSelectWidgets()[0];
                } else {
                    this.state = EditState.MoveNode;
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
            this.state = EditState.Scroll;
            this.clickPos.set2(e.offsetX, e.offsetY);
            this.prevPos.set2(e.offsetX, e.offsetY);
        }
    }

    //--------------------------------------------------------------------------------
    // mouse up event handling
    onMouseUp = (e: MouseEvent) => {
        if (e.button === 0) {
            this.onMouseLeftUp(e);
        } else if (e.button === 2) {
            // mouse right button down
            const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);
            this.mousePos.set(mousePos);

            // // check focus node
            const nodes = this.nodes.filter((node) => node.isFocus);
            this.menu?.setMenuEnable("Remove", nodes.length > 0);

            this.menu?.open(e.offsetX + 5, e.offsetY + 5);
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    };

    //--------------------------------------------------------------------------------
    // mouse left up event handling
    onMouseLeftUp = (e: MouseEvent) => {
        this.isScroll = false;
        const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

        //var selSlot: Slot | null = null;
        //var selWidget = null;
        this.nodes.forEach((node) => {
            const isInRect = node.isPointInRect(mousePos.x, mousePos.y);
            if (node.state !== NodeState.Normal) {
                if (isInRect) {
                    const widgets = node.getSelectWidgets();
                    if (widgets.length > 0) {
                        var selWidget:Widgets.Base = widgets[0];

                        // eidt widget?
                        if (this.editWidget && this.state === EditState.EditWidget) {
                            if (!(selWidget instanceof Widgets.Boolean)) {
                                 this.input.open(this.editWidget, e.offsetX, e.offsetY);
                            }
                        }
                    }
                }
                node.onMouseUp(mousePos, e);
            } else if (isInRect) {
                node.onMouseUp(mousePos, e);

                const slots = node.getHoverSlots();
                if (slots.length > 0) {
                    var selSlot: Slot = slots[0];

                    if (this.editLink && selSlot && this.state === EditState.EditLink) {
                        this.editLink.setTo(selSlot.id);
                        this.addLink(this.editLink);
                    }
                }
            }
        });

        this.editLink = null;
        this.editWidget = null;
        this.state = EditState.Normal;
    }

    //--------------------------------------------------------------------------------
    // mouse up event handling
    onMouseDBClick = (e: MouseEvent) => {
        const mousePos = this.getOriginalPos(e.offsetX, e.offsetY);

        this.nodes.forEach((node) => {
          if (node.isPointInRect(mousePos.x, mousePos.y)) {
            node.onMouseDBClick(mousePos, e);
    
            // remove select slot link
            const slots = node.getSelectSlots();
            if (slots.length > 0) {
              var selSlot: Slot = slots[0];
              var rmLinks = this.getLinkFromSlot(selSlot.id);
              this.removeLinks(rmLinks);
            }
          }
        });
    }

    //--------------------------------------------------------------------------------
    // mouse wheel event handling
    onMouseWheel = (e: MouseWheelEvent) => {
        var curPos = new Vec2();
        var mousePos = new Vec2(e.offsetX, e.offsetY);
        Vec2.scale(curPos, this.offset, this.scale);
        Vec2.add(curPos, curPos, mousePos);

        var s: number;
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
    }
}
