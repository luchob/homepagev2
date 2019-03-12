import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    pathMatch: 'full',
  },
  {
    path: 'work',
    pathMatch: 'full',
    loadChildren: './work/work.module#WorkModule'
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
  }
  ,
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
