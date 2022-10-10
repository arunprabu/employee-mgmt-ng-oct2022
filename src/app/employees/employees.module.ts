import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeesComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
