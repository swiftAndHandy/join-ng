import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDetailsComponent } from './summary-details.component';
import {provideHttpClient} from "@angular/common/http";

describe('SummaryDetailsComponent', () => {
  let component: SummaryDetailsComponent;
  let fixture: ComponentFixture<SummaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ],
      imports: [SummaryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
