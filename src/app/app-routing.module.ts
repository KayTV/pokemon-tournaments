import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from './pokedex/pokedex.component';
import { ReferenceComponent } from './references/references.component';
import { PokemonGoComponent } from './pokemon-go/pokemon-go.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: 'references',
    component: ReferenceComponent
  },
  {
    path: 'pokemongo',
    component: PokemonGoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
