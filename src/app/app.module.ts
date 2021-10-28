import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaEscritoresComponent } from './pages/lista-escritores/lista-escritores.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { EscritorDetalleComponent } from './pages/escritor-detalle/escritor-detalle.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { NetworkComponent } from './components/network/network.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEscritoresComponent,
    MenuBarComponent,
    EscritorDetalleComponent,
    LibrosComponent,
    NetworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
