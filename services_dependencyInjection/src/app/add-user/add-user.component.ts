import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  constructor(private userServie: UserService) {}
  name: string = '';
  status: string = '';

  addUser() {
    this.userServie.addNewUser(this.name, this.status);
    console.log(this.userServie.users.length);
  }
}
