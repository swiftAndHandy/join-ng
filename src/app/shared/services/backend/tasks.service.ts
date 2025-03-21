import {inject, Injectable} from '@angular/core';
import {CategoriesService} from "./categories.service";
import {ContactsService} from "./contacts.service";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public categories: CategoriesService = inject(CategoriesService);
  public contacts: ContactsService = inject(ContactsService);
  constructor() { }

  destroy() {
    this.categories.destroy();
    this.contacts.destroy();
  }
}
