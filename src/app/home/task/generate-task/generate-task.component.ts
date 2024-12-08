import { Component } from '@angular/core';
import { PrioButtonsComponent } from '../prio-buttons/prio-buttons.component';
import {
  ButtonComponent,
  ButtonSymbol,
} from '../../../shared/components/button/button.component';
import { UserSelectorComponent } from '../user-selector/user-selector.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { TagSelectorComponent } from '../tag-selector/tag-selector.component';
import { SubtaskFormComponent } from '../subtasks/subtask-form/subtask-form.component';

@Component({
  selector: 'app-generate-task',
  standalone: true,
  imports: [
    PrioButtonsComponent,
    ButtonComponent,
    UserSelectorComponent,
    DatePickerComponent,
    TagSelectorComponent,
    SubtaskFormComponent,
  ],
  templateUrl: './generate-task.component.html',
  styleUrl: './generate-task.component.scss',
})
export class GenerateTaskComponent {
  ButtonSymbol = ButtonSymbol;

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
