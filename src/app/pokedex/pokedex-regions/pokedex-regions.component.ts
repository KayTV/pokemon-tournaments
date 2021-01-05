import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-regions',
  templateUrl: './pokedex-regions.component.html'
})

export class PokedexTabsComponent  {
  name = 'Pokedex';
  regions = [
    {
      name: 'Kanto'
    },
    {
      name: 'Jhoto'
    },
    {
      name: 'Hoenn'
    }
  ]
}
