import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  reactiveForm: FormGroup;
  employeeId: number; // Define employeeId variable to store the ID obtained from route parameters

  constructor (
    private fb: FormBuilder, 
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute to access route parameters
  ) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      personalFormGroup: this.fb.group({
        fullName: [null, [Validators.required, this.noSpaceAllowed]],
        mobileNumber: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      })
    });

    // Retrieve employeeId from route parameters
    this.route.paramMap.subscribe(params => {
      this.employeeId = +params.get('id'); // Convert string to number
      console.log(this.employeeId);
    });

    // Load employee details for editing
    this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
      this.reactiveForm.patchValue({
        personalFormGroup: {
          fullName: employee.fullName,
          mobileNumber: employee.mobileNumber,
          email: employee.email
        }
      });
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      const formData = this.reactiveForm.value.personalFormGroup;
      this.employeeService.updateEmployee(this.employeeId, formData).subscribe(
        (response) => {
          console.log('Successfully updated:', response);
          this.router.navigate(['/Employees']);
          // Handle success scenario here
        },
        (error) => {
          console.error('Error occurred while updating:', error);
          // Handle error scenario here
        }
      );
    } else {
      console.log('Form is invalid. Cannot submit.');
    }
  }

  noSpaceAllowed(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null && control.value.indexOf(' ') !== -1) {
      return { noSpaceAllowed: true };
    } else {
      return null;
    }
  }
}
