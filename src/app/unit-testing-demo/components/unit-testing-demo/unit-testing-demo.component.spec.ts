import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter/counter.component';

import { UnitTestingDemoComponent } from './unit-testing-demo.component';

describe('UnitTestingDemoComponent', () => {
  let component: UnitTestingDemoComponent;
  let fixture: ComponentFixture<UnitTestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        UnitTestingDemoComponent,
        CounterComponent 
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
