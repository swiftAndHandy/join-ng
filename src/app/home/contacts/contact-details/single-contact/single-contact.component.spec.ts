import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContactComponent } from './single-contact.component';
import {provideHttpClient} from "@angular/common/http";


describe('SingleContactComponent', () => {
  let component: SingleContactComponent;
  let fixture: ComponentFixture<SingleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ],
      imports: [SingleContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
