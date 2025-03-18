import {Injectable, signal} from '@angular/core';
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class ContactsService{

  contacts = signal<any[]>([]);
  selectedContact = signal<any | null>(null);
  error = signal<string | null>(null);

  constructor(private backend: BackendService) {}

  async fetchContacts(): Promise<void> {
    const data = await this.backend.get<any[]>('contacts/');
    if (data) this.contacts.set(data);
  }

  async fetchContactById(id: number): Promise<void> {
    const data = await this.backend.get<any>(`contacts/${id}/`);
    if (data) this.selectedContact.set(data);
  }

  async createContact(contactDetails: object): Promise<void> {
    const newContact = await this.backend.post<any>('contacts/', contactDetails);
    if (newContact) this.contacts.update(contacts => [...contacts, newContact]);
  }

}
