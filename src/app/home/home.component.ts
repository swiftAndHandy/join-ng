import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { JoinHeaderComponent } from '../shared/join-header/join-header.component';
import {ContactsService} from "../shared/services/backend/contacts.service";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, JoinHeaderComponent, NgClass, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
