import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Pokemon, Pokedex, PokedexPokemon, PokedexResult } from '../models/pokemon.model';
import { Region } from '../models/regions.model';

@Injectable()
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private spriteUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

constructor(private http: HttpClient) { }

  getPokemon(searchPokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + searchPokemon);
  }

  getAllPokemon(): string[] {
    let allPokemon: string[] = [];
    this.getRegionPokemonServiceCall(0, 1008).subscribe(pokemon => {
      if (pokemon && pokemon.results.length > 0) {
        pokemon.results.forEach((poke) => {
          allPokemon.push(poke.name);
        });
      }
    });
    return allPokemon;
  }

  getGenOnePokemon(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.baseUrl + '?limit=151&offset=0');
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>('assets/json/regions.json');
  }

  getRegionPokemonServiceCall(startId: number, endId: number): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.baseUrl + '?limit='+ endId + '&offset=' + startId);
  }

  getRegionPokemon(startId: number, endId: number): PokedexPokemon[] {
    let genOnePokemon: PokedexPokemon[] = [];
    this.getRegionPokemonServiceCall(startId, endId).subscribe(dex => {
      dex.results.forEach((pokemon) => {
        const id: string = pokemon.url.split('/')[6];
        let poke: PokedexPokemon = {
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          sprite: this.spriteUrl + id + '.png',
          id: Number(id)
        }
        genOnePokemon.push(poke);
      })
    });
    return genOnePokemon;
  }
}
