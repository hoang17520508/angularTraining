import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [UserComponent, MovieComponent, LayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
