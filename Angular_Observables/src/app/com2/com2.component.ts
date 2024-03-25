import { Component } from '@angular/core';
import { DataProviderService } from '../data.Service';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrl: './com2.component.css'
})
export class Com2Component {

  insertedData: String = '';

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit() {
    this.dataProviderService.dataEmitter.subscribe((value) => {
      this.insertedData = value;
    })
  }

}
