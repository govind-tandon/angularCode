import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
birthday = new Date(2024,9,1) ;  //October 1,2024 --since month paramter is zero-based.
// amount = new

  constructor() { }

  ngOnInit(): void {
  }

}
