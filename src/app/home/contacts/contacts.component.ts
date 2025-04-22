import {Component, computed, effect, inject} from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {EditContactComponent} from "./edit-contact/edit-contact.component";
import {ContactMenuService} from "./contact-menu.service";
import {NgClass} from "@angular/common";
import {ContactsService} from "../../shared/services/backend/contacts.service";

@Component({
  selector: 'contacts-view',
  standalone: true,
  imports: [ContactListComponent, ContactDetailsComponent, EditContactComponent, NgClass],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {

  contactsService = inject(ContactsService);
  contactsMenu = inject(ContactMenuService)

  detailsDisplayed = computed<boolean>(() => {
    return !!this.contactsService.contactDetails();
  });

  constructor() {
  }

  ngOnDestroy() {
    this.contactsMenu.hidePopup();
    this.contactsService.destroy();
  }

}
