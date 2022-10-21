import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { PasswordMatcherValidator } from 'src/app/shared/validators/password-matcher.validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  //step-1 form tag equivalent
  signUpForm!: FormGroup;

  constructor(private authService: AuthService, private navigationHelper: NavigationHelper) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      //step-2 input tag equivalents
      email: new FormControl('', [Validators.required, Validators.email]), //step-5 Validations for required and email
      password: new FormControl('', [Validators.required, Validators.minLength(6)]), // Validations for required and minlength
      confirmPassword: new FormControl('', [
        Validators.required, 
        Validators.minLength(6)
      ]) // Validations for required and minlength
    });
  }

  // step-8 receive the formData
  handleSignUpForm() {
    console.log(this.signUpForm.value);
    //send the above form data to the service
    this.authService.signup(this.signUpForm.value)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          // alert('Signup Successful');
          this.navigationHelper.navigateTo('/auth/login')
        },
        error: (error: any) => {
          console.log(error);
          alert('Some error occured. Try again later');
        }
      })
    this.signUpForm.reset(); // reset the form fields after submitting
  }

}
