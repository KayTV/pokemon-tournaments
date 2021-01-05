import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokedexPokemon } from '../models/pokemon.model';

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

  constructor(private pokemoneService: PokemonService) { }

  ngOnInit() {
    this.getGenOnePokemon();
  }

  getPokemon() {
    this.pokemoneService.getPokemon(this.searchPokemon).subscribe(pokemon =>{
      this.pokemon = pokemon;
      this.searchPokemon = '';
      console.log(pokemon);
    })
  }

  getGenOnePokemon() {
    this.genOnePokemon = this.pokemoneService.genOneTest();
    console.log(this.genOnePokemon);
  }



}
