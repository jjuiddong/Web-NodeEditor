//
// 2020-06-25, jjuiddong
// Node Editor View class
//  - render canvas
//  - render node
//  - render link
//
//  - 2020-07-13
//      - TypeScript Refactoring
//
import Vec2 from './math/vec2'
import ContextMenu from './context_menu'
import Node from './node'
import SpawnNode from './node_spawn'

const EDIT_STATE_NORMAL = 0;
const EDIT_STATE_SCROLL = 1;
const EDIT_STATE_MOVE_NODE = 2;
const EDIT_STATE_EDIT_LINK = 3;
const EDIT_STATE_EDIT_WIDGET = 4;

export default class EditView {
    ctx: CanvasRenderingContext2D | null = null
    state: number = EDIT_STATE_NORMAL;
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
    editLink: null = null;
    editWidget: null = null;
    links: null;
    nodes: Node[] = []
    menu: ContextMenu | null = null;
    input: null;
    prompt: null;

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
        //menu.addMenu("Remove", this.onRemove);
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

        // menu.addSubMenu("Add&Function", "Node1", () =>
        //   //this.nodes.push(SpawnNode.Node1(this.mousePos))
        // );
        // menu.addSubMenu("Add&Function", "Node2", () =>
        //   //this.nodes.push(SpawnNode.Node2(this.mousePos))
        // );
        // menu.addSubMenu("Add&Function", "Node3", () =>
        //   //this.nodes.push(SpawnNode.Node3(this.mousePos))
        // );
        // menu.addSubMenu("Add&Function", "Node4");
        // menu.addSubMenu("Add&Function", "Console", () =>
        //   //this.nodes.push(SpawnNode.Console(this.mousePos))
        // );
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

        //

        // render nodes
        this.nodes.forEach((node) => node.render(ctx));

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
    // save node data to database
    saveDB = function () {
        // this.prompt.open('Input Title', 'nodeTitleName', (value) => {
        //     EditView_Ver1.saveDB(this, value);
        // });
    };

    //--------------------------------------------------------------------------------
    // load node data from database
    loadDB = function () {
        // this.prompt.open('Input Title', 'nodeTitleName', (value) => {
        //     EditView_Ver1.loadFromDB(this, value);
        // });
    };

    //--------------------------------------------------------------------------------
    // save node data to local storage
    saveLocalStorage = function () {
        // EditView_Ver1.saveLocalStorage(this, 'title');
    };

    //--------------------------------------------------------------------------------
    // load node data from local storage
    loadLocalStorage = function () {
        // EditView_Ver1.loadFromLocalStorage(this);
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

        // this.nodes.forEach((node) => {
        //   if (node.state === NODE_STATE_SELECT) {
        //     selNode = node;
        //     node.move(mousePos.x + node.offset.x, mousePos.y + node.offset.y);
        //     if (this.state === EDIT_STATE_MOVE_NODE) this.calcNodeLayout(selNode);
        //   }
        //   if (node.state === NODE_STATE_EDIT_WIDGET) {
        //     // nothing~
        //   } else {
        //     if (node.isPointInRect(mousePos.x, mousePos.y))
        //       node.onMouseMove(mousePos, e);
        //   }
        // });

        // if (this.editLink && this.state === EDIT_STATE_EDIT_LINK) {
        //   this.editLink.setP1(mousePos);
        // }
        // if (this.editWidget && this.state === EDIT_STATE_EDIT_WIDGET) {
        //   this.editWidget.onMouseMove(mousePos, e);
        // }
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

        var selSlot = null;
        var selWidget = null;
        // this.nodes.forEach((node) => {
        //   if (node.isPointInRect(mousePos.x, mousePos.y)) {
        //     isSelect = true;
        //     node.onMouseDown(mousePos, e);
        //     if (node.state === NODE_STATE_EDIT_SLOT) {
        //       this.state = EDIT_STATE_EDIT_LINK;
        //       selSlot = node.getSelectSlots()[0];
        //     } else if (node.state === NODE_STATE_EDIT_WIDGET) {
        //       this.state = EDIT_STATE_EDIT_WIDGET;
        //       selWidget = node.getSelectWidgets()[0];
        //     } else {
        //       this.state = EDIT_STATE_MOVE_NODE;
        //       node.setFocus(true);
        //       node.offset.set2(node.rect.x - mousePos.x, node.rect.y - mousePos.y);
        //     }
        //   } else {
        //     node.isFocus = false;
        //   }
        // });

        // scroll?
        if (!isSelect) {
            this.isScroll = true;
            this.state = EDIT_STATE_SCROLL;
            this.clickPos.set2(e.offsetX, e.offsetY);
            this.prevPos.set2(e.offsetX, e.offsetY);
        }

        // edit link
        if (selSlot && this.state === EDIT_STATE_EDIT_LINK) {
            //   this.editLink = new Link(
            //     (option = {
            //       from: selSlot.id,
            //       p0: selSlot.getPos(),
            //       p1: mousePos,
            //     })
            //   );
        }

        // eidt widget
        if (selWidget && this.state === EDIT_STATE_EDIT_WIDGET) {
            this.editWidget = selWidget;
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
            // const nodes = this.nodes.filter((node) => node.isFocus);
            // this.menu.setMenuEnable("Remove", nodes.length > 0);

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

        // var selSlot = null;
        // var selWidget = null;
        // this.nodes.forEach((node) => {
        //   const isInRect = node.isPointInRect(mousePos.x, mousePos.y);
        //   if (node.state !== NODE_STATE_NORMAL) {
        //     if (isInRect) {
        //       const widgets = node.getSelectWidgets();
        //       if (widgets.length > 0) {
        //         selWidget = widgets[0];
        //       }
        //     }
        //     node.onMouseUp(mousePos, e);
        //   } else if (isInRect) {
        //     node.onMouseUp(mousePos, e);

        //     const slots = node.getHoverSlots();
        //     if (slots.length > 0) {
        //       selSlot = slots[0];
        //     }
        //   }
        // });

        // // create link?
        // if (this.editLink && selSlot && this.state === EDIT_STATE_EDIT_LINK) {
        //   this.editLink.setTo(selSlot.id);
        //   this.addLink(this.editLink);
        // }

        // // eidt widget?
        // if (selWidget && this.editWidget && this.state === EDIT_STATE_EDIT_WIDGET) {
        //   if (!(selWidget instanceof Widgets.Boolean)) {
        //     this.input.open(this.editWidget, e.offsetX, e.offsetY);
        //   }
        // }

        // this.editLink = null;
        // this.editWidget = null;
        // this.state = EDIT_STATE_NORMAL;
    }

    //--------------------------------------------------------------------------------
    // mouse up event handling
    onMouseDBClick = (e: MouseEvent) => {

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
