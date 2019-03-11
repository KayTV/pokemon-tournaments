import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'tournaments',
  templateUrl: './tournaments.html'
})
export class TournamentsComponent implements OnInit {
  title = 'Tournaments';
  pokemon: Pokemon;

  constructor(private pokemoneService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemoneService.getPokemon('ditto').subscribe(pokemon =>{
      this.pokemon = pokemon;
      console.log(pokemon);
    })
  }
}
