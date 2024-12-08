import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioButtonsComponent } from './prio-buttons.component';

describe('PrioButtonsComponent', () => {
  let component: PrioButtonsComponent;
  let fixture: ComponentFixture<PrioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrioButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
