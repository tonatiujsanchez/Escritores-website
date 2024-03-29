import { Injectable } from '@angular/core';
import { LIBROS } from '../../app/db/libros.db'
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  librosById( idEscritor:number ):Promise<Libro[]>{
    return new Promise( (resolve, reject)=>{
      resolve( LIBROS.filter( libro => libro.escritor === idEscritor ) )
    });
  }

}
