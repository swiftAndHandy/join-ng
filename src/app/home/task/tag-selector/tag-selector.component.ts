import { CommonModule } from '@angular/common';
import {Component, ElementRef, EventEmitter, HostListener, Output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BackendService} from "../../../shared/services/backend/backend.service";

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

  selectedCategory = signal<number>(0);

  @Output() categorySelected = new EventEmitter<number>();

  constructor(private elRef: ElementRef, private backend: BackendService) {}

  ngOnInit() {
    this.getCategories();
  }

  async getCategories() {
    const allCategories = await this.backend.getCategories();
    const categoryNames = allCategories.map((category: any) => category.name);
    this.categories.set([...this.categories(), ...categoryNames]);
  }

  setFocus(value: boolean) {
    this.isFocused = value;
  }

  updateCategory(index: number) {
    this.selectedCategory.set(index);
    this.categorySelected.emit(this.selectedCategory());
    this.setFocus(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.setFocus(false);
    }
  }
}
