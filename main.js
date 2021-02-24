(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_Workspace\WebStorm\fabiastisch.github.io\src\main.ts */"zUnb");


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

/***/ "CwDn":
/*!****************************************!*\
  !*** ./src/app/sudoku/Utils/sudoku.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sudoku; });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "XnH1");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "D58v");


class Sudoku {
    static fromString(input) {
        const parsed = [...input].map(i => i === Sudoku.DOT ? Sudoku.EMPTY : Number(i));
        const size = Math.sqrt(parsed.length);
        return _list__WEBPACK_IMPORTED_MODULE_0__["default"].chunk(parsed, size);
    }
    static boardFrom(input) {
        const [FIRST, SECOND] = [3, 7];
        const parsedRow = [...input].map((rows) => {
            const c = [...rows].map(i => (i === Sudoku.EMPTY || i === 0) ? Sudoku.DOT : i);
            c.splice(FIRST, 0, Sudoku.VERTICAL);
            c.splice(SECOND, 0, Sudoku.VERTICAL);
            return c.join(' ');
        });
        parsedRow.splice(FIRST, 0, Sudoku.HORIZONTAL);
        parsedRow.splice(SECOND, 0, Sudoku.HORIZONTAL);
        return parsedRow.join('\n');
    }
    static print(label, input) {
        console.group(label);
        console.log();
        console.log(Sudoku.boardFrom(input));
        console.log();
        console.groupEnd();
    }
    static parseCells(input) {
        const size = input.length;
        const constraintMatrix = [];
        const onlyNumbers = (n) => n !== Sudoku.EMPTY;
        for (let row = 0; row < size; row += 1) {
            // Values that are currently present in the row
            const numbers = input[row].filter(onlyNumbers);
            for (let column = 0; column < size; column += 1) {
                const value = input[row][column];
                // If the column is not yet filled, fill it with values that are not
                // yet present in the column
                if (value === Sudoku.EMPTY) {
                    // Value must be from 1 - 9
                    for (let value = 1; value <= size; value += 1) {
                        // Only insert numbers that are not yet present for that row
                        if (numbers.includes(value)) {
                            continue;
                        }
                        // Create the row matrix with the constraints applied.
                        // This will be a 9 x 9 x 4 matrix with 1 and 0s
                        const data = Sudoku.constraintMatrix(size, row, column, value);
                        constraintMatrix.push({
                            row,
                            column,
                            value,
                            data
                        });
                    }
                    continue;
                }
                const data = Sudoku.constraintMatrix(size, row, column, value);
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
        const columns = Object(_core__WEBPACK_IMPORTED_MODULE_1__["initializeColumnLabels"])(Sudoku.SIZE * Sudoku.SIZE * 4);
        const rootNode = Object(_core__WEBPACK_IMPORTED_MODULE_1__["initializeCircularDoublyLinkedToroidaList"])(input, columns);
        return Object(_core__WEBPACK_IMPORTED_MODULE_1__["search"])(0, rootNode);
    }
    // Generator
    static *solve(input) {
        const solutions = [input]
            .map(Sudoku.fromString)
            .map(Sudoku.parseCells)
            .map(Sudoku.solver);
        const solution = solutions[0];
        for (const solve of solution) {
            for (const row of solve) {
                yield row.metadata;
            }
        }
    }
    static constraints(size, row, column, value) {
        const r = Math.floor(row / Sudoku.BOX_SIZE) * Sudoku.BOX_SIZE;
        const c = Math.floor(column / Sudoku.BOX_SIZE);
        return {
            cell: row * size + column,
            row: row * size + value - 1,
            column: column * size + value - 1,
            box: (r + c) * size + value - 1
        };
    }
    static constraintMatrix(size, row, column, value) {
        const c = Sudoku.constraints(size, row, column, value);
        const constraints = [
            c.cell,
            c.row,
            c.column,
            c.box
        ];
        const matrices = constraints.map(index => {
            const arr = _list__WEBPACK_IMPORTED_MODULE_0__["default"].of(size * size, 0);
            arr[index] = 1;
            return arr;
        });
        return _list__WEBPACK_IMPORTED_MODULE_0__["default"].flatten(matrices);
    }
    static toString(output) {
        return output.map(rows => rows.map(i => i === Sudoku.EMPTY ? Sudoku.DOT : i).join('')).join('');
    }
}
Sudoku.EMPTY = -1;
Sudoku.VERTICAL = '|';
Sudoku.HORIZONTAL = '------+-------+------';
Sudoku.DOT = '.';
Sudoku.SIZE = 9;
Sudoku.BOX_SIZE = 3;


/***/ }),

/***/ "D58v":
/*!**************************************!*\
  !*** ./src/app/sudoku/Utils/core.ts ***!
  \**************************************/
/*! exports provided: initializeColumnLabels, initializeHeaderColumns, initializeCircularDoublyLinkedToroidaList, smallestColumnSize, search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeColumnLabels", function() { return initializeColumnLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeHeaderColumns", function() { return initializeHeaderColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeCircularDoublyLinkedToroidaList", function() { return initializeCircularDoublyLinkedToroidaList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallestColumnSize", function() { return smallestColumnSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "LC3C");

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
        console.log('[terminate]');
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

/***/ "GYP7":
/*!******************************!*\
  !*** ./src/app/util/time.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return waitTime; });
function waitTime(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(duration);
        }, duration);
    });
}


/***/ }),

/***/ "ICfu":
/*!******************************************!*\
  !*** ./src/app/sudoku/sudoku.service.ts ***!
  \******************************************/
/*! exports provided: SudokuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuService", function() { return SudokuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils/sudoku */ "CwDn");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "Y4KX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SudokuService {
    constructor() {
    }
    getRandomSudoku() {
        // this.solveSudoku();
        // this.foo();
        return Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["getSudoku"])();
    }
    solveSudoku() {
        var e_1, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*const inputs = [
              '.6.3..8.4537.9.....4...63.7.9..51238.........71362..4.3.64...1.....6.5231.2..9.8.',
             // '.......12........3..23..4....18....5.6..7.8.......9.....85.....9...4.5..47...6...',
              // In 2012, Finnish mathematician Arto Inkala claimed to have created the "World's Hardest Sudoku".
             // '8..........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4..'
            ];*/
            const input = '...........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4..';
            console.time('benchmark');
            console.log('Benchmarking');
            _Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].print(`INPUT ${1}:`, _Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].fromString(input));
            let j = 0;
            // Empty Array
            const solution = Array(9).fill(() => Array(9).fill(0)).map(fn => fn());
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(_Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].solve(input)), _c; _c = yield _b.next(), !_c.done;) {
                    const data = _c.value;
                    const { row, column, value } = data;
                    solution[row][column] = value;
                    _Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].print(`OUTPUT ${+1} ITERATION=${j}:`, solution);
                    yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(500);
                    j++;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.timeEnd('benchmark');
            yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
        });
    }
    getSolutionCount(input) {
        const solution = _Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].solver(_Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].parseCells(_Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].fromString(input)));
        return [...solution].length;
    }
    // tslint:disable-next-line:typedef
    foo() {
        const input = '...........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4..';
        const solutions = _Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].solver(_Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].parseCells(_Utils_sudoku__WEBPACK_IMPORTED_MODULE_2__["default"].fromString(input)));
        for (const output of solutions) {
            output.forEach(node => {
                const results = [node.columnNode.name];
                let right = node.right;
                while (right !== node) {
                    results.push(right.columnNode.name);
                    right = right.right;
                }
                console.log(results.join(' '));
            });
            console.log();
        }
    }
}
SudokuService.ɵfac = function SudokuService_Factory(t) { return new (t || SudokuService)(); };
SudokuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SudokuService, factory: SudokuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LC3C":
/*!***************************************!*\
  !*** ./src/app/sudoku/Utils/model.ts ***!
  \***************************************/
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

/***/ "VdY4":
/*!**********************************!*\
  !*** ./src/app/sudoku/sudoku.ts ***!
  \**********************************/
/*! exports provided: Sudoku, Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sudoku", function() { return Sudoku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Utils_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils/list */ "XnH1");
/* harmony import */ var _Utils_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils/core */ "D58v");



class Sudoku {
    constructor(array) {
        this.cells = [];
        console.log('SudokuConstructor');
        array.forEach(row => {
            const rowData = [];
            row.forEach(value => {
                rowData.push(new Cell(value));
            });
            this.cells.push(rowData);
        });
    }
    static fromString(input) {
        const parsed = [...input].map(i => i === Sudoku.DOT ? Sudoku.EMPTY : Number(i));
        const size = Math.sqrt(parsed.length);
        return _Utils_list__WEBPACK_IMPORTED_MODULE_1__["default"].chunk(parsed, size);
    }
    static boardFrom(input) {
        const [FIRST, SECOND] = [3, 7];
        const parsedRow = [...input].map((rows) => {
            const c = [...rows].map(i => (i === Sudoku.EMPTY || i === 0) ? Sudoku.DOT : i);
            c.splice(FIRST, 0, Sudoku.VERTICAL);
            c.splice(SECOND, 0, Sudoku.VERTICAL);
            return c.join(' ');
        });
        parsedRow.splice(FIRST, 0, Sudoku.HORIZONTAL);
        parsedRow.splice(SECOND, 0, Sudoku.HORIZONTAL);
        return parsedRow.join('\n');
    }
    static print(label, input) {
        console.group(label);
        console.log();
        console.log(Sudoku.boardFrom(input));
        console.log();
        console.groupEnd();
    }
    static parseCells(input) {
        const size = input.length;
        const constraintMatrix = [];
        const onlyNumbers = (n) => n !== Sudoku.EMPTY;
        for (let row = 0; row < size; row += 1) {
            // Values that are currently present in the row
            const numbers = input[row].filter(onlyNumbers);
            for (let column = 0; column < size; column += 1) {
                const value = input[row][column];
                // If the column is not yet filled, fill it with values that are not
                // yet present in the column
                if (value === Sudoku.EMPTY) {
                    // Value must be from 1 - 9
                    for (let value = 1; value <= size; value += 1) {
                        // Only insert numbers that are not yet present for that row
                        if (numbers.includes(value)) {
                            continue;
                        }
                        // Create the row matrix with the constraints applied.
                        // This will be a 9 x 9 x 4 matrix with 1 and 0s
                        const data = Sudoku.constraintMatrix(size, row, column, value);
                        constraintMatrix.push({
                            row,
                            column,
                            value,
                            data
                        });
                    }
                    continue;
                }
                const data = Sudoku.constraintMatrix(size, row, column, value);
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
        const columns = Object(_Utils_core__WEBPACK_IMPORTED_MODULE_2__["initializeColumnLabels"])(Sudoku.SIZE * Sudoku.SIZE * 4);
        const rootNode = Object(_Utils_core__WEBPACK_IMPORTED_MODULE_2__["initializeCircularDoublyLinkedToroidaList"])(input, columns);
        return Object(_Utils_core__WEBPACK_IMPORTED_MODULE_2__["search"])(0, rootNode);
    }
    // Generator
    static *solve(input) {
        const solutions = [input]
            .map(Sudoku.fromString)
            .map(Sudoku.parseCells)
            .map(Sudoku.solver);
        const solution = solutions[0];
        for (const solve of solution) {
            for (const row of solve) {
                yield row.metadata;
            }
        }
    }
    static constraints(size, row, column, value) {
        const r = Math.floor(row / Sudoku.BOX_SIZE) * Sudoku.BOX_SIZE;
        const c = Math.floor(column / Sudoku.BOX_SIZE);
        return {
            cell: row * size + column,
            row: row * size + value - 1,
            column: column * size + value - 1,
            box: (r + c) * size + value - 1
        };
    }
    static constraintMatrix(size, row, column, value) {
        const c = Sudoku.constraints(size, row, column, value);
        const constraints = [
            c.cell,
            c.row,
            c.column,
            c.box
        ];
        const matrices = constraints.map(index => {
            const arr = _Utils_list__WEBPACK_IMPORTED_MODULE_1__["default"].of(size * size, 0);
            arr[index] = 1;
            return arr;
        });
        return _Utils_list__WEBPACK_IMPORTED_MODULE_1__["default"].flatten(matrices);
    }
    static toString(output) {
        return output.map(rows => rows.map(i => i === Sudoku.EMPTY ? Sudoku.DOT : i).join('')).join('');
    }
    solveCells() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
}
Sudoku.EMPTY = -1;
Sudoku.VERTICAL = '|';
Sudoku.HORIZONTAL = '------+-------+------';
Sudoku.DOT = '.';
Sudoku.SIZE = 9;
Sudoku.BOX_SIZE = 3;
class Cell {
    constructor(value) {
        this.isActive = false;
        this.highlightLight = false;
        this.highlightHard = false;
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


/***/ }),

/***/ "XnH1":
/*!**************************************!*\
  !*** ./src/app/sudoku/Utils/list.ts ***!
  \**************************************/
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

/***/ "Y4KX":
/*!***************************************!*\
  !*** ./src/app/sudoku/Utils/index.ts ***!
  \***************************************/
/*! exports provided: generateFullSudoku, shuffleSudoku, getSudoku, getSolutionCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFullSudoku", function() { return generateFullSudoku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleSudoku", function() { return shuffleSudoku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSudoku", function() { return getSudoku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSolutionCount", function() { return getSolutionCount; });
/* harmony import */ var _util_utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/utils-math */ "cgwm");
/* harmony import */ var _sudoku__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sudoku */ "CwDn");


const size = 9;
const boxSize = 3;
function generateFullSudoku() {
    const numbers = Array.from({ length: size }, (_, i) => i + 1);
    let grid = '';
    const first = [];
    [...Array(size)].forEach(_ => {
        const randomInt = Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, numbers.length - 1);
        first.push(numbers[randomInt]);
        numbers.splice(randomInt, 1);
    });
    grid += first.join('');
    let row = 0;
    [...Array(size - 1)].forEach(_ => {
        row++;
        if (row % boxSize === 0) {
            const n = first.shift();
            first.push(n);
        }
        [...Array(boxSize)].forEach(_ => {
            const n = first.shift();
            first.push(n);
        });
        grid += first.join('');
    });
    _sudoku__WEBPACK_IMPORTED_MODULE_1__["default"].print(null, _sudoku__WEBPACK_IMPORTED_MODULE_1__["default"].fromString(grid));
    return _sudoku__WEBPACK_IMPORTED_MODULE_1__["default"].fromString(grid);
}
function shuffleSudoku(fullSudoku, mode = 0) {
    if (mode < 2) {
        const newSudoku = [];
        // shuffle rows
        const numbers = Array.from({ length: boxSize }, (_, i) => i);
        let region = 0;
        [...Array(boxSize)].forEach(((_, index) => {
            Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(numbers).forEach(random => {
                newSudoku.push(fullSudoku[random + region * boxSize]);
            });
            region++;
        }));
        // Sudoku.print('null', newSudoku);
        // Shuffle Columns
        return shuffleSudoku(Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["transpose"])(newSudoku), ++mode);
    }
    else {
        return fullSudoku;
    }
}
function getSudoku() {
    const fullSudoku = shuffleSudoku(generateFullSudoku());
    Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["arrayStartAtZero"])(size)).forEach(col => {
        Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(Object(_util_utils_math__WEBPACK_IMPORTED_MODULE_0__["arrayStartAtZero"])(size)).forEach(row => {
            const temp = fullSudoku[col][row];
            fullSudoku[col][row] = -1;
            if (getSolutionCount(fullSudoku) > 1) {
                fullSudoku[col][row] = temp;
                return;
            }
        });
        if (getSolutionCount(fullSudoku) === 1) {
            return;
        }
    });
    return fullSudoku;
}
function getSolutionCount(grid) {
    const solution = _sudoku__WEBPACK_IMPORTED_MODULE_1__["default"].solver(_sudoku__WEBPACK_IMPORTED_MODULE_1__["default"].parseCells(grid));
    return [...solution].length;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_3__["SudokuComponent"],
        _sudoku_sudoku_grid_sudoku_grid_component__WEBPACK_IMPORTED_MODULE_5__["SudokuGridComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();


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
/* harmony import */ var _sudoku__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sudoku */ "VdY4");
/* harmony import */ var _util_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/time */ "GYP7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sudoku_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sudoku.service */ "ICfu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SudokuGridComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SudokuGridComponent_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const cell_r4 = restoredCtx.$implicit; const colI_r5 = restoredCtx.index; const rowI_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onClick(cell_r4, rowI_r2, colI_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const colI_r5 = ctx.index;
    const rowI_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("top", rowI_r2 % 3 == 0)("bot", rowI_r2 % 3 == 2)("left", colI_r5 % 3 == 0)("right", colI_r5 % 3 == 2)("active", cell_r4.isActive)("highlightLight", cell_r4.highlightLight)("highlightHard", cell_r4.highlightHard)("writeable", !cell_r4.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cell_r4.value);
} }
function SudokuGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SudokuGridComponent_div_1_div_1_Template, 3, 17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r1);
} }
class SudokuGridComponent {
    constructor(sudokuService, changeDetectorRef) {
        this.sudokuService = sudokuService;
        this.changeDetectorRef = changeDetectorRef;
        this.newSudoku();
        console.log(this.sudoku);
    }
    ngOnInit() {
    }
    newSudoku() {
        this.sudoku = new _sudoku__WEBPACK_IMPORTED_MODULE_1__["Sudoku"](this.sudokuService.getRandomSudoku());
    }
    onKeyDown(event) {
        const num = parseInt(event.key, 10);
        if (this.selectedCell === undefined || this.selectedCell === null) {
            return;
        }
        if (this.selectedCell.readonly) {
            return;
        }
        this.selectedCell.value = num;
    }
    onClick(cell, rowI, colI) {
        this.sudoku.cells.forEach(row => row.forEach(cel => {
            cel.isActive = false;
            cel.highlightLight = false;
            cel.highlightHard = false;
        }));
        cell.isActive = true;
        this.sudoku.cells[rowI].forEach(c => {
            if (c !== cell) {
                c.highlightLight = true;
            }
        });
        this.sudoku.cells.forEach(row => {
            if (row[colI] !== cell) {
                row[colI].highlightLight = true;
            }
        });
        this.selectedCell = cell;
    }
    solve() {
        var e_1, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('solve clicked');
            // await this.sudoku.solveCells();
            console.log(this.sudoku.cells.map((value => value.map(value1 => value1.value ? value1.value : -1))));
            const string = _sudoku__WEBPACK_IMPORTED_MODULE_1__["Sudoku"].toString(this.sudoku.cells.map((value => value.map(value1 => value1.value ? value1.value : -1))));
            _sudoku__WEBPACK_IMPORTED_MODULE_1__["Sudoku"].print('x', _sudoku__WEBPACK_IMPORTED_MODULE_1__["Sudoku"].fromString(string));
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(_sudoku__WEBPACK_IMPORTED_MODULE_1__["Sudoku"].solve(string)), _c; _c = yield _b.next(), !_c.done;) {
                    const data = _c.value;
                    const { row, column, value } = data;
                    this.sudoku.cells[row][column].value = value;
                    this.changeDetectorRef.detectChanges();
                    yield Object(_util_time__WEBPACK_IMPORTED_MODULE_2__["default"])(100);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
}
SudokuGridComponent.ɵfac = function SudokuGridComponent_Factory(t) { return new (t || SudokuGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sudoku_service__WEBPACK_IMPORTED_MODULE_4__["SudokuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SudokuGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SudokuGridComponent, selectors: [["app-sudoku-grid"]], hostBindings: function SudokuGridComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function SudokuGridComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 1, consts: [[1, "display"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "center"], [3, "click"], [1, "row"], ["class", "cell", 3, "top", "bot", "left", "right", "active", "highlightLight", "highlightHard", "writeable", "click", 4, "ngFor", "ngForOf"], [1, "cell", 3, "click"], [1, "value"]], template: function SudokuGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SudokuGridComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SudokuGridComponent_Template_button_click_3_listener() { return ctx.solve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Solve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SudokuGridComponent_Template_button_click_5_listener() { return ctx.newSudoku(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " New Sudoku ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sudoku.cells);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".display[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50vh;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  border: 2px solid black;\n}\n\n.row[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n\n.cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  border: 1px solid black;\n}\n\n.cell.top[_ngcontent-%COMP%] {\n  border-top: 2px solid black;\n}\n\n.cell.left[_ngcontent-%COMP%] {\n  border-left: 2px solid black;\n}\n\n.cell.right[_ngcontent-%COMP%] {\n  border-right: 2px solid black;\n}\n\n.cell.bot[_ngcontent-%COMP%] {\n  border-bottom: 2px solid black;\n}\n\n.cell.active[_ngcontent-%COMP%] {\n  background: #1e82d9;\n  font-size: larger;\n}\n\n.cell.highlightLight[_ngcontent-%COMP%] {\n  background: #c7c8c4;\n  background: #c7c8c4;\n}\n\n.cell.highlightHard[_ngcontent-%COMP%] {\n  background: #969793;\n}\n\n.cell.writeable[_ngcontent-%COMP%] {\n  color: darkblue;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-size: 1.5em;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slidecontainer[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  \n  -moz-appearance: none;\n       appearance: none;\n  width: 100%;\n  \n  height: 25px;\n  \n  background: #d3d3d3;\n  \n  outline: none;\n  \n  opacity: 0.7;\n  \n  \n  transition: opacity 0.2s;\n}\n\n\n\n.slider[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  \n}\n\n\n\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  \n  appearance: none;\n  width: 25px;\n  \n  height: 25px;\n  \n  background: #4CAF50;\n  \n  cursor: pointer;\n  \n}\n\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 25px;\n  \n  height: 25px;\n  \n  background: #4CAF50;\n  \n  cursor: pointer;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdWRva3UtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFIRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUdFO0VBQ0UsMkJBQUE7QUFESjs7QUFHRTtFQUNFLDRCQUFBO0FBREo7O0FBR0U7RUFDRSw2QkFBQTtBQURKOztBQUdFO0VBQ0UsOEJBQUE7QUFESjs7QUFHRTtFQUNFLG1CQTFDVTtFQTJDVixpQkFBQTtBQURKOztBQUdFO0VBQ0UsbUJBN0NrQjtFQThDbEIsbUJBQUE7QUFESjs7QUFHRTtFQUNFLG1CQWhEaUI7QUErQ3JCOztBQUdFO0VBQ0UsZUFBQTtBQURKOztBQUtBO0VBQ0UscURBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFJQTtFQUNFLFdBQUE7RUFBYSxtQ0FBQTtBQUFmOztBQUdBLHNCQUFBOztBQUNBO0VBQ0Usd0JBQUE7RUFBMkIsZ0NBQUE7RUFDM0IscUJBQUE7T0FBQSxnQkFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLHFCQUFBO0VBQ2QsbUJBQUE7RUFBcUIsb0JBQUE7RUFDckIsYUFBQTtFQUFlLG1CQUFBO0VBQ2YsWUFBQTtFQUFjLHVEQUFBO0VBQ1csb0NBQUE7RUFDekIsd0JBQUE7QUFPRjs7QUFKQSx1QkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFBWSw4QkFBQTtBQVFkOztBQUxBLGdIQUFBOztBQUNBO0VBQ0Usd0JBQUE7RUFBMEIsMEJBQUE7RUFDMUIsZ0JBQUE7RUFDQSxXQUFBO0VBQWEsdUNBQUE7RUFDYixZQUFBO0VBQWMseUJBQUE7RUFDZCxtQkFBQTtFQUFxQixxQkFBQTtFQUNyQixlQUFBO0VBQWlCLG9CQUFBO0FBYW5COztBQVZBO0VBQ0UsV0FBQTtFQUFhLHVDQUFBO0VBQ2IsWUFBQTtFQUFjLHlCQUFBO0VBQ2QsbUJBQUE7RUFBcUIscUJBQUE7RUFDckIsZUFBQTtFQUFpQixvQkFBQTtBQWlCbkIiLCJmaWxlIjoic3Vkb2t1LWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYWN0aXZlQ29sb3I6ICMxZTgyZDk7XHJcbiRoaWdobGlnaHRMaWdodENvbG9yOiAjYzdjOGM0O1xyXG4kaGlnaGxpZ2h0SGFyZENvbG9yOiAjOTY5NzkzO1xyXG5cclxuLmRpc3BsYXl7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogMDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB3aWR0aDogNTB2aDtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jZWxse1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbGV4OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAmLnRvcHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgJi5sZWZ0e1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgJi5yaWdodHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICAmLmJvdHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgJi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlQ29sb3I7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICB9XHJcbiAgJi5oaWdobGlnaHRMaWdodHtcclxuICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRMaWdodENvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogI2M3YzhjNDtcclxuICB9XHJcbiAgJi5oaWdobGlnaHRIYXJke1xyXG4gICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodEhhcmRDb2xvcjtcclxuICB9XHJcbiAgJi53cml0ZWFibGV7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgfVxyXG5cclxufVxyXG4udmFsdWV7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2xpZGVjb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBXaWR0aCBvZiB0aGUgb3V0c2lkZSBjb250YWluZXIgKi9cclxufVxyXG5cclxuLyogVGhlIHNsaWRlciBpdHNlbGYgKi9cclxuLnNsaWRlciB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgLyogT3ZlcnJpZGUgZGVmYXVsdCBDU1Mgc3R5bGVzICovXHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbC13aWR0aCAqL1xyXG4gIGhlaWdodDogMjVweDsgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7IC8qIEdyZXkgYmFja2dyb3VuZCAqL1xyXG4gIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBvdXRsaW5lICovXHJcbiAgb3BhY2l0eTogMC43OyAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzOyAvKiAwLjIgc2Vjb25kcyB0cmFuc2l0aW9uIG9uIGhvdmVyICovXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbn1cclxuXHJcbi8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xyXG4uc2xpZGVyOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxOyAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXHJcbn1cclxuXHJcbi8qIFRoZSBzbGlkZXIgaGFuZGxlICh1c2UgLXdlYmtpdC0gKENocm9tZSwgT3BlcmEsIFNhZmFyaSwgRWRnZSkgYW5kIC1tb3otIChGaXJlZm94KSB0byBvdmVycmlkZSBkZWZhdWx0IGxvb2spICovXHJcbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDI1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cclxuICBoZWlnaHQ6IDI1cHg7IC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXHJcbiAgYmFja2dyb3VuZDogIzRDQUY1MDsgLyogR3JlZW4gYmFja2dyb3VuZCAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXHJcbn1cclxuXHJcbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gIHdpZHRoOiAyNXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAyNXB4OyAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xyXG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7IC8qIEdyZWVuIGJhY2tncm91bmQgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xyXG59XHJcbiJdfQ== */"] });


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
SudokuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SudokuComponent, selectors: [["app-sudoku"]], decls: 10, vars: 0, consts: [[1, "center"]], template: function SudokuComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Last update: 22:41 24.02.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-sudoku-grid");
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