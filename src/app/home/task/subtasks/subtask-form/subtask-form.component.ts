import {Component, ElementRef, inject, signal, ViewChild} from '@angular/core';
import {SubtasksEditService} from "../../../../shared/services/backend/subtask.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'subtask-form',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './subtask-form.component.html',
  styleUrl: './subtask-form.component.scss',
})
export class SubtaskFormComponent {
  subtaskService: SubtasksEditService = inject(SubtasksEditService);
  newSubtaskInputFieldFocused = signal(false);
  @ViewChild('newSubtaskInputField') newSubtaskInputField!: ElementRef;

  ngOnDestroy() {
    this.subtaskService.destroy ();
  }

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
        completed: false,
        taskId: -1
      })
    console.log(this.subtaskService.currentTasksSubtasks());
  }
}
