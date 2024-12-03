import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { JoinHeaderComponent } from '../shared/join-header/join-header.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, JoinHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
