import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

// Decorator
@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {
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

  // custom event binding related
  dataReceivedFromChildComp: any;

  // for directives
  isLoggedIn = false;
  skills = [
    'HTML', 'CSS', 'JS', 'ng', 'NodeJs'
  ];
  day = 1; //

  dataAccessedFromChildComp = '';

  @ViewChild(CebComponent, { static: false }) cebData!: CebComponent;

  myContext = {
    $implicit: 'World', 
    age: 20,
    name: 'John'
  };

  constructor( private cd: ChangeDetectorRef ) { 
    console.log('************************1.')
  }

  ngOnInit(): void {
    console.log('************************2.');
    // console.log(this.cebData);
    // when @ViewChild with static true you can access child comp's data here
  }

  ngAfterViewInit(): void {
    console.log('************************3.');
    console.log(this.cebData);
    // when @ViewChild with static false you can access child comp's data here
    this.dataAccessedFromChildComp = this.cebData.profile.city;
    this.cd.detectChanges();
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

  //Step 6: event handler of the custom event 
  handleProfileLoaded(event: any){ // Step 7: we receive the data thru event
    console.log('Inside handleProfileLoaded');
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }

}
