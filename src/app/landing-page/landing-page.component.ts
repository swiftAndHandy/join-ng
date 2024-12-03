import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ButtonSymbol } from '../shared/components/button/button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  ButtonSymbol = ButtonSymbol;
  BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon/';

  async readData() {
    let response = await fetch(this.BASE_URL);
    console.log(await response.json());
  }
}
