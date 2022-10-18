import { Component, OnInit } from '@angular/core';
import { NavigationHelper } from '../../utils/navigation-helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public navigationHelper: NavigationHelper) { }

  ngOnInit(): void {
  }
}
