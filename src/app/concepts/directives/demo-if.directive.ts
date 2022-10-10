import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDemoIf]'
})
export class DemoIfDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<object>
  ) {
    //console.log(viewContainerRef); // div
    //console.log(templateRef); // p
  }

  @Input() 
  set appDemoIf(condition: boolean) {
    //console.log(condition);
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
