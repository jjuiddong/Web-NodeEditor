"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("./util"));
var widgets_1 = require("./widgets");
var vec2_1 = __importDefault(require("./math/vec2"));
var rect_1 = __importDefault(require("./math/rect"));
var node_1 = __importDefault(require("./node"));
var slot_1 = __importDefault(require("./slot"));
var link_1 = __importDefault(require("./link"));
var EditView_Ver1 = /** @class */ (function () {
    function EditView_Ver1() {
    }
    //--------------------------------------------------------------------------------
    // save nodes to local storage
    // editView: EditView instance
    EditView_Ver1.saveLocalStorage = function (editView, titleName) {
        var data = EditView_Ver1.nodeToJSON(editView, titleName);
        var str = JSON.stringify(data);
        if (util_1.default.storageAvailable("localStorage")) {
            window.localStorage.setItem("save data", str);
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // load nodes from local storage
    // editView: EditView instance
    EditView_Ver1.loadFromLocalStorage = function (editView) {
        if (util_1.default.storageAvailable("localStorage")) {
            var str = window.localStorage.getItem("save data");
            if (str) {
                var data = JSON.parse(str);
                console.log(data.version);
                if (data.version !== "v1.0") {
                    console.log("Error!! EditView_Ver1.load conflic version");
                    return;
                }
                EditView_Ver1.load(editView, data);
            }
        }
    };
    ;
    //--------------------------------------------------------------------------------
    // save nodes to database
    // editView: EditView instance
    EditView_Ver1.saveDB = function (editView, titleName) {
        var data = EditView_Ver1.nodeToJSON(editView, titleName);
        var str = JSON.stringify(data);
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
    ;
    //--------------------------------------------------------------------------------
    // load nodes from database
    // editView: EditView instance
    EditView_Ver1.loadFromDB = function (editView, titleName) {
        var str = JSON.stringify({ title: titleName });
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                EditView_Ver1.load(editView, JSON.parse(xhr.responseText));
            }
        };
        var url = "http://localhost:4000/api/file?title=" + titleName;
        xhr.open("GET", url, true);
        xhr.send();
    };
    ;
    //--------------------------------------------------------------------------------
    // nodes to json string
    // editView: EditView instance
    // titleName: title name
    EditView_Ver1.nodeToJSON = function (editView, titleName) {
        var data = {
            version: "v1.0",
            title: titleName,
            offsetX: editView.offset.x,
            offsetY: editView.offset.y,
            scale: editView.scale,
            nodes: [],
            links: [],
        };
        // save nodes
        editView.nodes.forEach(function (node) {
            var nodeData = {
                id: node.id,
                name: node.name,
                x: node.rect.x,
                y: node.rect.y,
                w: node.rect.w,
                h: node.rect.h,
                inputs: [],
                outputs: [],
                widgets: [],
            };
            node.inputs.forEach(function (slot) {
                var slotData = {
                    id: slot.id,
                    name: slot.name,
                    type: slot.type,
                };
                nodeData.inputs.push(slotData);
            });
            node.outputs.forEach(function (slot) {
                var slotData = {
                    id: slot.id,
                    name: slot.name,
                    type: slot.type,
                };
                nodeData.outputs.push(slotData);
            });
            node.widgets.forEach(function (widget) {
                var widgetData = {
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
        editView.links.forEach(function (link) {
            var linkData = {
                id: link.id,
                from: link.from,
                to: link.to,
            };
            data.links.push(linkData);
        });
        return data;
    };
    ;
    //--------------------------------------------------------------------------------
    // load nodes
    // editView: EditView instance
    // nodeData: node json data
    EditView_Ver1.load = function (editView, nodeData) {
        editView.closeDocument();
        var data = nodeData;
        var ids = new Map(); // id mapping
        if (data.offsetX && data.offsetY) {
            editView.offset = new vec2_1.default(data.offsetX, data.offsetY);
        }
        if (data.scale) {
            editView.scale = data.scale;
        }
        if (data.nodes) {
            data.nodes.forEach(function (node) {
                var nid = util_1.default.genId();
                ids.set(node.id, nid);
                var n = new node_1.default(nid, node.name, new rect_1.default(node.x, node.y, node.w, node.h));
                node.inputs.forEach(function (slot) {
                    var sid = util_1.default.genId();
                    ids.set(slot.id, sid);
                    var s = new slot_1.default(sid, null, slot.name, slot.type);
                    n.addSlot(s);
                });
                node.outputs.forEach(function (slot) {
                    var sid = util_1.default.genId();
                    ids.set(slot.id, sid);
                    var s = new slot_1.default(sid, null, slot.name, slot.type);
                    n.addSlot(s);
                });
                node.widgets.forEach(function (widget) {
                    var w = null;
                    var wid = util_1.default.genId();
                    ids.set(widget.id, wid);
                    switch (widget.type) {
                        case widgets_1.WidgetType.Boolean:
                            w = new widgets_1.Widgets.Boolean(wid, null, widget.name, widget.value);
                            break;
                        case widgets_1.WidgetType.Number:
                            w = new widgets_1.Widgets.Number(wid, null, widget.name, widget.value);
                            break;
                        case widgets_1.WidgetType.String:
                            w = new widgets_1.Widgets.String(wid, null, widget.name, widget.value);
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
            data.links.forEach(function (link) {
                var lid = util_1.default.genId();
                ids.set(link.id, lid);
                var frId = ids.get(link.from);
                var toId = ids.get(link.to);
                var lk = new link_1.default(lid, frId, toId);
                editView.addLink(lk);
            });
        }
    };
    ;
    return EditView_Ver1;
}());
exports.default = EditView_Ver1;
;
//# sourceMappingURL=editview_ver1.js.map