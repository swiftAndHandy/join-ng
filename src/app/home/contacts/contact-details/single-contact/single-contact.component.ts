import { Component } from '@angular/core';
import { SingleContactHeaderComponent } from './single-contact-header/single-contact-header.component';
import { SingleContactBodyComponent } from './single-contact-body/single-contact-body.component';

@Component({
  selector: 'single-contact',
  standalone: true,
  imports: [SingleContactHeaderComponent, SingleContactBodyComponent],
  templateUrl: './single-contact.component.html',
  styleUrl: './single-contact.component.scss',
})
export class SingleContactComponent {}
