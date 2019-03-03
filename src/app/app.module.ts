import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './home/profile-card/profile-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {WorkModule} from './work/work.module';
import {AboutModule} from './about/about.module';
import {WhereaboutsModule} from './whereabouts/whereabouts.module';
import {HomeModule} from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    HomeModule,
    WorkModule,
    WhereaboutsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
