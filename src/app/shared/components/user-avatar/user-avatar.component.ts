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
  @Input() isMenu: boolean = false;
  @Input() user: string = ''; //CAVE: Add Datatype UserData
  @Input() size: string = '';
  @Input() whiteBorder: boolean = false;

  get avatarSize() {
    if (this.size !== '') {
      return this.size;
    } else {
      return '40px';
    }
  }

  get usernameInitials() {
    return 'AV';
  }
}
