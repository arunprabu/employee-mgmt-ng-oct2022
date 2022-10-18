import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IEmployee } from '../../models/iemployee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: [
  ]
})
export class ListEmployeesComponent implements OnInit, OnDestroy {

  employees: IEmployee[] = [];
  employeesSubscription!: Subscription;

  constructor( private employeeService: EmployeeService ) {  // 1. connect with the service 
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');

    // ideal place for REST API calls
    // 2. send the req to the service 
    this.employeesSubscription = this.employeeService.getEmployees()
      .subscribe( (res: IEmployee[]) => { // 3. get the res from the service
        // console.log(res);
        this.employees = res;
      });
  }

  ngOnDestroy(): void {
    // whenever the comp goes out of the view -- this will be executed
    // ideal place for you to clear data, clear interval & timeout, unsubscribe
    console.log('Inside Destroy');
    // if(this.employees && this.employees.length > 0) {
    //   this.employees.length = 0;
    // }
    this.employeesSubscription.unsubscribe();
  }

}
