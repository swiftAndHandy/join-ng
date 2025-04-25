import {afterNextRender, Component, computed, effect, inject, signal} from '@angular/core';
import { SmallSummaryCardComponent } from './summaryCards/small-summary-card/small-summary-card.component';
import { LargeSummaryCardComponent } from './summaryCards/large-summary-card/large-summary-card.component';
import { MediumSummaryCardComponent } from './summaryCards/medium-summary-card/medium-summary-card.component';
import {BackendService} from "../../../shared/services/backend/backend.service";
import {Summary} from "../../../shared/interfaces/summary.model";

@Component({
  selector: 'summary-details',
  standalone: true,
  imports: [
    SmallSummaryCardComponent,
    LargeSummaryCardComponent,
    MediumSummaryCardComponent,
  ],
  templateUrl: './summary-details.component.html',
  styleUrl: './summary-details.component.scss',
})
export class SummaryDetailsComponent {
  backend = inject(BackendService);
  tasks = signal<Summary>([]);
  tasksToDo = computed(() =>
    this.tasks()?.filter(task => task.state === 0) as Summary ?? []
  );
  tasksDone = computed(() =>
    this.tasks()?.filter(task => task.state === 3) as Summary ?? []
  );
  tasksUrgentAndOpen = computed(() =>
    this.tasks()?.filter(task => (task.state !== 3 && task.priority === 0)) as Summary ?? []
  );
  tasksInProgress = computed(() =>
    this.tasks()?.filter(task => task.state === 1) as Summary ?? []
  );
  tasksAwaitingFeedback = computed(() =>
    this.tasks()?.filter(task => task.state === 2) as Summary ?? []
  );

  constructor() {
    afterNextRender(() => {
      const storage = localStorage.getItem('summary');
      if (storage) this.tasks.set(JSON.parse(storage));
      this.backend.get<Summary>('summary/')
        .then(data => this.tasks.set(data))
        .catch(err => {
          console.error(err);
        });
    });

    effect(() => {
      localStorage.setItem('summary', JSON.stringify(this.tasks()));
    });
  }

}
