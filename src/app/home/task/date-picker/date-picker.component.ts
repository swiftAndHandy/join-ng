import {Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {TasksService} from "../../../shared/services/backend/tasks.service";

@Component({
  selector: 'date-picker',
  standalone: true,
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  @ViewChild('datePicker') datePicker!: ElementRef;
  @ViewChild('datePickerBtn') datePickerBtn!: ElementRef;

  taskService = inject(TasksService);

  ngOnInit() {}

  dateFieldContent() {
    if (this.taskService.selectedDate() === null) {
      return `dd/mm/yyyy`;
    } else {
      return this.getCurrentDate('ddmmyyyy', '/', this.taskService.selectedDate());
    }
  }

  dateChanged(datePicker: HTMLInputElement) {
    this.taskService.selectedDate.set(datePicker.value)
  }

  getCurrentDate(format: 'yyyymmdd' | 'ddmmyyyy' | 'mmddyyyy' = 'yyyymmdd', separator: '-' | '/' = '-', externalDate: string | null = null) {
    const date = externalDate ? new Date(externalDate) : new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    switch (format) {
      case 'yyyymmdd':
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case 'ddmmyyyy':
        return `${dd}${separator}${mm}${separator}${yyyy}`;
      case 'mmddyyyy':
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }

  openDatePicker() {
    this.datePicker.nativeElement.showPicker();
  }

  @HostListener('document:click', ['$event'])
  closeDatePicker(event: Event) {
    if (
      this.datePicker &&
      !this.datePicker.nativeElement.contains(event.target as Node) &&
      !this.datePickerBtn.nativeElement.contains(event.target as Node)
    ) {
      this.datePicker.nativeElement.style.display = 'none';
      setTimeout(() => {
        this.datePicker.nativeElement.style.display = 'inline-block';
      }, 10)
    }
  }

}
