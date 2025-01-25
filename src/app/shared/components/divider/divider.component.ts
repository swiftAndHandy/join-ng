import { Component, Input } from '@angular/core';

@Component({
  selector: 'divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
})
export class DividerComponent {
  @Input() flow: 'horizontal' | 'vertical' = 'horizontal';
  @Input() size: number = 100;
}
