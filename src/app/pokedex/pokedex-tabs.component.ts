import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-tabs',
  templateUrl: './pokedex-tabs.component.html'
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
