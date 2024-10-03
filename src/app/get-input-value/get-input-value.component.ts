import { Component } from '@angular/core';

@Component({
  selector: 'app-get-input-value',
  templateUrl: './get-input-value.component.html',
  styleUrls: ['./get-input-value.component.css']
})
export class GetInputValueComponent {
  title:string = "Day5, Topic : Get Input Value";
  displayVal = '';
  getValue(val:string){
    // console.warn("coming from getValue");
    console.warn(val);
    this.displayVal = val;
  }
}
