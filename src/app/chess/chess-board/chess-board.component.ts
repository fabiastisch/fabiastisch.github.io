import { Component, OnInit } from '@angular/core';
import {ChessBoardModel} from './chess-board-model';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {
  board: ChessBoardModel = new ChessBoardModel();
  constructor() { }

  ngOnInit(): void {
  }

}
