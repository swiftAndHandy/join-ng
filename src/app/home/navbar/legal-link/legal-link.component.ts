import {Component, input, Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'legal-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './legal-link.component.html',
  styleUrl: './legal-link.component.scss',
})
export class LegalLinkComponent {
  target = input<string>('', {alias: 'to'});
}
