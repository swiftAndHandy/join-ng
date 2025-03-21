import {Component, inject, signal, WritableSignal} from '@angular/core';
import { PrioButtonsComponent } from '../prio-buttons/prio-buttons.component';
import { UserSelectorComponent } from '../user-selector/user-selector.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { TagSelectorComponent } from '../tag-selector/tag-selector.component';
import { SubtaskFormComponent } from '../subtasks/subtask-form/subtask-form.component';
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {TasksService} from "../../../shared/services/backend/tasks.service";

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    PrioButtonsComponent,
    UserSelectorComponent,
    DatePickerComponent,
    TagSelectorComponent,
    SubtaskFormComponent,
    JoinButtonDirective,
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {

  public tasksService = inject(TasksService)
  protected inputSignal: InputSignalService = inject(InputSignalService);

  taskTitle = signal('');
  taskDescription = signal('');
  currentPriority = signal(1);

  priorityLevels: Array<'urgent' | 'medium' | 'low'> = [
    'urgent',
    'medium',
    'low',
  ];

  ngOnDestroy(): void {
    this.tasksService.destroy();
  }

  setPriorityTo(level: number) {
    this.currentPriority.set(level);
  }

  pseudoObject() {
    console.table({
      'taskTitle': this.taskTitle(),
      'taskDescription': this.taskDescription(),
      'priorityLevel': this.currentPriority(),
      'category': this.tasksService.categories.selectedCategory().id,
    });
  }

}
