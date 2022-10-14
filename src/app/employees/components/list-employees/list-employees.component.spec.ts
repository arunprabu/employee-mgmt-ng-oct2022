import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ListEmployeesComponent } from './list-employees.component';

describe('ListEmployeesComponent', () => {
  let component: ListEmployeesComponent;
  let fixture: ComponentFixture<ListEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeesComponent ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // using timeout -- checking ajax call's response
  it('has 10 employees initially', ((done) => {
    component.ngOnInit();
    setTimeout( () => {
      expect(component.employees.length).toEqual(10);
      done();
    }, 4001);
  }));
});
