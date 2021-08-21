import { Component, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from '../../services/escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {
  
  arrEscritores: Escritor[] = [];
  
  constructor(
    private _escritores: EscritoresService
  ) { }

  async ngOnInit() {
    this.arrEscritores = await this._escritores.getAll();
  }

  async filtrarPaises( pais:string ){
    if( pais === 'todos' ){
      this.arrEscritores = await this._escritores.getAll();
    }else{
      this.arrEscritores = await this._escritores.getByCountry( pais );  
    }
  }

}
