import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  constructor(private userServie: UserService) {}
  id: number = 0;
  name: string = '';
  designation: string = '';
  status: string = '';

  addUser() {
    this.userServie.addNewUser(this.id,this.name,this.designation,this.status);
    console.log(this.userServie.users.length);
  }
}
