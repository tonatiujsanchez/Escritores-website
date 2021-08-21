import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escritor } from '../../models/escritor.model';
import { EscritoresService } from '../../services/escritores.service';
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-escritor-detalle',
  templateUrl: './escritor-detalle.component.html',
  styleUrls: ['./escritor-detalle.component.css']
})
export class EscritorDetalleComponent implements OnInit {

  escritor: Escritor = {}
  libros: Libro[] = [];
  constructor(
    private activateRouter: ActivatedRoute,
    private _escritores: EscritoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRouter.params
      .subscribe( async({idEscritor})=>{
        this.escritor = await this._escritores.getById( parseInt(idEscritor) );        
      });
  }

  regresar(){
    this.router.navigate(['/libros']);
  }

  verLibros(){
    this.router.navigate(['libros'], {relativeTo: this.activatedRoute});
  }

}
