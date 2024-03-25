import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css',

})
export class AllUsersComponent {
  constructor(private userService:UserService){}
   
  users: User[] = [];

  ngOnInit(){
    this.users = this.userService.users;
  }
  showUserDeatils(user:User){
    this.userService.showUserDeatils(user);
  }
  
}
