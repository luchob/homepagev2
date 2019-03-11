import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutPageComponent} from './about-page/about-page.component';


const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
    data: {
      title: 'Lachezar Balev - About',
      description: 'Looking for some random thoughts from me? This is the part of my personal ' +
        'home page that you should visit.',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
