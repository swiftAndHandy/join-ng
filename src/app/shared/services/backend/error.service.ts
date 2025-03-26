import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  validateErrors(errors: Record<string, string[]>) {
    for (const [field, message] of Object.entries(errors)) {
      console.warn(`Error at ${field}: ${message}`);
    }
    return errors;
  }

}
