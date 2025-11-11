import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../services/turno.service';
import { PacienteService } from '../services/paciente.service';
import { SucursalService } from '../services/sucursal.service';

@Component({
  selector: 'app-turnos-lista',
  templateUrl: './turnos-lista.component.html',
  styleUrls: ['./turnos-lista.component.css']
})
export class TurnosListaComponent implements OnInit {
  turnos: any[] = [];
  pacientes: any[] = [];
  sucursales: any[] = [];

  constructor(
    private turnoService: TurnoService,
    private pacienteService: PacienteService,
    private sucursalService: SucursalService
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.pacienteService.getPacientes().subscribe({ next: (d: any) => this.pacientes = d });
    this.sucursalService.getSucursales().subscribe({ next: (d: any) => this.sucursales = d });
    this.cargarTurnos();
  }

  cargarTurnos(): void {
    this.turnoService.getTurnos().subscribe({
      next: (data: any) => this.turnos = data,
      error: (err: any) => console.error('Error al cargar turnos', err)
    });
  }

  eliminarTurno(id: number) {
    if (confirm('¿Seguro que desea eliminar este turno?')) {
      this.turnoService.eliminarTurno(id).subscribe(() => {
        this.turnos = this.turnos.filter(t => t.id !== id);
      });
    }
  }

  getPacienteNombre(id: number | null | undefined): string {
    if (!id) return '';
    const p = this.pacientes.find(x => x.id === id);
    return p ? `${p.nombre} ${p.apellido}` : `Paciente #${id}`;
  }

  getSucursalNombre(id: number | null | undefined): string {
    if (!id) return '';
    const s = this.sucursales.find(x => x.id === id);
    return s ? s.nombre : `Sucursal #${id}`;
  }
}
