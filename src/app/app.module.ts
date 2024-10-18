import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { InlineStylingTemplateModule } from './inline-styling-template/inline-styling-template.module';
import { PipeTaskModule } from './pipe-task/pipe-task.module';
import { MakeAndCallComponentComponent } from './make-and-call-component/make-and-call-component.component';
import { RevisingDay1Module } from './revising-day1/revising-day1.module';
import { FormsModule } from '@angular/forms';
// import { RevisingPart2Module } from './revising-part2/revising-part2.module';
import { BasicFormsComponent } from "./revising-part2/basic-forms/basic-forms.component";

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    MakeAndCallComponentComponent,
  ],
  imports: [
    BrowserModule,
    InlineStylingTemplateModule,
    PipeTaskModule,
    RevisingDay1Module,
    FormsModule,
    // RevisingPart2Module,
    BasicFormsComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
