import { Component } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {EditContactComponent} from "./edit-contact/edit-contact.component";
import {ContactMenuService} from "./contact-menu.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'contacts-view',
  standalone: true,
  imports: [ContactListComponent, ContactDetailsComponent, EditContactComponent, NgClass],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {

  constructor(public contactService: ContactMenuService) {}

  ngOnDestroy() {
    this.contactService.hidePopup();
  }

}
