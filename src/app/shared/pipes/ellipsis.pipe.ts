import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis', // name of the pipe
  pure: true // when you set it to false, even if dummyText not updated, transform method will be executed
})
export class EllipsisPipe implements PipeTransform {

  // Explain Pure and Impure Pipes 
  // Unit Testing 

  transform(value: string, endAt?: number): string {
    if (endAt){
      return value.substring(0, endAt) + '...';
    }
    return value;
  }

}
