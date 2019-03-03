import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { WhereaboutsPageComponent } from './whereabouts-page/whereabouts-page.component';

@NgModule({
  declarations: [
    WhereaboutsPageComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [WhereaboutsPageComponent]
})
export class WhereaboutsModule { }
