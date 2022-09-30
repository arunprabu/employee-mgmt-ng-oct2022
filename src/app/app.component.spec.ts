/*
  How to write tests?
  Where to write tests?
*/

// Test Pattern: Given, When, Then -- similar to AAA (Arrange, Act, Assert)

// Given 
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about/components/about.component';
import { AppComponent } from './app.component'; // Taking up the comp for testing
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';

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
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        ConceptsComponent,
        AboutComponent,
        CpbComponent,
        CebComponent
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
