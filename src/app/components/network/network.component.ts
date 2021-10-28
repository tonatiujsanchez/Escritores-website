import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  networkConnection:string='online';
  alertActive = false;

  constructor() { }

  ngOnInit(): void {
    // Offline: Sin Internet
    fromEvent(window, 'offline')
      .pipe(
        debounceTime(100)
      )
    .subscribe(( event: Event )=>{
      console.log(event);
      this.networkConnection = event.type;
      this.mostarAlerta();
    });

    //Online: Con Internet
    fromEvent( window, 'online' )
      .pipe(
        debounceTime(100)
      )
    .subscribe( (event: Event)=>{
      console.log(event);
      this.networkConnection = event.type;
      this.mostarAlerta();
    })
  }



  mostarAlerta(){
    this.alertActive = true;
    setTimeout(() => {
      this.alertActive = false;
    }, 1500);
  }
}
