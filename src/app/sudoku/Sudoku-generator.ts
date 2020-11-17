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

  private static canset(): boolean {
    /*nums.some(cell => cell === num) || array.some((coloum: Cell[]) => coloum[col].value === num)) {
      col--;
      continue;
    }*/
    return true;
  }

  private static createRow(array: Cell[][]): Cell[] {
    const availableNumbers = Object.assign([], this.numbers);
    const cells = [];
    const nums = [];
    let iter = 0;
    for (let col = 0; col < 9; col++) {
      iter++;
      if (iter > 15000) {
        console.warn('iter', iter);
        break;
      }
      // console.log(col);
      const index = Math.floor(Math.random() * availableNumbers.length);
      const num = availableNumbers[index];
      if (this.canset()) {
        availableNumbers.splice(index, 1);
        nums[col] = num;
      }else {
        col--;
      }
    }
    nums.forEach(a => {
      cells.push(new Cell(a));
    });
    console.log(cells.map(x => x.value));
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
