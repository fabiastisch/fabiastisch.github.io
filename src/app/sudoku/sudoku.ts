export type Sudoku = Cell[][];

export interface Cell{
  value: number;
  readonly?: boolean;
}
