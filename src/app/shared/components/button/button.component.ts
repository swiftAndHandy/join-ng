import { CommonModule } from '@angular/common';
import {Component, ElementRef, Input, Renderer2} from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';
export enum ButtonSymbol {
  checkmark = 'checkmark_regular',
  contact = 'person_add',
  cancel = 'cancel_regular',
  unset = 'unset',
  plus = 'add',
}

@Component({
  selector: 'join-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {

  @Input() type: ButtonType = 'button';
  @Input() primary: boolean = true;
  @Input() bold: boolean = false;
  @Input() add: ButtonSymbol = ButtonSymbol.unset;
  @Input() shape: 'regular' | 'circle' = 'regular';
  @Input() buttonPadding: 'small' | 'regular' = 'regular';

  get icon(): ButtonSymbol {
    return this.add;
  }
}
