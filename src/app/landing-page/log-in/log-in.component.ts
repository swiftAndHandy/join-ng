import { Component } from '@angular/core';
import { TextInputComponent } from '../../shared/components/inputs/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DividerComponent } from '../../shared/components/divider/divider.component';

@Component({
  selector: 'log-in',
  standalone: true,
  imports: [
    TextInputComponent,
    CommonModule,
    ButtonComponent,
    DividerComponent,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
}
