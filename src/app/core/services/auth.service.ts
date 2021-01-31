import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable,BehaviorSubject} from 'rxjs'
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser= new BehaviorSubject<any>(null);
  //currentUser.next(value)=>Set gia tri cho bien currentuser
  //currentUser.value=>get gia tri cua bien currentUser
  //currentUser.asObserVable()=> chuyen currentUser  thanh 1 Observable


  constructor(private api:ApiService) {

  }
  signin(values:any):Observable<any>{
    const url="QuanLyNguoiDung/DangNhap";
    return this.api.post(url,values);
  }
  singup(values:any):Observable<any>{
    const url="QuanLyNguoiDung/DangKy";
    return this.api.post(url,{...values,maNhom:'GP01'});

  }
}
