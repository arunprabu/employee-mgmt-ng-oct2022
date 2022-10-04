import { ElementRef, Renderer2 } from '@angular/core';
import { ColorizerDirective } from './colorizer.directive';

xdescribe('ColorizerDirective', () => {
  let elRef: ElementRef;
  let renderer: Renderer2;
  
  it('should create an instance', () => {
    const directive = new ColorizerDirective(elRef, renderer);
    expect(directive).toBeTruthy();
  });
});
