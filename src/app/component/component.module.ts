import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessgaeComponent } from './error-messgae/error-messgae.component';



@NgModule({
  declarations: [ErrorMessgaeComponent],
  imports: [
    CommonModule
  ],
  exports:[ErrorMessgaeComponent],
})
export class ComponentModule { }
