import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./pages/header/header.component";
import {HomeComponent} from "./pages/home/home.component";
import {SudokuComponent} from "./pages/sudoku/sudoku.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AboutComponent} from './pages/about/about.component';
import {RouterlinkComponent} from './pages/header/routerlink/routerlink.component';
import {TimePipe} from './time.pipe';
import {UtilsModule} from "./utils/utils.module";
import { SudokuGenerationVisualisationComponent } from './pages/sudoku-generation-visualisation/sudoku-generation-visualisation.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RouterlinkComponent,
    TimePipe,
    SudokuGenerationVisualisationComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        UtilsModule,
    ],
  providers: [
    TimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
