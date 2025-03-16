import {Component, signal, WritableSignal} from '@angular/core';
import {ContactService} from "../contact.service";
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {BackendService} from "../../../shared/services/backend.service";

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
  address = signal('');
  email = signal('');
  phone = signal('');

  constructor(public contactService: ContactService, public inputSignal: InputSignalService, private backend: BackendService) { }

  async validate() {
    const request = {
      first_name: this.firstName(),
      surname: this.surname(),
      address: this.address(),
      phone: this.phone(),
      email: this.email(),
    };
    debugger;
    await this.backend.createContact(request);
  }
}
