import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe((param) => {
      const employeeId = param.get('id');
      if (employeeId !== null) {
        const id = +employeeId; // Convert string to number
        this.employeeService.getEmployeeById(id).subscribe(
          (employee: Employee) => {
            this.employee = employee;
          },
          (error) => {
            console.error('Error fetching employee details:', error);
          }
        );
      }
    });
  }
  
}
