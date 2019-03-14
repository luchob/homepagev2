import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WhereaboutsPageComponent } from './whereabouts-page/whereabouts-page.component';
import { WhereaboutsRoutingModule } from './whereabouts-routing.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    WhereaboutsPageComponent
  ],
  imports: [
    FlexLayoutModule,
    MatCardModule,
    WhereaboutsRoutingModule
  ],
  exports: [WhereaboutsPageComponent]
})
export class WhereaboutsModule { }
