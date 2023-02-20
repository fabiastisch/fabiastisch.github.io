import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwitchComponent} from "./switch/switch.component";
import {UnderlineComponent} from "./underline/underline.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SwitchComponent,
    UnderlineComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SwitchComponent,
    UnderlineComponent
  ]
})
export class UtilsModule { }
