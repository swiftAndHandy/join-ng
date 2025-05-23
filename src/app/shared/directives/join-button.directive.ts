import {Directive, ElementRef, HostListener, input, Renderer2} from '@angular/core';

type ButtonConfig = {
  primary?: boolean;
  bold?: boolean;
  shape?: 'regular' |'circle';
  buttonPadding?: 'small' | 'regular';
}

@Directive({
  selector: '[joinButton]',
  standalone: true
})
export class JoinButtonDirective {
  joinButton = input.required<ButtonConfig>({});

  constructor(private el: ElementRef, private renderer: Renderer2) {}


  ngOnInit(): void {
    if (this.joinButton() === undefined) return;
    this.joinButton().primary = this.joinButton().primary ?? true;
    this.joinButton().bold = this.joinButton().bold ?? false;
    this.joinButton().shape = this.joinButton().shape ?? 'regular';
    this.joinButton().buttonPadding = this.joinButton().buttonPadding ?? 'regular';

    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'font-family', 'Inter, sans-serif');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'gap', '0.5rem');
    this.renderer.setStyle(this.el.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '1.3rem');
    this.renderer.setStyle(this.el.nativeElement, 'white-space', 'nowrap');

    if (this.joinButton().bold) this.renderer.setStyle(this.el.nativeElement, 'font-weight', '700');

    if (this.joinButton().buttonPadding === 'regular') {
      this.renderer.setStyle(this.el.nativeElement, 'padding', 'clamp(4px,2dvw, 15px) clamp(2px, 2dvw, 24px');
    } else if (this.joinButton().buttonPadding === 'small') {}

    if (this.joinButton().shape === 'regular') {
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    } else if (this.joinButton().shape === 'circle') {
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '50%');
      this.renderer.setStyle(this.el.nativeElement, 'padding', '12px');
    }

    this.renderDefaultStyle();
  }

  renderDefaultStyle(): void {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'unset');
    if (this.joinButton().primary) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'var(--darkblue)');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'inherit');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'var(--darkblue)');
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid var(--darkblue)');
    }
  }

  @HostListener('mouseup')
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0px 4px 4px 0px #00000040');

    if (this.joinButton().primary) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'var(--lightblue)');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'var(--lightblue)');
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'var(--lightblue)');
    }
  }

  @HostListener('mouseleave')
  resetActiveStyle() {
    this.renderDefaultStyle();
  }

  @HostListener('mousedown') onClick() {
    if (this.joinButton().primary) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'var(--dark-active-blue)');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'var(--dark-active-blue)');
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'var(--dark-active-blue)');
    }
  }
}
