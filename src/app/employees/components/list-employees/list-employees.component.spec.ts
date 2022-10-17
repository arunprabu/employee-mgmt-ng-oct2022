import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

import { ListEmployeesComponent } from './list-employees.component';

describe('ListEmployeesComponent', () => {
  let component: ListEmployeesComponent;
  let fixture: ComponentFixture<ListEmployeesComponent>;
  let employeeService: EmployeeService;

  // Steps for mocking 
  /*
    1. Have the mock data of array with 2 objects
    2. Prepare for mocking a service's api method
        // 2.1 What service to mock? EmployeeService 
        // 2.2 What api method to mock? getEmployees() 
    3. provide the mock data for the service request 
  */
  
  const mockEmployeeList = [{
    id: 1,
    name: 'Virat Kohli',
    email: 'v@k.com',
    phone: '1-770-736-803'
  }, {
    id: 2,
    name: 'Steve Smith',
    email: 's@s.com',
    phone: '010-692-6599'
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeesComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        {
          provide: EmployeeService,
          useValue: {
            // mocking getEmployees method to return mockEmployeeList data as observable
            getEmployees: () => of(mockEmployeeList)
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesComponent);
    component = fixture.componentInstance;
    // important as we dep inj this service in our comp
    employeeService = TestBed.inject(EmployeeService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // using timeout -- checking ajax call's response
  /* it('has 10 employees initially', ((done) => {
    component.ngOnInit();
    setTimeout( () => {
      expect(component.employees.length).toEqual(10);
      done();
    }, 4000);
  }));

  it('should render employee named "Leanne Graham"', (done) => {
    component.ngOnInit();
  
    setTimeout( () => {
      fixture.detectChanges(); // after waiting for 4 sec, updates the html
      console.log(fixture.nativeElement.querySelector('h5'));
      expect(fixture.nativeElement.querySelector('h5').innerText).toBe('Leanne Graham');
      done();
    }, 4000);
  }); */

  /* Challenges / Disadvantages of Testing Direct API Request like the above
      1. Time Consuming
      2. Backend REST API might have data inconsistencies
      3. Backend might not be stable / may still be in development

      So, What's the solution? Mocks, Spies
  */

  it('should have array with length 2 in employees [MOCKING API]', () => {
    console.log(component.employees.length);
    expect(component.employees.length).toEqual(2);
  });

  it('should have employees from service [MOCKING API]', () => {
    expect(component.employees).toEqual(mockEmployeeList);
  });

  //TODO: test the html element h5.. it should have the text virat kohli


});
