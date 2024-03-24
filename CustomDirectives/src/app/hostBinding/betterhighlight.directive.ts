import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
})
export class BetterhighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') background: string = 'Yellow';
}
