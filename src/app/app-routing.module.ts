import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SudokuComponent} from "./sudoku/sudoku.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'sudoku', component: SudokuComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/sudoku' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
