import {Component, inject, signal, WritableSignal} from '@angular/core';
import {ContactMenuService} from "../contact-menu.service";
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {ContactsService} from "../../../shared/services/backend/contacts.service";

interface Address {
  street: string;
  zip_code: string;
  city: string;
}

interface ContactFormFields {
  first_name: string;
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

  contactFormFields: WritableSignal<ContactFormFields> = signal(this.initContactForm());

  sendForm() {
    const request = this.getContactFormFieldsAsObject();
    if(this.contactMenu.createModus()) {
      this.createContact(request);
    } else if(this.contactMenu.editModus()) {
      this.editContact(request);
    }
  }

  initContactForm(): ContactFormFields {
    if(this.contactMenu.editModus()) {
      return structuredClone(this.contacts.contactDetails());
    }

    return {
      first_name: '',
      surname: '',
      address: {
        street: '',
        zip_code: '',
        city: '',
      },
      email: '',
      phone: ''
    }
  }

  getContactFormFieldsAsObject() {
    return {
      first_name: this.contactFormFields().first_name,
      surname: this.contactFormFields().surname,
      street: this.contactFormFields().address.street,
      zip_code: this.contactFormFields().address.zip_code,
      city: this.contactFormFields().address.city,
      phone: this.contactFormFields().phone,
      email: this.contactFormFields().email,
    };
  }

  private async createContact(request: object) {
    const success = await this.contacts.createContact(request);
    if (success) this.contactMenu.hidePopup();
  }

  private async editContact(request: object) {
    const targetContactsId = this.contacts.contactDetails().id;
    const success = await this.contacts.editContact(request, targetContactsId);
    if (success) this.contactMenu.hidePopup();
  }

}
