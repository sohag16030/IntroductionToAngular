import { Component } from '@angular/core';
import { EnrollService } from './services/enroll.service';
import { UserService } from './services/user.service';
import { User } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService]
})
export class AppComponent {
  constructor(private enrollService: EnrollService,private userService:UserService){}
   
  users: User[] = [];

  ngOnInit(){
    this.users = this.userService.users;
  }
}
