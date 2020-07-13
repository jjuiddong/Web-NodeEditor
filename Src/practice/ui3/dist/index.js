"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var menubar_1 = __importDefault(require("./menubar"));
var editview_1 = __importDefault(require("./editview"));
console.log("start node editor");
var _menuBar = null;
var _editView = null;
var _ctx = null;
// initialize canvas & menubar
var body = document.querySelector('body');
if (body) {
    var menu = document.createElement('div');
    var canvas = document.createElement('canvas');
    if (menu) {
        menu.id = 'menubar';
        body.appendChild(menu);
    }
    if (canvas) {
        canvas.id = 'canvas';
        canvas.width = window.innerWidth - 4;
        canvas.height = window.innerHeight - 4;
        _ctx = canvas.getContext("2d");
        _editView = new editview_1.default(canvas, canvas.width, canvas.height);
        _menuBar = new menubar_1.default(_editView);
        body.appendChild(canvas);
    }
    window.requestAnimationFrame(render);
}
// render canvas
function render() {
    if (_editView)
        _editView.render(_ctx);
    window.requestAnimationFrame(render);
}
//# sourceMappingURL=index.js.map