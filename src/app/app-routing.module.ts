import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from './pokedex/pokedex.component';
import { RanksComponent } from './references/references.component';
import { PokedexTabsComponent } from './pokedex/pokedex-regions/pokedex-regions.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: 'ranks',
    component: RanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
