import { Component } from '@angular/core';
import { TextInputComponent } from '../../shared/components/inputs/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import {JoinButtonDirective} from "../../shared/directives/join-button.directive";
import {Router} from "@angular/router";

@Component({
  selector: 'log-in',
  standalone: true,
  imports: [
    TextInputComponent,
    CommonModule,
    ButtonComponent,
    DividerComponent,
    JoinButtonDirective,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  invalidEmail: boolean = false;
  invalidPassword: boolean = false;

  constructor(private router: Router) {
  }

  guestLogin() {
    this.router.navigate(['/home/summary']);
  }
}
