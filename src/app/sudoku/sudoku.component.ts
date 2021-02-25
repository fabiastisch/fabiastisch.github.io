import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {Cell, SudokuModel} from './sudoku-model';
import {Moment} from 'moment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {SudokuUtils} from '../util/sudoku-utils';
import {ModalContentComponent} from '../modal-content/modal-content.component';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit, AfterViewInit {
  public sudoku: SudokuModel;
  private selectedCell: Cell;
  solvingSpeed: number;
  private startTime: Moment;

  constructor(private changeDetectorRef: ChangeDetectorRef, private modalService: NgbModal) {
    this.newSudoku();
  }

  ngOnInit(): void {
    this.startTime = moment();
  }

  ngAfterViewInit(): void {
    console.log();

  }

  public newSudoku(): void {
    this.sudoku = new SudokuModel(SudokuUtils.getSudoku());
    this.startTime = moment();
  }

  @HostListener('window:keydown', ['$event'])
  private onKeyDown(event: KeyboardEvent): void {
    this.handleNumbers(event);
    this.handleKeys(event);
    this.checkSolved();
  }

  onClick(cell: Cell, rowI?: number, colI?: number): void {
    if (rowI === undefined && colI === undefined) {
      rowI = cell.row;
      colI = cell.col;
    }
    this.sudoku.forEach(row => row.forEach(cel => {
      cel.isActive = false;
      cel.highlightLight = false;
      cel.highlightHard = cel.value === cell.value && cell.value !== undefined && cel !== cell;
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
    this.selectedCell = cell;
  }


  public async solve(): Promise<void> {
    this.sudoku.forEach(row => row.forEach(value => value.value = value.solution));
    /*console.log('solve clicked');
    // await this.sudoku.solveCells();
    console.log(this.sudoku.map((value => value.map(value1 => value1.value ? value1.value : -1))));
    const sudokuAsString = SudokuUtils.toString(this.sudoku.map((value => value.map(value1 => value1.value ? value1.value : -1))));
    SudokuUtils.print('x', SudokuUtils.fromString(sudokuAsString));
    for await(const data of SudokuUtils.solve(sudokuAsString)) {
      const {
        row,
        column,
        value
      } = data;
      this.sudoku[row][column].value = value;
      this.changeDetectorRef.detectChanges();
      await waitTime(100);
    }*/
  }

  private handleNumbers(event: KeyboardEvent): void {
    const num = parseInt(event.key, 10);
    if (Number.isNaN(num) || num === 0) {
      return;
    }
    if (this.selectedCell === undefined || this.selectedCell === null) {
      return;
    }
    if (this.selectedCell.readonly) {
      return;
    }
    this.selectedCell.value = num;
  }

  private handleKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'w':
      case 'ArrowUp':
        this.onClick(this.selectedCell ?
          this.sudoku[(this.selectedCell.row - 1 >= 0 ? this.selectedCell.row - 1 : this.sudoku.length - 1)][this.selectedCell.col] :
          this.sudoku[0][0]);
        break;
      case 'a':
      case 'ArrowLeft':
        this.onClick(this.selectedCell ?
          this.sudoku[this.selectedCell.row][(this.selectedCell.col - 1 >= 0 ? this.selectedCell.col - 1 : this.sudoku.length - 1)] :
          this.sudoku[0][0]);
        break;
      case's':
      case'ArrowDown':
      case 'Enter':
        this.onClick(this.selectedCell ?
          this.sudoku[(this.selectedCell.row + 1 < this.sudoku.length ? this.selectedCell.row + 1 : 0)][this.selectedCell.col] :
          this.sudoku[0][0]);
        break;
      case'd':
      case'ArrowRight':
        this.onClick(this.selectedCell ?
          this.sudoku[this.selectedCell.row][(this.selectedCell.col + 1 < this.sudoku.length ? this.selectedCell.col + 1 : 0)] :
          this.sudoku[0][0]);
        break;
      case 'Delete':
      case 'Backspace':
        this.selectedCell.value = this.selectedCell.readonly ? this.selectedCell.value : undefined;
        break;
    }
  }

  private checkSolved(): void {
    if (this.sudoku.isSolved()) {
      const time = moment().diff(this.startTime, 'seconds', true);
      const componentRef = this.modalService.open(ModalContentComponent);
      componentRef.componentInstance.headerText = 'Success!  \nSolved in ' + time + ' seconds.';
    }
  }
}
