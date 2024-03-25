import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchValue: string = '';

  @Output()
  searchValueSectionChanged: EventEmitter<string> = new EventEmitter<string>();

  searchSectionChanged() {
    this.searchValueSectionChanged.emit(this.searchValue);
    console.log(this.searchValue);
  }
}
