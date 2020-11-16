import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { SudokuComponent } from './sudoku/sudoku.component';
import { AppRoutingModule } from './app-routing.module';
import { SudokuGridComponent } from './sudoku/sudoku-grid/sudoku-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    SudokuGridComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
