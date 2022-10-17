import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  // Setup spy 
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(EmployeeService);
  });

  //setting up spy
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new EmployeeService(httpClientSpy);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // testing getEmployees method only
  it('should return employees when called [HTTP SPY]', ( done: DoneFn) => {
    // mock data for employees
    const mockEmployees = [{
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

    httpClientSpy.get.and.returnValue(of(mockEmployees));

    service.getEmployees()
      .subscribe({
        next: (res: any) => {
          expect(res).toEqual(mockEmployees);
          done();
        },
        error: done.fail
      })
  });

});
