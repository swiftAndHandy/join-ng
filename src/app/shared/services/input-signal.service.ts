import {Injectable, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputSignalService {

  constructor() { }

  updateInputElement(event: Event, targetSignal: WritableSignal<string|number>) {
    const input = event.target as HTMLInputElement;
    targetSignal.set(input.value);
  }
}
