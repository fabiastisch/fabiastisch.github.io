import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SudokuComponent} from "./sudoku/sudoku.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AboutComponent} from './about/about.component';
import {RouterlinkComponent} from './header/routerlink/routerlink.component';
import {TimePipe} from './time.pipe';
import {UtilsModule} from "./utils/utils.module";

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RouterlinkComponent,
    TimePipe
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
