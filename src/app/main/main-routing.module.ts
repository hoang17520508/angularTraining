import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {BookingComponent} from './booking/booking.component'
import {MoviedetailComponent} from './moviedetail/moviedetail.component'
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:"booking",component:BookingComponent},
  {path:'',component:LayoutComponent,children:[
    {path:'',component:HomeComponent},

    {path:'movie/:movieId',component:MoviedetailComponent},

  ]},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
