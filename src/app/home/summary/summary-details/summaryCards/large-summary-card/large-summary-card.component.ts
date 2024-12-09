import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'summary-card-large',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './large-summary-card.component.html',
  styleUrls: ['./large-summary-card.component.scss', './../summary-card.scss'],
})
export class LargeSummaryCardComponent {
  isHovered: boolean = false;

  setHoveredTo(value: boolean) {
    this.isHovered = value;
  }
}
