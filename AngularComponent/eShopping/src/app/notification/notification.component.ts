import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-notification',
  template: `<div [hidden]="displayNotification" class="notification">
                 <p> This website uses cookies to provide a better user experience.</p>
               </div>`,
  styles: [`
    .notification {
      background-color: #07878b;
      color: #f8f1f1e7;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
    }
  `]
})
export class NotificationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  
  displayNotification:boolean = true;
}
