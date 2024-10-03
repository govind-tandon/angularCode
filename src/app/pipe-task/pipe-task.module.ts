import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe/pipe.component';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';

@NgModule({
  declarations: [
    PipeComponent,
    HeroBirthdayComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    PipeComponent,
    HeroBirthdayComponent
  ]
})
export class PipeTaskModule { }
