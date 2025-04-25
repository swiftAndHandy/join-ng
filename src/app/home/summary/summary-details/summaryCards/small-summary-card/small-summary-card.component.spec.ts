import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSummaryCardComponent } from './small-summary-card.component';

describe('SmallSummaryCardComponent', () => {
  let component: SmallSummaryCardComponent;
  let fixture: ComponentFixture<SmallSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tasks', [{}]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
