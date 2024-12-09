import { Component, Input } from '@angular/core';
import { UserAvatarComponent } from '../../../../../shared/components/user-avatar/user-avatar.component';

@Component({
  selector: 'contact-header',
  standalone: true,
  imports: [UserAvatarComponent],
  templateUrl: './single-contact-header.component.html',
  styleUrl: './single-contact-header.component.scss',
})
export class SingleContactHeaderComponent {
  @Input() username: string = 'Anton Mayer';
}
