import {Component, signal, WritableSignal} from '@angular/core';
import {ContactMenuService} from "../contact-menu.service";
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {ContactsService} from "../../../shared/services/backend/contacts.service";

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
  firstName = signal('');
  surname = signal('');
  address = {
    street: signal(''),
    zipCode: signal(''),
    city: signal(''),
  };
  email = signal('');
  phone = signal('');

  constructor(public contactService: ContactMenuService, public inputSignal: InputSignalService, private backend: ContactsService) { }

  async validate() {
    const request = {
      first_name: this.firstName(),
      surname: this.surname(),
      street: this.address.street(),
      zip_code: this.address.zipCode(),
      city: this.address.city(),
      phone: this.phone(),
      email: this.email(),
    };
    const response = await this.backend.createContact(request);
    console.table(response);
  }
}
