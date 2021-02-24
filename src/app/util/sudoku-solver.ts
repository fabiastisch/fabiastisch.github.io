import {getRandomInt} from './utils-math';

export class SudokuSolver {
  // N is the Size of the 2D Matrix N*N
  static N = 9;
  private grid: number[][] = [];
  private unsolvedGrid: number[][];

  constructor() {
  }

  public solveSudoku(grid: number[][], row: number, col: number): number[][] | boolean {
    /**
     * if we have reached the 8th
     * row and 9th column (0
     * indexed matrix) ,
     * we are returning true to avoid further
     * backtracking
     */
    if (row === SudokuSolver.N - 1 && col === SudokuSolver.N) {

      return grid;
    }
    /**
     * Check if col value becomes 9, move to next row, set col to 0
     */
    if (col === SudokuSolver.N) {
      row++;
      col = 0;
    }

    /**
     * Check if the current position of the grid already contains value >0, we iterate for next col
     */
    if (grid[row][col] !== 0) {

      return this.solveSudoku(grid, row, col + 1);
    }


    for (let num = 1; num < 10; num++) {

      /**
       * Check if it is safe to place the num in the given row, col -> we move to next col
       */
      if (this.isSafe(grid, row, col, num)) {
        grid[row][col] = num;

        if (this.solveSudoku(grid, row, col + 1)) {

          return grid;
        }
      }
      /**
       * Removing the assigned num, since out assumption was wrong, and we go for next assumption with diff num value
       */

      grid[row][col] = 0;
    }
    return false;
  }

  private isSafe(grid: number[][], row: number, col: number, num: number): boolean {
    // console.log(this.iter++);

    for (let i = 0; i <= 8; i++) {
      if (grid[row][i] === num) {
        return false;
      }
    }
    for (let i = 0; i <= 8; i++) {
      if (grid[i][col] === num) {
        return false;
      }
    }

    const startRow = row - row % 3;
    const startCol = col - col % 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i + startRow][j + startCol] === num) {
          return false;
        }
      }
    }
    return true;
  }

  generateSudoku(): number[][] {
    // console.log(this.solveSudoku(0, 0));
    this.preBuildGrid();
    const sudoku = this.solveSudoku(this.grid, 0, 0);
    if (!sudoku) {
      return undefined;
    }
    this.postBuildGrid();
    console.log(this.unsolvedGrid);
    return sudoku as number[][];
  }

  private postBuildGrid(): void {
    /*this.unsolvedGrid = JSON.parse(JSON.stringify(this.grid));
    let notFinished = true;
    while (notFinished) {
      const x = getRandomInt(0, 8);
      const y = getRandomInt(0, 8);
      const lastData = this.unsolvedGrid[x][y];
      this.unsolvedGrid[x][y] = 0;

      if (this.solveSudoku(this.unsolvedGrid, 0, 0)) {
      }else {
        notFinished = false;
        this.unsolvedGrid[x][y] = lastData;
      }
    }*/
  }

  private preBuildGrid(): void {
    for (let i = 0; i < SudokuSolver.N; i++) {
      const row = [];
      for (let j = 0; j < SudokuSolver.N; j++) {
        row.push(0);
      }
      this.grid.push(row);
    }
    let allNumers = Array.from(Array(10).keys());
    for (let j = 0; j < SudokuSolver.N - 1; j++) {
      const randomIndex = getRandomInt(0, allNumers.length - 1);
      this.grid[0][j] = allNumers[randomIndex];
      allNumers.splice(randomIndex, 1);
    }
    allNumers = Array.from(Array(10).keys());
    allNumers = allNumers.filter(value => value !== this.grid[0][0]);
    for (let i = 1; i < SudokuSolver.N - 1; i++) {
      const randomIndex = getRandomInt(0, allNumers.length - 1);

      this.grid[i][0] = allNumers[randomIndex];
      allNumers.splice(randomIndex, 1);
    }
  }
}
