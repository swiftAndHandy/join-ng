import {Component, effect, ElementRef, HostListener, inject, Input, signal, WritableSignal} from '@angular/core';
import { SelectedUsersComponent } from '../selected-users/selected-users.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ContactsService} from "../../../shared/services/backend/contacts.service";
import {InputSignalService} from "../../../shared/services/input-signal.service";

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
  protected contacts: ContactsService = inject(ContactsService);
  protected inputSignal: InputSignalService = inject(InputSignalService);

  assigned = signal<any[]>([]);

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
    await this.contacts.initList();
    this.assigned.set(this.contacts.list().map(contact => ({ ...contact, selected: false, filtered: true })));
  }

  setFocus(value: boolean) {
    this.isFocused = value;
  }

  filterUsers() {
    const search = this.searchTerm().toLowerCase();

    this.assigned.update(contacts =>
      contacts.map(contact => ({
        ...contact,
        filtered: `${contact.first_name} ${contact.surname}`.toLowerCase().includes(search) ||
          contact.email.toLowerCase().includes(search)
      }))
    );
  }

  toggleAssignedPerson(contactId: number) {
    this.assigned.update(contacts =>
      contacts.map(contact =>
        contact.id === contactId ? { ...contact, selected: !contact.selected } : contact
      )
    );
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.setFocus(false);
    }
  }
}
