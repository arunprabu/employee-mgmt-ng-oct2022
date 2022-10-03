import { Directive } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor() { 
    console.log('Inside Constructor');
  }

}
