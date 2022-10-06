import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

// Test suite
describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let wrapper: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    wrapper = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // test spec
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has default counterValue 0', () => {
    expect(component.counterValue).toEqual(0);
  });

  it('should increment counterValue correctly', () => {
    expect(component.counterValue).toEqual(0);
    component.handleIncrement(); // calling the event handler method directly
    expect(component.counterValue).toEqual(1);
    component.handleIncrement(); 
    component.handleIncrement(); 
    expect(component.counterValue).toEqual(3);
  });

  // TODO: should decrement counterValue correctly 

  // Let's test the events
  it('should increment counter and update in html when increment btn clicked', () => {
    // find the button from html template and trigger/emit the click event
    fixture.debugElement
      .query(By.css('.incrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(1);

    fixture.detectChanges(); // detect the changes in html

    // along with it, let's check whether it is updated in html
    // const counterCompHTML = fixture.nativeElement as HTMLElement; // taking up the comp html for testing
    // expect(counterCompHTML.querySelector('p.counterTxt')?.textContent).toBe('Counter: 1');

    const counterHtmlText = fixture.debugElement
      .query(By.css('p.counterTxt'))
      .nativeElement.innerText;

    expect(counterHtmlText).toBe('Counter: 1');
  });

  // TODO: should decrement counter and update in html when decrement btn clicked

  // TODO: should stop at 10 and show Maximum Reached upon increment
  
  // TODO: should stop at 0 and show Minimum Reached upon decrement

  // testing inline styles of html element
  it('should have red bg color in h2 element', () =>{
    const bgColor = wrapper.querySelector('h2')?.style.backgroundColor;
    expect(bgColor).toBe('rgb(255, 0, 0)'); // not recommended to use the exact color name like 'red', 'blue'
  });

  // TODO: testing whether the button elements have css class 'btn' 

  it('ngOnInit called', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

});
