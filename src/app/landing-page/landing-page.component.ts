import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
