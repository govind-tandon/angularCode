import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent{
  title = "Day7, 8th october, topic: style binding";
  color="white";
  bgColor="black";

  updateColor(){
    this.color="red";
  }
}
