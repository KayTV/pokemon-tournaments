import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbActiveModal, NgbModule, NgbNavModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';

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
import { KantoEventConstants } from './constants/kanto-event.constants';
import { ShinyMewComponent } from './pokemon-go/events/shiny-mew/shiny-mew.component';
import { MarchMadnessComponent } from './pokemon-go/events/march-madness/march-madness.component';
import { BackButtonComponent } from './pokemon-go/back-button/back-button.component';
import { TypeaheadInputComponent } from './common/typeahead-input/typeahead-input.component';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    ReferenceComponent,
    PokedexTabsComponent,
    PokedexModalComponent,
    PokemonGoComponent,
    KantoEventComponent,
    ShinyMewComponent,
    MarchMadnessComponent,
    BackButtonComponent,
    TypeaheadInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    JsonPipe,
    NgbTypeaheadModule,
    NgbNavModule
  ],
  providers: [
    PokemonService,
    NgbActiveModal,
    KantoEventConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
