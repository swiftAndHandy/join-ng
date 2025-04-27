import {afterNextRender, Component, ElementRef, inject, viewChild} from '@angular/core';
import { UserAvatarComponent } from '../components/user-avatar/user-avatar.component';
import {ViewportService} from "../services/viewport.service";

@Component({
  selector: 'join-header',
  standalone: true,
  imports: [UserAvatarComponent],
  templateUrl: './join-header.component.html',
  styleUrl: './join-header.component.scss',
})
export class JoinHeaderComponent {

  viewportService = inject(ViewportService);
  headerRef = viewChild<ElementRef>('header');

  constructor() {
    afterNextRender(() =>{
      this.viewportService.setHeaderSize(this.headerRef()?.nativeElement.offsetHeight);
    })
  }

}
