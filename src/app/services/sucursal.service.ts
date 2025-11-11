import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class SucursalService {
  private apiUrl = 'http://localhost:8080/api/sucursal';

  private sucursalesSeed = [
    { id: 1, nombre: 'Hospital Italiano de Buenos Aires' },
    { id: 2, nombre: 'Sanatorio Güemes' },
    { id: 3, nombre: 'Hospital Alemán' },
    { id: 4, nombre: 'Clínica Bazterrica' },
    { id: 5, nombre: 'Hospital Británico' }
  ];

  constructor(private http: HttpClient) {}
  getSucursales(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(() => of(this.sucursalesSeed))
    );
  }
}
