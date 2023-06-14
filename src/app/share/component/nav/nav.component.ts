import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  istrue:boolean=false
  constructor(private _router:Router,private _authService:AuthService,private eleRef: ElementRef) { }

  ngOnInit(): void {
  }
  Onclick(eve:any){
    console.log(eve);

  }
  Onul(){
    console.log("hello");

  }
  LogOut() {
    this._router.navigate(['/']);
    this._authService.LogOutFromApp(); //false
  }
  OnAncorclick1(){
    console.log("hello1");

  }
  OnAncorclick2(){
    console.log("hello2");

  }
  heloo(){
    console.log("table");
this.eleRef.nativeElement.parentElement?.classList.remove('show')
  }
  heloo1(){
    console.log("create");
    this.eleRef.nativeElement.parentElement?.classList.remove('show')

  }

}
