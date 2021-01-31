import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'
import {AuthService} from 'src/app/core/services/auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  signinForm:FormGroup;

  constructor(private auth:AuthService,private router:Router) {
    this.signinForm=new FormGroup({
      taiKhoan: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      matKhau: new FormControl("",[Validators.required]),
    })
   }

  ngOnInit(): void {
  }
  handleSignin(){
    this.signinForm.markAllAsTouched();
    if(this.signinForm.invalid) return;
    console.log();
    this.auth.signin(this.signinForm.value).subscribe({
      next:(result)=>{

        //set value cho current user trong authservice
        this.auth.currentUser.next(result);
        localStorage.setItem('user',JSON.stringify(result));
        const {maLoaiNguoiDung}=result;
        if((window as any).PATH){
          this.router.navigateByUrl((window as any).PATH);
          (window as any).PATH=null
        }else if(maLoaiNguoiDung==='QuanTri'){
          this.router.navigateByUrl('/admin');
        }
        else{

          this.router.navigateByUrl('/');
        }
      },
      error:(err)=>{
        console.log(err.error);
      }

    })

  }

}
