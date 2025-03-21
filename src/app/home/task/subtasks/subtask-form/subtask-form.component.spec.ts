import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskFormComponent } from './subtask-form.component';

describe('SubtaskFormComponent', () => {
  let component: SubtaskFormComponent;
  let fixture: ComponentFixture<SubtaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
