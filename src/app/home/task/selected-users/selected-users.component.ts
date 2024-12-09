import { Component, Input } from '@angular/core';
import { UserAvatarComponent } from '../../../shared/components/user-avatar/user-avatar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'selected-users',
  standalone: true,
  imports: [CommonModule, UserAvatarComponent],
  templateUrl: './selected-users.component.html',
  styleUrl: './selected-users.component.scss',
})
export class SelectedUsersComponent {
  @Input() shift: boolean = true;
  @Input() users: string[] = [
    'Paul Müller',
    'Georg Schneider',
    'Tobias Michelbrink',
  ];
}
