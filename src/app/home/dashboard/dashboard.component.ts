import {afterNextRender, Component, computed, effect, inject, signal} from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {JoinButtonDirective} from "../../shared/directives/join-button.directive";
import {LoadingSpinnerComponent} from "../../shared/components/loading-spinner/loading-spinner.component";
import {BackendService} from "../../shared/services/backend/backend.service";
import {RenderedTaskObject, TaskObject} from "../../shared/interfaces/task.interface";
import {AssignedPerson} from "../../shared/interfaces/assigned-person.interface";
import {CategoryObject} from "../../shared/interfaces/category.model";
import {TaskCardComponent} from "./task-card/task-card.component";
import {SubtaskObject} from "../../shared/interfaces/subtask.interface";

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [SearchbarComponent, JoinButtonDirective, LoadingSpinnerComponent, TaskCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  categories = ['To do', 'In progress', 'Await feedback', 'Done'];
  backend = inject(BackendService);

  loading = signal<boolean>(false);
  tasks = signal<RenderedTaskObject[]>([]);

  tasksToDo = computed(() =>
    this.tasks()?.filter(task => task.state === 0) as RenderedTaskObject[] ?? []
  );
  tasksInProgress = computed(() =>
    this.tasks()?.filter(task => task.state === 1) as RenderedTaskObject[] ?? []
  );
  tasksAwaitingFeedback = computed(() =>
    this.tasks()?.filter(task => task.state === 2) as RenderedTaskObject[] ?? []
  );
  tasksDone = computed(() =>
    this.tasks()?.filter(task => task.state === 3) as RenderedTaskObject[] ?? []
  );

  constructor() {
    afterNextRender(() => {
      this.backend.get<TaskObject[]>('tasks/')
        .then(async (tasks) => {
          const renderedTasks = await Promise.all(tasks.map(task => this.toRenderedTask(task)));
          this.tasks.set(renderedTasks as RenderedTaskObject[]);
        })
        .catch(console.error);
    });

    effect(() => {
      if (this.tasksToDo().length) console.log('Todo:', this.tasksToDo());
      if (this.tasksInProgress().length) console.log('In Progress:', this.tasksInProgress());
      if (this.tasksAwaitingFeedback().length) console.log('Awaiting Feedback:', this.tasksAwaitingFeedback());
      if (this.tasksDone().length) console.log('Done:', this.tasksDone());
    });
  }

  private async resolveAssignedPeople(
    ids: number[],
    endpoint: 'users' | 'contacts'
  ): Promise<AssignedPerson[]> {
    return Promise.all(ids.map(id => this.backend.get<AssignedPerson>(`${endpoint}/${id}`)));
  }

  private async resolveCategory(id: number) {
    return this.backend.get<CategoryObject>(`categories/${id}`);
  }


  private async resolveSubtasks(id: number): Promise<SubtaskObject[]> {
    try {
      return await this.backend.get<SubtaskObject[]>(`tasks/${id}/subtasks`);
    } catch (error) {
      console.warn(`Subtasks for task ${id} could not be loaded:`, error);
      return [];
    }
  }

  private async toRenderedTask(task: TaskObject): Promise<Partial<RenderedTaskObject>> {
    const [contacts, users, category, subtasks] = await Promise.all([
      this.resolveAssignedPeople(task.assigned_contacts, 'contacts'),
      this.resolveAssignedPeople(task.assigned_users, 'users'),
      this.resolveCategory(task.category),
      this.resolveSubtasks(task.id!)
    ]);

    return {
      ...task,
      subtasks: subtasks,
      category: category,
      assigned_contacts: contacts,
      assigned_users: users,
    };
  }

}
