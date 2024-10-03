import { Component} from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  // template: "<p>The hero's birthday is {{ birthday | date }} </p>",
  template:`
  <p>The hero's birthday is {{birthday | date:format }}</p>
  <button type="button" (click)="toggleFormat()">Toggle Format</button>
  `,
  styleUrls: ['./hero-birthday.component.css']
})
export class HeroBirthdayComponent{
  birthday = new Date(2024,9,1) ;  //October 1,2024 --since month paramter is zero-based.
  toggle = true;

  get format() { return this.toggle ? 'shortDate' : 'fullDate'}
  toggleFormat() { this.toggle =! this.toggle; }
}
