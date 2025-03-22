import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSelectorComponent } from './person-selector.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('PersonSelectorComponent', () => {
  let component: PersonSelectorComponent;
  let fixture: ComponentFixture<PersonSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [PersonSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
