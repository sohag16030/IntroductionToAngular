import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'] 
})
export class NotificationComponent  {
  isHidden: boolean = false;
  
  hideNotificationBar(){
    console.log("button clicked");
    this.isHidden = true;
    console.log(this.isHidden);
  }
  
}
