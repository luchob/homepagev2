import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';
import {MainNavComponent} from './main-nav/main-nav.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ MainNavComponent, PageNotFoundComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [ MainNavComponent, PageNotFoundComponent  ]
})
export class MainModule { }
