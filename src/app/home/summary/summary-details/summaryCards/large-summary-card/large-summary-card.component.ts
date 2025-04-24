import { CommonModule } from '@angular/common';
import {Component, computed, input} from '@angular/core';
import {Summary} from "../../../../../shared/interfaces/summary.model";

@Component({
  selector: 'summary-card-large',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './large-summary-card.component.html',
  styleUrls: ['./large-summary-card.component.scss', './../summary-card.scss'],
})
export class LargeSummaryCardComponent {
  isHovered: boolean = false;

  tasks = input.required<Summary>();
  counter = computed(() => this.tasks()?.length ?? 0);
  shortestDeadline = computed(() => {
    const tasks = this.tasks();
    if (!tasks  || tasks.length === 0) return null;
    const sortedByDate = tasks
      .filter(task => !!task.end_date)
      .sort((a, b) => new Date(a.end_date).getTime() - new Date(b.end_date).getTime());
    const earliestDate = sortedByDate[0]?.end_date;
    if (!earliestDate) return null;
    return new Date(earliestDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  setHoveredTo(value: boolean) {
    this.isHovered = value;
  }
}
