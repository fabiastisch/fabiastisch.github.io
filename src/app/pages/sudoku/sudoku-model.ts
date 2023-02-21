export class Cell {
  value: number | undefined;
  readonly: boolean;
  notes: number[];
  isActive = false;
  highlightLight = false;
  highlightHard = false;
  solution: number | undefined;
  row: number;
  col: number;
  isCorrect?: boolean = false
  isWrong?: boolean = false;

  constructor(value: number, row: number, col: number) {
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
  solved: number[][] | undefined = [];

  public isSolved = () => this.every(row => row.every(cell => cell.value === cell.solution));

  constructor(obj: { sudoku: number[][], solvedSudoku?: number[][] }) {
    super();
    if (!obj.sudoku) return;
    obj.sudoku.forEach((row, rowIndex) => {
      const rowData: Cell[] = [];
      row.forEach((value, colIntdex) => {
        rowData.push(new Cell(value, rowIndex, colIntdex));
      });
      this.push(rowData);
    });
    if (!obj.solvedSudoku) return;
    this.solved = obj.solvedSudoku;
    // @ts-ignore
    obj.solvedSudoku.forEach((row, rowindex) => {
      const rowData = [];
      row.forEach((value, colindex) => {
        this[rowindex][colindex].solution = value;
      });
    });
  }

  static GenerateEmpty(): SudokuModel {
    let model: number[][] = [...Array(9)].map(x => Array(9).fill(-1));
    return new SudokuModel({sudoku: model});
  }

}
