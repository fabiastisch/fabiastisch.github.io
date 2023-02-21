import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwitchComponent} from "./switch/switch.component";
import {UnderlineComponent} from "./underline/underline.component";
import {FormsModule} from "@angular/forms";
import { SvgComponent } from './svg/svg.component';



@NgModule({
  declarations: [
    SwitchComponent,
    UnderlineComponent,
    SvgComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
    exports: [
        SwitchComponent,
        UnderlineComponent,
        SvgComponent
    ]
})
export class UtilsModule { }
