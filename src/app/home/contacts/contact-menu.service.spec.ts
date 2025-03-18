import { TestBed } from '@angular/core/testing';

import { ContactMenuService } from './contact-menu.service';

describe('ContactService', () => {
  let service: ContactMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
