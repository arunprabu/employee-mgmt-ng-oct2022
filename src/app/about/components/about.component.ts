import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  featureName = 'About Us';

  constructor() { }

  ngOnInit(): void {
  }

}
