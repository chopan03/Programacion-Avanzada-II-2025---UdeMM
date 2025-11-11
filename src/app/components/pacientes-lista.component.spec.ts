import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PacientesListaComponent } from './pacientes-lista.component';
import { PacienteService } from '../services/paciente.service';

describe('PacientesListaComponent', () => {
  let component: PacientesListaComponent;
  let fixture: ComponentFixture<PacientesListaComponent>;

  const mockService = {
    getPacientes: () => of([{ id: 1, nombre: 'Juan' }]),
    eliminarPaciente: () => of({})
  } as Partial<PacienteService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacientesListaComponent],
      providers: [{ provide: PacienteService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe cargar pacientes en ngOnInit', () => {
    expect(component.pacientes.length).toBe(1);
    expect(component.pacientes[0].nombre).toBe('Juan');
  });
});
