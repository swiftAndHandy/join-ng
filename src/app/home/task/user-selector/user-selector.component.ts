import { Component, Input } from '@angular/core';
import { SelectedUsersComponent } from '../selected-users/selected-users.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-selector',
  standalone: true,
  imports: [CommonModule, SelectedUsersComponent, FormsModule],
  templateUrl: './user-selector.component.html',
  styleUrl: './user-selector.component.scss',
})
export class UserSelectorComponent {
  @Input() users: string[] = ['Peter Meyer', 'Klaus Dieter', 'Felix Finke']; //Use User-Datatype
  filteredUsers: string[] = [...this.users];
  searchTerm: string = '';

  isFocused = false;
  setFocus(value: boolean) {
    this.isFocused = value;
  }

  filterUsers() {
    this.filteredUsers = this.users.filter((user) =>
      user.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.filteredUsers);
  }
}
