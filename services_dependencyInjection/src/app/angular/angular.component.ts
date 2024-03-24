import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
})
export class AngularComponent {
  title: string = 'angular';

  OnEnroll() {
    const enrollService = new EnrollService();
    enrollService.OnEnrollClick(this.title);
  }
}
