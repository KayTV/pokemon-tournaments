import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon, Pokedex, PokedexPokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private spriteUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

constructor(private http: HttpClient) { }

  getPokemon(searchPokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + searchPokemon);
  }

  getGenOnePokemon(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.baseUrl + '?limit=151&offset=0')
  }

  genOneTest(): PokedexPokemon[] {
    let genOnePokemon: PokedexPokemon[] = [];
    this.getGenOnePokemon().subscribe(dex => {
      dex.results.forEach((pokemon, index) => {
        const id = index + 1;
        let poke: PokedexPokemon = {
          name: pokemon.name,
          sprite: this.spriteUrl + id + '.png',
          id: id
        }
        genOnePokemon.push(poke);
      })
    });
    return genOnePokemon;
  }
}
