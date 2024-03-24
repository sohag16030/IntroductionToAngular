export class User {
  name: string = '';
  status: string = '';
}

export class UserService {
  users: User[] = [
    { name: 'Mike', status: 'active' },
    { name: 'John', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ];

  addNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
  }
}
