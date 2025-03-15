import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

export interface ButtonConfig {
  primary?: boolean;
  bold?: boolean;
  add?: ButtonSymbol;
  shape?: 'regular' |'circle';
  buttonPadding?: 'small' | 'regular';
}

export enum ButtonSymbol {
  checkmark = 'checkmark_regular',
  contact = 'person_add',
  cancel = 'cancel_regular',
  unset = 'unset',
  plus = 'add',
}

@Directive({
  selector: '[joinButton]',
  standalone: true
})
export class JoinButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() joinButton!: ButtonConfig;

  ngOnInit(): void {

  }
}
