"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
//
// 2020-07-01, jjuiddong
// PopUp Window
//
// 2020-07-14
//  - TypeScript Refactoring
//
var widgets_1 = require("./widgets");
var util_1 = __importDefault(require("./util"));
var Popup;
(function (Popup) {
    var InputType;
    (function (InputType) {
        InputType[InputType["Boolean"] = 0] = "Boolean";
        InputType[InputType["Number"] = 1] = "Number";
        InputType[InputType["String"] = 2] = "String";
    })(InputType = Popup.InputType || (Popup.InputType = {}));
    //--------------------------------------------------------------------------------
    // Popup.Input
    //--------------------------------------------------------------------------------
    var Input = /** @class */ (function () {
        function Input() {
            var _this = this;
            this.isShow = false; // show/hide input popup
            this.parentElem = document.body; // parent element
            this.widget = null; // input widget
            //--------------------------------------------------------------------------------
            // Popup.Input.onComplete
            // complete input
            this.onComplete = function () {
                var input = _this.elem.querySelector("input");
                if (input)
                    _this.setValue(input.value);
                _this.close();
            };
            //--------------------------------------------------------------------------------
            // Popup.Input.onCancel
            // cancel input
            this.onCancel = function () {
                _this.close();
            };
            //--------------------------------------------------------------------------------
            // Popup.Input.onButtonClick
            // complete input
            this.onButtonClick = function () {
                var input = _this.elem.querySelector("input");
                if (input)
                    _this.setValue(input.value);
                _this.close();
            };
            var elem = document.createElement("div");
            elem.className = "popup-input";
            elem.style.position = "absolute";
            this.elem = elem;
        }
        //--------------------------------------------------------------------------------
        // Popup.Input.open
        // open input popup
        Input.prototype.open = function (widget, x, y) {
            var _this = this;
            this.widget = widget;
            this.elem.style.left = x + "px";
            this.elem.style.top = y + "px";
            this.elem.innerHTML =
                "Value  <input type='text' value='' spellcheck='false'></input><button>OK</button>";
            var input = this.elem.querySelector("input");
            if (input) {
                if (this.widget instanceof widgets_1.Widgets.Boolean) {
                    input.value = String(this.widget.value);
                }
                else if (this.widget instanceof widgets_1.Widgets.Number) {
                    input.value = String(this.widget.value);
                }
                else if (this.widget instanceof widgets_1.Widgets.String) {
                    input.value = String(this.widget.value);
                }
                else {
                    console.log('error Popup.Input.open, type error');
                }
                input.addEventListener("keydown", function (e) {
                    if (e.keyCode == 13)
                        _this.onComplete();
                    else if (e.keyCode == 27)
                        _this.onCancel();
                });
                input.addEventListener("blur", function (e) {
                    this.focus();
                });
            }
            var button = this.elem.querySelector("button");
            if (button) {
                button.addEventListener("click", this.onButtonClick);
            }
            if (!this.isShow) {
                this.isShow = true;
                this.parentElem.appendChild(this.elem);
            }
            var input = this.elem.querySelector("input");
            if (input)
                input.focus();
        };
        ;
        //--------------------------------------------------------------------------------
        // Popup.Input.close
        // close input popup
        Input.prototype.close = function () {
            if (!this.isShow)
                return;
            this.isShow = false;
            this.parentElem.removeChild(this.elem);
        };
        ;
        //--------------------------------------------------------------------------------
        // Popup.Input.setValue
        // complete input
        Input.prototype.setValue = function (value) {
            if (this.widget instanceof widgets_1.Widgets.Boolean) {
                this.widget.value = value === "true";
            }
            else if (this.widget instanceof widgets_1.Widgets.Number) {
                this.widget.value = parseInt(value);
            }
            else if (this.widget instanceof widgets_1.Widgets.String) {
                this.widget.value = value;
            }
            else {
                console.log('error Popup.Input.setValue, type error');
            }
        };
        return Input;
    }());
    Popup.Input = Input;
    ;
    //--------------------------------------------------------------------------------
    // Popup.Prompt
    //--------------------------------------------------------------------------------
    var Prompt = /** @class */ (function () {
        function Prompt() {
            var _this = this;
            this.isShow = false; // show/hide input popup
            this.parentElem = document.body; // parent element
            this.callback = null;
            //--------------------------------------------------------------------------------
            // Popup.Prompt.onComplete
            // complete input
            this.onComplete = function () {
                var input = _this.elem.querySelector("input");
                if (input && _this.callback)
                    _this.callback(input.value);
                _this.close();
            };
            //--------------------------------------------------------------------------------
            // Popup.Prompt.onCancel
            // cancel input
            this.onCancel = function () {
                _this.close();
            };
            //--------------------------------------------------------------------------------
            // Popup.Prompt.onButtonClick
            // complete input
            this.onButtonClick = function () {
                var input = _this.elem.querySelector("input");
                if (input && _this.callback)
                    _this.callback(input.value);
                _this.close();
            };
            var elem = document.createElement("div");
            elem.className = "popup-prompt";
            elem.style.position = "absolute";
            this.elem = elem;
        }
        //--------------------------------------------------------------------------------
        // Popup.Prompt.open
        // open Prompt popup
        Prompt.prototype.open = function (title, value, callback, x, y) {
            var _this = this;
            if (x === void 0) { x = null; }
            if (y === void 0) { y = null; }
            this.callback = callback;
            var left = x || (window.innerWidth / 2) - (450 / 2);
            var top = y || (window.innerHeight / 2) - (util_1.default.convertRemToPixels(6) / 2);
            this.elem.style.left = left + "px";
            this.elem.style.top = top + "px";
            this.elem.innerHTML =
                "<span>" + title + "</span>Value  <input type='text' value='' spellcheck='false'></input><button>OK</button>";
            var input = this.elem.querySelector("input");
            if (input) {
                input.value = value;
                input.addEventListener("keydown", function (e) {
                    if (e.keyCode == 13)
                        _this.onComplete();
                    else if (e.keyCode == 27)
                        _this.onCancel();
                });
                input.addEventListener("blur", function (e) {
                    this.focus();
                });
            }
            var button = this.elem.querySelector("button");
            if (button) {
                button.addEventListener("click", this.onButtonClick);
            }
            if (!this.isShow) {
                this.isShow = true;
                this.parentElem.appendChild(this.elem);
            }
            var input = this.elem.querySelector("input");
            if (input)
                input.focus();
        };
        ;
        //--------------------------------------------------------------------------------
        // Popup.Prompt.close
        // close prompt popup
        Prompt.prototype.close = function () {
            if (!this.isShow)
                return;
            this.isShow = false;
            this.parentElem.removeChild(this.elem);
        };
        ;
        return Prompt;
    }());
    Popup.Prompt = Prompt;
})(Popup = exports.Popup || (exports.Popup = {}));
//# sourceMappingURL=popup.js.map