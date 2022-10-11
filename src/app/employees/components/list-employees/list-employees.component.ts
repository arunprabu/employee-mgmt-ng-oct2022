import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: [
  ]
})
export class ListEmployeesComponent implements OnInit {

  employees: any[] = [];

  constructor( private employeeService: EmployeeService ) {  // 1. connect with the service 
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // ideal place for REST API calls
    // 2. send the req to the service 
    this.employeeService.getEmployees()
      .subscribe( (res: any) => { // 3. get the res from the service
        console.log(res);
        this.employees = res;
      });
  }


}
