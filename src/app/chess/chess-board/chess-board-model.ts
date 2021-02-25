import {arrayStartAtZero} from "../../util/utils-math";

export class ChessCell {
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  row: number;
  col: number;
  value: any;
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
  }
}
