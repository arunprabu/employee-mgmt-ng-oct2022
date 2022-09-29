import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // exposed in element selector -- mandatory
  templateUrl: './app.component.html', // html -- should be only one -- mandatory
  styleUrls: ['./app.component.css'] // css - can be multiple and optional
})
export class AppComponent {
  // ts
  title = 'employee-mgmt-ng-oct2022';
}
