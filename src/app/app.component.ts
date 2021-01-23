import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//tên component sẽ nhúng vào html
  templateUrl: './app.component.html',//khai báo ten htmk của component
  styleUrls: ['./app.component.scss'] //khao cáo file scss của component

})
export class AppComponent {
  title = 'my-dream-app';
}


