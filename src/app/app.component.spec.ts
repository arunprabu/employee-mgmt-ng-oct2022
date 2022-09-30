/*
  How to write tests?
  Where to write tests?
*/

// Test Pattern: Given, When, Then -- similar to AAA (Arrange, Act, Assert)

// Given 
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'; // Taking up the comp for testing

// group of related test specs - TEST SUITE
describe('AppComponent', () => {

  // When
  beforeEach(async () => { // setup 
    // similar to app module 
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // test spec #1 // test case 
  it('should have proper app component', () => { // 'it' -- api from jasmine
    // When 
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // we are taking up comp.ts for testing

    // Then (Assert)
    // 'expect' -- api from jasmine | toBeTruthy - is a matcher from jasmine
    expect(app).toBeTruthy();
  });

  // test spec #2 
  // eslint-disable-next-line quotes
  it(`should have a variable title with value being 'Emp Manager!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    expect(app.title).toBe('Emp Manager!');
  });

  
});
