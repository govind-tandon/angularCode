import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent{
  title = "Topic: style-binding";
  color="white";
  bgColor="black";

  updateColor(){
    this.color="pink";
    this.bgColor="black"
  }
}
