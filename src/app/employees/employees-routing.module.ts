import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

// Let's config the URLs 
const employeesRoutes: Routes = [
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/1', component: EmployeeDetailsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeesRoutes) // registering the child routes
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
