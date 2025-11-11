import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TurnoService } from './turno.service';

describe('TurnoService', () => {
  let service: TurnoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TurnoService]
    });
    service = TestBed.inject(TurnoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('getTurnos debe hacer GET a /api/turno', () => {
    service.getTurnos().subscribe();
    const req = httpMock.expectOne('http://localhost:8080/api/turno');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('crearTurno debe hacer POST a /api/turno', () => {
    const turno = { pacienteId: 1 };
    service.crearTurno(turno).subscribe();
    const req = httpMock.expectOne('http://localhost:8080/api/turno');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(turno);
    req.flush({});
  });

  it('eliminarTurno debe hacer DELETE a /api/turno/:id', () => {
    service.eliminarTurno(10).subscribe();
    const req = httpMock.expectOne('http://localhost:8080/api/turno/10');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
