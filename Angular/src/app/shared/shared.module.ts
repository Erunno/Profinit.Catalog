import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseButtonComponent } from './components/close-button/close-button.component';



@NgModule({
  declarations: [CloseButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CloseButtonComponent
  ]
})
export class SharedModule { }
