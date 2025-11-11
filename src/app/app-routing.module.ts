import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesListaComponent } from './components/pacientes-lista.component';
import { PacienteFormComponent } from './components/paciente-form.component';
import { TurnosListaComponent } from './components/turnos-lista.component';
import { TurnoFormComponent } from './components/turno-form.component';
import { SucursalesListaComponent } from './components/sucursales-lista.component';
import { ObrasSocialesListaComponent } from './components/obras-sociales-lista.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesListaComponent },
  { path: 'pacientes/nuevo', component: PacienteFormComponent },
  { path: 'pacientes/editar/:id', component: PacienteFormComponent },
  { path: 'turnos', component: TurnosListaComponent },
  { path: 'turnos/nuevo', component: TurnoFormComponent },
  { path: 'sucursales', component: SucursalesListaComponent },
  { path: 'obras-sociales', component: ObrasSocialesListaComponent },
  { path: '', redirectTo: '/pacientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
