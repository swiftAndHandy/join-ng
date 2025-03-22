import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPersonsComponent } from './selected-persons.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('SelectedUsersComponent', () => {
  let component: SelectedPersonsComponent;
  let fixture: ComponentFixture<SelectedPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [SelectedPersonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
