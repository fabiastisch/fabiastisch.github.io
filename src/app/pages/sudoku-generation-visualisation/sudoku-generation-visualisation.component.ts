import {Component, HostListener, OnInit} from '@angular/core';
import {SudokuModel} from "../sudoku/sudoku-model";
import {SudokuUtils} from "../../util-functions/sudoku-utils";

@Component({
  selector: 'app-sudoku-generation-visualisation',
  templateUrl: './sudoku-generation-visualisation.component.html',
  styleUrls: ['./sudoku-generation-visualisation.component.scss']
})
export class SudokuGenerationVisualisationComponent implements OnInit {
  public sudoku: SudokuModel | undefined;
  height: any = '500px';

  isGenerating: boolean = false;
  public delayTime : number = 200;

  public async newSudoku(): Promise<void> {
    if (this.isGenerating) return;
    this.isGenerating = true;
    await SudokuUtils.getSudokuAsync(this.delayTime, (sudoku, change, success) => {
      this.sudoku = new SudokuModel({sudoku: sudoku});
      if (change) {
        if (success !== undefined) {
          this.sudoku[change.col][change.row].isCorrect = success;
          this.sudoku[change.col][change.row].isWrong = !success;
        } else {
          this.sudoku[change.col][change.row].highlightHard = true;

        }
      }

    }).then(res => {
      this.sudoku = new SudokuModel(res);
      this.isGenerating = false;
    });

    //this.sudoku = new SudokuModel(SudokuUtils.getSudoku());
  }

  ngOnInit(): void {
    this.sudoku = SudokuModel.GenerateEmpty();
    // @ts-ignore
    this.height = document.getElementById('display').offsetWidth + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    // @ts-ignore
    this.height = document.getElementById('display').offsetWidth + 'px';

  }

  setDelayTime(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.delayTime = Number(value);
  }
}
