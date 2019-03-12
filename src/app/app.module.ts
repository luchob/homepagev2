import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkModule } from './work/work.module';
import { WhereaboutsModule } from './whereabouts/whereabouts.module';
import { HomeModule } from './home/home.module';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    HomeModule,
    WorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
