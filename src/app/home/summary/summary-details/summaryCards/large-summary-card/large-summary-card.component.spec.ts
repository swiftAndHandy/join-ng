import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeSummaryCardComponent } from './large-summary-card.component';

describe('LargeSummaryCardComponent', () => {
  let component: LargeSummaryCardComponent;
  let fixture: ComponentFixture<LargeSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
