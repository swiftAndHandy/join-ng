import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumSummaryCardComponent } from './medium-summary-card.component';

describe('MediumSummaryCardComponent', () => {
  let component: MediumSummaryCardComponent;
  let fixture: ComponentFixture<MediumSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tasks', [{}]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
