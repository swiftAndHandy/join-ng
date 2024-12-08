import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'prio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prio-buttons.component.html',
  styleUrl: './prio-buttons.component.scss',
})
export class PrioButtonsComponent {
  @Input() level: 'low' | 'medium' | 'urgent' = 'medium';
  @Input() active: boolean = false;

  get priority(): string {
    let result = this.level.charAt(0).toLocaleUpperCase() + this.level.slice(1);
    return result;
  }
}
