import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {BackendService} from "./backend.service";
import {SubtaskObject} from "../../interfaces/subtask.interface";

@Injectable({
  providedIn: 'root'
})
export class SubtasksEditService {

  currentTasksSubtasks: WritableSignal<SubtaskObject[]>  = signal<SubtaskObject[]>([]);
  newSubtaskDescription: WritableSignal<string | null> = signal(null);
  currentSubtasksPosition: WritableSignal<number> = signal(-1);

  constructor() { }
  backend: BackendService = inject(BackendService);

   async getSubtaskByTaskId(id: number | null = null): Promise<void> {
     if(id) {
       const data = await this.backend.get<any>(`tasks/${id}/subtasks`);
       if (data) this.currentTasksSubtasks.set(data);
     }
  }

  updateCurrentSubtasks(subtaskObject: SubtaskObject, id: number = -1): boolean {
      this.currentTasksSubtasks.update(current => [...current, subtaskObject]);
      return true;
  }

  destroy (): void {
     this.currentTasksSubtasks.set([]);
     this.newSubtaskDescription.set(null);
  }

}
