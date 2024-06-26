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
  error: boolean = false;
  reset: boolean = false;

  constructor(
    private pokemoneService: PokemonService,
    private modalService: NgbModal) { }

  ngOnInit() {
    // todo
  }

  getPokemon() {
    this.pokemoneService.getPokemon(this.searchPokemon).subscribe(pokemon =>{
      if (pokemon) {
        this.pokemon = pokemon;
        delete this.searchPokemon;
        this.reset = true;
        const modalRef = this.modalService.open(PokedexModalComponent);
        modalRef.componentInstance.dexNumber = pokemon.id;
        this.error = false;
      } else {
        this.error = true
      }
    }, (error) => {
      this.error = true
    });
  }

  pokemonChange(poke: string) {
    this.error = false;
    this.reset = false;
    this.searchPokemon = poke;
  }

  closeBanner() {
    this.error = false;
    this.reset = true;
    delete this.searchPokemon;
  }
}
