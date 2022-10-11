import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root' 
})
export class EmployeeService {

  constructor( private http: HttpClient) { }

  // create employee 
  createEmployee(formData: any) { // 1. get the form data from comp
    console.log(formData);

    // 2. send the form data to the REST API
    // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users 
    // 2.2 What's the Http Method? POST
    // 2.3 What's the REST API Client Tool? HttpClient 
    return this.http.post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe(map((res: any) => { // 3. get the res from the REST API
        console.log(res);
        // 4. send the res to the comp 
        return res;
      }));
  }

  // list employees 
  getEmployees(){ // 1. get the req from the comp 
    // 2. send the req to the REST API 
    // 2.1 What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the Http Method? GET
    // 2.3 What's the REST API Client? HttpClient 

    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((res: any) => { // 3. get the res from the REST API 
        console.log(res);
        // 4. send the res to the comp 
        return res;
      }));
  }

  // get employee by id 
  getEmployeeById(empId: string | null ){
    const restApiUrl = `https://jsonplaceholder.typicode.com/users/${empId}`;
    return this.http.get(restApiUrl)
      .pipe(map((res: any) => { 
        console.log(res);
        return res;
      }));
  }
  

}
