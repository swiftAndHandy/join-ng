import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactMenuService {

  private displayPopup = signal(false);
  public createModus = signal(true);
  public popupStatus = computed(() => this.displayPopup());
  public despawnPopup = signal(false);

  constructor() { }

  showPopup(createModus: boolean = true) {
    this.displayPopup.set(true);
    this.createModus.set(createModus);
  }

  hidePopup() {
    this.despawnPopup.set(true);
    setTimeout(() => {
      this.displayPopup.set(false);
      this.despawnPopup.set(false);
    }, 250)
  }
}
