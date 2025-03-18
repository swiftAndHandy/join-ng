import { Injectable } from '@angular/core';
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BackendService {

  // async getCategories(): Promise<any> {
  //   return this.fetchData('categories/');
  // }


  // async getCategories(categoryId: number | null = null): Promise<any> {
  //   try {
  //     const response: Response = await fetch(`${this.apiURL}/categories/`);
  //     if (!response.ok) return;
  //     return await response.json();
  //   } catch(error) {
  //     throw error;
  //   }
  // }
}
