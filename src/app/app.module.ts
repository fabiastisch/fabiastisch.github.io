import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SudokuComponent} from "./sudoku/sudoku.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { UnderlineComponent } from './underline/underline.component';
import { AboutComponent } from './about/about.component';
import { RouterlinkComponent } from './header/routerlink/routerlink.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    HeaderComponent,
    HomeComponent,
    UnderlineComponent,
    AboutComponent,
    RouterlinkComponent,
    SwitchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
