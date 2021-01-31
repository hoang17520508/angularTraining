import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SignupComponent}  from 'src/app/main/signup/signup.component'

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return true cho phep roi khoi route
const isDirty=component.signupForm.dirty && !component.signupForm.submitted ;
if(isDirty){
 const isComfirm=   confirm('ban co muon roi khoi,tat ca du lieu se mat');
 return isComfirm;
}
    return true;
  }

}
