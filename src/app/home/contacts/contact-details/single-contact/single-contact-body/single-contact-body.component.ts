import {Component, inject} from '@angular/core';
import {ContactsService} from "../../../../../shared/services/backend/contacts.service";

@Component({
  selector: 'contact-body',
  standalone: true,
  imports: [],
  templateUrl: './single-contact-body.component.html',
  styleUrl: './single-contact-body.component.scss',
})
export class SingleContactBodyComponent {
  contact: ContactsService = inject(ContactsService);
}
