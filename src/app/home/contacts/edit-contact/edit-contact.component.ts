import {Component, inject, signal, WritableSignal} from '@angular/core';
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

  public contactMenu = inject(ContactMenuService)
  public signalService = inject(InputSignalService)
  private contacts = inject(ContactsService);

  firstName: WritableSignal<string> = signal('');
  surname: WritableSignal<string> = signal('');
  address = {
    street: signal(''),
    zipCode: signal(''),
    city: signal(''),
  };
  email: WritableSignal<string> = signal('');
  phone: WritableSignal<string> = signal('');

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
    const success = await this.contacts.createContact(request);
    if (success) {
      this.contactMenu.hidePopup();
    }

  }
}
