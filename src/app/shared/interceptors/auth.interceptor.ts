import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  // will intercept all the  requests that hit the REST API
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request); // original http request

    // ideal is to update http req header with bearer token. 
    // the token is saved in session storage 
    // let's access the token from session storage
    const authToken = sessionStorage.getItem('authToken');

    // Now, let's manipulate the req header with the above authToken as bearer token 
    request = request.clone({
      setHeaders: {
        authorization: `Bearer ${authToken}`
      }
    });

    return next.handle(request);
  }
}
