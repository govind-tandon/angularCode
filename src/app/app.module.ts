import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { InlineStylingTemplateModule } from './inline-styling-template/inline-styling-template.module';
import { PipeTaskModule } from './pipe-task/pipe-task.module';
import { MakeAndCallComponentComponent } from './make-and-call-component/make-and-call-component.component';
import { SwitchComponent } from './switch/switch.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { RevisingDay1Module } from './revising-day1/revising-day1.module';
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    MakeAndCallComponentComponent,
    SwitchComponent,
    ForLoopComponent,
    StyleBindingComponent,
  ],
  imports: [
    BrowserModule,
    InlineStylingTemplateModule,
    PipeTaskModule,
    RevisingDay1Module,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
