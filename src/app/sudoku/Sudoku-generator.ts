import {Cell, Sudoku} from './sudoku';

export class SudokuGenerator {
  private static numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private static cells = 81;
  private static cols = 9;

  public static generateSudoku(): Sudoku {
    const sudoku = [];
    const numCols = Math.sqrt(this.cells);
    const numRows = numCols;

    // console.log(sudoku[0].map(x => x.value));
    return this.fillRest();

  }

  private static fillRest(): Sudoku {
    const row = this.shuffleArray(Object.assign([], this.numbers));
    const grid = [];
    grid[0] = row;
    for (let i = 1; i < 9; i++) {
      grid[i] = [];
      for (let j = 0; j < 9; j++) {
        grid[i][j] = new Cell();
      }
    }
    this.fill(grid);
    return grid;
  }

  private static fill(grid: Cell[][]): void {
    console.log(grid);
    for (let i = 0; i < 10; i++){
      this.updateGrid(grid);
      this.setNote(grid);
    }

    /*for (let row = 0; row < grid.length; row++){
      for (let col = 0; col < grid[row].length; col++){
        if (grid[row][col].notes.length === 1){

        }
      }
    }*/
  }

  private static setNote(grid: Cell[][]): void {
    const list = [];
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const cell = grid[row][col];
        if (cell.notes.length === 1) {
          cell.value = cell.notes[0];
          cell.notes = [];
          return;
        }else if (cell.notes.length >= 1){
          list.push([row, col]);
        }
      }
    }

  }


  private static updateGrid(grid: Cell[][]): void {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        // @ts-ignore
        if (grid[row][col].value) {
          this.setGridList(grid, row, col, grid[row][col].value);
        }
      }
    }
  }

  private static setGridList(grid: Cell[][], row: number, col: number, num: number): void {
    // Set Row list
    for (let colI = 0; colI < grid[row].length; colI++) {
      if (!grid[row][colI].value && colI !== col - 1 && colI !== col + 1) {
        grid[row][colI].notes.push(num);
      }
    }
    // Set Column list
    for (let rowI = 0; rowI < grid.length; rowI++) {
      if (!grid[rowI][col].value && rowI !== row - 1 && rowI !== row + 1) {
        grid[rowI][col].notes.push(num);
      }
    }
    // Set square list
    const minRow = row - (row % 3);
    const maxRow = minRow + (row % 3);
    const minCol = col - (col % 3);
    const maxCol = minCol + (col % 3);
    for (let rowI = minRow; rowI < maxRow; rowI++) {
      for (let colI = minCol; colI < maxCol; colI++) {
        if (!grid[rowI][colI].value) {
          grid[rowI][colI].notes.push(num);
        }
      }
    }
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


  /*
  private static canset(num: number, column: number, numbers: number[], array: Cell[][]): boolean {
    /!*if (Math.floor(Math.random() + 0.5) === 1) {

      return false;
    }*!/

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
    /!*nums.some(cell => cell === num) || array.some((coloum: Cell[]) => coloum[col].value === num)) {
      col--;
      continue;
    }*!/
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
  }*/

}
