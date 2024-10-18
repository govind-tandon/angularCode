import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basic-forms.component.html',
  styleUrl: './basic-forms.component.css'
})
export class BasicFormsComponent {
  title = "Topic: basic forms"
  userData:any={};

  getData(data:NgForm){
    console.log(data);
    this.userData=data;
  }
}
