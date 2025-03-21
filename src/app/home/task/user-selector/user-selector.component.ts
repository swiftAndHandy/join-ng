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

// export interface AssignedPersonsIndexAndId {
//   id: number,
//   index: number;
// }

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

  filteredAssigned: AssignedPerson[] = [];
  searchTerm: WritableSignal<string> = signal('');
  isFocused = false;

  constructor(private elRef: ElementRef) {
    effect(() => {
      console.log('Suchbegriff geändert:', this.searchTerm());
    });
  }

  updateSearchTerm() {

  }

  async ngOnInit() {
    await this.contacts.initList();
    this.assigned.set(this.contacts.list().map(contact => ({ ...contact, selected: false })));
    this.filteredAssigned = [...this.assigned()];
  }

  setFocus(value: boolean) {
    this.isFocused = value;
  }

  filterUsers() {
    // this.filteredAssigned = this.assigned().filter((ppl) =>
    //   ppl.toLowerCase().includes(this.searchTerm().toLowerCase())
    // );
    console.log(this.searchTerm);
    console.log(this.filteredAssigned);
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
