import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Output() onPais:EventEmitter<string> = new EventEmitter<string>();
  paisActivo:string = 'todos';

  classActivo(country:string):boolean{
    return this.paisActivo === country;
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

  selectedCountry( pais: string ){
    if( this.paisActivo === pais ){
      return;
    }
    this.paisActivo = pais;    
    this.onPais.emit( pais );
  }

}
