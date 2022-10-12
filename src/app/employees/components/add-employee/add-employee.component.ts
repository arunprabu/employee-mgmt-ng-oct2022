import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  isSaved = false;

  // Step 1: Have the form tag equivalent in TS 
  addEmployeeForm!: FormGroup;

  constructor( private employeeService: EmployeeService ) { // 1. connect with service 

  }

  ngOnInit(): void {
    // Step 1 continues 
    this.addEmployeeForm = new FormGroup({
      // Step 2: Have the input tags equivalents in TS 
      name: new FormControl('arun', Validators.required), // Step 5: Let's work on validation
      phone: new FormControl('123123', Validators.required), // For Step 6: Refer html 
      email: new FormControl('a@b.com', [Validators.required, Validators.email]) // can add multiple validators
      // For Step 3: Refer html
    });
  }

  handleAddEmployee(){
    console.log('submitted');
    console.log(this.addEmployeeForm);
    // form data 
    console.log(this.addEmployeeForm.value);
    
    // 2. send the above form data to the service
    this.employeeService.createEmployee(this.addEmployeeForm.value)
      .subscribe( (res: any) => { // 3. get the res from service
        console.log(res);
        if(res && res.id){
          this.isSaved = true;
        }
      });
  }

}
