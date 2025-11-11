import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ObrasocialService } from './obrasocial.service';

describe('ObrasocialService', () => {
  let service: ObrasocialService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ObrasocialService]
    });
    service = TestBed.inject(ObrasocialService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('getObrasSociales debe hacer GET a /api/obrasocial', () => {
    service.getObrasSociales().subscribe();
    const req = httpMock.expectOne('http://localhost:8080/api/obrasocial');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
