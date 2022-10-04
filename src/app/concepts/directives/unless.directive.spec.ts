import { TemplateRef, ViewContainerRef } from '@angular/core';
import { UnlessDirective } from './unless.directive';

// group of related test spec - TEST SUITE
describe('UnlessDirective', () => {
  let viewContainer: ViewContainerRef;
  let templateRef: TemplateRef<any>; 

  it('should create an instance', () => {
    const directive = new UnlessDirective(viewContainer, templateRef);
    expect(directive).toBeTruthy();
  });
});
