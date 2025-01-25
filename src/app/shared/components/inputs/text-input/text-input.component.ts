import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() placeholder: string = '';
  textValue: string = '';
}
