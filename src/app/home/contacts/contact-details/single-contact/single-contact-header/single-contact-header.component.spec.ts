import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContactHeaderComponent } from './single-contact-header.component';
import {provideHttpClient} from "@angular/common/http";


describe('SingleContactHeaderComponent', () => {
  let component: SingleContactHeaderComponent;
  let fixture: ComponentFixture<SingleContactHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ],
      imports: [SingleContactHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleContactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
