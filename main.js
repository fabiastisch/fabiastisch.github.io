(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\_Workspace\webstorm\fabiastisch.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "7iPR":
/*!*******************************************!*\
  !*** ./src/app/util/algorithm-x/model.ts ***!
  \*******************************************/
/*! exports provided: initializeMetadata, Node, initializeNode, initializeColumnNode, initializeRootNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeMetadata", function() { return initializeMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeNode", function() { return initializeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeColumnNode", function() { return initializeColumnNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRootNode", function() { return initializeRootNode; });
const ROOT = 'h';
function initializeMetadata(column, row, value, data) {
    return { row, column, value, data };
}
function nullMetadata() {
    return { row: 0, column: 0, value: -1, data: [] };
}
class Node {
    constructor() {
        this.name = '';
        this.size = 0;
        this.metadata = nullMetadata();
        this.columnNode = this.up = this.down = this.left = this.right = this;
    }
}
function initializeNode(columnNode, metadata) {
    const node = new Node();
    node.columnNode = columnNode;
    node.metadata = metadata;
    return node;
}
function initializeColumnNode(name) {
    const node = new Node();
    node.name = name;
    return node;
}
function initializeRootNode() {
    const node = new Node();
    node.name = ROOT;
    return node;
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hi! Im Fabian. This website is under construction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Atqw":
/*!******************************************!*\
  !*** ./src/app/util/algorithm-x/list.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
class List {
    static chunk(arr, size) {
        const out = [];
        while (arr.length) {
            out.push(arr.splice(0, size));
        }
        return out;
    }
    static flatten(arr) {
        return arr.reduce((a, b) => a.concat(b), []);
    }
    static takeFirstOr(arr, def) {
        if (arr.length > 0) {
            return arr[0];
        }
        return def;
    }
    static of(size, value) {
        return Array(size).fill(value);
    }
    static grid(size, value) {
        return Array(size).fill([])
            .map(() => Array(size).fill(value));
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Knjp":
/*!************************************************************!*\
  !*** ./src/app/chess/chess-board/chess-board.component.ts ***!
  \************************************************************/
/*! exports provided: ChessBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessBoardComponent", function() { return ChessBoardComponent; });
/* harmony import */ var _chess_board_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess-board-model */ "s9CG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ChessBoardComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colIndex_r5 = ctx.index;
    const rowIndex_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", rowIndex_r2 % 2 === 0 && colIndex_r5 % 2 !== 0 || rowIndex_r2 % 2 !== 0 && colIndex_r5 % 2 === 0 ? "bg-colorTwo" : "bg-colorOne");
} }
function ChessBoardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChessBoardComponent_div_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.board);
} }
class ChessBoardComponent {
    constructor() {
        this.board = new _chess_board_model__WEBPACK_IMPORTED_MODULE_0__["ChessBoardModel"]();
    }
    ngOnInit() {
    }
}
ChessBoardComponent.ɵfac = function ChessBoardComponent_Factory(t) { return new (t || ChessBoardComponent)(); };
ChessBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChessBoardComponent, selectors: [["app-chess-board"]], decls: 3, vars: 1, consts: [[1, "flex"], [1, "display"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "cell", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "cell", 3, "ngClass"], [1, "value"]], template: function ChessBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChessBoardComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.board);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  border: 1px solid black;\n}\n\n.display[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 50vmin;\n  height: 50vmin;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  \n}\n\n.row[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-self: center;\n  margin: 0;\n}\n\n.bg-colorOne[_ngcontent-%COMP%] {\n  background: #e1e9de;\n}\n\n.bg-colorTwo[_ngcontent-%COMP%] {\n  background: #d08c4f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVzcy1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUZGOztBQU1BO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQTt1QkFBQTtBQUZGOztBQU1BO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFIRjs7QUFLQTtFQUNFLG1CQTlCUztBQTRCWDs7QUFJQTtFQUNFLG1CQWhDUztBQStCWCIsImZpbGUiOiJjaGVzcy1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhY3RpdmVDb2xvcjogIzRlOWFlNTtcclxuJGNvbG9yT25lOiAjZTFlOWRlO1xyXG4kY29sb3JUd286ICNkMDhjNGY7XHJcbi5jZWxsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleDogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG59XHJcblxyXG4uZGlzcGxheXtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDUwdm1pbjtcclxuICBoZWlnaHQ6IDUwdm1pbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyovXHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYmctY29sb3JPbmV7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yT25lO1xyXG59XHJcbi5iZy1jb2xvclR3b3tcclxuICBiYWNrZ3JvdW5kOiAkY29sb3JUd287XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "OOpg":
/*!***************************************!*\
  !*** ./src/app/chess/chess.module.ts ***!
  \***************************************/
/*! exports provided: ChessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessModule", function() { return ChessModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chess_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chess.component */ "wZkl");
/* harmony import */ var _chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chess-board/chess-board.component */ "Knjp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ChessModule {
}
ChessModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ChessModule });
ChessModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ChessModule_Factory(t) { return new (t || ChessModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChessModule, { declarations: [_chess_component__WEBPACK_IMPORTED_MODULE_1__["ChessComponent"],
        _chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_2__["ChessBoardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_chess_component__WEBPACK_IMPORTED_MODULE_1__["ChessComponent"]] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'fabiastisch';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "U1MI":
/*!******************************************!*\
  !*** ./src/app/util/algorithm-x/core.ts ***!
  \******************************************/
/*! exports provided: initializeColumnLabels, initializeHeaderColumns, initializeCircularDoublyLinkedToroidaList, smallestColumnSize, search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeColumnLabels", function() { return initializeColumnLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeHeaderColumns", function() { return initializeHeaderColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeCircularDoublyLinkedToroidaList", function() { return initializeCircularDoublyLinkedToroidaList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallestColumnSize", function() { return smallestColumnSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "7iPR");

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// initializeColumnLabels will create an array of labels from a given limit
function initializeColumnLabels(n) {
    const labels = [...ALPHABETS];
    return n < labels.length ?
        labels.slice(0, n) :
        Array(n).fill(0).map((_, i) => (i + 1).toString());
}
function initializeHeaderColumns(labels = []) {
    const rootNode = Object(_model__WEBPACK_IMPORTED_MODULE_0__["initializeRootNode"])();
    const currNode = labels.reduce((prev, name) => {
        const curr = Object(_model__WEBPACK_IMPORTED_MODULE_0__["initializeColumnNode"])(name);
        curr.left = prev;
        curr.left.right = curr;
        return curr;
    }, rootNode);
    rootNode.left = currNode;
    rootNode.left.right = rootNode;
    return rootNode;
}
function initializeCircularDoublyLinkedToroidaList(metadata, columnLabels) {
    // Setup header node
    const rootNode = initializeHeaderColumns(columnLabels);
    const dimension = (m) => [m.length, m[0].data.length];
    const isOne = (n) => n === 1;
    const [maxRow, maxCol] = dimension(metadata);
    const isLastRow = (row) => row === maxRow - 1;
    const isLastColumn = (col) => col === maxCol - 1;
    metadata.forEach((meta, row) => {
        const metaData = Object(_model__WEBPACK_IMPORTED_MODULE_0__["initializeMetadata"])(meta.column, meta.row, meta.value, []);
        const prevNodes = [];
        meta.data.forEach((value, column) => {
            const name = columnLabels[column];
            if (isOne(value)) {
                const columnNode = traverseRight(rootNode, name);
                columnNode.size += 1;
                const node = Object(_model__WEBPACK_IMPORTED_MODULE_0__["initializeNode"])(columnNode, metaData);
                // Bind to the previous node on the left
                if (prevNodes.length > 0) {
                    const prevNode = prevNodes[prevNodes.length - 1];
                    node.left = prevNode;
                    node.left.right = node;
                }
                // Bind back to the top node
                const bottomNode = traverseDown(columnNode);
                node.up = bottomNode;
                node.up.down = node;
                prevNodes.push(node);
            }
            // Link top and bottom nodes together
            if (isLastRow(row)) {
                const lastNode = traverseRight(rootNode, name);
                const bottomNode = traverseDown(lastNode);
                bottomNode.down = bottomNode.columnNode;
                bottomNode.down.up = bottomNode;
            }
            // Link left and right nodes together
            if (isLastColumn(column) && prevNodes.length) {
                const lastNode = prevNodes[prevNodes.length - 1];
                const firstNode = prevNodes[0];
                lastNode.right = firstNode;
                lastNode.right.left = lastNode;
            }
        });
    });
    return rootNode;
}
function smallestColumnSize(rootNode, size = Infinity) {
    let c = rootNode.right;
    for (let j = rootNode.right; j !== rootNode; j = j.right) {
        if (j.size < size) {
            size = j.size;
            c = j;
        }
    }
    return c;
}
function* search(depth = 0, rootNode, solution = []) {
    // Termination condition
    if (rootNode.right === rootNode) {
        // Return a copy without pointing back to the reference,
        // as the values might be replaced
        // console.log('[terminate]');
        yield [...solution];
    }
    // Start with the smallest column node to minimize search
    let c = smallestColumnSize(rootNode);
    cover(c);
    for (let r = c.down; r !== c; r = r.down) {
        solution.push(r);
        for (let j = r.right; j !== r; j = j.right) {
            cover(j);
        }
        yield* search(depth + 1, rootNode, solution);
        r = solution.pop() || r;
        c = r.columnNode;
        for (let j = r.left; j !== r; j = j.left) {
            uncover(j);
        }
    }
    uncover(c);
}
function cover(node) {
    const columnNode = node.columnNode;
    columnNode.right.left = columnNode.left;
    columnNode.left.right = columnNode.right;
    for (let i = columnNode.down; i !== columnNode; i = i.down) {
        for (let j = i.right; j !== i; j = j.right) {
            j.down.up = j.up;
            j.up.down = j.down;
            j.columnNode.size -= 1;
        }
    }
}
function uncover(node) {
    const columnNode = node.columnNode;
    for (let i = columnNode.up; i !== columnNode; i = i.up) {
        for (let j = i.left; j !== i; j = j.left) {
            j.columnNode.size += 1;
            j.down.up = j;
            j.up.down = j;
        }
    }
    columnNode.right.left = columnNode;
    columnNode.left.right = columnNode;
}
function traverseDown(rootNode) {
    let node = rootNode;
    while (node && node.down && node.down !== node) {
        node = node.down;
    }
    return node;
}
function traverseRight(rootNode, name) {
    let node = rootNode;
    while (node.name !== name && node.right !== node) {
        node = node.right;
    }
    return node;
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sudoku/sudoku.component */ "y18u");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _chess_chess_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chess/chess.module */ "OOpg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _chess_chess_module__WEBPACK_IMPORTED_MODULE_9__["ChessModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_3__["SudokuComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _chess_chess_module__WEBPACK_IMPORTED_MODULE_9__["ChessModule"]] }); })();


/***/ }),

/***/ "cgwm":
/*!************************************!*\
  !*** ./src/app/util/utils-math.ts ***!
  \************************************/
/*! exports provided: getRandomInt, transpose, shuffleArray, arrayStartAtZero, arrayStartAtOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayStartAtZero", function() { return arrayStartAtZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayStartAtOne", function() { return arrayStartAtOne; });
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// tslint:disable-next-line:no-shadowed-variable
const transpose = m => m[0].map((x, i) => m.map(x => x[i]));
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }
    return array;
}
function arrayStartAtZero(size) {
    return Array.from({ length: size }, (_, i) => i);
}
function arrayStartAtOne(size) {
    return Array.from({ length: size }, (_, i) => i + 1);
}


/***/ }),

/***/ "e6DU":
/*!****************************************!*\
  !*** ./src/app/sudoku/sudoku-model.ts ***!
  \****************************************/
/*! exports provided: Cell, SudokuModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuModel", function() { return SudokuModel; });
class Cell {
    constructor(value, row, col) {
        this.isActive = false;
        this.highlightLight = false;
        this.highlightHard = false;
        this.row = row;
        this.col = col;
        this.notes = [];
        if (value !== null && value !== undefined && value !== -1) {
            this.value = value;
            this.readonly = true;
        }
        else {
            this.readonly = false;
        }
    }
}
class SudokuModel extends Array {
    constructor(obj) {
        super();
        // cells: Cell[][] = [];
        this.solved = [];
        this.isSolved = () => this.every(row => row.every(cell => cell.value === cell.solution));
        obj.sudoku.forEach((row, rowIndex) => {
            const rowData = [];
            row.forEach((value, colIntdex) => {
                rowData.push(new Cell(value, rowIndex, colIntdex));
            });
            this.push(rowData);
        });
        this.solved = obj.solvedSudoku;
        obj.solvedSudoku.forEach((row, rowindex) => {
            const rowData = [];
            row.forEach((value, colindex) => {
                this[rowindex][colindex].solution = value;
            });
        });
    }
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class HeaderComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 6, consts: [[1, "navbar", "navbar-expand", "navbar-dark", "flex-column", "flex-md-row", "bg-dark", "mb-4"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "home", 1, "nav-link"], [1, "sr-only"], ["href", "sudoku", 1, "nav-link"], ["href", "chess", 1, "nav-link"], [1, "navbar-nav", "ml-md-auto"], ["href", "https://github.com/fabiastisch", "target", "_blank", "rel", "noopener", "aria-label", "GitHub", 1, "nav-link", "pl-2", "pr-1", "mx-1", "py-3", "my-n2"], [1, "fab", "fa-github", "fa-lg"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fabiastisch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sudoku");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Chess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.route.isActive("/home", false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.route.isActive("/sudoku", false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.route.isActive("/chess", false));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "s9CG":
/*!********************************************************!*\
  !*** ./src/app/chess/chess-board/chess-board-model.ts ***!
  \********************************************************/
/*! exports provided: ChessCell, ChessBoardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessCell", function() { return ChessCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessBoardModel", function() { return ChessBoardModel; });
/* harmony import */ var _util_utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/utils-math */ "cgwm");

class ChessCell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}
class ChessBoardModel extends Array {
    constructor() {
        super();
        Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["arrayStartAtZero"])(8).forEach(row => {
            const dataRow = [];
            Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["arrayStartAtZero"])(8).forEach(col => {
                dataRow.push(new ChessCell(row, col));
            });
            this.push(dataRow);
        });
    }
}


/***/ }),

/***/ "shHH":
/*!**************************************!*\
  !*** ./src/app/util/sudoku-utils.ts ***!
  \**************************************/
/*! exports provided: SudokuUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuUtils", function() { return SudokuUtils; });
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-math */ "cgwm");
/* harmony import */ var _algorithm_x_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithm-x/list */ "Atqw");
/* harmony import */ var _algorithm_x_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithm-x/core */ "U1MI");



class SudokuUtils {
    static fromString(input) {
        const parsed = [...input].map(i => i === SudokuUtils.DOT ? SudokuUtils.EMPTY : Number(i));
        // tslint:disable-next-line:no-shadowed-variable
        const size = Math.sqrt(parsed.length);
        return _algorithm_x_list__WEBPACK_IMPORTED_MODULE_1__["default"].chunk(parsed, size);
    }
    static boardFrom(input) {
        const [FIRST, SECOND] = [3, 7];
        const parsedRow = [...input].map((rows) => {
            const c = [...rows].map(i => (i === SudokuUtils.EMPTY || i === 0) ? SudokuUtils.DOT : i);
            c.splice(FIRST, 0, SudokuUtils.VERTICAL);
            c.splice(SECOND, 0, SudokuUtils.VERTICAL);
            return c.join(' ');
        });
        parsedRow.splice(FIRST, 0, SudokuUtils.HORIZONTAL);
        parsedRow.splice(SECOND, 0, SudokuUtils.HORIZONTAL);
        return parsedRow.join('\n');
    }
    static print(label, input) {
        console.group(label);
        console.log();
        console.log(SudokuUtils.boardFrom(input));
        console.log();
        console.groupEnd();
    }
    static parseCells(input) {
        // tslint:disable-next-line:no-shadowed-variable
        const size = input.length;
        const constraintMatrix = [];
        const onlyNumbers = (n) => n !== SudokuUtils.EMPTY;
        for (let row = 0; row < size; row += 1) {
            // Values that are currently present in the row
            const numbers = input[row].filter(onlyNumbers);
            for (let column = 0; column < size; column += 1) {
                const value = input[row][column];
                // If the column is not yet filled, fill it with values that are not
                // yet present in the column
                if (value === SudokuUtils.EMPTY) {
                    // Value must be from 1 - 9
                    // tslint:disable-next-line:no-shadowed-variable
                    for (let value = 1; value <= size; value += 1) {
                        // Only insert numbers that are not yet present for that row
                        if (numbers.includes(value)) {
                            continue;
                        }
                        // Create the row matrix with the constraints applied.
                        // This will be a 9 x 9 x 4 matrix with 1 and 0s
                        // tslint:disable-next-line:no-shadowed-variable
                        const data = SudokuUtils.constraintMatrix(size, row, column, value);
                        constraintMatrix.push({
                            row,
                            column,
                            value,
                            data
                        });
                    }
                    continue;
                }
                const data = SudokuUtils.constraintMatrix(size, row, column, value);
                constraintMatrix.push({
                    row,
                    column,
                    value,
                    data
                });
            }
        }
        return constraintMatrix;
    }
    static solver(input) {
        const columns = Object(_algorithm_x_core__WEBPACK_IMPORTED_MODULE_2__["initializeColumnLabels"])(SudokuUtils.SIZE * SudokuUtils.SIZE * 4);
        const rootNode = Object(_algorithm_x_core__WEBPACK_IMPORTED_MODULE_2__["initializeCircularDoublyLinkedToroidaList"])(input, columns);
        return Object(_algorithm_x_core__WEBPACK_IMPORTED_MODULE_2__["search"])(0, rootNode);
    }
    // Generator
    static *solve(input) {
        const solutions = [input]
            .map(SudokuUtils.fromString)
            .map(SudokuUtils.parseCells)
            .map(SudokuUtils.solver);
        const solution = solutions[0];
        for (const solve of solution) {
            for (const row of solve) {
                yield row.metadata;
            }
        }
    }
    // tslint:disable-next-line:no-shadowed-variable
    static constraints(size, row, column, value) {
        const r = Math.floor(row / SudokuUtils.BOX_SIZE) * SudokuUtils.BOX_SIZE;
        const c = Math.floor(column / SudokuUtils.BOX_SIZE);
        return {
            cell: row * size + column,
            row: row * size + value - 1,
            column: column * size + value - 1,
            box: (r + c) * size + value - 1
        };
    }
    // tslint:disable-next-line:no-shadowed-variable
    static constraintMatrix(size, row, column, value) {
        const c = SudokuUtils.constraints(size, row, column, value);
        const constraints = [
            c.cell,
            c.row,
            c.column,
            c.box
        ];
        const matrices = constraints.map(index => {
            const arr = _algorithm_x_list__WEBPACK_IMPORTED_MODULE_1__["default"].of(size * size, 0);
            arr[index] = 1;
            return arr;
        });
        return _algorithm_x_list__WEBPACK_IMPORTED_MODULE_1__["default"].flatten(matrices);
    }
    static toString(output) {
        return output.map(rows => rows.map(i => i === SudokuUtils.EMPTY ? SudokuUtils.DOT : i).join('')).join('');
    }
    static generateFullSudoku() {
        const numbers = Array.from({ length: SudokuUtils.SIZE }, (_, i) => i + 1);
        let grid = '';
        const first = [];
        [...Array(SudokuUtils.SIZE)].forEach(_ => {
            const randomInt = Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, numbers.length - 1);
            first.push(numbers[randomInt]);
            numbers.splice(randomInt, 1);
        });
        grid += first.join('');
        let row = 0;
        [...Array(SudokuUtils.SIZE - 1)].forEach(_ => {
            row++;
            if (row % SudokuUtils.BOX_SIZE === 0) {
                const n = first.shift();
                first.push(n);
            }
            // tslint:disable-next-line:no-shadowed-variable
            [...Array(SudokuUtils.BOX_SIZE)].forEach(_ => {
                const n = first.shift();
                first.push(n);
            });
            grid += first.join('');
        });
        return SudokuUtils.fromString(grid);
    }
    static shuffleSudoku(fullSudoku, mode = 0) {
        if (mode < 2) {
            const newSudoku = [];
            // shuffle rows
            const numbers = Array.from({ length: SudokuUtils.BOX_SIZE }, (_, i) => i);
            let region = 0;
            [...Array(SudokuUtils.BOX_SIZE)].forEach(((_, index) => {
                Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(numbers).forEach(random => {
                    newSudoku.push(fullSudoku[random + region * SudokuUtils.BOX_SIZE]);
                });
                region++;
            }));
            // Sudoku.print('null', newSudoku);
            // Shuffle Columns
            return SudokuUtils.shuffleSudoku(Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["transpose"])(newSudoku), ++mode);
        }
        else {
            return fullSudoku;
        }
    }
    static getSudoku() {
        const sudoku = SudokuUtils.shuffleSudoku(SudokuUtils.generateFullSudoku());
        const solvedSudoku = JSON.parse(JSON.stringify(sudoku));
        const random = () => Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["arrayStartAtZero"])(SudokuUtils.SIZE));
        let emptyFields = 0;
        for (const row of random()) {
            for (const col of random()) {
                const temp = sudoku[col][row];
                if (temp === -1) {
                    continue;
                }
                sudoku[col][row] = -1;
                const solutionCount = SudokuUtils.getSolutionCount(sudoku);
                // backtrack
                if (solutionCount > 1) {
                    sudoku[col][row] = temp;
                }
                else {
                    emptyFields++;
                }
            }
        }
        return { sudoku, solvedSudoku };
    }
    static getSolutionCount(grid) {
        const solution = SudokuUtils.solver(SudokuUtils.parseCells(grid));
        return [...solution].length;
    }
}
SudokuUtils.EMPTY = -1;
SudokuUtils.VERTICAL = '|';
SudokuUtils.HORIZONTAL = '------+-------+------';
SudokuUtils.DOT = '.';
SudokuUtils.SIZE = 9;
SudokuUtils.BOX_SIZE = 3;


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sudoku/sudoku.component */ "y18u");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _chess_chess_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chess/chess.component */ "wZkl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'sudoku', component: _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_2__["SudokuComponent"] },
    { path: 'chess', component: _chess_chess_component__WEBPACK_IMPORTED_MODULE_4__["ChessComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/sudoku' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "wP4b":
/*!**********************************************************!*\
  !*** ./src/app/modal-content/modal-content.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContentComponent", function() { return ModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class ModalContentComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
}
ModalContentComponent.ɵfac = function ModalContentComponent_Factory(t) { return new (t || ModalContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ModalContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalContentComponent, selectors: [["app-modal-content"]], inputs: { headerText: "headerText" }, decls: 9, vars: 1, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function ModalContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalContentComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalContentComponent_Template_button_click_7_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerText);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "wZkl":
/*!******************************************!*\
  !*** ./src/app/chess/chess.component.ts ***!
  \******************************************/
/*! exports provided: ChessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessComponent", function() { return ChessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chess-board/chess-board.component */ "Knjp");


class ChessComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChessComponent.ɵfac = function ChessComponent_Factory(t) { return new (t || ChessComponent)(); };
ChessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChessComponent, selectors: [["app-chess"]], decls: 6, vars: 0, consts: [[1, "center"]], template: function ChessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Chess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " In development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-chess-board");
    } }, directives: [_chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_1__["ChessBoardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVzcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "y18u":
/*!********************************************!*\
  !*** ./src/app/sudoku/sudoku.component.ts ***!
  \********************************************/
/*! exports provided: SudokuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuComponent", function() { return SudokuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _sudoku_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sudoku-model */ "e6DU");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_sudoku_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/sudoku-utils */ "shHH");
/* harmony import */ var _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-content/modal-content.component */ "wP4b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SudokuComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SudokuComponent_div_12_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const cell_r4 = restoredCtx.$implicit; const colI_r5 = restoredCtx.index; const rowI_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.onClick(cell_r4, rowI_r2, colI_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const colI_r5 = ctx.index;
    const rowI_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("top", rowI_r2 % 3 == 0)("bot", rowI_r2 % 3 == 2)("left", colI_r5 % 3 == 0)("right", colI_r5 % 3 == 2)("active", cell_r4.isActive)("highlightLight", cell_r4.highlightLight)("highlightHard", cell_r4.highlightHard)("writeable", !cell_r4.readonly)("correct", cell_r4.solution === cell_r4.value && !cell_r4.readonly)("false", cell_r4.solution !== cell_r4.value && !cell_r4.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cell_r4.value);
} }
function SudokuComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SudokuComponent_div_12_div_1_Template, 3, 21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", row_r1);
} }
class SudokuComponent {
    constructor(changeDetectorRef, modalService) {
        this.changeDetectorRef = changeDetectorRef;
        this.modalService = modalService;
        this.newSudoku();
    }
    ngOnInit() {
        this.startTime = moment__WEBPACK_IMPORTED_MODULE_2__();
    }
    ngAfterViewInit() {
        console.log();
    }
    newSudoku() {
        this.sudoku = new _sudoku_model__WEBPACK_IMPORTED_MODULE_1__["SudokuModel"](_util_sudoku_utils__WEBPACK_IMPORTED_MODULE_3__["SudokuUtils"].getSudoku());
        this.startTime = moment__WEBPACK_IMPORTED_MODULE_2__();
    }
    onKeyDown(event) {
        this.handleNumbers(event);
        this.handleKeys(event);
        this.checkSolved();
    }
    onClick(cell, rowI, colI) {
        if (rowI === undefined && colI === undefined) {
            rowI = cell.row;
            colI = cell.col;
        }
        this.sudoku.forEach(row => row.forEach(cel => {
            cel.isActive = false;
            cel.highlightLight = false;
            cel.highlightHard = cel.value === cell.value && cell.value !== undefined && cel !== cell;
        }));
        cell.isActive = true;
        this.sudoku[rowI].forEach(c => {
            if (c !== cell) {
                c.highlightLight = true;
            }
        });
        this.sudoku.forEach(row => {
            if (row[colI] !== cell) {
                row[colI].highlightLight = true;
            }
        });
        this.selectedCell = cell;
    }
    solve() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sudoku.forEach(row => row.forEach(value => value.value = value.solution));
            /*console.log('solve clicked');
            // await this.sudoku.solveCells();
            console.log(this.sudoku.map((value => value.map(value1 => value1.value ? value1.value : -1))));
            const sudokuAsString = SudokuUtils.toString(this.sudoku.map((value => value.map(value1 => value1.value ? value1.value : -1))));
            SudokuUtils.print('x', SudokuUtils.fromString(sudokuAsString));
            for await(const data of SudokuUtils.solve(sudokuAsString)) {
              const {
                row,
                column,
                value
              } = data;
              this.sudoku[row][column].value = value;
              this.changeDetectorRef.detectChanges();
              await waitTime(100);
            }*/
        });
    }
    handleNumbers(event) {
        const num = parseInt(event.key, 10);
        if (Number.isNaN(num) || num === 0) {
            return;
        }
        if (this.selectedCell === undefined || this.selectedCell === null) {
            return;
        }
        if (this.selectedCell.readonly) {
            return;
        }
        this.selectedCell.value = num;
    }
    handleKeys(event) {
        switch (event.key) {
            case 'w':
            case 'ArrowUp':
                this.onClick(this.selectedCell ?
                    this.sudoku[(this.selectedCell.row - 1 >= 0 ? this.selectedCell.row - 1 : this.sudoku.length - 1)][this.selectedCell.col] :
                    this.sudoku[0][0]);
                break;
            case 'a':
            case 'ArrowLeft':
                this.onClick(this.selectedCell ?
                    this.sudoku[this.selectedCell.row][(this.selectedCell.col - 1 >= 0 ? this.selectedCell.col - 1 : this.sudoku.length - 1)] :
                    this.sudoku[0][0]);
                break;
            case 's':
            case 'ArrowDown':
            case 'Enter':
                this.onClick(this.selectedCell ?
                    this.sudoku[(this.selectedCell.row + 1 < this.sudoku.length ? this.selectedCell.row + 1 : 0)][this.selectedCell.col] :
                    this.sudoku[0][0]);
                break;
            case 'd':
            case 'ArrowRight':
                this.onClick(this.selectedCell ?
                    this.sudoku[this.selectedCell.row][(this.selectedCell.col + 1 < this.sudoku.length ? this.selectedCell.col + 1 : 0)] :
                    this.sudoku[0][0]);
                break;
            case 'Delete':
            case 'Backspace':
                this.selectedCell.value = this.selectedCell.readonly ? this.selectedCell.value : undefined;
                break;
        }
    }
    checkSolved() {
        if (this.sudoku.isSolved()) {
            const time = moment__WEBPACK_IMPORTED_MODULE_2__().diff(this.startTime, 'seconds', true);
            const componentRef = this.modalService.open(_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_4__["ModalContentComponent"]);
            componentRef.componentInstance.headerText = 'Success!  \nSolved in ' + time + ' seconds.';
        }
    }
}
SudokuComponent.ɵfac = function SudokuComponent_Factory(t) { return new (t || SudokuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
SudokuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SudokuComponent, selectors: [["app-sudoku"]], hostBindings: function SudokuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function SudokuComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 13, vars: 1, consts: [[1, "center"], [1, "center", "my-3"], ["type", "button", 1, "btn", "btn-primary", "mx-3", 3, "click"], [1, "flex"], [1, "display"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "cell", 3, "top", "bot", "left", "right", "active", "highlightLight", "highlightHard", "writeable", "correct", "false", "click", 4, "ngFor", "ngForOf"], [1, "cell", 3, "click"], [1, "value"]], template: function SudokuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Sudoku ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " In development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_6_listener() { return ctx.solve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Solve");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_8_listener() { return ctx.newSudoku(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " New Sudoku");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SudokuComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sudoku);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".display[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 50vmin;\n  height: 50vmin;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  \n}\n\n.row[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-self: center;\n  margin: 0;\n}\n\n.cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  border: 1px solid black;\n}\n\n.cell.top[_ngcontent-%COMP%] {\n  border-top: 2px solid black;\n}\n\n.cell.left[_ngcontent-%COMP%] {\n  border-left: 2px solid black;\n}\n\n.cell.right[_ngcontent-%COMP%] {\n  border-right: 2px solid black;\n}\n\n.cell.bot[_ngcontent-%COMP%] {\n  border-bottom: 2px solid black;\n}\n\n.cell.active[_ngcontent-%COMP%] {\n  background: #4e9ae5;\n}\n\n.cell.highlightLight[_ngcontent-%COMP%] {\n  background: #c7c8c4;\n  background: #c7c8c4;\n}\n\n.cell.highlightHard[_ngcontent-%COMP%] {\n  background: #8ceeee;\n}\n\n.cell.writeable[_ngcontent-%COMP%] {\n  color: darkblue;\n}\n\n.cell.correct[_ngcontent-%COMP%] {\n  color: #024802;\n}\n\n.cell.false[_ngcontent-%COMP%] {\n  color: #770202;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-size: 1.5em;\n}\n\n.dark-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background-color: #292b2c;\n  color: white;\n}\n\n.dark-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1ZG9rdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0E7dUJBQUE7QUFGRjs7QUFNQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBSEY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFHRTtFQUNFLDJCQUFBO0FBREo7O0FBR0U7RUFDRSw0QkFBQTtBQURKOztBQUdFO0VBQ0UsNkJBQUE7QUFESjs7QUFHRTtFQUNFLDhCQUFBO0FBREo7O0FBR0U7RUFDRSxtQkF6Q1U7QUF3Q2Q7O0FBSUU7RUFDRSxtQkE1Q2tCO0VBNkNsQixtQkFBQTtBQUZKOztBQUlFO0VBQ0UsbUJBL0NpQjtBQTZDckI7O0FBSUU7RUFDRSxlQUFBO0FBRko7O0FBSUU7RUFDRSxjQUFBO0FBRko7O0FBSUU7RUFDRSxjQUFBO0FBRko7O0FBTUE7RUFDRSxxREFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFPQTtFQUNFLFlBQUE7QUFKRiIsImZpbGUiOiJzdWRva3UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYWN0aXZlQ29sb3I6ICM0ZTlhZTU7XHJcbiRoaWdobGlnaHRMaWdodENvbG9yOiAjYzdjOGM0O1xyXG4kaGlnaGxpZ2h0U2FtZUNlbGxzOiAjOGNlZWVlO1xyXG5cclxuLmRpc3BsYXl7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA1MHZtaW47XHJcbiAgaGVpZ2h0OiA1MHZtaW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIC8qanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xyXG59XHJcblxyXG4ucm93e1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNlbGx7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICYudG9we1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICAmLmxlZnR7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICAmLnJpZ2h0e1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gICYuYm90e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICAmLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICRhY3RpdmVDb2xvcjtcclxuICAgIC8vZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgfVxyXG4gICYuaGlnaGxpZ2h0TGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0TGlnaHRDb2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICNjN2M4YzQ7XHJcbiAgfVxyXG4gICYuaGlnaGxpZ2h0SGFyZHtcclxuICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRTYW1lQ2VsbHM7XHJcbiAgfVxyXG4gICYud3JpdGVhYmxle1xyXG4gICAgY29sb3I6IGRhcmtibHVlO1xyXG4gIH1cclxuICAmLmNvcnJlY3R7XHJcbiAgICBjb2xvcjogIzAyNDgwMjtcclxuICB9XHJcbiAgJi5mYWxzZXtcclxuICAgIGNvbG9yOiAjNzcwMjAyO1xyXG4gIH1cclxuXHJcbn1cclxuLnZhbHVle1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuXHJcblxyXG4uZGFyay1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmIyYztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map