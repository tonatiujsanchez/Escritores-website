import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../../models/libro.model';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = [];
  constructor(
    private _libros: LibrosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params
      .subscribe( async({idEscritor})=>{
        this.libros = await this._libros.librosById( parseInt(idEscritor) );
      });
  }

}
