export class Employee {
    constructor(
      public emsUserId: number,
      public fullName: string,
      public mobileNumber: string,
      public email: string,
      public isActive: boolean,
      public createdAt: Date,
      public updatedAt: Date
    ) {}
  }
  