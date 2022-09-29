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
  companyProfile = { 
    name: 'Cognizant',
    employeesCount: 300000
  }
  // property binding related
  teamSize = 14;

  // two way binding related
  courseName = 'Angular 13';

  // custom property related
  myAge = 100;

  constructor() { 
  }

  ngOnInit(): void {
  }

  // event binding related
  handleClickMe(element: any){
    console.log(element);
    // TODO: Disable the button
    element.disabled = true;
    // TODO: Change the label to 'Clicked'
    element.textContent = 'Clicked';
    alert('clicked');
  }

}
