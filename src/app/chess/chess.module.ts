import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChessComponent} from './chess.component';
import {ChessBoardComponent} from './chess-board/chess-board.component';


@NgModule({
  declarations: [
    ChessComponent,
    ChessBoardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ChessComponent]
})
export class ChessModule {
}
