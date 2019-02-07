import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentsComponent } from './tournaments/tournaments.component';
import { RanksComponent } from './ranks/ranks.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentsComponent
  },
  {
    path: 'ranks',
    component: RanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
