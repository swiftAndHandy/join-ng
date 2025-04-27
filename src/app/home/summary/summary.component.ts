import {afterNextRender, Component, ElementRef, inject, signal, viewChild} from '@angular/core';
import { SummaryDetailsComponent } from './summary-details/summary-details.component';
import {ViewportService} from "../../shared/services/viewport.service";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SummaryDetailsComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  headlineRef = viewChild<ElementRef>('headline');
  summaryRef = viewChild<ElementRef>('summary');
  remainingHeight = signal<number>(0)

  viewport = inject(ViewportService);

  constructor() {
    afterNextRender(() => {
      const totalHeight = this.viewport.innerHeight;
      const maxSummaryHeight = totalHeight - this.viewport.headerSize() - this.viewport.footerSize();
      const headlineHeight = this.headlineRef()?.nativeElement.offsetHeight || 0;

      const maxCardsHeight = maxSummaryHeight - headlineHeight; //this.summaryRef()?.nativeElement.offsetHeight || 0;
      this.remainingHeight.set(maxCardsHeight - 60);
      console.log('Remaining height for cards:', this.remainingHeight());
    })
  }

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
