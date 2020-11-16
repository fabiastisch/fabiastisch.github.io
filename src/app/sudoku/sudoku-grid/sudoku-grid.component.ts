import {Component, HostListener, OnInit} from '@angular/core';
import {Sudoku} from '../sudoku';

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
      for (let j = 0; j < 9; j++) {
        row.push(i);
      }
      this.sudoku.push(row);
    }
  }


}
