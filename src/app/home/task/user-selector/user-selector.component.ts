import {Component, effect, ElementRef, HostListener, inject, Input, signal, WritableSignal} from '@angular/core';
import { SelectedUsersComponent } from '../selected-users/selected-users.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {TasksService} from "../../../shared/services/backend/tasks.service";

export interface AssignedPerson {
  id: number;
  first_name: string;
  surname: string;
}

@Component({
  selector: 'user-selector',
  standalone: true,
  imports: [CommonModule, SelectedUsersComponent, FormsModule],
  templateUrl: './user-selector.component.html',
  styleUrl: './user-selector.component.scss',
})
export class UserSelectorComponent {
  protected taskService: TasksService = inject(TasksService);
  protected inputSignal: InputSignalService = inject(InputSignalService);

  searchTerm: WritableSignal<string> = signal('');
  isFocused = false;

  constructor(private elRef: ElementRef) {
    effect(() => {
      this.searchTermChanged();
    }, { allowSignalWrites: true });
  }

  searchTermChanged() {
    this.filterUsers();
  }

  async ngOnInit() {
    await this.taskService.contacts.initList();
    this.modifyContactsToAssignedPersons();
  }

  setFocus(value: boolean) {
    this.isFocused = value;
  }

  modifyContactsToAssignedPersons() {
    this.taskService.assigned.set(this.taskService.contacts.list().map(contact => ({ ...contact, selected: false, filtered: true })));
  }

  filterUsers() {
    const search = this.searchTerm().toLowerCase();

    this.taskService.assigned.update(contacts =>
      contacts.map(contact => ({
        ...contact,
        filtered: `${contact.first_name} ${contact.surname}`.toLowerCase().includes(search) ||
          contact.email.toLowerCase().includes(search)
      }))
    );
  }

  toggleAssignedPerson(contactId: number) {
    this.taskService.assigned.update(contacts =>
      contacts.map(contact =>
        contact.id === contactId ? { ...contact, selected: !contact.selected } : contact
      )
    );
  }

  ariaForSelectedPersons(person: {'selected': boolean, 'first_name': string, 'surname':string, [key: string]: any}): string {
    if(person.selected) {
      return `Remove ${person.first_name} ${person.surname} from assigned persons`;
    }
    return `Assign to ${person.first_name} ${person.surname}`;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.setFocus(false);
    }
  }
}
