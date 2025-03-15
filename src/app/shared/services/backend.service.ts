import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiURL = environment.BASE_URL;
  constructor() { }

  async getData() {
    try {
      const response: Response = await fetch(`${this.apiURL}/categories/`);
      if (!response.ok) return;
      return await response.json();
    } catch(error) {
      console.error(error);
      throw error;
    }
  }

}
