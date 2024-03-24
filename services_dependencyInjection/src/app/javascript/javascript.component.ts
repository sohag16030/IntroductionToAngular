import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css',
})
export class JavascriptComponent {
  title: string = 'javascript';

  OnEnroll() {
    const enrollService = new EnrollService();
    enrollService.OnEnrollClick(this.title);
  }
}
