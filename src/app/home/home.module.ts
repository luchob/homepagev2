import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    HomePageComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
