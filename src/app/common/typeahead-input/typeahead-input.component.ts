import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'typeahead-input',
  templateUrl: './typeahead-input.html',
  styleUrls: ['./typeahead-input.less']
})
export class TypeaheadInputComponent implements OnInit {
    @Output() newSearchPokemon = new EventEmitter<any>();
    @Input() set reset(resetNeeded: boolean) {
        if (resetNeeded) {
            delete this.searchPokemon;
        }
    }
    searchPokemon: any;
    pokemon: string[] = [];

    constructor(
    private pokemoneService: PokemonService) { }

    ngOnInit(): void {
        this.pokemon = this.pokemoneService.getAllPokemon(); 
    }

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.pokemon.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

    pokemonChange(): void {
        this.newSearchPokemon.emit(this.searchPokemon);
    }


}

