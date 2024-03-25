import { Component } from '@angular/core';
import { Observable, Observer, of, forkJoin, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_Observables';

  //observable creation using constructor....
  // myObservable = new Observable((observer) => {
  //   console.log('observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     // observer.error(new Error('observables throws error....'));
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 5000);
  // });

  //observable creating using create method....
  // myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
  //   console.log('observable starts');
  //     setTimeout(() => {
  //       observer.next('1');
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.next('2');
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next('3');
  //     }, 3000);
  //     setTimeout(() => {
  //       // observer.error(new Error('observables throws error....'));
  //     }, 4000);
  //     setTimeout(() => {
  //       observer.next('5');
  //     }, 5000);
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 5000);
  // });

  array1 = [1, 2, 3, 4];
  array2 = ['A', 'B', 'C', 'D'];

  //myObservable = of(this.array1, this.array2);
  myObservable = from(this.array1);

  //operators of rsjs
  
  transformObs = this.myObservable.pipe(
    map((val: number) => val * 5),
    filter((val: number) => val > 10)
  );

  //call back 
  ngOnInit() {
    this.transformObs.subscribe(
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
