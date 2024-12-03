import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonStyle = 'primary' | 'secondary';

@Component({
  selector: 'join-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() style: ButtonStyle = 'primary';
}
