import { Component, OnInit } from '@angular/core';
import { ObrasocialService } from '../services/obrasocial.service';

@Component({
  selector: 'app-obras-sociales-lista',
  templateUrl: './obras-sociales-lista.component.html',
  styleUrls: ['./obras-sociales-lista.component.css']
})
export class ObrasSocialesListaComponent implements OnInit {
  obras: any[] = [];

  constructor(private obrasService: ObrasocialService) {}

  ngOnInit(): void {
    this.obrasService.getObrasSociales().subscribe({
      next: (d: any) => this.obras = d,
      error: (e: any) => console.error('Error al cargar obras sociales', e)
    });
  }
}
