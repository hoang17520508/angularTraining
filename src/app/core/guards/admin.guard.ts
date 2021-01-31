import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return ve true thi cho phep truy cap vao route
      // keets noois toi AuthService  lay bien currentUser vaf kiem tra
      const currentuser=this.auth.currentUser.value;
      if(currentuser){
        if(currentuser.maLoaiNguoiDung==="QuanTri"){
          return true;
        }
        //da dang nhap nhung maloainguoidung khasc quan trij thi redirect ve trang home
        alert('ban khong phai admin');
        this.router.navigateByUrl('/')
        return false
      }

      //chua dang nhao, redirect ve trang sign in
      this.router.navigateByUrl('/signin')
    return false;
  }

}
