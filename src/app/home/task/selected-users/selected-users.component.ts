import {Component, inject, Input} from '@angular/core';
import { UserAvatarComponent } from '../../../shared/components/user-avatar/user-avatar.component';
import { CommonModule } from '@angular/common';
import {TasksService} from "../../../shared/services/backend/tasks.service";

@Component({
  selector: 'selected-users',
  standalone: true,
  imports: [CommonModule, UserAvatarComponent],
  templateUrl: './selected-users.component.html',
  styleUrl: './selected-users.component.scss',
})
export class SelectedUsersComponent {
  protected taskService: TasksService = inject(TasksService);
}
