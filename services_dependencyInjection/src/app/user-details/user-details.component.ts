import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  constructor(private userServie: UserService) {}
  id: number = 0;
  name: string = '';
  designation: string = '';
  status: string = '';

  getUserById() {
    this.userServie.addNewUser(this.id,this.name,this.designation,this.status);
    console.log(this.userServie.users.length);
  }
}
