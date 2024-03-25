import { Component } from '@angular/core';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {

  constructor(private userServie: UserService) {}
  user: User = new User();

  ngOnInit() {
    this.userServie.OnShowDetaisClicked.subscribe((data: User) => {
      console.log("User data received:", data); 
      this.user = data;
    });
  }
}
