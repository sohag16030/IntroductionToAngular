import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  @Input() countAll: number = 0;
  @Input() countTshirt: number = 0;
  @Input() countJeans: number = 0;
  @Input() countHoodie: number = 0;

  selectedRadioButtonValue:string = "All";

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  OnRadioButtonSlectionChange(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);
  }
}