import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary-card-medium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medium-summary-card.component.html',
  styleUrls: ['./medium-summary-card.component.scss', './../summary-card.scss'],
})
export class MediumSummaryCardComponent {
  @Input() icon: 'backlog' | 'task_done' | 'unset' = 'unset';

  isHovered: boolean = false;

  setHoveredTo(value: boolean) {
    this.isHovered = value;
  }
}
