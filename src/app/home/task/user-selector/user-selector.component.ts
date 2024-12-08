import { Component } from '@angular/core';
import { SelectedUsersComponent } from '../selected-users/selected-users.component';

@Component({
  selector: 'user-selector',
  standalone: true,
  imports: [SelectedUsersComponent],
  templateUrl: './user-selector.component.html',
  styleUrl: './user-selector.component.scss',
})
export class UserSelectorComponent {}
