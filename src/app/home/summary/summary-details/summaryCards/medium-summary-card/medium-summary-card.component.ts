import { CommonModule } from '@angular/common';
import {Component, input, Input, signal} from '@angular/core';

type CardIcon = 'backlog' | 'task_done' | 'unset';

@Component({
  selector: 'summary-card-medium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medium-summary-card.component.html',
  styleUrls: ['./medium-summary-card.component.scss', './../summary-card.scss'],
})
export class MediumSummaryCardComponent {
  icon = input<CardIcon>('unset');

  isHovered = signal(false);

  setHoveredTo(value: boolean) {
    this.isHovered.set(value);
  }
}
