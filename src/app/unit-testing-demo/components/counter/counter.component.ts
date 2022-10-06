import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  counterValue = 0;
  message = '';

  constructor() { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
  }

  handleIncrement(){
    if(this.counterValue < 10){
      this.counterValue++;
      this.message = '';
    }else{
      this.message = 'Maximum Reached';
    }
  }

  handleDecrement(){
    if(this.counterValue > 0){
      this.counterValue--;
    }
  }
}
