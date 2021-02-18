import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ReferenceComponent } from './references/references.component';
import { PokedexTabsComponent } from './pokedex/pokedex-regions/pokedex-regions.component';

import { PokemonService } from './services/pokemon.service';
import { PokedexModalComponent } from './pokedex/pokedex-modal/pokedex-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokemonGoComponent } from './pokemon-go/pokemon-go.component';
import { KantoEventComponent } from './pokemon-go/events/kanto-event/kanto-event.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    ReferenceComponent,
    PokedexTabsComponent,
    PokedexModalComponent,
    PokemonGoComponent,
    KantoEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    PokemonService,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
