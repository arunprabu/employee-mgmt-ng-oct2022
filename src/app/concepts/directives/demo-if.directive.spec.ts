import { TemplateRef, ViewContainerRef } from '@angular/core';
import { DemoIfDirective } from './demo-if.directive';

describe('DemoIfDirective', () => {
  let viewContainer: ViewContainerRef;
  let templateRef: TemplateRef<any>;

  it('should create an instance', () => {
    const directive = new DemoIfDirective(viewContainer, templateRef);
    expect(directive).toBeTruthy();
  });
});
