import { Component } from '@angular/core';
import { PrioButtonsComponent } from '../prio-buttons/prio-buttons.component';

@Component({
  selector: 'app-generate-task',
  standalone: true,
  imports: [PrioButtonsComponent],
  templateUrl: './generate-task.component.html',
  styleUrl: './generate-task.component.scss',
})
export class GenerateTaskComponent {
  priorityLevels: Array<'urgent' | 'medium' | 'low'> = [
    'urgent',
    'medium',
    'low',
  ];

  currentPriority = 1;

  setPriorityTo(level: number) {
    this.currentPriority = level;
  }
}
