import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get(this.baseUrl + 'ditto');
  }
}
