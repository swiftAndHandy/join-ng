import {Component, effect, ElementRef, HostListener, inject, Input, signal, WritableSignal} from '@angular/core';
import { SelectedPersonsComponent } from '../selected-persons/selected-persons.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {TasksService} from "../../../shared/services/backend/tasks.service";

export interface AssignedPerson {
  id: number;
  first_name: string;
  surname: string;
}

@Component({
  selector: 'person-selector',
  standalone: true,
  imports: [CommonModule, SelectedPersonsComponent, FormsModule, NgOptimizedImage],
  templateUrl: './person-selector.component.html',
  styleUrl: './person-selector.component.scss',
})
export class PersonSelectorComponent {
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

  handleKeydown(event: KeyboardEvent) {
    if (event.key !== 'Tab') {
      this.isFocused = true;
    }
  }

  displayPersonDetails(person: {'first_name': string, surname: string, email: string, [key: string]: any }): any {
    const personFullName = `${person.first_name} ${person.surname}`.trim();
    const searchTerm = this.searchTerm().trim();

    if (!searchTerm) return `${person.first_name} ${person.surname}`;

    const highlight = (text: string) => {
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      return text.replace(regex, '<span class="highlight__search">$1</span>');
    }

    const highlightedName = highlight(personFullName);
    return highlightedName === personFullName ? `${highlight(person.email.trim())}` : highlightedName;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.setFocus(false);
    }
  }
}
