import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from './pokedex/pokedex.component';
import { ReferenceComponent } from './references/references.component';
import { PokemonGoComponent } from './pokemon-go/pokemon-go.component';
import { KantoEventComponent } from './pokemon-go/events/kanto-event/kanto-event.component';

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
    children: [
      {
        path: '',
        component: PokemonGoComponent
      },
      {
        path: 'kanto-event',
        component: KantoEventComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
