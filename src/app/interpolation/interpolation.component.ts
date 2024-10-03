import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  title = "Govind Tandon";
  data = "Angular developer";

  getValue(){
    return "I am trying it again";
  }
  
  constructor() { }
  ngOnInit(): void {
  }

}
