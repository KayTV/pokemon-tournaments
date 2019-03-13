import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokedexPokemon } from '../models/pokemon.model';

@Component({
  selector: 'tournaments',
  templateUrl: './tournaments.html',
  styleUrls: ['./tournaments.less']
})
export class TournamentsComponent implements OnInit {
  title = 'Tournaments';
  pokemon: Pokemon;
  genOnePokemon: PokedexPokemon[];

  constructor(private pokemoneService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
    this.getGenOnePokemon();
  }

  getPokemon() {
    this.pokemoneService.getPokemon('ditto').subscribe(pokemon =>{
      this.pokemon = pokemon;
      console.log(pokemon);
    })
  }

  getGenOnePokemon() {
    this.genOnePokemon = this.pokemoneService.genOneTest();
  }



}
