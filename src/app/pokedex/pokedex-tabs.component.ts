import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-tabs',
  templateUrl: './pokedex-tabs.component.html',
  styleUrls: [ '../app.component.css' ]
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
