import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent{
  title = "Topic: For Loop";
  names = ["Govind", "Omu", "Atharv"];
  customerDetails =[ 
    {name:"Govind Tandon", email:"govindtandon00@gmail.com", mobileNumber:8874121213},
    {name:"Om Tandon", email:"omutandon00@gmail.com", mobileNumber:9012121213},
    {name:"Atharv Seth", email:"sethatharv90@gmail.com", mobileNumber:883981213},
  ];
}
