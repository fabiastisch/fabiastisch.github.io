export class Cell {
  value: number;
  readonly: boolean;
  notes: number[];
  isActive = false;
  highlightLight = false;
  highlightHard = false;
  solution: number;
  row: number;
  col: number;

  constructor(value: number, row, col) {
    this.row = row;
    this.col = col;
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

  public isSolved = () => this.every(row => row.every(cell => cell.value === cell.solution));

  constructor(obj: { sudoku: number[][], solvedSudoku?: number[][] }) {
    super();
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
