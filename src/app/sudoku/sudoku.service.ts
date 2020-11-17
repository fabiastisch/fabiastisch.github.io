import {Injectable} from '@angular/core';
import {Cell, Sudoku} from './sudoku';
import {SudokuGenerator} from './Sudoku-generator';
import {SudokuSolver} from '@jlguenego/sudoku-generator';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  constructor() {
  }

  public generateSudoku(): Sudoku {
    let grid = SudokuSolver.generate();

    console.log(grid);
    const x = 55;
    console.log(x);
    grid = SudokuSolver.carve(grid, x);
    const sudoku: Sudoku = [];
    grid.forEach(row => {
      const r = [];
      row.forEach(cell => {
        if (cell === 0) {
          r.push(new Cell());
        } else {
          r.push(new Cell(cell));
        }
      });
      sudoku.push(r);

    });

    return sudoku;
  }

  private isValid(sudoku: Sudoku): boolean {
    if (sudoku.length < 9) {
      return false;
    }
    for (let row = 1; row <= 9; row++) {
      for (let col = 1; col <= 9; col++) {

        const value = sudoku[row][col].value;

        if (value) {
          // Check the line
          for (let col2 = 0; col2 < 9; ++col2) {
            if (col2 !== col && sudoku[row][col2].value === value) {
              return false;
            }
          }

          // Check the column
          for (let row2 = 0; row2 < 9; ++row2) {
            if (row2 !== row && sudoku[row2][col].value === value) {
              return false;
            }
          }

          // Check the square
          const sCol = Math.floor(row / 3) * 3;
          for (let col2 = sCol; col2 < sCol + 3; ++col2) {
            const sRow = Math.floor(col / 3) * 3;
            for (let row2 = sRow; row2 < sRow + 3; ++row2) {
              if ((row2 !== col || col2 !== row) && sudoku[col2][row2].value === value) {
                return false;
              }
            }
          }
        }
      }
    }

    return true;
  }
}
