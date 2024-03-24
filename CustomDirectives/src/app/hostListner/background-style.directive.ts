import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundStyle]'
})
export class BackgroundStyleDirective {

  constructor(private element:ElementRef ,private renderer:Renderer2) {}

  ngOnInit(){
    const nativeElement = this.element.nativeElement;

    this.renderer.setStyle(nativeElement, 'background-color', 'lightblue');
    this.renderer.setStyle(nativeElement, 'padding', '20px');
  }
  
}
