import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskFormComponent } from './subtask-form.component';
import {provideHttpClient} from "@angular/common/http";

describe('SubtaskFormComponent', () => {
  let component: SubtaskFormComponent;
  let fixture: ComponentFixture<SubtaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ],
      imports: [SubtaskFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
