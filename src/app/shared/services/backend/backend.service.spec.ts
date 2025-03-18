import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BackendService } from './backend.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('BackendService', () => {
  let service: BackendService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BackendService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(BackendService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data from API', fakeAsync(() => {
    const dummyData = [{ id: 1, first_name: 'Andre', surname: 'Veltens' }];

    service.get<any[]>('contacts/').then(data => {
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/api/contacts/');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);

    tick();

    httpMock.verify();
  }));
});
