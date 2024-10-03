import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent{
  title = "Topic: Counter";

  count = 0;

  counter(type:string){
    console.log('counter value is displayed');
    type === 'add' ? this.count++ : this.count--;
  }
}
