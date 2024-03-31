import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  
  reactiveForm: FormGroup;

  constructor (
    private fb: FormBuilder, 
    private employeeService: EmployeeService,
    private router: Router
    ) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      personalFormGroup: this.fb.group({
        fullName: [null, [Validators.required, this.noSpaceAllowed]],
        mobileNumber: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      })
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      const formData = this.reactiveForm.value.personalFormGroup;
      this.employeeService.addEmployee(formData).subscribe(
        (response) => {
          console.log('Successfully saved:', response);
          this.reactiveForm.reset();
          this.router.navigate(['/']);
          // You can handle success scenario here
        },
        (error) => {
          console.error('Error occurred while saving:', error);
          // You can handle error scenario here
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
