import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, ElementRef, EventEmitter, HostListener, inject, Output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CategoriesService} from "../../../shared/services/backend/categories.service";

@Component({
  selector: 'tag-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './tag-selector.component.html',
  styleUrl: './tag-selector.component.scss',
})
export class TagSelectorComponent {
  isFocused = false;

  protected categories: CategoriesService = inject(CategoriesService);

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.categories.getList();
  }

  setFocus(value: boolean) {
    this.isFocused = value;
  }

  updateCategory(id: number, index: number) {
    this.categories.selectedCategory.set({'id': id, 'position': index});
    this.setFocus(false);
  }

  tagSelectorState() {
    const currentIndex = this.categories.selectedCategory().position;
    if (currentIndex === 0) {}
    const currentCategory = currentIndex === 0 ? 'Nothing' : this.categories.list()[currentIndex]['name'];
    return this.isFocused ? `Close Tag-Selector; ${currentCategory} is chosen` : `Open Tag-Selector; ${currentCategory} is chosen`;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.setFocus(false);
    }
  }
}
