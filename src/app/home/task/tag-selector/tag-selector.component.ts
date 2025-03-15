import { CommonModule } from '@angular/common';
import {Component, ElementRef, HostListener, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BackendService} from "../../../shared/services/backend.service";

@Component({
  selector: 'tag-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tag-selector.component.html',
  styleUrl: './tag-selector.component.scss',
})
export class TagSelectorComponent {
  isFocused = false;
  categories = signal(['Select task category'])
  selectedCategory: number = 0;

  constructor(private elRef: ElementRef, private backend: BackendService) {}

  ngOnInit() {
    this.getCategories();
  }

  async getCategories() {
    const allCategories = await this.backend.getData();
    const categoryNames = allCategories.map((category: any) => category.name);
    this.categories.set([...this.categories(), ...categoryNames]);
  }

  setFocus(value: boolean) {
    this.isFocused = value;
  }

  updateCategory(index: number) {
    this.selectedCategory = index;
    console.log(this.selectedCategory);
    this.setFocus(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.setFocus(false);
    }
  }
}
