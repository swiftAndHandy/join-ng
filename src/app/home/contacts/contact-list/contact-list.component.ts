import { Component } from '@angular/core';
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {ContactMenuService} from "../contact-menu.service";

@Component({
  selector: 'contact-list',
  standalone: true,
  imports: [JoinButtonDirective],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {

  constructor(public contactService: ContactMenuService) {}
}
