export class Sudoku {
  cells: Cell[][] = [];


  constructor(array: number[][]) {
    console.log(array);
    array.forEach(row => {
      const rowData = [];
      row.forEach(value => {
        rowData.push(new Cell(value));
      });
      this.cells.push(rowData);;
    });
    console.log(this.cells);;
  }
}

export class Cell {
  value: number;
  readonly: boolean;
  notes: number[];
  isActive = false;
  highlightLight = false;
  highlightHard = false;

  constructor(value?: number) {
    this.notes = [];
    if (value !== null && value !== undefined) {
      this.value = value;
      this.readonly = true;
    } else {
      this.readonly = false;
    }
  }
}
