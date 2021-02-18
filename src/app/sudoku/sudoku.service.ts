import {Injectable} from '@angular/core';
import {getRandomInt} from '../util/utils-math';
import {SudokuSolver} from '../util/sudoku-solver';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {


  constructor() {
  }

  public getRandomSudoku(): number[][] {
    return new SudokuSolver().generateSudoku();
  }


}
