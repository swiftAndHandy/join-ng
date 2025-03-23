import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {CategoriesService} from "./categories.service";
import {ContactsService} from "./contacts.service";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public categories: CategoriesService = inject(CategoriesService);
  public contacts: ContactsService = inject(ContactsService);

  public assigned: WritableSignal<any[]> = signal<any[]>([]);

  constructor() { }

  destroy() {
    this.categories.destroy();
    this.contacts.destroy();
    this.assigned.set([]);
  }

  assignedIds() {
    return this.assigned().filter(persons => persons.selected).map(person => person.id)
  }
}
