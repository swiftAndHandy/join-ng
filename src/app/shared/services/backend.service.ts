import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiURL = environment.BASE_URL;
  constructor() { }

  async getCategories(categoryId: number | null = null): Promise<any> {
    try {
      const response: Response = await fetch(`${this.apiURL}/categories/`);
      if (!response.ok) return;
      return await response.json();
    } catch(error) {
      throw error;
    }
  }

  async createData() {}

}
