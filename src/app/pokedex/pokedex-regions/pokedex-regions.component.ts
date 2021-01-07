import { Component, OnInit } from '@angular/core';
import { Pokedex, PokedexPokemon } from 'src/app/models/pokemon.model';
import { Region } from 'src/app/models/regions.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokedex-regions',
  templateUrl: './pokedex-regions.component.html'
})

export class PokedexTabsComponent implements OnInit {
  name = 'Pokedex';
  regions: Region[] = [];
  genOnePokemon: PokedexPokemon[];

  constructor(private pokemoneService: PokemonService) { }

  ngOnInit() {
    this.pokemoneService.getRegions().subscribe((regions) => {
      this.regions = regions;
    });

  }

  getRegionPokemon(region: Region) {
    this.genOnePokemon = this.pokemoneService.getRegionPokemon(region.startId, region.endId);
  }

}
