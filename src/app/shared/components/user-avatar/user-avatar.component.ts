import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.scss',
})
export class UserAvatarComponent {
  @Input() size: string = '';

  get avatarSize() {
    if (this.size !== '') {
      return this.size;
    } else {
      return undefined;
    }
  }

  get usernameInitials() {
    return 'AV';
  }
}
