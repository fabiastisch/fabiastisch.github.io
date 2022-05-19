import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalContentComponent} from './modal-content.component';


@NgModule({
  declarations: [
    ModalContentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ModalContentComponent]
})
export class ModalContentModule {
}
