import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service'
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentUser:any=null;
  currentuserSubcription:Subscription | null=null

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    //chir lay dc 1 lan,khi currentuser trong authservice thay doi ko lay dc values moi
    // this.currentUser=this.auth.currentUser.value;


    //theo doi su thay doi cua bien current user trong service moi lan currentuser thay doi se nhay vao trong callbacknext va nhan dc gia tri moi

  this.currentuserSubcription=this.auth.currentUser.asObservable().subscribe({
      next:(result)=>{
        this.currentUser=result;
      },
    })

  }
  //chay ttrc khi component bi huy
  ngOnDestroy():void{
    //huy theo doi current user khi bi unmount
    this.currentuserSubcription?.unsubscribe();
  }
  handleSigup(){
    alert("haaaaa");
  }

}
