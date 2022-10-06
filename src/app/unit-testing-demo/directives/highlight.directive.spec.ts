import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

xdescribe('HighlightDirective', () => {
  let elRef: ElementRef;

  it('should create an instance', () => {
    const directive = new HighlightDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
