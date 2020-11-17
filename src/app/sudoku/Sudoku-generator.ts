import {Cell, Sudoku} from './sudoku';

export class SudokuGenerator {
  private static numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private static cells = 81;
  private static cols = 9;

  public static generateSudoku(): Sudoku {
    const sudoku = [];
    const numCols = Math.sqrt(this.cells);
    const numRows = numCols;
    sudoku[0] = this.shuffleArray(Object.assign([], this.numbers));
    console.log(sudoku[0].map(x => x.value));
    for (let row = 1; row < numRows; row++) {
      sudoku[row] = this.createRow(sudoku);
    }
    return sudoku;
  }

  private static canset(num: number, column: number, numbers: number[], array: Cell[][]): boolean {
    /*if (Math.floor(Math.random() + 0.5) === 1) {

      return false;
    }*/

    // Check if Column contains the number
    for (let row = 0; row < array.length; row++) {
      if (array[row][column] === undefined) {
        console.log(row, column, array.map(row => row.map(cell => cell.value)));
      }
      if (array[row][column] !== undefined && array[row][column].value === num) {
        return false;
      }
    }

    // toto
    return true;
    // Check Row contains the number

    // Check block contains the number
    const maxRows = array[0].length;
    const currentRow = array.length + 1;
    const rowStart = maxRows % currentRow;

    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array[0].length; col++) {
        if (array[row][col].value === num) {
          return false;
        }
      }
    }
    /*nums.some(cell => cell === num) || array.some((coloum: Cell[]) => coloum[col].value === num)) {
      col--;
      continue;
    }*/
    return true;
  }

  private static createRow(array: Cell[][]): Cell[] {
    const rowAvailable = Object.assign([], this.numbers);
    const cells = [];
    const nums = [];
    let iter = 0;
    for (let col = 0; col < 9; col++) {
      const columnNotAvailableNumbers = [];
      for (let r = 0; r < array.length; r++) {
        if (array[r][col] !== undefined) {
          columnNotAvailableNumbers.push(array[r][col].value);
        }
      }

      const currentAvailable = [];
      rowAvailable.forEach(n => {
        if (!columnNotAvailableNumbers.find(x => x === n)) {
          currentAvailable.push(n);
        }
      });
      // console.log('cur', currentAvailable, nums);
      iter++;
      if (iter > 15000) {
        console.warn('iter', iter);
        return [new Cell(-1), new Cell(-1), new Cell(-1), new Cell(-1),
          new Cell(-1), new Cell(-1), new Cell(-1), new Cell(-1), new Cell(-1)];
      }
      // console.log(col);
      const index = Math.floor(Math.random() * currentAvailable.length);
      const num = currentAvailable[index];
      if (this.canset(num, col, nums, array)) {
        rowAvailable.splice(rowAvailable.indexOf(num, 0), 1);
        nums[col] = num;
      } else {
        //col--;
      }
    }
    nums.forEach(a => {
      cells.push(new Cell(a));
    });
    console.log(cells.map(x => x.value), iter);
    return cells;
  }

  private static shuffleArray(array: number[]): Cell[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    const cells = [];
    array.forEach(a => {
      cells.push(new Cell(a));
    });
    return cells;
  }
}
