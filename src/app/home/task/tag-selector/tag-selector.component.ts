import { CommonModule } from '@angular/common';
import {Component, ElementRef, EventEmitter, HostListener, inject, Output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CategoriesService} from "../../../shared/services/backend/categories.service";

@Component({
  selector: 'tag-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    console.log(this.categories.selectedCategory());
    this.setFocus(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.setFocus(false);
    }
  }
}
