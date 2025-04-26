import {Component, computed, effect, input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {RenderedTaskObject} from "../../../shared/interfaces/task.interface";

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  task = input.required<RenderedTaskObject>();
  doneSubtasks = computed(() => this.task().subtasks.filter(subtask => subtask.completed));
  assignedPersons = computed(() => [
    ...(this.task()?.assigned_contacts ?? []),
    ...(this.task()?.assigned_users ?? [])
  ]);

  constructor() {
    effect(() => {
      console.log(this.assignedPersons())
    });
  }
}
