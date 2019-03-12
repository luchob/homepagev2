import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { WhereaboutsPageComponent } from './whereabouts-page/whereabouts-page.component';
import { WhereaboutsRoutingModule } from './whereabouts-routing.module';

@NgModule({
  declarations: [
    WhereaboutsPageComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    WhereaboutsRoutingModule
  ],
  exports: [WhereaboutsPageComponent]
})
export class WhereaboutsModule { }
