import {Component, inject, Input} from '@angular/core';
import {ContactsService} from "../../../../../shared/services/backend/contacts.service";
import {NgStyle} from "@angular/common";
import {ContactMenuService} from "../../../contact-menu.service";

@Component({
  selector: 'contact-header',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './single-contact-header.component.html',
  styleUrl: './single-contact-header.component.scss',
})
export class SingleContactHeaderComponent {
  protected contact = inject(ContactsService);
  protected contactMenu: ContactMenuService = inject(ContactMenuService);
}
