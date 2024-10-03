import { Component } from '@angular/core';

@Component({
  selector: 'app-make-and-call-component',
  templateUrl: './make-and-call-component.component.html',
  styleUrls: ['./make-and-call-component.component.css']
})
export class MakeAndCallComponentComponent{
  title = "Day 3, 3 october";
  data = "Govind Tandon";
  number = 299;
  getVal(firstName:string, secondName:string){
    alert("you 've clicked on getVal()"); 
    alert('first name is ' + firstName);
    alert('second name is ' + secondName);
  }

  getNum(){
    alert("you 've clicked on getNum(");
  }
}
