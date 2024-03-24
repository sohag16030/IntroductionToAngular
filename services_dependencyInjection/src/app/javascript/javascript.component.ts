import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css',
  providers: [EnrollService],
})
export class JavascriptComponent {
  title: string = 'javascript';
  constructor(private enrollService: EnrollService) {}
  OnEnroll() {
    this.enrollService.OnEnrollClick(this.title);
  }
}
