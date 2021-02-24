export class Cell {
  value: number;
  readonly: boolean;
  notes: number[];
  isActive = false;
  highlightLight = false;
  highlightHard = false;
  solution: number;

  constructor(value?: number) {
    this.notes = [];
    if (value !== null && value !== undefined && value !== -1) {
      this.value = value;
      this.readonly = true;
    } else {
      this.readonly = false;
    }
  }
}

export class SudokuModel extends Array<Array<Cell>> {
  // cells: Cell[][] = [];
  solved: number[][] = [];

  constructor(obj: { sudoku: number[][], solvedSudoku?: number[][] }) {
    super();
    console.log('SudokuConstructor');
    obj.sudoku.forEach(row => {
      const rowData = [];
      row.forEach(value => {
        rowData.push(new Cell(value));
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
