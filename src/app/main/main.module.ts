import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BookingComponent } from './booking/booking.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [HomeComponent, MoviedetailComponent, BookingComponent, LayoutComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
