import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  display: boolean = false;

  DisplayNotice() {
    this.display = true;
  }
}
