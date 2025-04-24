import {Component, computed, input} from '@angular/core';
import {Summary} from "../../../../../shared/interfaces/summary.model";

@Component({
  selector: 'summary-card-small',
  standalone: true,
  imports: [],
  templateUrl: './small-summary-card.component.html',
  styleUrls: ['./small-summary-card.component.scss', './../summary-card.scss'],
})
export class SmallSummaryCardComponent {
  tasks = input.required<Summary>();
  counter = computed(() => this.tasks()?.length ?? 0)
}
