import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PacienteService } from './paciente.service';

describe('PacienteService', () => {
  let service: PacienteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PacienteService]
    });
    service = TestBed.inject(PacienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('getPacientes debe hacer GET a /api/paciente', () => {
    const mock = [{ id: 1, nombre: 'Juan' }];
    service.getPacientes().subscribe(data => expect(data).toEqual(mock));
    const req = httpMock.expectOne('http://localhost:8080/api/paciente');
    expect(req.request.method).toBe('GET');
    req.flush(mock);
  });

  it('getPaciente debe hacer GET a /api/paciente/:id', () => {
    service.getPaciente(5).subscribe();
    const req = httpMock.expectOne('http://localhost:8080/api/paciente/5');
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('crearPaciente debe hacer POST a /api/paciente', () => {
    const body = { nombre: 'Ana' };
    service.crearPaciente(body).subscribe();
    const req = httpMock.expectOne('http://localhost:8080/api/paciente');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(body);
    req.flush({});
  });

  it('eliminarPaciente debe hacer DELETE a /api/paciente/:id', () => {
    service.eliminarPaciente(3).subscribe();
    const req = httpMock.expectOne('http://localhost:8080/api/paciente/3');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
