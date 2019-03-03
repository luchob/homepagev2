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
import { AboutPageComponent } from './about/about-page/about-page.component';
import { WorkPageComponent } from './work/work-page/work-page.component';
import { WhereaboutsPageComponent } from './whereabouts/whereabouts-page/whereabouts-page.component';
import { QaSectionComponent } from './about/qa-section/qa-section.component';
import {WorkModule} from './work/work.module';
import {AboutModule} from './about/about.module';
import {WhereaboutsModule} from './whereabouts/whereabouts.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    MainNavComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    WorkModule,
    WhereaboutsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
