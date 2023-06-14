import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LogInform!: FormGroup;
  IsHavingAccount: boolean = true;
  IsLock: boolean = true;
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.LogInform = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
    });
  }
  LogIn(){
    console.log(this.LogInform);
    // console.log(this.LogInform.value.userName);
   let Username:string=(this.LogInform.value.userName);
    // console.log(this.LogInform.value.userName);
    let password:string = (this.LogInform.value.password);
    this._authService.LogInApp(Username, password);
    // this.LogInform.reset();
  }
  Onlogin(user: HTMLInputElement, pass: HTMLInputElement) {
    // this._authService.LogInApp(user.value, pass.value);
  }
  get f() {
    return this.LogInform.controls;
  }
}
