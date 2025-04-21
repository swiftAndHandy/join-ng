import {computed, inject, Injectable, signal} from '@angular/core';
import {DimmerService} from "../../shared/services/dimmer.service";

@Injectable({
  providedIn: 'root'
})
export class ContactMenuService {

  private displayPopup = signal(false);
  public createModus = signal(true);
  public editModus = computed(() => !this.createModus());
  public popupStatus = computed(() => this.displayPopup());
  public despawnPopup = signal(false);
  private dimmer = inject(DimmerService);

  constructor() { }

  showPopup(createModus: boolean = true) {
    this.displayPopup.set(true);
    this.createModus.set(createModus);
    this.dimmer.activate();
  }

  hidePopup() {
    this.despawnPopup.set(true);
    this.dimmer.deactivate();
    setTimeout(() => {
      this.displayPopup.set(false);
      this.despawnPopup.set(false);
    }, 250)
  }
}
