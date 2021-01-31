import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AbstractControl}  from '@angular/forms'

@Component({
  selector: 'app-error-messgae',
  templateUrl: './error-messgae.component.html',
  styleUrls: ['./error-messgae.component.scss']
})
export class ErrorMessgaeComponent implements OnInit {
@Input() control: AbstractControl | null=null
@Input() name :string =""
massage:any={
  taiKhoan:{
    required:"Tài Khoản không được để trống",
    minlenght:'tài khoản từ 3-20',
    maxlength:'Tài Khoản từ 3-20'
  },
  matKhau:{
    required:"Tài Khoản không được để trống",
  },
  required:"trường này ko được để trống"


}
  constructor() { }

  ngOnInit(): void {
  }

}
