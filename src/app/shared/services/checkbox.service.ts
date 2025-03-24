import {Injectable, signal} from '@angular/core';
import { CustomSVG } from "../interfaces/custom-svg.interface";
import { AssignedPerson } from "../interfaces/assigned-person.interface";

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {

  private checkboxAnimationId = signal(-1);

  setCheckboxAnimationElementId(value: number) {
    this.checkboxAnimationId.set(value);
  }

  constructor() { }

  public displayActiveCheckbox(svg: CustomSVG, person: AssignedPerson) {
    let animation: string | null = null;
    if (this.checkboxAnimationId() === person.id) animation = 'checkmark';
    return `
        <svg viewBox="0 0 ${svg.size} ${svg.size}">
        <g transform="translate(0, 2)">
          <path d="M17.6821 8.39673V14.3967C17.6821 16.0536 16.339 17.3967 14.6821 17.3967H4.68213C3.02527 17.3967 1.68213 16.0536 1.68213 14.3967V4.39673C1.68213 2.73987 3.02527 1.39673 4.68213 1.39673H12.6821" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path class="${animation}" d="M5.68213 9.39673L9.68213 13.3967L17.6821 1.89673" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>`
  }

  public displayRegularCheckbox(svg: CustomSVG, person: AssignedPerson) {
    return `
        <svg viewBox="0 0 ${svg.size} ${svg.size}">
            <rect x="${(svg.size - svg.rect.size)/2}" y="${(svg.size - svg.rect.size)/2}" rx="2" ry="2" width="${svg.rect.size}" height="${svg.rect.size}" style="fill:none;stroke:${svg.rect.strokeColor};stroke-width:2;opacity:1" />
        </svg>`;
  }
}
