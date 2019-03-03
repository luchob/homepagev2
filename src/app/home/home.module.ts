import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ProfileCardComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
