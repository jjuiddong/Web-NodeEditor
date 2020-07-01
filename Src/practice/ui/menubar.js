//
// 2020-07-01, jjuiddong
// MenuBar class
//
const MenuBar = class {
  constructor(editView) {
    this.editView = editView; // EditView instance

    var parentElem = document.getElementById("menubar");
    var elem = document.createElement("div");
    elem.className = "menubar";
    elem.style.position = "absolute";
    elem.innerHTML =
      "<button id='save'>Save</button><button id='load'>Load</button>";
    parentElem.appendChild(elem);

    var saveBtn = elem.querySelector("#save");
    if (saveBtn) {
      saveBtn.addEventListener("click", this.onSave);
    }
    var loadBtn = elem.querySelector("#load");
    if (loadBtn) {
      loadBtn.addEventListener("click", this.onLoad);
    }

    this.elem = elem;
  }

  //--------------------------------------------------------------------------------
  // MenuBar.onSave
  // save button click event handler
  onSave = () => {
    this.editView.save();
  };

  //--------------------------------------------------------------------------------
  // MenuBar.onLoad
  // load button click event handler
  onLoad = () => {
    this.editView.load();
  };
};
