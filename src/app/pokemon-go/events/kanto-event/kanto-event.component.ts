import { Component, OnInit } from '@angular/core';
import { KantoEventConstants } from 'src/app/constants/kanto-event.constants';
import { PokedexPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'kanto-event',
  templateUrl: './kanto-event.html',
  styleUrls: ['../../pokemon-go.less']
})
export class KantoEventComponent implements OnInit {
  title = 'Kanto Event';
  pokemonIndexs: number[] = [];
  genOnePokemon: PokedexPokemon[] = [];
  kantoNeedPokemon: PokedexPokemon[] = [];
  private spriteUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(
      public kantoConstants: KantoEventConstants,
      private pokemoneService: PokemonService) {}

  ngOnInit() {
    this.pokemonIndexs = this.kantoConstants.pokemonIndexOfNeeded;
    this.pokemoneService.getRegionPokemonServiceCall(0, 151).subscribe((dex) => {
        dex.results.forEach((pokemon) => {
            const id: string = pokemon.url.split('/')[6];
            let poke: PokedexPokemon = {
              name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
              sprite: this.spriteUrl + id + '.png',
              id: Number(id)
            }
            this.genOnePokemon.push(poke);
          });
        this.getKantoNeedPokemon();
    });    
  }

  getKantoNeedPokemon() {
    this.pokemonIndexs.forEach((index) => {
        const pokemon = this.genOnePokemon.find(poke => poke.id === index);
        if (pokemon) {
            this.kantoNeedPokemon.push(pokemon);
        }
    });
  }

}