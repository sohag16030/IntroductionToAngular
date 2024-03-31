import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeService.getAllEmployees().subscribe(
      (response: any[]) => {
        this.employeeList = response;
        console.log(this.employeeList);
      },
      (error) => {
        console.error('Error occurred while fetching employee list:', error);
        // Handle error scenario
      }
    );
  }

  showDetails(employee: any) {
    this.employeeService.getByIdEmployee(employee.emsUserId).subscribe(
      (response) => {
        console.log('Details of employee:', response);
        // Implement logic to display details, e.g., open a modal with employee details
      },
      (error) => {
        console.error('Error occurred while fetching employee details:', error);
        // Handle error scenario
      }
    );
  }

  deleteRecord(emsUserId: number) {
    this.employeeService.deleteEmployee(emsUserId).subscribe(
      () => {
        console.log('Record deleted successfully.');
        // Implement logic to refresh the employee list or notify the user
        this.getEmployeeList(); // Refresh employee list after deletion
      },
      (error) => {
        console.error('Error occurred while deleting record:', error);
        // Handle error scenario
      }
    );
  }
}
