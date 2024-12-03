import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navlink',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss',
})
export class NavlinkComponent {
  @Input() to: string = '';

  get target(): string {
    return this.to;
  }

  get icon(): string {
    switch (this.target) {
      case 'summary':
        return 'summary.svg';
      case 'new-task':
        return 'add-task.svg';
      case 'dashboard':
        return 'dashboard.svg';
      case 'contacts':
        return 'contacts.svg';
      default:
        return '';
    }
  }
}
