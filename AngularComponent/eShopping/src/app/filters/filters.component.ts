import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Input() countTshirt:number = 0;
  @Input() countJeans:number = 0;
  @Input() countHoodie:number = 0;
}
