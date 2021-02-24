import {arrayStartAtZero, getRandomInt, shuffleArray, transpose} from '../../util/utils-math';
import Sudoku from './sudoku';

const size = 9;
const boxSize = 3;

export function generateFullSudoku(): number[][] {
  const numbers = Array.from({length: size}, (_, i) => i + 1);
  let grid = '';
  const first = [];
  [...Array(size)].forEach(_ => {
    const randomInt = getRandomInt(0, numbers.length - 1);
    first.push(numbers[randomInt]);
    numbers.splice(randomInt, 1);
  });
  grid += first.join('');
  let row = 0;
  [...Array(size - 1)].forEach(_ => {
    row++;
    if (row % boxSize === 0) {
      const n = first.shift();
      first.push(n);
    }
    [...Array(boxSize)].forEach(_ => {
      const n = first.shift();
      first.push(n);
    });
    grid += first.join('');

  });
  Sudoku.print(null, Sudoku.fromString(grid));


  return Sudoku.fromString(grid);
}

export function shuffleSudoku(fullSudoku: number[][], mode: number = 0): number[][] {

  if (mode < 2) {

    const newSudoku = [];
    // shuffle rows
    const numbers = Array.from({length: boxSize}, (_, i) => i);
    let region = 0;
    [...Array(boxSize)].forEach(((_, index) => {
      shuffleArray(numbers).forEach(random => {
        newSudoku.push(fullSudoku[random + region * boxSize]);
      });
      region++;
    }));
    // Sudoku.print('null', newSudoku);

    // Shuffle Columns
    return shuffleSudoku(transpose(newSudoku), ++mode);

  } else {
    return fullSudoku;
  }
}

export function getSudoku(): number[][] {
  const fullSudoku = shuffleSudoku(generateFullSudoku());

  shuffleArray(arrayStartAtZero(size)).forEach(col => {
    shuffleArray(arrayStartAtZero(size)).forEach(row => {
      const temp = fullSudoku[col][row];
      fullSudoku[col][row] = -1;
      if (getSolutionCount(fullSudoku) > 1){
        fullSudoku[col][row] = temp;
        return;
      }
    });
  });

  return fullSudoku;
}

export function getSolutionCount(grid: number[][]): number {
  const solution = Sudoku.solver(Sudoku.parseCells(grid));
  return [...solution].length;
}
