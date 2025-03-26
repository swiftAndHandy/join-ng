import {Component, ElementRef, inject, signal, ViewChild} from '@angular/core';
import {SubtasksEditService} from "../../../../shared/services/backend/subtask-edit.service";
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
  }

  setFocusAtNewSubtaskInput() {
    this.newSubtaskInputFieldFocused.set(true);
  }

  blurFocusAtNewSubtaskInput() {
    this.newSubtaskInputFieldFocused.set(false);
  }

  clickedAtNewTaskCross() {
    if(!this.newSubtaskInputFieldFocused()) {
      this.setFocusAtNewSubtaskInput();
      this.newSubtaskInputField.nativeElement.focus();
    } else {
      this.newSubtaskInputField.nativeElement.value = '';
    }
  }

  clickedAtNewTaskSubmit() {
    const newSubtask = this.newSubtaskInputField.nativeElement;
    newSubtask.value = newSubtask.value.trim();
    if (newSubtask.value.length) {
      this.subtaskService.updateCurrentSubtasks(
        {
          description: newSubtask.value,
          edit_mode: false,
          completed: false,
        });
      newSubtask.value = '';
    }
  }

  trashIconAltText(editing: boolean | undefined): string {
    return editing ? 'Discard changes' : 'Delete this subtask';
  }

  handleTrashClick(subtaskObject: SubtaskObject, index: number, input: HTMLInputElement, event: Event): void {
    event.stopPropagation();
    if (subtaskObject.edit_mode) {
      this.discardEditInput(index, input, event);
    } else {
      this.deleteSubtask(index);
    }
  }

  discardEditInput(index: number, input: HTMLInputElement, event: Event) {
    const current = this.subtaskService.currentTasksSubtasks();
    input.value = current[index].description;
    current[index].edit_mode = false;
    this.blockHoverCSS(event);
    input.blur();
  }

  deleteSubtask(index: number): void {
    const current = this.subtaskService.currentTasksSubtasks();
    current.splice(index, 1);
    this.subtaskService.currentTasksSubtasks.set([...current]);
    console.log(this.subtaskService.currentTasksSubtasks());
  }

  submitEdit(index: number, input: HTMLInputElement) {
    const current = this.subtaskService.currentTasksSubtasks();
    input.blur();
    this.subtaskService.deactivateEditMode(index);
    input.value = input.value.trim();
    if (input.value.length) {
      current[index].description = input.value;
    } else {
      input.value = current[index].description;
    }
    console.log(this.subtaskService.currentTasksSubtasks());
  }

  blockHoverCSS(event: Event) {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    target.classList.add('--hover-is-blocked');
    setTimeout(() => {
      target.classList.remove('--hover-is-blocked');
    }, 400)
  }
}
