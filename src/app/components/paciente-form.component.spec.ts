import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { PacienteFormComponent } from './paciente-form.component';
import { PacienteService } from '../services/paciente.service';
import { ObrasocialService } from '../services/obrasocial.service';

describe('PacienteFormComponent', () => {
  let component: PacienteFormComponent;
  let fixture: ComponentFixture<PacienteFormComponent>;

  const navigateSpy = jasmine.createSpy('navigate');
  const mockService = { crearPaciente: () => of({}) } as Partial<PacienteService>;
  const mockObraSocialService = { getObrasSociales: () => of([]) } as Partial<ObrasocialService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PacienteFormComponent],
      providers: [
        { provide: PacienteService, useValue: mockService },
        { provide: ObrasocialService, useValue: mockObraSocialService },
        { provide: Router, useValue: { navigate: navigateSpy } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('guardarPaciente debe llamar al servicio y navegar', () => {
    component.paciente = { nombre: 'A', apellido: 'B', dni: '1', obraSocialId: null } as any;
    component.guardarPaciente();
    expect(navigateSpy).toHaveBeenCalledWith(['/pacientes']);
  });
});
