import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {Cell, SudokuModel} from '../sudoku-model';
import {SudokuUtils} from '../../util/sudoku-utils';
import waitTime from '../../util/time';

@Component({
  selector: 'app-sudoku-grid',
  templateUrl: './sudoku-grid.component.html',
  styleUrls: ['./sudoku-grid.component.scss']
})
export class SudokuGridComponent implements OnInit {
  public sudoku: SudokuModel;
  private selectedCell: Cell;
  solvingSpeed: number;

  constructor( private changeDetectorRef: ChangeDetectorRef) {
    this.newSudoku();
    console.log(this.sudoku);
  }

  ngOnInit(): void {
  }

  public newSudoku(): void {
    this.sudoku = new SudokuModel(SudokuUtils.getSudoku());
  }

  @HostListener('window:keydown', ['$event'])
  private onKeyDown(event: KeyboardEvent): void {
    const num = parseInt(event.key, 10);
    if (this.selectedCell === undefined || this.selectedCell === null) {
      return;
    }
    if (this.selectedCell.readonly) {
      return;
    }
    this.selectedCell.value = num;
  }

  onClick(cell: Cell, rowI: number, colI: number): void {
    this.sudoku.forEach(row => row.forEach(cel => {
      cel.isActive = false;
      cel.highlightLight = false;
      cel.highlightHard = false;
    }));
    cell.isActive = true;
    this.sudoku[rowI].forEach(c => {
      if (c !== cell) {
        c.highlightLight = true;
      }
    });
    this.sudoku.forEach(row => {
      if (row[colI] !== cell) {
        row[colI].highlightLight = true;
      }
    });
    this.selectedCell = cell;
  }


  public async solve(): Promise<void> {
    this.sudoku.forEach(row => row.forEach(value => value.value = value.solution));
    /*console.log('solve clicked');
    // await this.sudoku.solveCells();
    console.log(this.sudoku.map((value => value.map(value1 => value1.value ? value1.value : -1))));
    const sudokuAsString = SudokuUtils.toString(this.sudoku.map((value => value.map(value1 => value1.value ? value1.value : -1))));
    SudokuUtils.print('x', SudokuUtils.fromString(sudokuAsString));
    for await(const data of SudokuUtils.solve(sudokuAsString)) {
      const {
        row,
        column,
        value
      } = data;
      this.sudoku[row][column].value = value;
      this.changeDetectorRef.detectChanges();
      await waitTime(100);
    }*/
  }

}
