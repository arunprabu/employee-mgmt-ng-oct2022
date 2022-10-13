import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../models/iemployee';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root' // This tells Angular to provide the service in the application root level 
  // and the service will be created once (singleton service ) and 
  // provide the same instance in every module that injects this class.
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
    return this.http.post(environment.employeesRestApi, formData)
      .pipe(map((res: any) => { // 3. get the res from the REST API
        console.log(res);
        // 4. send the res to the comp 
        return res;
      }));
  }

  // list employees 
  getEmployees(): Observable<IEmployee[]>{ // 1. get the req from the comp 
    // 2. send the req to the REST API 
    // 2.1 What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the Http Method? GET
    // 2.3 What's the REST API Client? HttpClient 

    return this.http.get<IEmployee[]>(environment.employeesRestApi)
      .pipe(map((res: IEmployee[]) => {  // 3. get the res from the REST API 
        console.log(res);
        // 4. send the res to the comp 
        // ideal place for filter, sort, adding, removing, replacing, convert, tilt 
        return res;
      }));
  }

  // get employee by id 
  getEmployeeById(empId: string | null ){
    const restApiUrl = `${environment.employeesRestApi}/${empId}`;
    return this.http.get(restApiUrl)
      .pipe(map((res: any) => { 
        console.log(res);
        return res;
      }));
  }

  updateEmployee(empData: any) {
    const restApiUrl = `${environment.employeesRestApi}/${empData.id}`;
    return this.http.put(restApiUrl, empData)
      .pipe(map((res: any) => { 
        console.log(res);
        return res;
      }));
  }

}
