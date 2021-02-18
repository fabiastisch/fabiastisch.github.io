import {Component, HostListener, OnInit} from '@angular/core';
import {Cell, Sudoku} from '../sudoku';
import {SudokuService} from '../sudoku.service';

@Component({
  selector: 'app-sudoku-grid',
  templateUrl: './sudoku-grid.component.html',
  styleUrls: ['./sudoku-grid.component.scss']
})
export class SudokuGridComponent implements OnInit {
  public sudoku: Sudoku;
  private selectedCell: Cell;

  constructor(private sudokuService: SudokuService) {
    this.sudoku = new Sudoku(this.sudokuService.getRandomSudoku());
    console.log(this.sudoku);
  }

  ngOnInit(): void {

    // this.sudoku = this.sudokuService.generateSudoku();
    /*for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 1; j <= 9; j++) {
        const cell = new Cell(j);
        row.push(cell);
      }
      this.sudoku.push(row);
    }*/
  }

  @HostListener('window:keydown', ['$event'])
  private onKeyDown(event: KeyboardEvent): void {
    const num = parseInt(event.key, 10);
    if (this.selectedCell === undefined || this.selectedCell === null){
      return;
    }
    if (this.selectedCell.readonly){
      return;
    }
    this.selectedCell.value = num;
  }

  onClick(cell: Cell, rowI: number, colI: number): void {
    /*this.sudoku.forEach(row => row.forEach(cel => {
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
    this.selectedCell = cell;*/
  }


}
