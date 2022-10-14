import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-testing-demo',
  templateUrl: './unit-testing-demo.component.html',
  styles: [
  ]
})
export class UnitTestingDemoComponent implements OnInit {
  featureName!: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      this.featureName = 'Testing the ngOnInit with fakeAsync and tick';
    }, 2000);
  }

}
