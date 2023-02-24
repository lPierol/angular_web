import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { Curso } from 'src/app/models/curso';

@Injectable()
export class CursosService {
  private cursos: Curso[] = [
    {
      nombre: 'Bienvenido al hotel', 
      comision: 'Apertura del servidor', 
      profesor: {
        nombre: 'Test',
        correo: 'test@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Proximamente Habbo', 
      comision: 'estamos en mantenimiento', 
      profesor: {
        nombre: 'Test',
        correo: 'test@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'Noticias de GH', 
      comision: 'gran hermano mas fuerte que nunca', 
      profesor: {
        nombre: 'Test',
        correo: 'test@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Clash Royale en Habbo', 
      comision: 'nuevo juego de entretenimiento', 
      profesor: {
        nombre: 'Test',
        correo: 'test@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];
  private cursos$: BehaviorSubject<Curso[]>;

  constructor(){
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  agregarCurso(curso: Curso): void{
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  editarCurso(curso: Curso): void{
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursos[indice] = curso;
      this.cursos$.next(this.cursos);
    }
  }

  eliminarCurso(curso: Curso): void{
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursos.splice(indice, 1);
      this.cursos$.next(this.cursos);
    }
  }
}
