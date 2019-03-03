import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';
import {WhereaboutsPageComponent} from './whereabouts-page/whereabouts-page.component';

@NgModule({
  declarations: [
    WhereaboutsPageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [WhereaboutsPageComponent]
})
export class WhereaboutsModule { }
