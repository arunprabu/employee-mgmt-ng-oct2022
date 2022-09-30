import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from '../menu/menu.component';

import { HeaderComponent } from './header.component';

// TEST SUITE
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    // similar to app module
    await TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        MenuComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => { // setup 
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance; // comp.ts is taken for testing
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
