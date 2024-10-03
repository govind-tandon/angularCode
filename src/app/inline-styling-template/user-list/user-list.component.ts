import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `.colorr{ 
      color:blue;
      background-color:black;
      border:2px solid orange;
      font-weight:700px;
      font-size:20px;
      padding:10px;
      height:30px;
      width:20%;
      text-align:center;
      margin-left:35%
      }`
  ]
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
