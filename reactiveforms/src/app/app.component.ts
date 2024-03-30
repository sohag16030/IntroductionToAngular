import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      }),
      country: [null],
      gender: [null],
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
}
