import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { InlineStylingTemplateModule } from './inline-styling-template/inline-styling-template.module';
import { PipeTaskModule } from './pipe-task/pipe-task.module';
import { MakeAndCallComponentComponent } from './make-and-call-component/make-and-call-component.component';
import { EventsComponent } from './events/events.component';
import { GetInputValueComponent } from './get-input-value/get-input-value.component';
import { CounterComponent } from './counter/counter.component';
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    MakeAndCallComponentComponent,
    EventsComponent,
    GetInputValueComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    InlineStylingTemplateModule,
    PipeTaskModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
