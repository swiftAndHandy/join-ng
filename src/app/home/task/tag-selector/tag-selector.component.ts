import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tag-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tag-selector.component.html',
  styleUrl: './tag-selector.component.scss',
})
export class TagSelectorComponent {
  isFocused = false;
  categories: string[] = [
    'Select task category',
    'Technical Task',
    'User Story',
  ];
  selectedCategory: number = 0;

  constructor(private elRef: ElementRef) {}

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
