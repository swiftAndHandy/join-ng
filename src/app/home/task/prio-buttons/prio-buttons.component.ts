import { CommonModule } from '@angular/common';
import {Component, input, Input} from '@angular/core';

type PriorityLevel = 'low' | 'medium' | 'urgent';

@Component({
  selector: 'prio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prio-buttons.component.html',
  styleUrl: './prio-buttons.component.scss',
})
export class PrioButtonsComponent {
  level  = input<PriorityLevel>('medium');
  active = input<boolean>(false);

  get priority(): string {
    return this.level().charAt(0).toLocaleUpperCase() + this.level().slice(1);
  }
}
