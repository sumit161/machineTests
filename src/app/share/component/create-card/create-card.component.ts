import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomRegex } from 'src/app/validators/validators';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {


  signupForm!: FormGroup;
  genderArray: Array<string> = ['Male', 'Female', 'others'];
  countriesName: Array<string> = ['india', 'bangladesh'];
  ngOnInit(): void {
    this.CreateSignupForm();
    this.f['password'].valueChanges.subscribe((res: any) => {
      // console.log(res);
      if (this.f['password'].valid) {
        this.f['confirmPassword'].enable();
      } else {
        this.f['confirmPassword'].disable();
      }
    });

  }

  //CreateSignupForm
  CreateSignupForm() {
    this.signupForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
      Email: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.email),
        // orbiddenvalidator.forbiddenName,
      ]),
      gender: new FormControl(null),
      birthDate: new FormControl(null, [
        Validators.required,
      ]),
      date: new FormControl(null, [
        Validators.required,
      ]),
      phoneNumber: new FormControl(null, [Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]),

      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.password),
      ]),
      confirmPassword: new FormControl({ value: null, disabled: true }),
    });
  }

  //onSignUp
  onSignUp() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
    console.log(this.signupForm.value.date);
    console.log(new Date(this.signupForm.value.date).getTime());
if(new Date(this.signupForm.value.date).getTime()>946684800000){
 var error = "allowed only before 1 jan 2000"
}
    this.signupForm.reset();
  }
  // 1st way
  get getUserNameControl() {
    return this.signupForm.get('userName') as FormControl;
  }
  // 2nd way
  get f() {
    return this.signupForm.controls;
  }
  get skillsfromArray() {
    return this.signupForm.get('skills') as FormArray;
  }
  addMoreSkills() {
    if (this.skillsfromArray.length < 5) {
      let skillCotrol = new FormControl(null);
      this.skillsfromArray.push(skillCotrol);
    } else {
      alert`we add only 5 skills`;
    }
  }
  DeleteSkills() {
    // this.skillsfromArray.pop()
  }

}
