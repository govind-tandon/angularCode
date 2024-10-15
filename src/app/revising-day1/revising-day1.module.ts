import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterrComponent } from './counterr/counterr.component';
import { EventsComponent } from './events/events.component';
import { GetInputBoxValueComponent } from './get-input-box-value/get-input-box-value.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { IfElseComponent } from './if-else/if-else.component';
import { TrialComponent } from './trial/trial.component';
import { MultipleIfElseComponent } from './multiple-if-else/multiple-if-else.component';

@NgModule({
  declarations: [
    CounterrComponent,
    EventsComponent,
    GetInputBoxValueComponent,
    PropertyBindingComponent,
    IfElseComponent,
    TrialComponent,
    MultipleIfElseComponent
  ],
  imports: [
    CommonModule
  ],

  exports :[
    CounterrComponent,
    EventsComponent,
    GetInputBoxValueComponent,
    PropertyBindingComponent,
    IfElseComponent,
    TrialComponent,
    MultipleIfElseComponent,
  ]
})
export class RevisingDay1Module { }
