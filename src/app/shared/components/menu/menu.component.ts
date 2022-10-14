import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit, AfterContentInit {
  
  // only footer is sending an element with elementRef #backToTop. 
  @ContentChild('backToTop') b2tElement!: ElementRef; 
  
  constructor() { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // you will get undefined if such elRef is not sent from parent comp. 
    // we will see undefined once because header comp does not send the elRef #backToTop
    console.log(this.b2tElement);  // only footer comp sends it 
    if(this.b2tElement){
      this.b2tElement.nativeElement.style.backgroundColor = '#eee';
    }
  }

}
