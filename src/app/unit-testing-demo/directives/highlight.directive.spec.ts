import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';

// 1. create a mock component with appHightlight in its html 
@Component({
  template: `
    <div id="myDiv1" appHighlight='yellow'>
      Testing Directive with Mock Comp -- Yellow Color
    </div>
    <div id="myDiv2" appHighlight="skyblue">
      Testing Directive with Mock Comp -- Skyblue Color
    </div>
    <div id="myDiv3" appHighlight>
      Testing Directive with Mock Comp -- lightgray Color
    </div>
    <div id="myDiv4">
      Testing Directive with Mock Comp -- no bg color
    </div>
  `
})
class MockComponent { } // No need to export as we will use this comp here itself 

// 2. test whether the div in the above mock comp is getting bg color 
describe('HighlightDirective', () => {
  let fixture: ComponentFixture<MockComponent>;

  // Step 2.1 preparing MockComponent for testing - loading it into the TestBed
  beforeEach( () => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        HighlightDirective
      ]
    }).createComponent(MockComponent);

    fixture.detectChanges(); // detecting the changes in html of mockcomp
  });
  
  // Step 2.2 let's test whether div of MockComponent has yellow bg color or not 
  it('should have a <div> with bg color yellow', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv1');
    console.log(highlightWrapperEl);
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  it('should have a <div> with bg color skyblue', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv2');
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });

  it('should have a <div> with bg color lightgray', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv3');
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('rgb(211, 211, 211)');
  });

  // negative spec
  it('should have a <div> with no bg color when directive not used', () => {
    const divWrapper: HTMLElement = fixture.nativeElement.querySelector('#myDiv4');
    const bgColor = divWrapper.style.backgroundColor;
    expect(bgColor).toBe('');
  });

});
