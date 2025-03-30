import { CommonModule } from '@angular/common';
import {Component, input} from '@angular/core';

@Component({
  selector: 'user-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.scss',
})
export class UserAvatarComponent {
  isMenu = input(false);
  user = input<string>(); //CAVE: Add Datatype UserData
  size = input<string>('');
  whiteBorder = input<boolean>(false);

  get avatarSize() {
    if (this.size() !== '') {
      return this.size();
    } else {
      return '40px';
    }
  }

  get usernameInitials() {
    return 'Guest';
  }
}
