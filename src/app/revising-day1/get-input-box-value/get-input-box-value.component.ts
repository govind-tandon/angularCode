import { Component } from '@angular/core';

@Component({
  selector: 'app-get-input-box-value',
  templateUrl: './get-input-box-value.component.html',
  styleUrls: ['./get-input-box-value.component.css']
})
export class GetInputBoxValueComponent{
  title = "Topic: Get Input Box Value";

  displayValue:string = '';
  getData(value:string){
    console.log(value);

    this.displayValue = value
  }
}
