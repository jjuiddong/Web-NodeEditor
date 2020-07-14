//
// 2020-07-01, jjuiddong
// EditView save/load node data
// version v1.0
//
// 2020-07-14
//  - TypeScript Refactoring
//
import EditView from './editview'
import Util from './util'
import { Widgets, WidgetType } from './widgets'
import Vec2 from './math/vec2'
import Rect from './math/rect'
import Node from './node'
import Slot from './slot'
import Link from './link'

type SlotData = {
  id: number,
  name: string,
  type: number,
};

type WidgetData = {
  id: number,
  name: string,
  type: number,
  value: any,
};

type LinkData = {
  id: number,
  from: number,
  to: number,
};

type NodeData = {
  id: number,
  name: string,
  x: number,
  y: number,
  w: number,
  h: number,
  inputs: SlotData[],
  outputs: SlotData[],
  widgets: WidgetData[],
};

type NodesFileData = {
  version: string,
  title: string,
  offsetX: number,
  offsetY: number,
  scale: number,
  nodes: NodeData[],
  links: LinkData[],
};


export default class EditView_Ver1 {
  constructor() { }

  //--------------------------------------------------------------------------------
  // save nodes to local storage
  // editView: EditView instance
  static saveLocalStorage(editView: EditView, titleName: string) {
    const data = EditView_Ver1.nodeToJSON(editView, titleName);
    const str = JSON.stringify(data);
    if (Util.storageAvailable("localStorage")) {
      window.localStorage.setItem("save data", str);
    }
  };

  //--------------------------------------------------------------------------------
  // load nodes from local storage
  // editView: EditView instance
  static loadFromLocalStorage(editView:EditView) {
    if (Util.storageAvailable("localStorage")) {
      const str:string|null = window.localStorage.getItem("save data");
      if (str) {
        const data = JSON.parse(str);
        console.log(data.version);
        if (data.version !== "v1.0") {
          console.log("Error!! EditView_Ver1.load conflic version");
          return;
        }
        EditView_Ver1.load(editView, data);
      }
    }
  };

  //--------------------------------------------------------------------------------
  // save nodes to database
  // editView: EditView instance
  static saveDB(editView:EditView, titleName:string) {
    const data = EditView_Ver1.nodeToJSON(editView, titleName);
    const str = JSON.stringify(data);
    // if (Util.storageAvailable("localStorage")) {
    //   window.localStorage.setItem("save data", str);
    // }

    // request save nodefile to webserver
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        //alert(xhr.responseText);
      }
    };
    xhr.open("POST", "http://localhost:4000/api/file", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(str);
  };

  //--------------------------------------------------------------------------------
  // load nodes from database
  // editView: EditView instance
  static loadFromDB(editView:EditView, titleName:string) {
    const str = JSON.stringify({ title: titleName });
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        EditView_Ver1.load(editView, JSON.parse(xhr.responseText));
      }
    };

    const url = "http://localhost:4000/api/file?title=" + titleName;
    xhr.open("GET", url, true);
    xhr.send();
  };

  //--------------------------------------------------------------------------------
  // nodes to json string
  // editView: EditView instance
  // titleName: title name
  static nodeToJSON(editView: EditView, titleName: string) {
    var data: NodesFileData = {
      version: "v1.0",
      title: titleName,
      offsetX: editView.offset.x,
      offsetY: editView.offset.y,
      scale: editView.scale,
      nodes: [],
      links: [],
    };

    // save nodes
    editView.nodes.forEach((node) => {
      var nodeData: NodeData = {
        id: node.id,
        name: node.name,
        x: node.rect.x,
        y: node.rect.y,
        w: node.rect.w,
        h: node.rect.h,
        inputs: [],
        outputs: [],
        widgets: [],
      }
      node.inputs.forEach((slot) => {
        var slotData: SlotData = {
          id: slot.id,
          name: slot.name,
          type: slot.type,
        };
        nodeData.inputs.push(slotData);
      });

      node.outputs.forEach((slot) => {
        var slotData: SlotData = {
          id: slot.id,
          name: slot.name,
          type: slot.type,
        };
        nodeData.outputs.push(slotData);
      });

      node.widgets.forEach((widget) => {
        var widgetData:WidgetData = {
          id: widget.id,
          name: widget.name,
          type: widget.type,
          value: widget.getValue()
        };
        nodeData.widgets.push(widgetData);
      });

      data.nodes.push(nodeData);
    });

    // save link
    editView.links.forEach((link) => {
      var linkData: LinkData = {
        id: link.id,
        from: link.from,
        to: link.to,
      };
      data.links.push(linkData);
    });

    return data;
  };

  //--------------------------------------------------------------------------------
  // load nodes
  // editView: EditView instance
  // nodeData: node json data
  static load(editView: EditView, nodeData: NodesFileData) {
    editView.closeDocument();

    const data = nodeData;
    var ids = new Map(); // id mapping

    if (data.offsetX && data.offsetY) {
      editView.offset = new Vec2(data.offsetX, data.offsetY);
    }
    if (data.scale) {
      editView.scale = data.scale;
    }

    if (data.nodes) {
      data.nodes.forEach((node) => {
        const nid = Util.genId();
        ids.set(node.id, nid);
        var n = new Node(nid, node.name, new Rect(node.x, node.y, node.w, node.h));

        node.inputs.forEach((slot) => {
          const sid = Util.genId();
          ids.set(slot.id, sid);
          var s = new Slot(sid, null, slot.name, slot.type);
          n.addSlot(s);
        });

        node.outputs.forEach((slot) => {
          const sid = Util.genId();
          ids.set(slot.id, sid);
          var s = new Slot(sid, null, slot.name, slot.type);
          n.addSlot(s);
        });

        node.widgets.forEach((widget) => {
          var w:Widgets.Base | null = null;
          const wid = Util.genId();
          ids.set(widget.id, wid);
          switch (widget.type) {
            case WidgetType.Boolean:
              w = new Widgets.Boolean(wid, null, widget.name, widget.value);
              break;
            case WidgetType.Number:
              w = new Widgets.Number(wid, null, widget.name, widget.value);
              break;
            case WidgetType.String:
              w = new Widgets.String(wid, null, widget.name, widget.value);
              break;
            default:
              console.log("Error!! EditView.load()");
          }
          if (w)
            n.addWidget(w);
        });

        editView.nodes.push(n);
      });
    } //~data.nodes

    // todo: treacky code to calc node.bodyY
    editView.render(editView.ctx);

    if (data.links) {
      data.links.forEach((link) => {
        const lid = Util.genId();
        ids.set(link.id, lid);
        const frId = ids.get(link.from);
        const toId = ids.get(link.to);
        var lk = new Link(lid, frId, toId);
        editView.addLink(lk);
      });
    }
  };
};
