import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AboutPageComponent } from './about-page/about-page.component';
import { WorkPageComponent } from './work/work-page/work-page.component';
import { WhereaboutsPageComponent } from './whereabouts-page/whereabouts-page.component';
import { QaSectionComponent } from './qa-section/qa-section.component';
import {WorkModule} from './work/work.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    WhereaboutsPageComponent,
    PageNotFoundComponent,
    MainNavComponent,
    ProfileCardComponent,
    AboutPageComponent,
    WhereaboutsPageComponent,
    QaSectionComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    WorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
