import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { LayoutComponent } from './layout/layout.component';
import { MovieComponent } from './movie/movie.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'',redirectTo:"user"},
    {path:'movie',component:MovieComponent},
    {path:'user',component:UserComponent},
    {path:'movie/add',component:AddmovieComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
