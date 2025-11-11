import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:8080/api/paciente'; // ajustar si es otro puerto

  private pacientesSeed: any[] = [
    { id: 101, nombre: 'Juan', apellido: 'Pérez', dni: '30111222', obraSocialId: 1 },
    { id: 102, nombre: 'María', apellido: 'González', dni: '28999888', obraSocialId: 2 },
    { id: 103, nombre: 'Carlos', apellido: 'Fernández', dni: '33222444', obraSocialId: 3 }
  ];

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(() => of(this.pacientesSeed))
    );
  }

  getPaciente(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of(this.pacientesSeed.find(p => p.id === id)))
    );
  }

  crearPaciente(paciente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, paciente).pipe(
      catchError(() => {
        const mock = { ...paciente, id: Date.now() };
        this.pacientesSeed.push(mock);
        return of(mock);
      })
    );
  }

  actualizarPaciente(paciente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${paciente.id}`, paciente).pipe(
      catchError(() => {
        const idx = this.pacientesSeed.findIndex(p => p.id === paciente.id);
        if (idx !== -1) this.pacientesSeed[idx] = { ...this.pacientesSeed[idx], ...paciente };
        return of(paciente);
      })
    );
  }

  eliminarPaciente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        this.pacientesSeed = this.pacientesSeed.filter(p => p.id !== id);
        return of({});
      })
    );
  }
}
