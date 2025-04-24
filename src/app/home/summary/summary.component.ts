import { Component } from '@angular/core';
import { SummaryDetailsComponent } from './summary-details/summary-details.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SummaryDetailsComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  greet() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return 'Good morning\n';
    } else if (hour >= 12 && hour < 17) {
      return 'Hello\n';
    } else if (hour >= 17 && hour < 22) {
      return 'Good evening,\n';
    }
    return 'Good night,\n';
  }

  user() {
    return 'guest'
  }
}
