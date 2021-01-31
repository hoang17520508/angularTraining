import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentuser=this.auth.currentUser.value;
      if(currentuser){

        return true;
      }
      (window as any).PATH=state.url;
     this.router.navigateByUrl('/signin');
    return true;
  }


}
