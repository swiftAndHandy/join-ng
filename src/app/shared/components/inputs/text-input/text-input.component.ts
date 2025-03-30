import { CommonModule } from '@angular/common';
import {afterNextRender, Component, input, Input, Renderer2, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  name = input<string>('');
  ariaLabel = input<string>('');
  ariaHidden = input<boolean>(false);
  icon = input<string>('');
  size = input<number>(24);
  placeholder = input<string>('');
  error = input<boolean>(false);
  autocomplete = input<string>('');
  textValue = signal<string>('');
  isHidden = input<boolean>(true);
  #isHidden= signal<boolean>(true);

  constructor(private renderer: Renderer2) {
    afterNextRender(() => this.#isHidden.set(this.isHidden()));
  }

  get type(): string {
    if (this.icon() === 'lock' && this.#isHidden()) {
      return 'password';
    }
    return 'text';
  }

  toggleVisibility(inputElement: HTMLInputElement) {
    this.#isHidden.set(!this.#isHidden());
    this.setFocus(inputElement);
  }

  setFocus(inputElement: HTMLInputElement) {
    this.renderer.selectRootElement(inputElement).focus();
  }

  updateTextValue($event: any) {
    this.textValue.set($event);
  }
}
