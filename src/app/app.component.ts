import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding: 20px;">
      <h1>Sistema de Turnos - Laboratorio</h1>
      <nav style="margin: 20px 0;">
        <a routerLink="/pacientes" style="margin-right: 15px;">Pacientes</a>
        <a routerLink="/turnos" style="margin-right: 15px;">Turnos</a>
        <a routerLink="/sucursales" style="margin-right: 15px;">Sucursales</a>
        <a routerLink="/obras-sociales">Obras Sociales</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
