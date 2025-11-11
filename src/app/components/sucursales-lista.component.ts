import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../services/sucursal.service';

@Component({
  selector: 'app-sucursales-lista',
  templateUrl: './sucursales-lista.component.html',
  styleUrls: ['./sucursales-lista.component.css']
})
export class SucursalesListaComponent implements OnInit {
  sucursales: any[] = [];

  constructor(private sucursalService: SucursalService) {}

  ngOnInit(): void {
    this.sucursalService.getSucursales().subscribe({
      next: (d: any) => this.sucursales = d,
      error: (e: any) => console.error('Error al cargar sucursales', e)
    });
  }
}
