import { animation } from '@angular/animations';
import { Component } from '@angular/core';
import { AnimationObject } from '../interfaces/animation-object';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  animationState: AnimationObject | string | null =
    localStorage.getItem('animationState');

  joinAnimationState!: boolean;

  animateJoinLogo() {
    if (this.animationState) {
      this.animationState = JSON.parse(this.animationState as string);
      console.log(this.animationState);
    }
  }

  updateAnimationState() {
    let animationObject: AnimationObject;

    if (this.animationState) {
      animationObject = JSON.parse(this.animationState as string);
    } else {
      animationObject = {
        joinAnimation: true,
        welcomeAnimation: 0,
      };
    }

    localStorage.setItem('animationState', JSON.stringify(animationObject));
  }

  ngOnInit() {
    this.updateAnimationState();
    this.animateJoinLogo();
    if (typeof this.animationState === 'object') {
      if (this.animationState?.joinAnimation) {
        this.joinAnimationState = false;
      } else {
        this.joinAnimationState = true;
      }
    } else {
      this.joinAnimationState = true;
    }
  }
}
