import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {ContactMenuService} from "../contact-menu.service";
import {ContactsService} from "../../../shared/services/backend/contacts.service";
import {NgClass, NgStyle} from "@angular/common";
import {DimmerService} from "../../../shared/services/dimmer.service";

@Component({
  selector: 'contact-list',
  standalone: true,
  imports: [JoinButtonDirective, NgStyle, NgClass],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
  public contactMenu: ContactMenuService = inject(ContactMenuService);
  protected contacts: ContactsService = inject(ContactsService);
  protected dimmer = inject(DimmerService);

  constructor() {
      this.contacts.initList();
  }

  activateContactButton(index: number) {
    this.contacts.currentListIndex.set(index);
  }


}
