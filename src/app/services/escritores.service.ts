import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db'
import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll():Promise<Escritor[]> {
    return new Promise( ( resolve, reject )=>{
      resolve(ESCRITORES);
    }); 
  }

  getByCountry( pais:string ): Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
      resolve( ESCRITORES.filter( escritor => escritor.pais ===  pais) );
    });
  }

  getById( idEscritor:number ):Promise<Escritor>{
    return new Promise((resolve, reject)=>{
      resolve( ESCRITORES.filter( escritor => escritor.id === idEscritor )[0] );
    });
  }


}
