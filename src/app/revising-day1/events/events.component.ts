import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  title = 'topic :events';

  getData(value:string){
    console.warn("Function called:", value);
  }
}
