import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

// Let's config the URLs 
const employeesRoutes: Routes = [
  { path: '', component: ListEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: ':id', component: EmployeeDetailsComponent } // id is the URL param
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
