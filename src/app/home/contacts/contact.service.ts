import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private displayPopup = signal(false);
  public popupStatus = computed(() => this.displayPopup());

  constructor() { }

  showPopup(status: boolean){
    this.displayPopup.set(status);
  }
}
