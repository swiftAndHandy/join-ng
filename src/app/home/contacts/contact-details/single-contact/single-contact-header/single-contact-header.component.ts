import {Component, inject, Input} from '@angular/core';
import {ContactsService} from "../../../../../shared/services/backend/contacts.service";

@Component({
  selector: 'contact-header',
  standalone: true,
  imports: [],
  templateUrl: './single-contact-header.component.html',
  styleUrl: './single-contact-header.component.scss',
})
export class SingleContactHeaderComponent {
  protected contact = inject(ContactsService)
}
