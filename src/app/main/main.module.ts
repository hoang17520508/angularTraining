import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BookingComponent } from './booking/booking.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ComponentModule} from "../component/component.module"
import { PipeModule } from '../pipe/pipe.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [HomeComponent, MoviedetailComponent, BookingComponent, LayoutComponent, SignupComponent, SinginComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentModule,
    PipeModule,
    MatButtonModule,
    MatCardModule,

  ]
})
export class MainModule { }
