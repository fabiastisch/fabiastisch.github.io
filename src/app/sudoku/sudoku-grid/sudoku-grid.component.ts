import {Component, HostListener, OnInit} from '@angular/core';
import {Cell, Sudoku} from '../sudoku';

@Component({
  selector: 'app-sudoku-grid',
  templateUrl: './sudoku-grid.component.html',
  styleUrls: ['./sudoku-grid.component.scss']
})
export class SudokuGridComponent implements OnInit {
  public sudoku: Sudoku;

  constructor() {
    this.sudoku = [];
  }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      const row = new Array();
      for (let j = 1; j <= 9; j++) {
        const cell = new Cell(j);
        row.push(cell);
      }
      this.sudoku.push(row);
    }
  }

  onClick(cell: Cell, rowI: number, colI: number): void {
    cell.isActive = true;
  }


}
