import { Component } from '@angular/core';
import { EnrollService } from './services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [EnrollService],
})
export class AppComponent {
  constructor(private enrollService: EnrollService){

  }
}
