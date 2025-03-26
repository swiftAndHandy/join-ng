import {Component, inject, signal, WritableSignal} from '@angular/core';
import { PrioButtonsComponent } from '../prio-buttons/prio-buttons.component';
import { PersonSelectorComponent } from '../person-selector/person-selector.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { TagSelectorComponent } from '../tag-selector/tag-selector.component';
import { SubtaskFormComponent } from '../subtasks/subtask-form/subtask-form.component';
import {JoinButtonDirective} from "../../../shared/directives/join-button.directive";
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {TasksService} from "../../../shared/services/backend/tasks.service";
import {BackendService} from "../../../shared/services/backend/backend.service";
import {ErrorService} from "../../../shared/services/backend/error.service";
import {TaskObject} from "../../../shared/interfaces/task.interface";

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    PrioButtonsComponent,
    PersonSelectorComponent,
    DatePickerComponent,
    TagSelectorComponent,
    SubtaskFormComponent,
    JoinButtonDirective,
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {

  public taskService = inject(TasksService)
  private backend: BackendService = inject(BackendService);
  protected inputSignal: InputSignalService = inject(InputSignalService);
  private errors = signal<Record<string, string[]> | null>(null);
  private errorService: ErrorService = inject(ErrorService);

  taskTitle = signal('');
  taskDescription = signal('');
  currentPriority = signal(1);

  priorityLevels: Array<'urgent' | 'medium' | 'low'> = [
    'urgent',
    'medium',
    'low',
  ];

  ngOnDestroy(): void {
    this.taskService.destroy();
  }

  setPriorityTo(level: number) {
    this.currentPriority.set(level);
  }

  pseudoObject() {
    const mainTask = {
      'taskTitle': this.taskTitle(),
      'taskDescription': this.taskDescription(),
      'priorityLevel': this.currentPriority(),
      'end_date': this.taskService.selectedDate(),
      'category': this.taskService.categories.selectedCategory().id,
      'assigned_users': this.taskService.assignedIds('users'),
      'assigned_contacts': this.taskService.assignedIds('contacts'),

    };
  }

  async submitTask() {
    try {
      const task: TaskObject = await this.createMainTask();
      await this.createSubtask(task);
      return true;
    } catch (error: any) {
      this.errors.set(this.errorService.validateErrors(error.error ?? {'unknown': 'unspecified error occurred'}));
      return false;
    }
  }

  async createMainTask() {
    const mainTask = {
      'title': this.taskTitle(),
      'description': this.taskDescription(),
      'priority': this.currentPriority(),
      'end_date': this.taskService.selectedDate(),
      'category': this.taskService.categories.selectedCategory().id,
      'assigned_users': this.taskService.assignedIds('users'),
      'assigned_contacts': this.taskService.assignedIds('contacts'),
    };
    return await this.backend.post<any>('tasks/', mainTask);
  }

  async createSubtask(task: TaskObject): Promise<any> {
    const subtasks = this.taskService.subtasks.currentTasksSubtasks().map(subtask => ({...subtask, 'task': task.id}));
    try {
      await Promise.all(
        subtasks.map(subtask => this.backend.post<any>('subtasks/', subtask))
      );
    } catch (error: any) {
      throw error;
    }
  }

  destroy() {
    // debugger;
    this.taskService.assigned.set(this.taskService.contacts.list().map(contact => ({ ...contact, selected: false, filtered: true })));
    this.currentPriority.set(1);
    this.taskTitle.set('');
    this.taskDescription.set('');
  }

}


