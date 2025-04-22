import { Component, inject } from '@angular/core';
import { SingleContactComponent } from './single-contact/single-contact.component';
import {ContactsService} from "../../../shared/services/backend/contacts.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'contact-details',
  standalone: true,
  imports: [SingleContactComponent, NgClass],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent {
  protected contacts = inject(ContactsService);

  closeContactDetails() {
    this.contacts.deselectContact();
  }
}
