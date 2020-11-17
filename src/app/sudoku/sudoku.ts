export type Sudoku = Cell[][];

export class Cell {
  value: number;
  readonly?: boolean;
  notes: number[];
  isActive = false;
  highlightLight = false;
  highlightHard = false;

  constructor(value?: number) {
    this.notes = [];
    if (value !== null) {
      this.value = value;
      this.readonly = true;
    }else {
      this.readonly = false;
    }
  }
}
