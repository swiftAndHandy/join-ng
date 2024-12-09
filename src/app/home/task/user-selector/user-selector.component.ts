import { Component, Input } from '@angular/core';
import { SelectedUsersComponent } from '../selected-users/selected-users.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-selector',
  standalone: true,
  imports: [CommonModule, SelectedUsersComponent],
  templateUrl: './user-selector.component.html',
  styleUrl: './user-selector.component.scss',
})
export class UserSelectorComponent {
  @Input() users: string[] = ['Peter Meyer', 'Klaus Dieter', 'Felix Finke']; //Use User-Datatype

  isFocused = false;
  setFocus(value: boolean) {
    this.isFocused = value;
  }
}
