import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';
import {MainNavComponent} from './main-nav/main-nav.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [ MainNavComponent, PageNotFoundComponent ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [ MainNavComponent, PageNotFoundComponent  ]
})
export class MainModule { }
