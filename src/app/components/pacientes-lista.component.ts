import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../services/paciente.service';
import { ObrasocialService } from '../services/obrasocial.service';

@Component({
  selector: 'app-pacientes-lista',
  templateUrl: './pacientes-lista.component.html',
  styleUrls: ['./pacientes-lista.component.css']
})
export class PacientesListaComponent implements OnInit {
  pacientes: any[] = [];
  obrasSociales: any[] = [];

  constructor(private pacienteService: PacienteService, private obrasocialService: ObrasocialService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.obrasocialService.getObrasSociales().subscribe({ next: (d: any) => this.obrasSociales = d });
    this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.pacienteService.getPacientes().subscribe({
      next: (data: any) => this.pacientes = data,
      error: (err: any) => console.error('Error al cargar pacientes', err)
    });
  }

  eliminarPaciente(id: number) {
    if (confirm('¿Seguro que desea eliminar este paciente?')) {
      this.pacienteService.eliminarPaciente(id).subscribe(() => {
        this.pacientes = this.pacientes.filter(p => p.id !== id);
      });
    }
  }

  getObraSocialNombre(id: number | null | undefined): string {
    if (!id) return '';
    const os = this.obrasSociales.find(x => x.id === id);
    return os ? os.nombre : `OS #${id}`;
  }
}
