import { CommonModule } from '@angular/common';
import {afterNextRender, Component, ElementRef, inject, input, OnDestroy, Renderer2, signal} from '@angular/core';

@Component({
  selector: 'user-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.scss',
})
export class UserAvatarComponent implements OnDestroy {
  isMenu = input(false);
  user = input<string>(); //CAVE: Add Datatype UserData
  size = input<string>('');
  whiteBorder = input<boolean>(false);
  menuIsActive = signal<boolean>(false);

  elRef = inject(ElementRef);
  renderer = inject(Renderer2);
  private removeClickListener?: () => void;

  get avatarSize() {
    if (this.size() !== '') {
      return this.size();
    } else {
      return '40px';
    }
  }

  constructor() {
    afterNextRender(() => {
      this.removeClickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
        if (!this.elRef.nativeElement.contains(event.target)) {
          this.menuIsActive.set(false);
        }
      })
    })
  }

  ngOnDestroy() {
    this.removeClickListener?.();
  }

  initials(contact: { first_name: string; surname: string; [key: string]: any } = {first_name: 'Guest', surname: ''}): string {
    return (contact.first_name.trim().charAt(0).toUpperCase() +
      contact.surname.trim().charAt(0).toUpperCase());
  }

  toggleMenu() {
    this.menuIsActive.set(!this.menuIsActive());
  }
}
