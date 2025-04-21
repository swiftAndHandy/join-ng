import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DimmerService {

  #active = signal<boolean>(false);
  isActive = this.#active.asReadonly();

  constructor() { }

  activate() {
    this.#active.set(true);
  }

  deactivate() {
    this.#active.set(false);
  }
}
