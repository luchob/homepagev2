import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Lachezar Balev - Homepage',
      description: 'Looking for information about me - Lachezar Balev? ' +
        'Then you are welcome on my homepage! CV, personal information and more.',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
