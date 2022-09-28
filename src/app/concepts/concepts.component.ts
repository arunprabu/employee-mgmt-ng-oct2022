import { Component, OnInit } from '@angular/core';

// Decorator
@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public variable
  // interpolation related
  appName = 'Employee Manager App!';
  // companyProfile = { 
  //   name: 'Cognizant',
  //   employees: 300000
  // }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
