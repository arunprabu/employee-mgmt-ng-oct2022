import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  isUpdated = false;
  employee: any; 
  duplicateEmployee: any;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Reading URL Param
    const empId: string | null = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployeeById(empId)
      .subscribe((res: any) => {
        console.log(res);
        this.employee = res;
      })
  }

  handleEditModalOpen(){
    this.duplicateEmployee = { ...this.employee }; // shallow copy
  }

  handleUpdateEmployee(updateEmployeeForm: NgForm){ // submission handler
    //console.log(this.duplicateEmployee); // submittable data
    console.log(updateEmployeeForm);
    // TODO: submit the above data to the REST API thru service
  }

}
