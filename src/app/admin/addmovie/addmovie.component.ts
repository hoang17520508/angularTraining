import { Component, OnInit } from '@angular/core';
import  {FormControl,FormGroup} from  '@angular/forms'
import { Observable } from 'rxjs';
import {MovieService} from 'src/app/core/services/movie.service'
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})
export class AddmovieComponent implements OnInit {
  form:FormGroup= new FormGroup({
    tenPhim:new FormControl(''),
    biDanh:new FormControl(''),
    trailer:new FormControl(''),
    hinhAnh:new FormControl(''),
    moTa:new FormControl(''),
    ngayKhoiChieu:new FormControl(''),

  })

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {

  }
  handleChangeFile(evt:any){
    const file =evt.target.files[0];
    //setvalue bat buoc thay doi toan bo gia tri form
    // this. form .setvalue({})
    //pathch value
    this.form.patchValue({hinhAnh:file});
  }
  handleSubmit(){
    console.log(this.form);
    this.movieService.addMovie(this.form.value).subscribe()
  }

}
