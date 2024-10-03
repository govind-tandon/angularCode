import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  template: `
    <!-- <p class="colorr">
      Day2: its from inlne-template
    </p> -->

  <!-- hello Atharv Seth -->
   <h1>hello {{customer}}</h1>

  <ul>
    <!-- Govind and omu in a list -->
      <li *ngFor = "let customer of customers">{{customer.value}}</li>
  </ul>
  `,
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  customers = [ {'value':'Govind'}, {'value':'Omu'} ];
  customer = 'Atharv Seth';

  constructor() { }

  ngOnInit(): void {
  }

}
