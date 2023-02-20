import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SudokuComponent} from "./sudoku/sudoku.component";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";


const routes: Routes = [
  { path: 'sudoku', component: SudokuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: '/sudoku' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
