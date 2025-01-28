import { CommonModule } from '@angular/common';
import { Component, input, Input, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() name: string = '';
  @Input() ariaLabel: string = '';
  @Input() ariaHidden: boolean = false;
  @Input() icon: string = '';
  @Input() size: number = 24;
  @Input() placeholder: string = '';
  @Input() error: boolean = false;
  @Input() autocomplete: string = '';
  textValue: string = '';
  isHidden = true;

  constructor(private renderer: Renderer2) {}

  get type(): string {
    if (this.icon === 'lock' && this.isHidden) {
      return 'password';
    }
    return 'text';
  }

  toggleVisibility(inputElement: HTMLInputElement) {
    this.isHidden = !this.isHidden;
    this.setFocus(inputElement);
  }

  setFocus(inputElement: HTMLInputElement) {
    this.renderer.selectRootElement(inputElement).focus();
  }
}
