import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalLinkComponent } from './legal-link.component';
import { provideRouter } from '@angular/router';

describe('LegalLinkComponent', () => {
  let component: LegalLinkComponent;
  let fixture: ComponentFixture<LegalLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalLinkComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
