import { NgModule } from '@angular/core';
import {WorkPageComponent} from './work-page/work-page.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    WorkPageComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [WorkPageComponent]
})
export class WorkModule { }
