import { Component } from '@angular/core';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../../shared/components/inputs/text-input/text-input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [
    DividerComponent,
    CommonModule,
    TextInputComponent,
    ButtonComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  invalidEmail: boolean = false;
  invalidName: boolean = false;
  invalidPassword: boolean = false;
}
