import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home/home-page/home-page.component';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';
import {AboutPageComponent} from './about/about-page/about-page.component';
import {WorkPageComponent} from './work/work-page/work-page.component';
import {WhereaboutsPageComponent} from './whereabouts/whereabouts-page/whereabouts-page.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
    data: {
      title: 'Lachezar Balev - Homepage',
      description: 'Looking for information about me - Lachezar Balev? ' +
        'Then you are welcome on my homepage! CV, personal information and more.',
    }
  },
  {
    path: 'work',
    component: WorkPageComponent,
    pathMatch: 'full',
    data: {
      title: 'Lachezar Balev - Work and CV',
      description: 'Are you looking for my CV and do you want to learn more ' +
        'about my work and professional interests? You will most likely find this information here.',
    }
  },
  {
    path: 'whereabouts',
    pathMatch: 'full',
    loadChildren: './whereabouts/whereabouts.module#WhereaboutsModule'
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: 'Page not found',
      description: 'Ups... The page was not found...',
    }}
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
