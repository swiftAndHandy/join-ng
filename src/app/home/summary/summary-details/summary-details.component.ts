import { Component } from '@angular/core';
import { SmallSummaryCardComponent } from './summaryCards/small-summary-card/small-summary-card.component';
import { LargeSummaryCardComponent } from './summaryCards/large-summary-card/large-summary-card.component';
import { MediumSummaryCardComponent } from './summaryCards/medium-summary-card/medium-summary-card.component';

@Component({
  selector: 'summary-details',
  standalone: true,
  imports: [
    SmallSummaryCardComponent,
    LargeSummaryCardComponent,
    MediumSummaryCardComponent,
  ],
  templateUrl: './summary-details.component.html',
  styleUrl: './summary-details.component.scss',
})
export class SummaryDetailsComponent {}
