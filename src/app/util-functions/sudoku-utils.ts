import {arrayStartAtZero, getRandomInt, shuffleArray, transpose} from './utils-math';
import List from './algorithm-x/list';
import {Metadata} from './algorithm-x/model';
import {initializeCircularDoublyLinkedToroidaList, initializeColumnLabels, search} from './algorithm-x/core';
import {SudokuModel} from "../pages/sudoku/sudoku-model";
import waitTime from "./time";


export class SudokuUtils {

  static EMPTY = -1;
  static VERTICAL = '|';
  static HORIZONTAL = '------+-------+------';
  static DOT = '.';
  static SIZE = 9;
  static BOX_SIZE = 3;

  static fromString(input: string): number[][] {
    const parsed = [...input].map(
      i => i === SudokuUtils.DOT ? SudokuUtils.EMPTY : Number(i)
    );
    // tslint:disable-next-line:no-shadowed-variable
    const size = Math.sqrt(parsed.length);
    return List.chunk <number>(parsed, size);
  }

  static boardFrom(input: number[][]): string {
    const [FIRST, SECOND] = [3, 7];
    const parsedRow = [...input].map((rows) => {
      const c: (string | number)[] = [...rows].map(
        i => (i === SudokuUtils.EMPTY || i === 0) ? SudokuUtils.DOT : i
      );
      c.splice(FIRST, 0, SudokuUtils.VERTICAL);
      c.splice(SECOND, 0, SudokuUtils.VERTICAL);
      return c.join(' ');
    });
    parsedRow.splice(FIRST, 0, SudokuUtils.HORIZONTAL);
    parsedRow.splice(SECOND, 0, SudokuUtils.HORIZONTAL);
    return parsedRow.join('\n');
  }

  static print(label: string, input: number[][]): void {
    console.group(label);
    console.log();
    console.log(SudokuUtils.boardFrom(input));
    console.log();
    console.groupEnd();
  }

  static parseCells(input: number[][]): Metadata[] {
    // tslint:disable-next-line:no-shadowed-variable
    const size = input.length;
    const constraintMatrix = [];
    const onlyNumbers = (n: number): boolean => n !== SudokuUtils.EMPTY;

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
            const data = SudokuUtils.constraintMatrix(
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

  static solver(input: Metadata[]): any {
    const columns = initializeColumnLabels(SudokuUtils.SIZE * SudokuUtils.SIZE * 4);
    const rootNode = initializeCircularDoublyLinkedToroidaList(input, columns);
    return search(0, rootNode);
  }

  // Generator
  static* solve(input: string): any {
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
  static constraints(size: number, row: number, column: number, value: number):
    { cell: number, row: number, column: number, box: number } {
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
  static constraintMatrix(size: number, row: number, column: number, value: number): number[] {
    const c = SudokuUtils.constraints(size, row, column, value);
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
      rows.map(i => i === SudokuUtils.EMPTY ? SudokuUtils.DOT : i).join('')
    ).join('');
  }


  static generateFullSudoku(): number[][] {
    const numbers = Array.from({length: SudokuUtils.SIZE}, (_, i) => i + 1);
    let grid = '';
    const first: number[] = [];
    [...Array(SudokuUtils.SIZE)].forEach(_ => {
      const randomInt = getRandomInt(0, numbers.length - 1);
      first.push(numbers[randomInt]);
      numbers.splice(randomInt, 1);
    });
    grid += first.join('');
    let row = 0;
    [...Array(SudokuUtils.SIZE - 1)].forEach(_ => {
      row++;
      if (row % SudokuUtils.BOX_SIZE === 0) {
        const n = first.shift();
        if (n) first.push(n);
      }
      // tslint:disable-next-line:no-shadowed-variable
      [...Array(SudokuUtils.BOX_SIZE)].forEach(_ => {
        const n = first.shift();
        if (n) {
          first.push(n);
        }
      });
      grid += first.join('');

    });

    return SudokuUtils.fromString(grid);
  }

  static shuffleSudoku(fullSudoku: number[][], mode: number = 0): number[][] {

    if (mode < 2) {

      const newSudoku: any[] = [];
      // shuffle rows
      const numbers = Array.from({length: SudokuUtils.BOX_SIZE}, (_, i) => i);
      let region = 0;
      [...Array(SudokuUtils.BOX_SIZE)].forEach(((_, index) => {
        shuffleArray(numbers).forEach(random => {
          newSudoku.push(fullSudoku[random + region * SudokuUtils.BOX_SIZE]);
        });
        region++;
      }));
      // Sudoku.print('null', newSudoku);

      // Shuffle Columns
      return SudokuUtils.shuffleSudoku(transpose(newSudoku), ++mode);

    } else {
      return fullSudoku;
    }
  }

  static getSudoku(): { sudoku: number[][], solvedSudoku: number[][] } {
    const sudoku = SudokuUtils.shuffleSudoku(SudokuUtils.generateFullSudoku());
    const solvedSudoku = JSON.parse(JSON.stringify(sudoku));
    const random = () => shuffleArray(arrayStartAtZero(SudokuUtils.SIZE));
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
        } else {
          emptyFields++;
        }
      }
    }

    return {sudoku, solvedSudoku};
  }

  static getSolutionCount(grid: number[][]): number {
    const solution = SudokuUtils.solver(SudokuUtils.parseCells(grid));
    return [...solution].length;
  }


  static async getSudokuAsync(delayTime:number,param: (sudoku: any, change?: { col: any; row: any }, success?: boolean) => void) {
    const delay = (time: number) => {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    let s = SudokuUtils.generateFullSudoku();
    param(s)
    await delay(delayTime*1)
    const sudoku = SudokuUtils.shuffleSudoku(s);
    param(sudoku)
    await delay(delayTime*2)
    const solvedSudoku = JSON.parse(JSON.stringify(sudoku));
    const random = () => shuffleArray(arrayStartAtZero(SudokuUtils.SIZE));
    let emptyFields = 0;
    for (const row of random()) {
      for (const col of random()) {
        const temp = sudoku[col][row];
        if (temp === -1) {
          continue;
        }
        sudoku[col][row] = -1;

        const solutionCount = SudokuUtils.getSolutionCount(sudoku);
        param(sudoku, {col, row})
        await delay(delayTime)
        // backtrack
        if (solutionCount > 1) {
          param(sudoku, {col, row}, false);
          await delay(delayTime)

          sudoku[col][row] = temp;
        } else {
          param(sudoku, {col, row}, true);
          await delay(delayTime)


          emptyFields++;
        }
      }
    }

    return {sudoku, solvedSudoku};
  }
}

