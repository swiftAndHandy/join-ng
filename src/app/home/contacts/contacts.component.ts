import { Component } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {EditContactComponent} from "./edit-contact/edit-contact.component";
import {ContactService} from "./contact.service";

@Component({
  selector: 'contacts-view',
  standalone: true,
  imports: [ContactListComponent, ContactDetailsComponent, EditContactComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {

  constructor(public contactService: ContactService) {}

}
