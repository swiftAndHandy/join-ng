import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {CategoriesService} from "./categories.service";
import {ContactsService} from "./contacts.service";
import {SubtasksEditService} from "./subtask.service";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public categories: CategoriesService = inject(CategoriesService);
  public contacts: ContactsService = inject(ContactsService);
  public subtasks: SubtasksEditService = inject(SubtasksEditService);

  public assigned: WritableSignal<any[]> = signal<any[]>([]);
  public selectedDate: WritableSignal<string|null> = signal(null);
  public currentTaskId: WritableSignal<number | null> = signal(null);

  constructor() { }

  destroy() {
    this.categories.destroy();
    this.contacts.destroy();
    this.subtasks.destroy();
    this.assigned.set([]);
    this.selectedDate.set(null);
    this.currentTaskId.set(null);
  }

  assignedIds() {
    return this.assigned().filter(persons => persons.selected).map(person => person.id)
  }
}
