import {Component, input} from '@angular/core';

type DividerFlow = 'horizontal' | 'vertical';

@Component({
  selector: 'divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
})
export class DividerComponent {
  flow = input<DividerFlow>('horizontal');
  size = input<number>(100);
}
