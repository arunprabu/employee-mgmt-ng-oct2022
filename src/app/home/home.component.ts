import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    // life cycle hook
    // when the comp is coming into view ngOnInit will be executed
    // right place for you to send calls to REST API
    console.log('Inside ngOnInit');
  }

  ngOnDestroy(): void {
    // life cycle hook
    // when the comp is going out of the view ngOnDestroy will be executed
    // ideal place for you to clear the data, clear timeout, interval
    console.log('Inside ngOnDestroy');
  }

}
