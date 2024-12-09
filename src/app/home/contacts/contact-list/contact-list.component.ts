import { Component } from '@angular/core';
import {
  ButtonComponent,
  ButtonSymbol,
} from '../../../shared/components/button/button.component';

@Component({
  selector: 'contact-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
  ButtonSymbol = ButtonSymbol;
}
