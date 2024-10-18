import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterrComponent } from './counterr/counterr.component';
import { EventsComponent } from './events/events.component';
import { GetInputBoxValueComponent } from './get-input-box-value/get-input-box-value.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { IfElseComponent } from './if-else/if-else.component';
import { TrialComponent } from './trial/trial.component';
import { MultipleIfElseComponent } from './multiple-if-else/multiple-if-else.component';
import { SwitchComponent } from './switch/switch.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { NestedLoopComponent } from './nested-loop/nested-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    CounterrComponent,
    EventsComponent,
    GetInputBoxValueComponent,
    PropertyBindingComponent,
    IfElseComponent,
    TrialComponent,
    MultipleIfElseComponent,
    SwitchComponent,
    ForLoopComponent,
    NestedLoopComponent,
    StyleBindingComponent,
    HeaderComponent
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
    SwitchComponent,
    ForLoopComponent,
    NestedLoopComponent,
    StyleBindingComponent,
    HeaderComponent,
  ]
})
export class RevisingDay1Module { }
