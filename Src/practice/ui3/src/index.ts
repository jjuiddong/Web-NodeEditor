
import MenuBar from './menubar'
import EditView from './editview'

console.log("start node editor")
var _menuBar: MenuBar|null = null;
var _editView:EditView|null = null;
var _ctx:CanvasRenderingContext2D|null = null;

 // initialize canvas & menubar
var body:HTMLBodyElement|null = document.querySelector('body');
if (body) {
    var menu: HTMLElement|null = document.createElement('div');
    var canvas: HTMLCanvasElement|null = document.createElement('canvas');
    if (menu) {
        menu.id = 'menubar'
        body.appendChild(menu);
    }
    if (canvas) {
        canvas.id = 'canvas';
        canvas.width = window.innerWidth - 4;
        canvas.height = window.innerHeight - 4;
        _ctx = canvas.getContext("2d");
        _editView = new EditView(canvas, canvas.width, canvas.height);
        _menuBar = new MenuBar(_editView);        
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
