import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokedexPokemon } from '../models/pokemon.model';
import { PokedexModalComponent } from './pokedex-modal/pokedex-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.html',
  styleUrls: ['./pokedex.less']
})
export class PokedexComponent implements OnInit {
  title: string = 'Pokedex';
  searchPokemon: string;
  pokemon: Pokemon;
  genOnePokemon: PokedexPokemon[];

  constructor(
    private pokemoneService: PokemonService,
    private modalService: NgbModal) { }

  ngOnInit() {
    // todo
  }

  getPokemon() {
    this.pokemoneService.getPokemon(this.searchPokemon).subscribe(pokemon =>{
      this.pokemon = pokemon;
      this.searchPokemon = '';
      const modalRef = this.modalService.open(PokedexModalComponent);
      modalRef.componentInstance.dexNumber = pokemon.id;
    })
  }
}
