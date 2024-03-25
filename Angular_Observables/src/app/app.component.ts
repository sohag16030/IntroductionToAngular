import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_Observables';

  myObservable = new Observable((observer) => {
    console.log('observable starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      // observer.error(new Error('observables throws error....'));
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 5000);
  });

  //call back 
  ngOnInit() {
    this.myObservable.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        alert(error);
      },
      () => {
        alert("complete");
      }
    );
  }
}
