import {Injectable} from '@angular/core';
import {SudokuSolver} from '../util/sudoku-solver';
import {delay} from 'rxjs/operators';
import Sudoku from './Utils/sudoku';
import {generateFullSudoku, getSudoku, shuffleSudoku} from './Utils';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {


  constructor() {
  }

  public getRandomSudoku(): number[][] {
    // this.solveSudoku();
    // this.foo();
    return getSudoku();
  }

  private async solveSudoku(): Promise<void> {
    /*const inputs = [
      '.6.3..8.4537.9.....4...63.7.9..51238.........71362..4.3.64...1.....6.5231.2..9.8.',
     // '.......12........3..23..4....18....5.6..7.8.......9.....85.....9...4.5..47...6...',
      // In 2012, Finnish mathematician Arto Inkala claimed to have created the "World's Hardest Sudoku".
     // '8..........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4..'
    ];*/
    const input = '...........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4..';
    console.time('benchmark');
    console.log('Benchmarking');
    Sudoku.print(`INPUT ${1}:`, Sudoku.fromString(input));
    let j = 0;
    // Empty Array
    const solution = Array(9).fill(() => Array(9).fill(0)).map(fn => fn());

    for await (const data of Sudoku.solve(input)) {
      const {
        row,
        column,
        value
      } = data;
      solution[row][column] = value;
      Sudoku.print(`OUTPUT ${+1} ITERATION=${j}:`, solution);

      await delay(500);
      j++;
    }
    console.timeEnd('benchmark');
    await delay(1000);

  }

  private getSolutionCount(input: string): number {
    const solution = Sudoku.solver(Sudoku.parseCells(Sudoku.fromString(input)));
    return [...solution].length;
  }


  // tslint:disable-next-line:typedef
  private foo() {
    const input = '...........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4..';
    const solutions = Sudoku.solver(Sudoku.parseCells(Sudoku.fromString(input)));
    for (const output of solutions) {
      output.forEach(node => {
        const results = [node.columnNode.name];
        let right = node.right;
        while (right !== node) {
          results.push(right.columnNode.name);
          right = right.right;
        }
        console.log(results.join(' '));
      });
      console.log();
    }
  }
}
