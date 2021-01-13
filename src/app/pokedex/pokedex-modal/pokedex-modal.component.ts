import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'pokedex-modal',
  templateUrl: './pokedex-modal.html',
  styleUrls: ['../pokedex.less']
})
export class PokedexModalComponent implements OnInit {
    @Input() set dexNumber(dex: string) {
        if (dex) {
            this.getPokemon(dex);
        }
    }
    pokemon: Pokemon;

    constructor(
        public activeModal: NgbActiveModal,
        private pokemoneService: PokemonService) { }

    ngOnInit() {
    // todo
    }

    getPokemon(dexNumber: string) {
    this.pokemoneService.getPokemon(dexNumber).subscribe(pokemon =>{
        this.pokemon = pokemon;
        this.pokemon.name = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
        console.log(pokemon);
    })
    }
}
