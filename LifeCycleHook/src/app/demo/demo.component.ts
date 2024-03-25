import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  @Input() value: string = 'proacademy';

  constructor() {
    console.log('constructor called');
    console.log(this.value);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChnages is called');
    console.log(change);
  }

  ngOnInit() {
    console.log('ngOnInit is called');
    console.log(this.value);
  }

  ngDoCheck() {
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit(){
    console.log("ngAfterContetnInint is called");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked is called");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit is called");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy is called");
  }
}
