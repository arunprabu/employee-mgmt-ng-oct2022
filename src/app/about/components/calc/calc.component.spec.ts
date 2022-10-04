import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has My Calculator as heading in html', () => {
    const calcCompHTML = fixture.nativeElement as HTMLElement;
    expect(calcCompHTML.querySelector('h2')?.textContent).toMatch(/my calculator/i);
  });

  it('has add method that adds two numbers properly', () => {
    // sometimes multiple expectations are needed
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(5, 4)).toEqual(9);
  });

  it('has add which returns datatype number', () => {
    // checking the return type
    expect(component.add(10, 20)).not.toBeNaN();
    expect(component.add(10, 20)).not.toBeUndefined();
    expect(component.add(10, 20)).not.toBeTrue();
  });

});
