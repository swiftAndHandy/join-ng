import { Component } from '@angular/core';
import {ContactService} from "../contact.service";
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";

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
  constructor(public contactService: ContactService) { }

}
