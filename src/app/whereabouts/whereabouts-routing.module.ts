import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhereaboutsPageComponent } from './whereabouts-page/whereabouts-page.component';


const routes: Routes = [
  {
    path: '',
    component: WhereaboutsPageComponent,
    data: {
      title: 'Lachezar Balev - Contact',
      description: 'Do you want to contact me somehow or you want to check my presence ' +
        'on the Internet? This page contains contact information.',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhereaboutsRoutingModule { }
