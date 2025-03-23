import {Component, inject, signal, WritableSignal} from '@angular/core';
import {ContactMenuService} from "../contact-menu.service";
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {ContactsService} from "../../../shared/services/backend/contacts.service";

interface Address {
  street: string;
  zipCode: string;
  city: string;
}

interface ContactFormFields {
  firstName: string;
  surname: string;
  address: Address;
  email: string;
  phone: string;
}

@Component({
  selector: 'edit-contact',
  standalone: true,
  imports: [
    JoinButtonDirective
  ],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss',
})
export class EditContactComponent {

  public contactMenu = inject(ContactMenuService)
  public signalService = inject(InputSignalService)
  private contacts = inject(ContactsService);

  contactFormFields: WritableSignal<ContactFormFields> = signal({
    firstName: '',
    surname: '',
    address: {
      street: '',
      zipCode: '',
      city: '',
    },
    email: '',
    phone: ''
  });

  sendForm() {
    if(this.contactMenu.createModus()) {
      this.createContact();
    } else {
      this.editContact();
    }
  }

  async ngOnInit() {
    if(this.contactMenu.editModus()) {
      // this.contactFormFields.set()
      console.table(this.contacts.contactDetails())
    }
  }

  async createContact() {
    const request = {
      first_name: this.contactFormFields().firstName,
      surname: this.contactFormFields().surname,
      street: this.contactFormFields().address.street,
      zip_code: this.contactFormFields().address.zipCode,
      city: this.contactFormFields().address.city,
      phone: this.contactFormFields().phone,
      email: this.contactFormFields().email,
    };
    const success = await this.contacts.createContact(request);
    if (success) this.contactMenu.hidePopup();
  }

  async editContact() {
    const request = {}
    const success = await this.contacts.editContact(request);
    if (success) this.contactMenu.hidePopup();
  }

}
