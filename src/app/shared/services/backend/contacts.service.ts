import {computed, inject, Injectable, signal, WritableSignal} from '@angular/core';
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class ContactsService{

  private backend: BackendService = inject(BackendService);

  private contacts = signal<any[]>([]);
  private selectedContact = signal<any | null>(null);

  private errors = signal<Record<string, string[]> | null>(null);

  public list = computed(() => this.contacts());
  public contactDetails = computed(() => this.selectedContact());
  public currentListIndex: WritableSignal<number> = signal(-1);

  destroy() {
    this.contacts.set([]);
    this.selectedContact.set(null);
    this.errors.set(null);
    this.currentListIndex.set(-1);
  }

  initials(contact: { first_name: string; surname: string; [key: string]: any }): string {
    return (contact.first_name.trim().charAt(0).toUpperCase() +
      contact.surname.trim().charAt(0).toUpperCase());
  }

  async initList(): Promise<any[]> {
    const data = await this.backend.get<any[]>('contacts/');
    if (data) this.contacts.set(data);
    return this.contacts();
  }

  async selectContactById(id: number): Promise<void> {
    const data = await this.backend.get<any>(`contacts/${id}/`);
    if (data) this.selectedContact.set(data);
  }

  async createContact(contactDetails: object): Promise<boolean> {
    const newContactDetails = { ...contactDetails, badge_color: this.getRandomBadgeColor() };
    try {
      const response = await this.backend.post<any>('contacts/', newContactDetails);
      const newContactList = [...this.contacts(), response].sort((a, b) =>
        a.first_name.localeCompare(b.first_name) || a.surname.localeCompare(b.surname)
      );
      this.contacts.set(newContactList);
      this.currentListIndex.set(newContactList.findIndex(contact => contact.id === response.id));
      this.selectedContact.set(response)
      return true;
    } catch (error: any) {
      this.handleValidationErrors(error.error ?? {'unknown': 'unspecified error occurred'});
      return false;
    }
  }

  async editContact(contactDetails: object, id: number): Promise<boolean> {
    try {
      const response = await this.backend.patch<any>(`contacts/${id}/`, contactDetails);
      const updateContacts = this.contacts().map(contact => contact.id === id ? { ...contact, ...response } : contact);
      this.contacts.set(updateContacts);
      this.selectedContact.set({ ...this.selectedContact(), ...response });
      return true;
    } catch (error: any) {
      this.handleValidationErrors(error.error ?? {'unknown': 'unspecified error occurred'});
      return false;
    }
  }

  async deleteContact(contactId: number): Promise<void> {
    try {
      const response = await this.backend.delete<any>(`contacts/${contactId}/`);
      this.contacts.update(contacts => contacts.filter(contact => contact.id !== contactId));
      this.currentListIndex.set(-1);
      this.selectedContact.set(null);
    } catch (error: any) {
      throw error.error;
    }
  }

  private handleValidationErrors(errors: Record<string, string[]>) {
    for (const [field, message] of Object.entries(errors)) {
      console.warn(`Error at ${field}: ${message}`);
    }
    this.errors.set(errors);
  }

  private getRandomBadgeColor() {
    const validColors = ['#FF7A00', '#FF5EB3', '#6E52FF', '#9327FF', '#00BEE8', '#1FD7C1', '#FF745E', '#FFA35E', '#FC71FF', '#FFC701', '#0038FF', '#C3FF2B', '#FFE62B', '#FF4646', '#FFBB2B'];
    const index = Math.floor(Math.random()*(validColors.length));

    return validColors[index];
  }

}
