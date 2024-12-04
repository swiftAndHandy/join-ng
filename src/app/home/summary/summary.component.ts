import { Component } from '@angular/core';
import { SummaryDetailsComponent } from './summary-details/summary-details.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SummaryDetailsComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {}
