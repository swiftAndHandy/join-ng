import {Component, inject} from '@angular/core';
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {ContactMenuService} from "../contact-menu.service";
import {ContactsService} from "../../../shared/services/backend/contacts.service";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'contact-list',
  standalone: true,
  imports: [JoinButtonDirective, NgStyle],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
  public contactMenu: ContactMenuService = inject(ContactMenuService);
  protected contacts = inject(ContactsService);

  async ngOnInit() {
    await this.contacts.initList();
    console.log(this.contacts.list());
  }
}
