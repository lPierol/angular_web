import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string = "Es una fase beta de Angular";
  variable1: number = 5;
  estudianteActual: Estudiante = {
    nombre: 'Pepe',
    edad: 22,
    estaActivo: true
  };
  listaEstudiantes: Estudiante[] = [
    {
      nombre: 'Fernando',
      edad: 43,
      estaActivo: true
    },
    {
      nombre: 'Camila',
      edad: 24,
      estaActivo: false
    },
    {
      nombre: 'Josefina',
      edad: 33,
      estaActivo: false
    }
  ];

}
