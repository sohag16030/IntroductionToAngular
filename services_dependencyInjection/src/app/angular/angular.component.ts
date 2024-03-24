import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
})
export class AngularComponent {
  title: string = 'angular';
  constructor(private enrollService: EnrollService) {}

  OnEnroll() {
    this.enrollService.OnEnrollClick(this.title);
  }
}
