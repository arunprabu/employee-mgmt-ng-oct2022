import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  divEl: any; 

  constructor( private elRef: ElementRef, private renderer: Renderer2) { 
    console.log('Inside Constructor');

    // find an element in which the directive is used
    console.log(elRef.nativeElement);
    this.divEl = this.elRef.nativeElement;

    // pass spl instruction to the element using  JS
    // divEl.style.backgroundColor = 'red';
    // divEl.style.color = '#fff';
    // divEl.style.height = '100px';
    // divEl.style.padding = '20px';

    // pass spl instruction to the element using Angular's renderer
    renderer.setStyle(this.divEl, 'background-color', 'red');
    renderer.setStyle(this.divEl, 'color', '#fff');
    renderer.setStyle(this.divEl, 'height', '100px');
    renderer.setStyle(this.divEl, 'padding', '20px');

    const newPara = this.renderer.createElement('p'); // <p></p>
    renderer.setStyle(newPara, 'float', 'right'); // <p style='float:left'></p>
    renderer.setStyle(newPara, 'font-size', '10px');// <p style='float:left; font-size:10px'></p>
    const poweredByText = this.renderer.createText('Powered By Colorizer Directive');// Powered By Colorizer Directive
    renderer.appendChild(newPara, poweredByText); // <p style='float:left; font-size:10px'>Powered By Colorizer Directive</p>
    renderer.appendChild(this.divEl, newPara);
  }

  // Handle Events inside Directive -- click, mouseover, mouseout 
  @HostListener('click', ['$event.target']) 
  handleClick(targetEl: any) {
    console.log('Clicked');
    console.log(targetEl); // will show the element in which the click event occured
    this.renderer.setStyle(targetEl, 'background-color', 'yellow');
    this.renderer.setStyle(targetEl, 'color', '#000');

    const newSpan = this.renderer.createElement('span'); //<span></span>
    this.renderer.setStyle(newSpan, 'font-size', '12px');
    const developedByText = this.renderer.createText('Developed by Arun'); 
    this.renderer.appendChild(newSpan, developedByText); //<span>Developed by Arun</span>
    this.renderer.appendChild(this.divEl, newSpan);
  }

  // TODO: work on mouseover -- change bg color to lightgreen 
  // TODO: work on mouseout -- change the bg color to red
}
