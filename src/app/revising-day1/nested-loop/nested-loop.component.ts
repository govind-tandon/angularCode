import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.css']
})
export class NestedLoopComponent{
  title = "Topic: nested loop";
  items = [
    {
      "name":"Govind Tandon",
      "emailId":"anujtandon2016@gmail.com",
      "socialMediaAccount":['facebook', "insta", "whatsapp"],

    },

    {
      "name":"Om Tandon",
      "emailId":"omutandon006@gmail.com",
      "contactNumber":8299192531,
      "Profile":"Backend developer",
      "socialMediaAccount":['whatsapp', "insta", "snapchat", "twitter"],
    },

    {
      "name":"Atharv Seth",
      "emailId":"anujtandon2016@gmail.com",
      "contactNumber":8299128341,
      "Profile":"Frontend developer",
      "socialMediaAccount":["---Ghost---"],
    },
  ]
}
