import {Component, effect, ElementRef, HostListener, inject, signal, WritableSignal} from '@angular/core';
import { SelectedPersonsComponent } from '../selected-persons/selected-persons.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputSignalService} from "../../../shared/services/input-signal.service";
import {TasksService} from "../../../shared/services/backend/tasks.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

interface CustomSVG {
    size: number,
    rect: {
      size: number,
      strokeColor: string
    },
    html: string | null
}

interface AssignedPerson {
  id: number,
  first_name: string,
  surname: string,
  selected: boolean,
  email: string,
}

@Component({
  selector: 'person-selector',
  standalone: true,
  imports: [CommonModule, SelectedPersonsComponent, FormsModule, NgOptimizedImage],
  templateUrl: './person-selector.component.html',
  styleUrl: './person-selector.component.scss',
})
export class PersonSelectorComponent {
  protected taskService: TasksService = inject(TasksService);
  protected inputSignal: InputSignalService = inject(InputSignalService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  protected checkboxAnimationId = signal(-1);
  private checkboxAnimationTimeoutId: any;

  searchTerm: WritableSignal<string> = signal('');
  isFocused = false;

  constructor(private elRef: ElementRef) {
    effect(() => {
      this.searchTermChanged();
    }, { allowSignalWrites: true });
  }

  searchTermChanged() {
    this.filterUsers();
  }

  async ngOnInit() {
    await this.taskService.contacts.initList();
    this.modifyContactsToAssignedPersons();
  }

  setFocus(value: boolean) {
    this.isFocused = value;
  }

  modifyContactsToAssignedPersons() {
    this.taskService.assigned.set(this.taskService.contacts.list().map(contact => ({ ...contact, selected: false, filtered: true })));
  }

  filterUsers() {
    const search = this.searchTerm().toLowerCase();

    this.taskService.assigned.update(contacts =>
      contacts.map(contact => ({
        ...contact,
        filtered: `${contact.first_name} ${contact.surname}`.toLowerCase().includes(search) ||
          contact.email.toLowerCase().includes(search)
      }))
    );
  }

  toggleAssignedPerson(contactId: number) {
    this.taskService.assigned.update(contacts =>
      contacts.map(contact =>
        contact.id === contactId ? { ...contact, selected: !contact.selected } : contact
      )
    );
    this.checkboxAnimationId.set(contactId);
  }

  ariaForSelectedPersons(person: AssignedPerson): string {
    if(person.selected) return `Remove ${person.first_name} ${person.surname} from assigned persons`;
    return `Assign task to ${person.first_name} ${person.surname}`;
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key !== 'Tab') this.isFocused = true;
  }

  displayPersonDetails(person: AssignedPerson): string {
    const personFullName = `${person.first_name} ${person.surname}`.trim();
    const searchTerm = this.searchTerm().trim();

    if (!searchTerm) return `${person.first_name} ${person.surname}`;

    const highlight = (text: string) => {
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      return text.replace(regex, '<span class="highlight__search">$1</span>');
    }

    const highlightedName = highlight(personFullName);
    return highlightedName === personFullName ? `${highlight(person.email.trim())}` : highlightedName;
  }

  drawCheckboxSvg(person: AssignedPerson): SafeHtml {
    let svg: CustomSVG = {
      size: 24,
      rect: {
        size: 16,
        strokeColor: '#2a3547'
      },
      html: null
    }
    this.cancelTimeout();
    if (person.selected) {
      svg.html = this.displayActiveCheckbox(svg, person);
    } else {
      svg.html = this.displayRegularCheckbox(svg, person);
          }
    this.startTimeout();
    return this.sanitizer.bypassSecurityTrustHtml(svg.html);
  }

  startTimeout() {
    if (this.checkboxAnimationTimeoutId) {
      clearTimeout(this.checkboxAnimationTimeoutId);
    }
    this.checkboxAnimationTimeoutId = setTimeout(() => {
      this.checkboxAnimationId.set(-1);
    }, 1000)
  }

  cancelTimeout() {
    if (this.checkboxAnimationTimeoutId) {
      clearTimeout(this.checkboxAnimationTimeoutId);
      this.checkboxAnimationTimeoutId = null;
    }
  }

  displayActiveCheckbox(svg: CustomSVG, person: AssignedPerson) {
    let animation: string | null = null;
    if (this.checkboxAnimationId() === person.id) animation = 'checkmark';
    return `
        <svg viewBox="0 0 ${svg.size} ${svg.size}">
          <path d="M17.6821 8.39673V14.3967C17.6821 16.0536 16.339 17.3967 14.6821 17.3967H4.68213C3.02527 17.3967 1.68213 16.0536 1.68213 14.3967V4.39673C1.68213 2.73987 3.02527 1.39673 4.68213 1.39673H12.6821" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path class="${animation}" d="M5.68213 9.39673L9.68213 13.3967L17.6821 1.89673" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
  }

  displayRegularCheckbox(svg: CustomSVG, person: AssignedPerson) {
    return `
        <svg viewBox="0 0 ${svg.size} ${svg.size}">
            <rect x="${(svg.size - svg.rect.size)/2}" y="${(svg.size - svg.rect.size)/2}" rx="2" ry="2" width="${svg.rect.size}" height="${svg.rect.size}" style="fill:none;stroke:${svg.rect.strokeColor};stroke-width:2;opacity:1" />
        </svg>`;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) this.setFocus(false);
  }
}
