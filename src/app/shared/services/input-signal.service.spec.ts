import { TestBed } from '@angular/core/testing';

import { InputSignalService } from './input-signal.service';

describe('InputSignalService', () => {
  let service: InputSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
