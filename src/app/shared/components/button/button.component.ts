import { CommonModule } from '@angular/common';
import {Component, ElementRef, input, Input, Renderer2} from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';
export enum ButtonSymbol {
  checkmark = 'checkmark_regular',
  contact = 'person_add',
  cancel = 'cancel_regular',
  unset = 'unset',
  plus = 'add',
}

type ButtonShape = 'regular' | 'circle';
type ButtonPadding = 'small' | 'regular';

@Component({
  selector: 'join-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {

  type = input<ButtonType>('button');
  primary = input<boolean>(true);
  bold = input<boolean>(false);
  add = input<ButtonSymbol>(ButtonSymbol.unset);
  shape = input<ButtonShape>('regular')
  buttonPadding = input<ButtonPadding>('regular');

  get icon(): ButtonSymbol {
    return this.add();
  }
}
