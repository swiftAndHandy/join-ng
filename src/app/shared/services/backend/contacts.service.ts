import {inject, Injectable, signal} from '@angular/core';
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class ContactsService{

  private backend: BackendService = inject(BackendService);

  private contacts = signal<any[]>([]);
  private selectedContact = signal<any | null>(null);

  get list() {
    return this.contacts();
  }

  get current() {
    return this.selectedContact();
  }

  async initList(): Promise<any[]> {
    const data = await this.backend.get<any[]>('contacts/');
    if (data) this.contacts.set(data);
    return this.contacts();
  }

  async fetchContactById(id: number): Promise<void> {
    const data = await this.backend.get<any>(`contacts/${id}/`);
    if (data) this.selectedContact.set(data);
  }

  async createContact(contactDetails: object): Promise<void> {
    const newContactDetails = { ...contactDetails, badge_color: this.getRandomBadgeColor() };
    const response = await this.backend.post<any>('contacts/', newContactDetails);
    if (response.ok) {
      this.contacts.update(contacts => [...contacts, response.data]);
    } else {
      return response.error;
    }
  }

  private getRandomBadgeColor() {
    const validColors = ['FF7A00', 'FF5EB3', '6E52FF', '9327FF', '00BEE8', '1FD7C1', 'FF745E', 'FFA35E', 'FC71FF', 'FFC701', '0038FF', 'C3FF2B', 'FFE62B', 'FF4646', 'FFBB2B'];
    const index = Math.floor(Math.random()*(validColors.length));

    return validColors[index];
  }

}
