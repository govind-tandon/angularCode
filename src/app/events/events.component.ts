import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent  {
    title = "Day5, 3october. Topic:-Events";
    getData(val:string){
      console.warn(val);
    }
}
