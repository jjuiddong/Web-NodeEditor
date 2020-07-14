//
// 2020-07-01, jjuiddong
// MenuBar class
//
// 2020-07-01
//  - TypeScript Refactoring
//
import EditView from './editview'

export default class MenuBar {
  editView: EditView | null = null
  elem: HTMLElement | null = null

  constructor(editView: EditView) {
    this.editView = editView; // EditView instance

    var parentElem: HTMLElement | null = document.getElementById("menubar");
    var elem: HTMLElement = document.createElement("div");
    if (parentElem && elem) {
      elem.className = "menubar";
      elem.style.position = "absolute";
      elem.innerHTML =
        "<button id='savedb'>Save DB</button>"
        + "<button id='loaddb'>Load DB</button>"
        + "<span style='margin:2rem'></span>"
        + "<button id='savelocal'>Save Local</button>"
        + "<button id='loadlocal'>Load Local</button>"
        ;
      parentElem.appendChild(elem);

      var saveBtn = elem.querySelector("#savedb");
      if (saveBtn) {
        saveBtn.addEventListener("click", this.onSaveDB);
      }
      var loadBtn = elem.querySelector("#loaddb");
      if (loadBtn) {
        loadBtn.addEventListener("click", this.onLoadDB);
      }

      var saveLocalBtn = elem.querySelector("#savelocal");
      if (saveLocalBtn) {
        saveLocalBtn.addEventListener("click", this.onSaveLocal);
      }
      var loadLocalBtn = elem.querySelector("#loadlocal");
      if (loadLocalBtn) {
        loadLocalBtn.addEventListener("click", this.onLoadLocal);
      }

      this.elem = elem;
    }
  }

  //--------------------------------------------------------------------------------
  // MenuBar.onSaveDB
  // save button click event handler
  onSaveDB = () => {
    this.editView?.saveDB();
  };

  //--------------------------------------------------------------------------------
  // MenuBar.onLoadDB
  // load button click event handler
  onLoadDB = () => {
    this.editView?.loadDB();
  };

  //--------------------------------------------------------------------------------
  // MenuBar.onSaveLocal
  // save button click event handler
  onSaveLocal = () => {
    this.editView?.saveLocalStorage();
  };

  //--------------------------------------------------------------------------------
  // MenuBar.onLoadLocal
  // load button click event handler
  onLoadLocal = () => {
    this.editView?.loadLocalStorage();
  };
};
