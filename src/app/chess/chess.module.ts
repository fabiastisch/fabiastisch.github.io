import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChessComponent} from './chess.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { ChessCellComponent } from './chess-cell/chess-cell.component';


@NgModule({
  declarations: [
    ChessComponent,
    ChessBoardComponent,
    ChessCellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ChessComponent]
})
export class ChessModule {
}
