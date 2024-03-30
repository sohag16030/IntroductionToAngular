import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      personalFormGroup: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      }),
      country: [null],
      gender: [null]
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}
