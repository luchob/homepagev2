import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {WorkPageComponent} from './work-page/work-page.component';
import {WhereaboutsPageComponent} from './whereabouts-page/whereabouts-page.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'work',
    component: WorkPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'whereabouts',
    component: WhereaboutsPageComponent,
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
