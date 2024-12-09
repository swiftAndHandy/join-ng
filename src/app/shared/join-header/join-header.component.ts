import { Component } from '@angular/core';
import { UserAvatarComponent } from '../components/user-avatar/user-avatar.component';

@Component({
  selector: 'join-header',
  standalone: true,
  imports: [UserAvatarComponent],
  templateUrl: './join-header.component.html',
  styleUrl: './join-header.component.scss',
})
export class JoinHeaderComponent {}
