//
// 2020-07-01, jjuiddong
// PopUp Window
//

const Popup = class {
  constructor() {}
};

const INPUT_TYPE_BOOLEAN = 0;
const INPUT_TYPE_NUMBER = 1;
const INPUT_TYPE_STRING = 2;

//--------------------------------------------------------------------------------
// Popup.Input
//--------------------------------------------------------------------------------
Popup.Input = class {
  constructor() {
    this.isShow = false; // show/hide input popup
    this.parentElem = document.body; // parent element
    this.widget = null; // input widget

    var elem = document.createElement("div");
    elem.className = "popup-input";
    elem.style.position = "absolute";
    this.elem = elem;
  }

  //--------------------------------------------------------------------------------
  // Popup.Input.open
  // open input popup
  open = function (widget, x, y) {
    this.widget = widget;
    this.elem.style.left = parseInt(x) + "px";
    this.elem.style.top = parseInt(y) + "px";
    this.elem.innerHTML =
      "Value  <input type='text' value='' spellcheck='false'></input><button>OK</button>";
    var input = this.elem.querySelector("input");
    if (input) {
      input.value = widget.value;
      input.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) this.onComplete();
        else if (e.keyCode == 27) this.onCancel();
      });
      input.addEventListener("blur", function(e) {
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
  close = function () {
    if (!this.isShow) return;
    this.isShow = false;
    this.parentElem.removeChild(this.elem);
  };

  //--------------------------------------------------------------------------------
  // Popup.Input.setValue
  // complete input
  setValue(value) {
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
Popup.Prompt = class {
  constructor() {
    this.isShow = false; // show/hide input popup
    this.parentElem = document.body; // parent element

    var elem = document.createElement("div");
    elem.className = "popup-prompt";
    elem.style.position = "absolute";
    this.elem = elem;
  }

  //--------------------------------------------------------------------------------
  // Popup.Prompt.open
  // open Prompt popup
  open = function (title, value, callback, x, y) {
    this.callback = callback;

    const left = x || (window.innerWidth / 2) - (450/2)
    const top = y || (window.innerHeight / 2) - (Util.convertRemToPixels(6)/2)
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
      input.addEventListener("blur", function(e) {
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
  close = function () {
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
