import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.css']
})
export class NestedLoopComponent{
  title = "Day"
  customerDetails = [
    {name:'Govind', email:'govindtandon00@gmail.com', mobileNumber:'987456565656'},
    {name:'Achyut', email:'achyutraghuvanshi@gmail.com', mobileNumber:'987456212121'},
    {name:'Vikas', email:'ranavikas00@gmail.com', mobileNumber:'786591565656'},
    {name:'Anjali', email:'jalian9111@gmail.com', mobileNumber:'987458724656'},
  ]
}
