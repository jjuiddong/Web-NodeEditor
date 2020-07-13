"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuBar = /** @class */ (function () {
    function MenuBar(editView) {
        var _this = this;
        this.editView = null;
        this.elem = null;
        //--------------------------------------------------------------------------------
        // MenuBar.onSaveDB
        // save button click event handler
        this.onSaveDB = function () {
            var _a;
            (_a = _this.editView) === null || _a === void 0 ? void 0 : _a.saveDB();
        };
        //--------------------------------------------------------------------------------
        // MenuBar.onLoadDB
        // load button click event handler
        this.onLoadDB = function () {
            var _a;
            (_a = _this.editView) === null || _a === void 0 ? void 0 : _a.loadDB();
        };
        //--------------------------------------------------------------------------------
        // MenuBar.onSaveLocal
        // save button click event handler
        this.onSaveLocal = function () {
            var _a;
            (_a = _this.editView) === null || _a === void 0 ? void 0 : _a.saveLocalStorage();
        };
        //--------------------------------------------------------------------------------
        // MenuBar.onLoadLocal
        // load button click event handler
        this.onLoadLocal = function () {
            var _a;
            (_a = _this.editView) === null || _a === void 0 ? void 0 : _a.loadLocalStorage();
        };
        this.editView = editView; // EditView instance
        var parentElem = document.getElementById("menubar");
        var elem = document.createElement("div");
        if (parentElem && elem) {
            elem.className = "menubar";
            elem.style.position = "absolute";
            elem.innerHTML =
                "<button id='savedb'>Save DB</button>"
                    + "<button id='loaddb'>Load DB</button>"
                    + "<span style='margin:2rem'></span>"
                    + "<button id='savelocal'>Save Local</button>"
                    + "<button id='loadlocal'>Load Local</button>";
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
    return MenuBar;
}());
exports.default = MenuBar;
;
//# sourceMappingURL=menubar.js.map