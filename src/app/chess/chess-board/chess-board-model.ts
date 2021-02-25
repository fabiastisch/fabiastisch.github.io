import {arrayStartAtZero} from '../../util/utils-math';

export class ChessCell {
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  row: number;
  col: number;
  value: string = '';
}

export class ChessBoardModel extends Array<Array<ChessCell>> {

  constructor() {
    super();
    arrayStartAtZero(8).forEach(row => {
      const dataRow = [];
      arrayStartAtZero(8).forEach(col => {
        dataRow.push(new ChessCell(row, col));
      });
      this.push(dataRow);
    });
    this.reset();
  }

  public reset(): void {
    this[0][0].value = 'blackTower';
    this[0][1].value = 'blackKnight';
    this[0][2].value = 'blackBishop';
    this[0][3].value = 'blackQueen';
    this[0][4].value = 'blackKing';
    this[0][5].value = 'blackBishop';
    this[0][6].value = 'blackKnight';
    this[0][7].value = 'blackTower';
    this[1].forEach(cell => cell.value = 'blackPawn');
    this[6].forEach(cell => cell.value = 'whitePawn');
    this[7][0].value = 'whiteTower';
    this[7][1].value = 'whiteKnight';
    this[7][2].value = 'whiteBishop';
    this[7][3].value = 'whiteQueen';
    this[7][4].value = 'whiteKing';
    this[7][5].value = 'whiteBishop';
    this[7][6].value = 'whiteKnight';
    this[7][7].value = 'whiteTower';
  }
}
