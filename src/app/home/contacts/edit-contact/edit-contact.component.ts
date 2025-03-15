import { Component } from '@angular/core';
import {ContactService} from "../contact.service";

@Component({
  selector: 'edit-contact',
  standalone: true,
  imports: [],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss',
})
export class EditContactComponent {
  constructor(private contactService: ContactService) { }


}
