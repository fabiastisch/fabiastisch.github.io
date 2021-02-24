import {delay} from 'rxjs/operators';
import List from './Utils/list';
import {Metadata} from './Utils/model';
import {initializeCircularDoublyLinkedToroidaList, initializeColumnLabels, search} from './Utils/core';

export class Sudoku {


  constructor(array: number[][]) {
    console.log('SudokuConstructor');
    array.forEach(row => {
      const rowData = [];
      row.forEach(value => {
        rowData.push(new Cell(value));
      });
      this.cells.push(rowData);
    });
  }

  static EMPTY = -1;
  static VERTICAL = '|';
  static HORIZONTAL = '------+-------+------';
  static DOT = '.';
  static SIZE = 9;
  static BOX_SIZE = 3;
  cells: Cell[][] = [];

  static fromString(input: string): number[][] {
    const parsed = [...input].map(
      i => i === Sudoku.DOT ? Sudoku.EMPTY : Number(i)
    );
    const size = Math.sqrt(parsed.length);
    return List.chunk <number>(parsed, size);
  }

  static boardFrom(input: number[][]): string {
    const [FIRST, SECOND] = [3, 7];
    const parsedRow = [...input].map((rows) => {
      const c: (string | number)[] = [...rows].map(
        i => (i === Sudoku.EMPTY || i === 0) ? Sudoku.DOT : i
      );
      c.splice(FIRST, 0, Sudoku.VERTICAL);
      c.splice(SECOND, 0, Sudoku.VERTICAL);
      return c.join(' ');
    });
    parsedRow.splice(FIRST, 0, Sudoku.HORIZONTAL);
    parsedRow.splice(SECOND, 0, Sudoku.HORIZONTAL);
    return parsedRow.join('\n');
  }

  static print(label: string, input: number[][]): void {
    console.group(label);
    console.log();
    console.log(Sudoku.boardFrom(input));
    console.log();
    console.groupEnd();
  }

  static parseCells(input: number[][]): Metadata[] {
    const size = input.length;
    const constraintMatrix = [];
    const onlyNumbers = (n: number): boolean => n !== Sudoku.EMPTY;

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
            const data = Sudoku.constraintMatrix(
              size,
              row,
              column,
              value
            );
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

  static solver(input: Metadata[]): any {
    const columns = initializeColumnLabels(Sudoku.SIZE * Sudoku.SIZE * 4);
    const rootNode = initializeCircularDoublyLinkedToroidaList(input, columns);
    return search(0, rootNode);
  }

  // Generator
  static* solve(input: string): any {
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

  static constraints(
    size: number,
    row: number,
    column: number,
    value: number
  ): any {
    const r = Math.floor(row / Sudoku.BOX_SIZE) * Sudoku.BOX_SIZE;
    const c = Math.floor(column / Sudoku.BOX_SIZE);
    return {
      cell: row * size + column,
      row: row * size + value - 1,
      column: column * size + value - 1,
      box: (r + c) * size + value - 1
    };
  }

  static constraintMatrix(
    size: number,
    row: number,
    column: number,
    value: number
  ): number[] {
    const c = Sudoku.constraints(size, row, column, value);
    const constraints = [
      c.cell,
      c.row,
      c.column,
      c.box
    ];
    const matrices = constraints.map(index => {
      const arr = List.of(size * size, 0);
      arr[index] = 1;
      return arr;
    });
    return List.flatten <number>(matrices);
  }

  static toString(output: number[][]): string {
    return output.map(rows =>
      rows.map(i => i === Sudoku.EMPTY ? Sudoku.DOT : i).join('')
    ).join('');
  }

  public async solveCells(): Promise<any> {

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
    if (value !== null && value !== undefined && value !== -1) {
      this.value = value;
      this.readonly = true;
    } else {
      this.readonly = false;
    }
  }
}
