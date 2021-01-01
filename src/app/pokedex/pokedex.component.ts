import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokedexPokemon } from '../models/pokemon.model';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.html',
  styleUrls: ['./pokedex.less']
})
export class PokedexComponent implements OnInit {
  title = 'Pokedex';
  searchPokemon: string;
  pokemon: Pokemon;
  genOnePokemon: PokedexPokemon[];

  constructor(private pokemoneService: PokemonService) { }

  ngOnInit() {
    // this.getPokemon();
    this.getGenOnePokemon();
  }

  getPokemon() {
    this.pokemoneService.getPokemon(this.searchPokemon).subscribe(pokemon =>{
      this.pokemon = pokemon;
      console.log(pokemon);
    })
  }

  getGenOnePokemon() {
    this.genOnePokemon = this.pokemoneService.genOneTest();
  }



}
