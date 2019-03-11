import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { QaSectionComponent } from './qa-section/qa-section.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    AboutPageComponent,
    QaSectionComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AboutRoutingModule
  ],
  exports: [
  ]
})
export class AboutModule { }
