import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesListaComponent } from './components/pacientes-lista.component';
import { PacienteFormComponent } from './components/paciente-form.component';
import { TurnosListaComponent } from './components/turnos-lista.component';
import { TurnoFormComponent } from './components/turno-form.component';
import { SucursalesListaComponent } from './components/sucursales-lista.component';
import { ObrasSocialesListaComponent } from './components/obras-sociales-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesListaComponent,
    PacienteFormComponent,
    TurnosListaComponent,
    TurnoFormComponent,
    SucursalesListaComponent,
    ObrasSocialesListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
