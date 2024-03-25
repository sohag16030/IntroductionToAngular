import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] 
})
export class footerComponent  {
  isHidden: boolean = false;
  
  hidefooter(){
    console.log("button clicked");
    this.isHidden = true;
    console.log(this.isHidden);
  }

}
