import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  counterValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleIncrement(){
    this.counterValue++;
  }

  handleDecrement(){
    this.counterValue--;
  }
}
