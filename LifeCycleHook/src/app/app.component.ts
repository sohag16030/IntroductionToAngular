import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputText: string = '';
  flag: boolean = true;

  OnSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }
  OnDestroy() {
    this.flag = false;
  }
}
