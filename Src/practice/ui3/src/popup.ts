//
// 2020-07-01, jjuiddong
// PopUp Window
//
// 2020-07-14
//  - TypeScript Refactoring
//
import { Widgets } from './widgets'
import Util from './util'

export namespace Popup {

  export enum InputType {
    Boolean,
    Number,
    String
  }

  //--------------------------------------------------------------------------------
  // Popup.Input
  //--------------------------------------------------------------------------------
  export class Input {
    isShow: boolean = false // show/hide input popup
    parentElem: HTMLElement = document.body; // parent element
    widget: Widgets.Base | null = null; // input widget
    elem: HTMLElement

    constructor() {
      var elem = document.createElement("div");
      elem.className = "popup-input";
      elem.style.position = "absolute";
      this.elem = elem;
    }

    //--------------------------------------------------------------------------------
    // Popup.Input.open
    // open input popup
    open(widget: Widgets.Base, x: number, y: number) {
      this.widget = widget;
      this.elem.style.left = x + "px";
      this.elem.style.top = y + "px";
      this.elem.innerHTML =
        "Value  <input type='text' value='' spellcheck='false'></input><button>OK</button>";
      var input = this.elem.querySelector("input");
      if (input) {
        if (this.widget instanceof Widgets.Boolean) {
          input.value = String(this.widget.value);
        } else if (this.widget instanceof Widgets.Number) {
          input.value = String(this.widget.value);
        } else if (this.widget instanceof Widgets.String) {
          input.value = String(this.widget.value);
        } else {
          console.log('error Popup.Input.open, type error');
        }
        input.addEventListener("keydown", (e) => {
          if (e.keyCode == 13) this.onComplete();
          else if (e.keyCode == 27) this.onCancel();
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
      if (input) input.focus();
    };

    //--------------------------------------------------------------------------------
    // Popup.Input.close
    // close input popup
    close() {
      if (!this.isShow) return;
      this.isShow = false;
      this.parentElem.removeChild(this.elem);
    };

    //--------------------------------------------------------------------------------
    // Popup.Input.setValue
    // complete input
    setValue(value: any) {
      if (this.widget instanceof Widgets.Boolean) {
        this.widget.value = value === "true";
      } else if (this.widget instanceof Widgets.Number) {
        this.widget.value = parseInt(value);
      } else if (this.widget instanceof Widgets.String) {
        this.widget.value = value;
      } else {
        console.log('error Popup.Input.setValue, type error');
      }
    }

    //--------------------------------------------------------------------------------
    // Popup.Input.onComplete
    // complete input
    onComplete = () => {
      var input = this.elem.querySelector("input");
      if (input) this.setValue(input.value);
      this.close();
    };

    //--------------------------------------------------------------------------------
    // Popup.Input.onCancel
    // cancel input
    onCancel = () => {
      this.close();
    };

    //--------------------------------------------------------------------------------
    // Popup.Input.onButtonClick
    // complete input
    onButtonClick = () => {
      var input = this.elem.querySelector("input");
      if (input) this.setValue(input.value);
      this.close();
    };
  };

  //--------------------------------------------------------------------------------
  // Popup.Prompt
  //--------------------------------------------------------------------------------
  export class Prompt {
    isShow: boolean = false; // show/hide input popup
    parentElem: HTMLElement = document.body; // parent element
    elem: HTMLElement
    callback:{(value:any):void;} | null = null

    constructor() {
      var elem = document.createElement("div");
      elem.className = "popup-prompt";
      elem.style.position = "absolute";
      this.elem = elem;
    }

    //--------------------------------------------------------------------------------
    // Popup.Prompt.open
    // open Prompt popup
    open(title:string, value:string, callback:{(value:any):void;} | null, 
      x:number|null=null, y:number|null=null) {
      this.callback = callback;

      const left = x || (window.innerWidth / 2) - (450 / 2)
      const top = y || (window.innerHeight / 2) - (Util.convertRemToPixels(6) / 2)
      this.elem.style.left = left + "px";
      this.elem.style.top = top + "px";
      this.elem.innerHTML =
        "<span>" + title + "</span>Value  <input type='text' value='' spellcheck='false'></input><button>OK</button>";
      var input = this.elem.querySelector("input");
      if (input) {
        input.value = value;
        input.addEventListener("keydown", (e) => {
          if (e.keyCode == 13) this.onComplete();
          else if (e.keyCode == 27) this.onCancel();
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
      if (input) input.focus();
    };

    //--------------------------------------------------------------------------------
    // Popup.Prompt.close
    // close prompt popup
    close() {
      if (!this.isShow) return;
      this.isShow = false;
      this.parentElem.removeChild(this.elem);
    };

    //--------------------------------------------------------------------------------
    // Popup.Prompt.onComplete
    // complete input
    onComplete = () => {
      var input = this.elem.querySelector("input");
      if (input && this.callback) this.callback(input.value);
      this.close();
    };

    //--------------------------------------------------------------------------------
    // Popup.Prompt.onCancel
    // cancel input
    onCancel = () => {
      this.close();
    };

    //--------------------------------------------------------------------------------
    // Popup.Prompt.onButtonClick
    // complete input
    onButtonClick = () => {
      var input = this.elem.querySelector("input");
      if (input && this.callback) this.callback(input.value);
      this.close();
    };
  }

}
