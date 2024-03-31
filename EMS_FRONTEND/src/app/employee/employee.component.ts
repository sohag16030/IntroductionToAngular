import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { } // Inject HttpClient module


  ngOnInit() {
    this.reactiveForm = this.fb.group({
      personalFormGroup: this.fb.group({
        name: [null, Validators.required, this.noSpaceAllowed],
        mobileNumber:[null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      })
    });
  }

  onSubmit() {
    
    // Api call for save the data into database
    if (this.reactiveForm.valid) {
      console.log("i am here")
      const formData = this.reactiveForm.value.personalFormGroup;
      this.http.post('http://localhost:8080/api/emsUsers', formData)
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
