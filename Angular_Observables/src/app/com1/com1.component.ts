import { Component, Input } from '@angular/core';
import { DataProviderService } from '../data.Service';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrl: './com1.component.css'
})
export class Com1Component {

  inputText: string = '';

  constructor(private dataProviderService: DataProviderService) { }

  OnSubmit() {
    this.dataProviderService.raiseThisEmitter(this.inputText);
  }
}
