import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { } // Inject HttpClient module


  ngOnInit() {
    this.reactiveForm = this.fb.group({
      personalFormGroup: this.fb.group({
        fullName: [null, Validators.required, this.noSpaceAllowed], // Updated form control name to fullName
        mobileNumber:[null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      })
    });
  }

  onSubmit() {
    
    // Api call for save the data into database
    if (this.reactiveForm.valid) {
      const formData = this.reactiveForm.value.personalFormGroup;
      this.http.post('http://localhost:8081/api/emsUsers', formData)
        .subscribe(
          (response) => {
            console.log('Successfully saved:', response);
          },
          (error) => {
            console.error('Error occurred while saving:', error);
            // Handle error scenario
          }
        );
    } else {
      console.log('Form is invalid. Cannot submit.');
    }

  }

  noSpaceAllowed(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      if (control.value !== null && control.value.indexOf(' ') !== -1) {
        resolve({ noSpaceAllowed: true });
      } else {
        resolve(null);
      }
    });
  }
}
