import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService, // service for authentication
    public navigationHelper: NavigationHelper, // navigationHelper class in injected for navigation purpose
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  handleLogin(formData: NgForm) { // receiving form data from the template 
    console.log(formData.value);
    // sending form data to the service
    this.authService.login(formData.value).subscribe({
      // positive case for login
      next: (res: any) => {
        if (res.token) { // received token as response on successful login from the backend(REST API)
          console.log(res);
          // Let's save the token in cookies/localStorage/sessionStorage
          sessionStorage.setItem('authToken', res.token);
          // post login redirect to the return URL 
          const redirectTo = this.activatedRoute.snapshot.queryParams['redirectTo'];
          this.router.navigateByUrl(redirectTo);
        }
      },
      // negative case for login
      error: (error: any) => { // error occured while login with invalid credentials
        console.log(error); // logging the error catched from the REST API 
      }
    });
  }

}
