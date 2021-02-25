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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'fabiastisch';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _sudoku_sudoku_grid_sudoku_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sudoku/sudoku-grid/sudoku-grid.component */ "woTo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_3__["SudokuComponent"],
        _sudoku_sudoku_grid_sudoku_grid_component__WEBPACK_IMPORTED_MODULE_5__["SudokuGridComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();


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
        console.time('benchmark');
        const sudoku = SudokuUtils.shuffleSudoku(SudokuUtils.generateFullSudoku());
        const solvedSudoku = JSON.parse(JSON.stringify(sudoku));
        Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["arrayStartAtZero"])(SudokuUtils.SIZE)).forEach(col => {
            Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["arrayStartAtZero"])(SudokuUtils.SIZE)).forEach(row => {
                const temp = sudoku[col][row];
                sudoku[col][row] = -1;
                if (SudokuUtils.getSolutionCount(sudoku) > 1) {
                    sudoku[col][row] = temp;
                    return;
                }
            });
            if (SudokuUtils.getSolutionCount(sudoku) === 1) {
                return;
            }
        });
        console.timeEnd('benchmark');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'sudoku', component: _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_2__["SudokuComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/sudoku' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


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

/***/ "woTo":
/*!*************************************************************!*\
  !*** ./src/app/sudoku/sudoku-grid/sudoku-grid.component.ts ***!
  \*************************************************************/
/*! exports provided: SudokuGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuGridComponent", function() { return SudokuGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _sudoku_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sudoku-model */ "e6DU");
/* harmony import */ var _util_sudoku_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/sudoku-utils */ "shHH");
/* harmony import */ var _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal-content/modal-content.component */ "wP4b");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SudokuGridComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SudokuGridComponent_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const cell_r4 = restoredCtx.$implicit; const colI_r5 = restoredCtx.index; const rowI_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.onClick(cell_r4, rowI_r2, colI_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7);
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
function SudokuGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SudokuGridComponent_div_1_div_1_Template, 3, 21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", row_r1);
} }
class SudokuGridComponent {
    constructor(changeDetectorRef, modalService) {
        this.changeDetectorRef = changeDetectorRef;
        this.modalService = modalService;
        this.newSudoku();
    }
    ngOnInit() {
        this.startTime = moment__WEBPACK_IMPORTED_MODULE_4__();
    }
    ngAfterViewInit() {
        console.log();
    }
    newSudoku() {
        this.sudoku = new _sudoku_model__WEBPACK_IMPORTED_MODULE_1__["SudokuModel"](_util_sudoku_utils__WEBPACK_IMPORTED_MODULE_2__["SudokuUtils"].getSudoku());
        this.startTime = moment__WEBPACK_IMPORTED_MODULE_4__();
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
            cel.highlightHard = false;
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
        console.log(event.key);
        switch (event.key) {
            case 'w':
            case 'ArrowUp':
                console.log('Up');
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
        console.log('checkSolved');
        if (this.sudoku.isSolved()) {
            const time = moment__WEBPACK_IMPORTED_MODULE_4__().diff(this.startTime, 'seconds', true);
            console.log('isSolved');
            const componentRef = this.modalService.open(_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_3__["ModalContentComponent"]);
            componentRef.componentInstance.headerText = 'Success!  \nSolved in ' + time + ' seconds.';
        }
    }
}
SudokuGridComponent.ɵfac = function SudokuGridComponent_Factory(t) { return new (t || SudokuGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
SudokuGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SudokuGridComponent, selectors: [["app-sudoku-grid"]], hostBindings: function SudokuGridComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function SudokuGridComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 1, consts: [[1, "display"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "center"], ["type", "button", 1, "btn", "btn-primary", "mx-3", 3, "click"], [1, "row"], ["class", "cell", 3, "top", "bot", "left", "right", "active", "highlightLight", "highlightHard", "writeable", "correct", "false", "click", 4, "ngFor", "ngForOf"], [1, "cell", 3, "click"], [1, "value"]], template: function SudokuGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SudokuGridComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SudokuGridComponent_Template_button_click_3_listener() { return ctx.solve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Solve");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SudokuGridComponent_Template_button_click_5_listener() { return ctx.newSudoku(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " New Sudoku ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sudoku);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".display[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50vh;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  border: 2px solid black;\n}\n\n.row[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  margin: 0;\n}\n\n.cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  border: 1px solid black;\n}\n\n.cell.top[_ngcontent-%COMP%] {\n  border-top: 2px solid black;\n}\n\n.cell.left[_ngcontent-%COMP%] {\n  border-left: 2px solid black;\n}\n\n.cell.right[_ngcontent-%COMP%] {\n  border-right: 2px solid black;\n}\n\n.cell.bot[_ngcontent-%COMP%] {\n  border-bottom: 2px solid black;\n}\n\n.cell.active[_ngcontent-%COMP%] {\n  background: #4e9ae5;\n}\n\n.cell.highlightLight[_ngcontent-%COMP%] {\n  background: #c7c8c4;\n  background: #c7c8c4;\n}\n\n.cell.highlightHard[_ngcontent-%COMP%] {\n  background: #969793;\n}\n\n.cell.writeable[_ngcontent-%COMP%] {\n  color: darkblue;\n}\n\n.cell.correct[_ngcontent-%COMP%] {\n  color: #024802;\n}\n\n.cell.false[_ngcontent-%COMP%] {\n  color: #770202;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-size: 1.5em;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.dark-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background-color: #292b2c;\n  color: white;\n}\n\n.dark-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdWRva3UtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBSEY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFHRTtFQUNFLDJCQUFBO0FBREo7O0FBR0U7RUFDRSw0QkFBQTtBQURKOztBQUdFO0VBQ0UsNkJBQUE7QUFESjs7QUFHRTtFQUNFLDhCQUFBO0FBREo7O0FBR0U7RUFDRSxtQkEzQ1U7QUEwQ2Q7O0FBSUU7RUFDRSxtQkE5Q2tCO0VBK0NsQixtQkFBQTtBQUZKOztBQUlFO0VBQ0UsbUJBakRpQjtBQStDckI7O0FBSUU7RUFDRSxlQUFBO0FBRko7O0FBSUU7RUFDRSxjQUFBO0FBRko7O0FBSUU7RUFDRSxjQUFBO0FBRko7O0FBTUE7RUFDRSxxREFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBSkY7O0FBTUE7RUFDRSxZQUFBO0FBSEYiLCJmaWxlIjoic3Vkb2t1LWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYWN0aXZlQ29sb3I6ICM0ZTlhZTU7XHJcbiRoaWdobGlnaHRMaWdodENvbG9yOiAjYzdjOGM0O1xyXG4kaGlnaGxpZ2h0SGFyZENvbG9yOiAjOTY5NzkzO1xyXG5cclxuLmRpc3BsYXl7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogMDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB3aWR0aDogNTB2aDtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY2VsbHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleDogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgJi50b3B7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gICYubGVmdHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gICYucmlnaHR7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgJi5ib3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gICYuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogJGFjdGl2ZUNvbG9yO1xyXG4gICAgLy9mb250LXNpemU6IGxhcmdlcjtcclxuICB9XHJcbiAgJi5oaWdobGlnaHRMaWdodHtcclxuICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRMaWdodENvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogI2M3YzhjNDtcclxuICB9XHJcbiAgJi5oaWdobGlnaHRIYXJke1xyXG4gICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodEhhcmRDb2xvcjtcclxuICB9XHJcbiAgJi53cml0ZWFibGV7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgfVxyXG4gICYuY29ycmVjdHtcclxuICAgIGNvbG9yOiAjMDI0ODAyO1xyXG4gIH1cclxuICAmLmZhbHNle1xyXG4gICAgY29sb3I6ICM3NzAyMDI7XHJcbiAgfVxyXG5cclxufVxyXG4udmFsdWV7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGFyay1tb2RhbCAuY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sudoku_grid_sudoku_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sudoku-grid/sudoku-grid.component */ "woTo");


class SudokuComponent {
    constructor() { }
    ngOnInit() {
    }
}
SudokuComponent.ɵfac = function SudokuComponent_Factory(t) { return new (t || SudokuComponent)(); };
SudokuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SudokuComponent, selectors: [["app-sudoku"]], decls: 8, vars: 0, consts: [[1, "center"]], template: function SudokuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sudoku ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " In development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " !!!NOT WORKING!!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-sudoku-grid");
    } }, directives: [_sudoku_grid_sudoku_grid_component__WEBPACK_IMPORTED_MODULE_1__["SudokuGridComponent"]], styles: [".center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1ZG9rdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3Vkb2t1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


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