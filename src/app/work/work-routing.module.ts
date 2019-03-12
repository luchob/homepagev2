import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkPageComponent } from './work-page/work-page.component';


const routes: Routes = [
  {
    path: '',
    component: WorkPageComponent,
    data: {
      title: 'Lachezar Balev - Work and CV',
      description: 'Are you looking for my CV and do you want to learn more ' +
        'about my work and professional interests? You will most likely find this information here.',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
