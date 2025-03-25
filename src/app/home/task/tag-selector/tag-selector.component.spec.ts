import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSelectorComponent } from './tag-selector.component';
import {provideHttpClient} from "@angular/common/http";


describe('TagSelectorComponent', () => {
  let component: TagSelectorComponent;
  let fixture: ComponentFixture<TagSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ],
      imports: [TagSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
