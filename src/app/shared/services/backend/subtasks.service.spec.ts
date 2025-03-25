import { TestBed } from '@angular/core/testing';

import { SubtasksEditService } from './subtask.service';
import {provideHttpClient} from "@angular/common/http";

describe('SubtasksEditService', () => {
  let service: SubtasksEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ]
    });
    service = TestBed.inject(SubtasksEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
