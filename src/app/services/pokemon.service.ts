import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

constructor(private http: HttpClient) { }

  getPokemon(searchPokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + searchPokemon);
  }
}
