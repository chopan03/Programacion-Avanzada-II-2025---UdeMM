import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ObrasocialService {
  private apiUrl = 'http://localhost:8080/api/obrasocial';

  private obrasSocialesSeed = [
    { id: 1, nombre: 'OSDE' },
    { id: 2, nombre: 'Swiss Medical' },
    { id: 3, nombre: 'Galeno' },
    { id: 4, nombre: 'Accord Salud' },
    { id: 5, nombre: 'Medicus' }
  ];

  constructor(private http: HttpClient) {}

  getObrasSociales(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(() => of(this.obrasSocialesSeed))
    );
  }
}
