import { NgModule } from '@angular/core';
import { WorkPageComponent } from './work-page/work-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { WorkRoutingModule } from './work-routing.module';

@NgModule({
  declarations: [
    WorkPageComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    WorkRoutingModule
  ],
  exports: [WorkPageComponent]
})
export class WorkModule { }
