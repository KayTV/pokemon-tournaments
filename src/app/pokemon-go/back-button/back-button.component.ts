import { Component } from '@angular/core';

@Component({
  selector: 'back-button',
  template: `
    <div class="col-md-3 back-button">
        <button type="button" class="btn btn-link" routerLink="/pokemongo">< Back to Pokemon Go</button>
    </div>
  `,
  styleUrls: ['../pokemon-go.less']
})
export class BackButtonComponent {


}