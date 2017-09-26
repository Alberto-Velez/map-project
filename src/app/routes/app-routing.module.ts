import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard.component';
import { HeroesComponent }      from '../heroes.component';
import { DetailComponent }  from '../detail.component';
import { AddspotComponent }  from '../addspot.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'dashboard/:city',  component: DashboardComponent },
  { path: 'spot/:id/:city', component: DetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'addspot',     component: AddspotComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
