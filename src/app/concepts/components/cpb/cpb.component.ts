import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div>
      Parent to Child Comp Communication
      <p>My Age: {{age}}</p>
    </div>
  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Let's have a variable 
  @Input() age = 40; // Step 2: Let's make the variable as custom property by @Input()
  // Refer. concepts.comp.html  for step 3

  constructor() { }

  ngOnInit(): void {
  }

}
