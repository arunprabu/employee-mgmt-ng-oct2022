import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  employee: any; 

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

}
