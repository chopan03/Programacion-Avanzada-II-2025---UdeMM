import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { ObrasocialService } from '../services/obrasocial.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent {
  paciente = { nombre: '', apellido: '', dni: '', obraSocialId: null };
  obrasSociales: any[] = [];
  editId: number | null = null;

  constructor(
    private pacienteService: PacienteService,
    private obrasocialService: ObrasocialService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.obrasocialService.getObrasSociales().subscribe({
      next: (d: any) => this.obrasSociales = d,
      error: (e: any) => console.error('Error al cargar obras sociales', e)
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editId = Number(idParam);
      this.pacienteService.getPaciente(this.editId).subscribe({
        next: (p: any) => {
          if (p) this.paciente = { nombre: p.nombre, apellido: p.apellido, dni: p.dni, obraSocialId: p.obraSocialId };
        }
      });
    }
  }

  guardarPaciente() {
    const action$ = this.editId
      ? this.pacienteService.actualizarPaciente({ ...this.paciente, id: this.editId })
      : this.pacienteService.crearPaciente(this.paciente);

    action$.subscribe({
      next: () => this.router.navigate(['/pacientes']),
      error: (err) => console.error('Error al guardar paciente', err)
    });
  }
}
