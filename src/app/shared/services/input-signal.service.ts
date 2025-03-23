import {Injectable, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputSignalService {

  constructor() { }

  setInputElement(event: Event, targetSignal: WritableSignal<string|number>) {
    const input = event.target as HTMLInputElement;
    targetSignal.set(input.value);
  }

  updateInputElement(event: Event, targetSignal: WritableSignal<any>, key: string) {
    const input = event.target as HTMLInputElement;
    targetSignal.update(values => this.setNestedValue({ ...values }, key, input.value));
  }

  private setNestedValue(obj: any, path: string, value: any): any {
    const keys = path.split('.');
    let current = obj;

    keys.slice(0, -1).forEach(key => {
      if (!current[key] || typeof current[key] !== 'object') {
        current[key] = {};
      }
      current = current[key];
    });

    current[keys[keys.length - 1]] = value;
    return obj;
  }
}
