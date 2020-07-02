//
// 2020-07-01, jjuiddong
// EditView save/load node data
// version v1.0
//
const EditView_Ver1 = class {
  constructor() {}
};

//--------------------------------------------------------------------------------
// save nodes to local storage
// editView: EditView instance
EditView_Ver1.saveLocalStorage = function (editView, titleName) {
  const data = EditView_Ver1.nodeToJSON(editView, titleName);
  const str = JSON.stringify(data);
  if (Util.storageAvailable("localStorage")) {
    window.localStorage.setItem("save data", str);
  }
};

//--------------------------------------------------------------------------------
// load nodes from local storage
// editView: EditView instance
EditView_Ver1.loadFromLocalStorage = function (editView) {
  if (Util.storageAvailable("localStorage")) {
    const str = window.localStorage.getItem("save data");
    const data = JSON.parse(str);
    console.log(data.version);
    if (data.version !== "v1.0") {
      console.log("Error!! EditView_Ver1.load conflic version");
      return;
    }
    EditView_Ver1.load(editView, data);
  }
};

//--------------------------------------------------------------------------------
// save nodes to database
// editView: EditView instance
EditView_Ver1.saveDB = function (editView, titleName) {
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
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.send(str);
};

//--------------------------------------------------------------------------------
// load nodes from database
// editView: EditView instance
EditView_Ver1.loadFromDB = function (editView, titleName) {
  const str = JSON.stringify({title: titleName});
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
EditView_Ver1.nodeToJSON = function (editView, titleName) {
  var data = {};
  data.version = "v1.0";
  data.title = titleName;
  data.offsetX = editView.offset.x;
  data.offsetY = editView.offset.y;
  data.scale = editView.scale;
  data.nodes = [];
  data.links = [];

  // save nodes
  editView.nodes.forEach((node) => {
    var nodeData = {};
    nodeData.id = node.id;
    nodeData.name = node.name;
    nodeData.x = node.rect.x;
    nodeData.y = node.rect.y;
    nodeData.w = node.rect.w;
    nodeData.h = node.rect.h;

    nodeData.inputs = [];
    nodeData.outputs = [];
    nodeData.widgets = [];
    node.inputs.forEach((slot) => {
      var slotData = {};
      slotData.id = slot.id;
      slotData.name = slot.name;
      slotData.type = slot.type;
      nodeData.inputs.push(slotData);
    });

    node.outputs.forEach((slot) => {
      var slotData = {};
      slotData.id = slot.id;
      slotData.name = slot.name;
      slotData.type = slot.type;
      nodeData.outputs.push(slotData);
    });

    node.widgets.forEach((slot) => {
      var widgetData = {};
      widgetData.id = slot.id;
      widgetData.name = slot.name;
      widgetData.type = slot.type;
      widgetData.value = slot.value;
      nodeData.widgets.push(widgetData);
    });

    data.nodes.push(nodeData);
  });

  // save link
  editView.links.forEach((link) => {
    var linkData = {};
    linkData.id = link.id;
    linkData.from = link.from;
    linkData.to = link.to;
    data.links.push(linkData);
  });

  return data;
};

//--------------------------------------------------------------------------------
// load nodes
// editView: EditView instance
// nodeData: node json data
EditView_Ver1.load = function (editView, nodeData) {
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
      var n = new Node({
        id: nid,
        name: node.name,
        rect: new Rect(node.x, node.y, node.w, node.h),
      });

      node.inputs.forEach((slot) => {
        const sid = Util.genId();
        ids.set(slot.id, sid);
        var s = new Slot({
          id: sid,
          name: slot.name,
          type: slot.type,
        });
        n.addSlot(s);
      });

      node.outputs.forEach((slot) => {
        const sid = Util.genId();
        ids.set(slot.id, sid);
        var s = new Slot({
          id: sid,
          name: slot.name,
          type: slot.type,
        });
        n.addSlot(s);
      });

      node.widgets.forEach((widget) => {
        var w = null;
        const wid = Util.genId();
        ids.set(widget.id, wid);
        var opt = {
          id: wid,
          name: widget.name,
          value: widget.value,
        };
        switch (widget.type) {
          case WIDGET_TYPE_BOOLEAN:
            w = new Widgets.Boolean(opt);
            break;
          case WIDGET_TYPE_NUMBER:
            w = new Widgets.Number(opt);
            break;
          case WIDGET_TYPE_STRING:
            w = new Widgets.String(opt);
            break;
          default:
            console.log("Error!! EditView.load()");
        }
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
      var lk = new Link({
        id: lid,
        name: link.name,
        from: frId,
        to: toId,
      });
      editView.addLink(lk);
    });
  }
};
