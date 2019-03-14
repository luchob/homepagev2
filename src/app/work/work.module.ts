import { NgModule } from '@angular/core';
import { WorkPageComponent } from './work-page/work-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkRoutingModule } from './work-routing.module';
import {MatCardModule, MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [
    WorkPageComponent
  ],
  imports: [
    FlexLayoutModule,
    WorkRoutingModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [WorkPageComponent]
})
export class WorkModule { }
