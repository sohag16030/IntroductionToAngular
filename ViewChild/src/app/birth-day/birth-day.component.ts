import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-birth-day',
  templateUrl: './birth-day.component.html',
  styleUrl: './birth-day.component.css'
})
export class BirthDayComponent {
  
  @ViewChild('birthdayInput') birthdayInput: any;
  @ViewChild('age') age:any ;
   
  ageCalc(){
    
    const birthday: string = this.birthdayInput.nativeElement.value;
    const birthDate: Date = new Date(birthday);
    const today: Date = new Date();
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.age = age;
  }
}
