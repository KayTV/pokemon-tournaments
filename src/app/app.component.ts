import { Component } from '@angular/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Pokemon Tournaments';
  faGithub = faGithub;
  faTwitter = faTwitter;
}
