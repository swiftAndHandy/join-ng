import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContactBodyComponent } from './single-contact-body.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('SingleContactBodyComponent', () => {
  let component: SingleContactBodyComponent;
  let fixture: ComponentFixture<SingleContactBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [SingleContactBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleContactBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
