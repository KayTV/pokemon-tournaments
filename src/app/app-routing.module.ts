import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from './pokedex/pokedex.component';
import { ReferenceComponent } from './references/references.component';
import { PokemonGoComponent } from './pokemon-go/pokemon-go.component';
import { KantoEventComponent } from './pokemon-go/events/kanto-event/kanto-event.component';
import { ShinyMewComponent } from './pokemon-go/events/shiny-mew/shiny-mew.component';
import { MarchMadnessComponent } from './pokemon-go/events/march-madness/march-madness.component';

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
      },
      {
        path: 'shiny-mew',
        component: ShinyMewComponent
      },
      {
        path: 'march-madness',
        component: MarchMadnessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
