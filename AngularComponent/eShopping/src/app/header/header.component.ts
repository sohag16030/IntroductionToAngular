import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   moto : string = "Find everything you need in one place"
   getMoto(){
    return this.moto;
   }
   source : string = "assets/img/header.jpg";
}
