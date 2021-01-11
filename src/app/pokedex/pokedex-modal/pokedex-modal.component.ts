import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokedexPokemon } from '../../models/pokemon.model';

@Component({
  selector: 'pokedex-modal',
  templateUrl: './pokedex-modal.html',
  styleUrls: ['../pokedex.less']
})
export class PokedexModalComponent implements OnInit {
  searchPokemon: string;
  pokemon: Pokemon;
  genOnePokemon: PokedexPokemon[];

  closeResult: string;

  constructor(
      private pokemoneService: PokemonService,
      private modalService: NgbModal) { }

  ngOnInit() {
    // todo
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getPokemon() {
    this.pokemoneService.getPokemon(this.searchPokemon).subscribe(pokemon =>{
      this.pokemon = pokemon;
      this.searchPokemon = '';
      console.log(pokemon);
    })
  }
}
