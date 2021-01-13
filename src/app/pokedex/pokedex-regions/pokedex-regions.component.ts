import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokedex, PokedexPokemon } from 'src/app/models/pokemon.model';
import { Region } from 'src/app/models/regions.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokedexModalComponent } from '../pokedex-modal/pokedex-modal.component';

@Component({
  selector: 'pokedex-regions',
  templateUrl: './pokedex-regions.component.html',
  styleUrls: ['../pokedex.less']
})

export class PokedexTabsComponent implements OnInit {
  name = 'Pokedex';
  regions: Region[] = [];
  genOnePokemon: PokedexPokemon[];

  constructor(
    private pokemoneService: PokemonService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.pokemoneService.getRegions().subscribe((regions) => {
      this.regions = regions;
    });

  }

  getRegionPokemon(region: Region) {
    this.genOnePokemon = this.pokemoneService.getRegionPokemon(region.startId, region.endId);
  }

  openDetailsModal(pokemon: string) {
    console.log(pokemon);
    const modalRef = this.modalService.open(PokedexModalComponent);
    modalRef.componentInstance.dexNumber = pokemon;
  }

}
