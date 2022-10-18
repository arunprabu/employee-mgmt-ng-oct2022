import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EllipsisPipe } from 'src/app/shared/pipes/ellipsis.pipe';
import { DemoIfDirective } from '../directives/demo-if.directive';
import { UnlessDirective } from '../directives/unless.directive';
import { CebComponent } from './ceb/ceb.component';

import { ConceptsComponent } from './concepts.component';
import { CpbComponent } from './cpb/cpb.component';

describe('ConceptsComponent', () => {
  let component: ConceptsComponent;
  let fixture: ComponentFixture<ConceptsComponent>;

  beforeEach(async () => {
    // similar to app module
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ 
        ConceptsComponent,
        CpbComponent,
        CebComponent,
        DemoIfDirective,
        UnlessDirective,
        EllipsisPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
