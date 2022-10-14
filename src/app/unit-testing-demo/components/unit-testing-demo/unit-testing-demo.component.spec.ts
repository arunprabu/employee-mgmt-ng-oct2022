import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CounterComponent } from '../counter/counter.component';

import { UnitTestingDemoComponent } from './unit-testing-demo.component';

describe('UnitTestingDemoComponent', () => {
  let component: UnitTestingDemoComponent;
  let fixture: ComponentFixture<UnitTestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        UnitTestingDemoComponent,
        CounterComponent,
        HighlightDirective
      ],
      schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
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

  it('should have skyblue <div>', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid="highlightWrapper"]');
    console.log(highlightWrapperEl);
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });


  // Approach #1 to test with fakeAsync and tick
  it('has featureName with proper text [APPROACH #1]', fakeAsync(() => {
    component.ngOnInit();
    tick(2001);
    expect(component.featureName).toEqual('Testing the ngOnInit with fakeAsync and tick');
  }));

  // Approach #2 using timeout
  it('has featureName with proper text [APPROACH #2]', ((done) => {
    component.ngOnInit();
    setTimeout( () => {
      expect(component.featureName).toEqual('Testing the ngOnInit with fakeAsync and tick');
      done();
    }, 2001);
  }));

});
