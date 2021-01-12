import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokedexPokemon } from '../../models/pokemon.model';

@Component({
  selector: 'pokedex-modal',
  templateUrl: './pokedex-modal.html',
  styleUrls: ['../pokedex.less']
})
export class PokedexModalComponent implements OnInit {
  searchPokemon: string;
  pokemon: Pokemon;
  genOnePokemon: PokedexPokemon[];

  closeResult: string;

  constructor(
        public activeModal: NgbActiveModal,
        private pokemoneService: PokemonService) { }

  ngOnInit() {
    // todo
  }

  getPokemon() {
    this.pokemoneService.getPokemon(this.searchPokemon).subscribe(pokemon =>{
      this.pokemon = pokemon;
      this.searchPokemon = '';
      console.log(pokemon);
    })
  }
}
