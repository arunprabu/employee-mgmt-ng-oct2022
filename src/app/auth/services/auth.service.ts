import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(formData: any) {
    console.log('received in auth service', formData);
    return this.http.post(environment.signupRestApi, formData).pipe(
      map((res: any) => {
        // 3. get theres from the REST API
        console.log('res in authService', res);
        // 4. send the res to the comp
        return res;
      }),
      catchError((error: any) => {
        throw error;
      })
    );
  }

  login(formData: any) {
    //console.log(formData);
    return this.http.post(environment.loginRestApi, formData) // send the login credentials to the REST API 
      .pipe(
        map((res: any) => { // token is received as the response
          console.log(res);
          return res; // return response to the component
        }),
        catchError((err: any) => { //catching the error from the backend(REST API)
          throw err; // throwing error to the component/subscriber
        })
      )
  }

  isAuth(): boolean{
    if(sessionStorage.getItem('authToken')){
      return true;
    }else {
      return false;
    }
  }

}
