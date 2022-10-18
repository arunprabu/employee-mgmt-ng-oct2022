import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddEmployeeComponent } from './add-employee.component';

// Test suite
describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  // setup
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test spec #1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test spec #2
  // positive state of the form 
  it('has valid form when all fields are properly filled', () => {
    component.addEmployeeForm?.controls['name'].setValue('John');
    component.addEmployeeForm?.controls['phone'].setValue('123123121');
    component.addEmployeeForm?.controls['email'].setValue('j@k.com');
    expect(component.addEmployeeForm.valid).toBeTrue();
  });

  // negative state of the form 
  it('has invalid form when all fields are not filled', () => {
    component.addEmployeeForm?.controls['name'].setValue('');
    component.addEmployeeForm?.controls['phone'].setValue('');
    component.addEmployeeForm?.controls['email'].setValue('');
    expect(component.addEmployeeForm.invalid).toBeTrue();
  });

  // submission logic -- spyOn 
  it('should call handleAddEmployee-- all through [TS]', () => {
    spyOn(component, 'handleAddEmployee');
    component.handleAddEmployee();
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  // Now, let's test the handleAddEmployee method by triggering the click on html button 
  it('should call handleAddEmployee when submit btn clicked with all fields properly filled', () => {
    // enter valid input values only then, submit btn will be enabled
    component.addEmployeeForm?.controls['name'].setValue('John');
    component.addEmployeeForm?.controls['phone'].setValue('123123121');
    component.addEmployeeForm?.controls['email'].setValue('j@k.com');

    fixture.detectChanges(); // You Must detect changes, only then submit btn will be enabled

    spyOn(component, 'handleAddEmployee');
    const submitBtn = fixture.debugElement.query(By.css('.submitBtn')).nativeElement;
    submitBtn.click(); // we can click only if button becomes enabled -- for that we need valid inputs
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  
  it('should call handleAddEmployee when the submit button clicked -- all thru [HTML]', () => {
    // find the input
    const nameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#nameInput');
    // set values in input
    nameInput.value = 'John';
    // trigger the input event in all input field
    nameInput.dispatchEvent(new Event('input'));

    const phoneInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#phoneInput');
    phoneInput.value = '13113211';
    phoneInput.dispatchEvent(new Event('input'));

    const emailInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailInput');
    emailInput.value = 'j@k.com';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges(); // You Must detect changes, only then submit btn will be enabled

    spyOn(component, 'handleAddEmployee');
    const submitBtn = fixture.debugElement.query(By.css('.submitBtn')).nativeElement;
    submitBtn.click(); // we can click only if button becomes enabled -- for that we need valid inputs
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  it('has form with inputs that satisfy validation requirements', () => {
    // find the input
    const nameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#nameInput');
    // set values in input
    nameInput.value = 'John';
    // trigger the input event in all input field
    nameInput.dispatchEvent(new Event('input'));

    const phoneInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#phoneInput');
    phoneInput.value = '13113211';
    phoneInput.dispatchEvent(new Event('input'));

    const emailInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailInput');
    emailInput.value = 'j@k.com';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const nameRequiredEl = fixture.debugElement.nativeElement.querySelector('#nameRequired');
    expect(nameRequiredEl).toBeFalsy();

    const phoneRequiredEl = fixture.debugElement.nativeElement.querySelector('#phoneRequired');
    expect(phoneRequiredEl).toBeFalsy();

    const emailRequiredEl = fixture.debugElement.nativeElement.querySelector('#emailRequired');
    expect(emailRequiredEl).toBeFalsy();

    const invalidEmailEl = fixture.debugElement.nativeElement.querySelector('#invalidEmail');
    expect(invalidEmailEl).toBeFalsy();
  });

  // name with invalid inputs 

  // phone with invalid inputs

  // email with invalid inputs

  // have the filled form submission logic tested using spy -- refer emp-details.comp.spec

  // have the formdata as null and test form submission logic using spy -- refer emp-details.comp.spec
});
