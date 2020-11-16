import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SudokuComponent} from './sudoku/sudoku.component';


const routes: Routes = [
  { path: 'sudoku', component: SudokuComponent },
  { path: '', pathMatch: 'full', redirectTo: '/sudoku' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
