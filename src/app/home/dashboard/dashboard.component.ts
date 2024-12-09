import { Component } from '@angular/core';
import {
  ButtonComponent,
  ButtonSymbol,
} from '../../shared/components/button/button.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [ButtonComponent, SearchbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  ButtonSymbol = ButtonSymbol;
  categories = ['To do', 'In progress', 'Await feedback', 'Done'];
}
