import { Component, OnInit } from '@angular/core';
import {SudokuModel} from "../sudoku/sudoku-model";
import {SudokuUtils} from "../util/sudoku-utils";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sudoku : SudokuModel | undefined;

  constructor() {
    this.sudoku = new SudokuModel(SudokuUtils.getSudoku());
  }

  ngOnInit(): void {
  }

}
