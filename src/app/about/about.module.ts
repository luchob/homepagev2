import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QaSectionComponent } from './qa-section/qa-section.component';
import { AboutRoutingModule } from './about-routing.module';
import { MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AboutPageComponent,
    QaSectionComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AboutRoutingModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
  ]
})
export class AboutModule { }
