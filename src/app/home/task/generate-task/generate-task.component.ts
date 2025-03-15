import {Component, signal, WritableSignal} from '@angular/core';
import { PrioButtonsComponent } from '../prio-buttons/prio-buttons.component';
import { UserSelectorComponent } from '../user-selector/user-selector.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { TagSelectorComponent } from '../tag-selector/tag-selector.component';
import { SubtaskFormComponent } from '../subtasks/subtask-form/subtask-form.component';
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";

@Component({
  selector: 'app-generate-task',
  standalone: true,
  imports: [
    PrioButtonsComponent,
    UserSelectorComponent,
    DatePickerComponent,
    TagSelectorComponent,
    SubtaskFormComponent,
    JoinButtonDirective,
  ],
  templateUrl: './generate-task.component.html',
  styleUrl: './generate-task.component.scss',
})
export class GenerateTaskComponent {

  taskTitle = signal('');
  taskDescription = signal('');
  taskCategory = signal<number>(0);

  updateCategory(category: number) {
    this.taskCategory.set(category);
  }

  updateInputElementSignal(event: Event, targetSignal: WritableSignal<string>) {
    const input = event.target as HTMLInputElement;
    targetSignal.set(input.value);
  }


  priorityLevels: Array<'urgent' | 'medium' | 'low'> = [
    'urgent',
    'medium',
    'low',
  ];

  currentPriority = signal(1);

  setPriorityTo(level: number) {
    this.currentPriority.set(level);
  }

  pseudoObject() {
    console.table({
      'taskTitle': this.taskTitle(),
      'taskDescription': this.taskDescription(),
      'priorityLevel': this.currentPriority(),
      'category': this.taskCategory(),
    });
  }

}
