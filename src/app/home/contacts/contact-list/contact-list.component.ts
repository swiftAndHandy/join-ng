import {Component, inject} from '@angular/core';
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {ContactMenuService} from "../contact-menu.service";
import {ContactsService} from "../../../shared/services/backend/contacts.service";

@Component({
  selector: 'contact-list',
  standalone: true,
  imports: [JoinButtonDirective],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
  public contactMenu: ContactMenuService = inject(ContactMenuService);
  private contacts = inject(ContactsService);

  async ngOnInit() {
    await this.contacts.initList();
  }
}
