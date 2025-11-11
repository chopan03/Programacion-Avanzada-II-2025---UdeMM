import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SucursalService } from './sucursal.service';

describe('SucursalService', () => {
  let service: SucursalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SucursalService]
    });
    service = TestBed.inject(SucursalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('getSucursales debe hacer GET a /api/sucursal', () => {
    service.getSucursales().subscribe();
    const req = httpMock.expectOne('http://localhost:8080/api/sucursal');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
