import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokedexPokemon } from '../models/pokemon.model';
import { PokedexModalComponent } from './pokedex-modal/pokedex-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  error: boolean = false;

  constructor(
    private pokemoneService: PokemonService,
    private modalService: NgbModal) { }

  ngOnInit() {
    // todo
  }

  getPokemon() {
    this.pokemoneService.getPokemon(this.searchPokemon).subscribe(pokemon =>{
      if (pokemon) {
        this.pokemon = pokemon;
        this.searchPokemon = '';
        const modalRef = this.modalService.open(PokedexModalComponent);
        modalRef.componentInstance.dexNumber = pokemon.id;
        this.error = false;
      } else {
        this.error = true
      }
    }, (error) => {
      this.error = true
    });
  }

  closeBanner() {
    this.error = false;
    this.searchPokemon = '';
  }
}
