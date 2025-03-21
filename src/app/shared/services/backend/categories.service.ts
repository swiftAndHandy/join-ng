import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {BackendService} from "./backend.service";

export interface CategorySelector {
  "id": number,
  "position": number
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BackendService {

  private backend: BackendService = inject(BackendService);

  public list: WritableSignal<{ [key: string]: any }[]> = signal([{'id': 0, 'name': 'Select task category'}])

  public selectedCategory: WritableSignal<CategorySelector> = signal<CategorySelector>({id: 0, position: 0});

  destroy() {
    this.list.set([{'id': 0, 'name': 'Select task category'}])
    this.selectedCategory.set({id: 0, position: 0});
  }


  async getList(): Promise<any[]> {
    const data = await this.backend.get<any[]>('categories/');
    if (data) this.list.set([...this.list(), ...data]);
    return this.list();
  }
}
