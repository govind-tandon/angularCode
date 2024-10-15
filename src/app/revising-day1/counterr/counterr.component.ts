import { Component } from '@angular/core';

@Component({
  selector: 'app-counterr',
  templateUrl: './counterr.component.html',
  styleUrls: ['./counterr.component.css']
})
export class CounterrComponent{
  title = "Day1 : 14 october, topic :counter";
  count = 0;
  
  counter(type:string){
    console.log("value is displayed on screen");
    type === "add" ? this.count++ : this.count--;
  }
}
