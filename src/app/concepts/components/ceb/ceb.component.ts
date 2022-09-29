import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <p>Let's send some data to parent comp</p>
      <button (click)="handleSendDataToParent()">Send Data to Parent Comp</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Let's work on to define a custom event
  // Step 1.1 Let's have an obj of EventEmitter class 
  @Output() profileLoaded = new EventEmitter(); // Step 1.2 Let's make it a custom event by using @Output()

  // Step 2: Let's have the data to send to parent comp
  profile = {
    name: 'Steve',
    city: 'London'
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleSendDataToParent() {
    console.log('Will send soon');
    // Step 3: Let's Emit/Trigger the custom event thru program
    // along with it let's send the data to parent comp
    this.profileLoaded.emit(this.profile); // For step 4: Refer concepts.comp.html
  }
}
