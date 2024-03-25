import { EventEmitter } from '@angular/core';

export class User {
  id: number = 0; // Assuming a default value of 0 for the ID
  name: string = '';
  designation: string = '';
  status: string = '';
}

export class UserService {
  users: User[] = [
    { id: 1, name: 'Mike', designation: 'Software Engineer', status: 'active' },
    {
      id: 2,
      name: 'John',
      designation: 'Junior Software Engineer',
      status: 'inactive',
    },
    {
      id: 3,
      name: 'Steve',
      designation: 'Software Engineer',
      status: 'active',
    },
  ];

  addNewUser(id: number, name: string, designation: string, status: string) {
    this.users.push({
      id: id,
      name: name,
      designation: designation,
      status: status,
    });
  }
  OnShowDetaisClicked = new EventEmitter<User>();

  showUserDeatils(user: User) {
    console.log("user-service-com-ts-called");
    console.log(user);
    this.OnShowDetaisClicked.emit(user);
    console.log(this.OnShowDetaisClicked);
  }
  
}
