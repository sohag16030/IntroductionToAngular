import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      personalFormGroup: this.fb.group({
        firstName: [null, Validators.required, this.noSpaceAllowed],
        lastName: [null, Validators.required, this.noSpaceAllowed],
        email: [null, [Validators.required, Validators.email]],
      }),
      country: [null],
      gender: [null],
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])
    });

    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log("statusChanges :: " + value);
    });

    this.reactiveForm.patchValue({
      personalFormGroup: {
        email: 'example@gmail.com',
      }
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    
  }
  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
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
