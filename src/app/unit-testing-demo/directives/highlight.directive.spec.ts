import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';

// 1. create a mock component with appHightlight in its html 
@Component({
  template: `
    <div appHighlight='yellow'>
      Testing Directive with Mock Comp
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
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('div');
    console.log(highlightWrapperEl);
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });
  
});
