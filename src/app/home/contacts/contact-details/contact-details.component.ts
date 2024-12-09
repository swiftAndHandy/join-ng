import { Component } from '@angular/core';
import { SingleContactComponent } from './single-contact/single-contact.component';

@Component({
  selector: 'contact-details',
  standalone: true,
  imports: [SingleContactComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent {}
