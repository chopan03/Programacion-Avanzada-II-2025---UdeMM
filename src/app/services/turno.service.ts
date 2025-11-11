import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class TurnoService {
  private apiUrl = 'http://localhost:8080/api/turno';
  private turnosSeed: any[] = [];

  constructor(private http: HttpClient) {}
  getTurnos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(() => of(this.turnosSeed))
    );
  }
  crearTurno(turno: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, turno).pipe(
      catchError(() => {
        const mock = { ...turno, id: Date.now() };
        this.turnosSeed.push(mock);
        return of(mock);
      })
    );
  }
  eliminarTurno(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        this.turnosSeed = this.turnosSeed.filter(t => t.id !== id);
        return of({});
      })
    );
  }
}
