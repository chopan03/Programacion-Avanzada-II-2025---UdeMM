import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurnoService } from '../services/turno.service';
import { PacienteService } from '../services/paciente.service';
import { SucursalService } from '../services/sucursal.service';

@Component({
  selector: 'app-turno-form',
  templateUrl: './turno-form.component.html',
  styleUrls: ['./turno-form.component.css']
})
export class TurnoFormComponent implements OnInit {
  pacientes: any[] = [];
  sucursales: any[] = [];
  turno = { pacienteId: null as number | null, sucursalId: null as number | null, fecha: '' };

  constructor(
    private turnoService: TurnoService,
    private pacienteService: PacienteService,
    private sucursalService: SucursalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe({ next: (d: any) => this.pacientes = d });
    this.sucursalService.getSucursales().subscribe({ next: (d: any) => this.sucursales = d });
  }

  guardarTurno() {
    this.turnoService.crearTurno(this.turno).subscribe({
      next: () => this.router.navigate(['/turnos'])
    });
  }
}
