import {Component, inject, Input} from '@angular/core';
import { UserAvatarComponent } from '../../../shared/components/user-avatar/user-avatar.component';
import { CommonModule } from '@angular/common';
import {TasksService} from "../../../shared/services/backend/tasks.service";

@Component({
  selector: 'selected-persons',
  standalone: true,
  imports: [CommonModule, UserAvatarComponent],
  templateUrl: './selected-persons.component.html',
  styleUrl: './selected-persons.component.scss',
})
export class SelectedPersonsComponent {
  protected taskService: TasksService = inject(TasksService);
}
