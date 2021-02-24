import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {Cell, Sudoku} from '../sudoku';
import {SudokuService} from '../sudoku.service';
import waitTime from '../../util/time';

@Component({
  selector: 'app-sudoku-grid',
  templateUrl: './sudoku-grid.component.html',
  styleUrls: ['./sudoku-grid.component.scss']
})
export class SudokuGridComponent implements OnInit {
  public sudoku: Sudoku;
  private selectedCell: Cell;
  solvingSpeed: number;

  constructor(private sudokuService: SudokuService, private changeDetectorRef: ChangeDetectorRef) {
    this.newSudoku();
    console.log(this.sudoku);
  }

  ngOnInit(): void {
  }

  public newSudoku(): void {
    this.sudoku = new Sudoku(this.sudokuService.getRandomSudoku());
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
    this.sudoku.cells.forEach(row => row.forEach(cel => {
      cel.isActive = false;
      cel.highlightLight = false;
      cel.highlightHard = false;
    }));
    cell.isActive = true;
    this.sudoku.cells[rowI].forEach(c => {
      if (c !== cell) {
        c.highlightLight = true;
      }
    });
    this.sudoku.cells.forEach(row => {
      if (row[colI] !== cell) {
        row[colI].highlightLight = true;
      }
    });
    this.selectedCell = cell;
  }


  public async solve(): Promise<void> {
    console.log('solve clicked');
    // await this.sudoku.solveCells();
    console.log(this.sudoku.cells.map((value => value.map(value1 => value1.value ? value1.value : -1))));
    const string = Sudoku.toString(this.sudoku.cells.map((value => value.map(value1 => value1.value ? value1.value : -1))));
    Sudoku.print('x', Sudoku.fromString(string));
    for await(const data of Sudoku.solve(string)) {
      const {
        row,
        column,
        value
      } = data;
      this.sudoku.cells[row][column].value = value;
      this.changeDetectorRef.detectChanges();
      await waitTime(100);
    }
  }

}
