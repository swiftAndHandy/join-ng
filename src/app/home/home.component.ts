import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
