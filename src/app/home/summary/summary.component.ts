import {afterNextRender, Component, effect, ElementRef, inject, signal, viewChild} from '@angular/core';
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
    effect(() => {
      const totalHeight = this.viewport.innerHeight();
      const maxSummaryHeight = totalHeight - this.viewport.headerSize() - this.viewport.footerSize();
      const headlineHeight = this.headlineRef()?.nativeElement.offsetHeight || 0;
      const maxCardsHeight = maxSummaryHeight - headlineHeight;
      this.remainingHeight.set(maxCardsHeight - 40);
    }, {allowSignalWrites: true});
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
