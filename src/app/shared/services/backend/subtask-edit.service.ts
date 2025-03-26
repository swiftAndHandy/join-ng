import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {BackendService} from "./backend.service";
import {SubtaskObject} from "../../interfaces/subtask.interface";

@Injectable({
  providedIn: 'root'
})
export class SubtasksEditService {

  currentTasksSubtasks: WritableSignal<SubtaskObject[]>  = signal<SubtaskObject[]>([]);
  currentTaskId: number | null = null;

  constructor() { }
  backend: BackendService = inject(BackendService);


   async getSubtaskByTaskId(id: number | null = null): Promise<void> {
     if(id) {
       this.currentTaskId = id;
       const data = await this.backend.get<any>(`tasks/${id}/subtasks`);
       if (data) {
         this.currentTasksSubtasks.set(
           data.map((subtask: SubtaskObject) => ({
             ...subtask,
             edited_description: subtask.description,
             edit_mode: false
           }))
         );
       }
     }
  }

  updateCurrentSubtasks(subtaskObject: SubtaskObject, id: number = -1): boolean {
      this.currentTasksSubtasks.update(current => [...current, subtaskObject]);
      return true;
  }

  activateEditMode(id: number) {
    this.currentTasksSubtasks()[id].edit_mode = true;
    console.log('activateEditMode');
  }

  deactivateEditMode(id: number) {
    this.currentTasksSubtasks()[id].edit_mode = false;
    console.log('deactivateEditMode');
  }

  destroy (): void {
     this.currentTasksSubtasks.set([]);
  }

}
