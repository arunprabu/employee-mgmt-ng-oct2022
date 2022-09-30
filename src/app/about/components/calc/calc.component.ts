import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
    <div>
      <h2>My Calculator | Testing add fn</h2>
    </div>
  `,
  styles: [
  ]
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(a: number, b: number): number{
    return a + b;
  }
}
