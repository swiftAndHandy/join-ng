import {Component, ElementRef, inject, signal, ViewChild} from '@angular/core';
import {SubtasksEditService} from "../../../../shared/services/backend/subtask.service";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {SubtaskObject} from "../../../../shared/interfaces/subtask.interface";

@Component({
  selector: 'subtask-form',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './subtask-form.component.html',
  styleUrl: './subtask-form.component.scss',
})
export class SubtaskFormComponent {
  subtaskService: SubtasksEditService = inject(SubtasksEditService);
  newSubtaskInputFieldFocused = signal(false);
  @ViewChild('newSubtaskInputField') newSubtaskInputField!: ElementRef;

  async ngOnInit(): Promise<void> {
    await this.subtaskService.getSubtaskByTaskId(1);
    console.log(this.subtaskService.currentTasksSubtasks());
  }

  setFocusAtNewSubtaskInput() {
    this.newSubtaskInputFieldFocused.set(true);
  }

  blurFocusAtNewSubtaskInput() {
    this.newSubtaskInputFieldFocused.set(false);
  }

  clickedAtNewTaskPlusIcon() {
    if(!this.newSubtaskInputFieldFocused()) {
      this.setFocusAtNewSubtaskInput();
      this.newSubtaskInputField.nativeElement.focus();
    } else {
      console.log("deleted")
    }
  }

  clickedAtNewTaskSubmit() {
    console.log("submitted");
    this.subtaskService.updateCurrentSubtasks(
      {
        id: -1,
        description: this.newSubtaskInputField.nativeElement.value,
        edited_description: this.newSubtaskInputField.nativeElement.value,
        edit_mode: false,
        completed: false,
        taskId: -1
      })
    console.log(this.subtaskService.currentTasksSubtasks());
  }

  trashIconAltText(editing: boolean | undefined): string {
    return editing ? 'Discard changes' : 'Delete this subtask';
  }

  handleTrashClick(subtaskObject: SubtaskObject, index: number, input: HTMLInputElement): void {
    const current = this.subtaskService.currentTasksSubtasks();
    if (subtaskObject.edit_mode) {
      input.value = current[index].description;
    } else {
      current.splice(index, 1);
      this.subtaskService.currentTasksSubtasks.set([...current]);
      console.log(this.subtaskService.currentTasksSubtasks());
    }
  }

  submitEdit(index: number, input: HTMLInputElement) {
    const current = this.subtaskService.currentTasksSubtasks();
    input.value.trim();
    if (input.value.length) {
      current[index].description = input.value;
    } else {
      input.value = current[index].description;
    }
    console.log(this.subtaskService.currentTasksSubtasks());
  }
}
