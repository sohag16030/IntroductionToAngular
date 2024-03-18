import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    searchValue:string = 'Apple';
//     onInputChange(event: any): void {
//       this.searchValue = event.target.value;
//       console.log(this.searchValue);
//     }
//     search(): void {
//       console.log(this.searchValue);
//       // You can perform additional logic here, such as making an API request with the searchValue
//     }
}
