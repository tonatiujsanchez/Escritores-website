import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscritoresComponent } from './pages/lista-escritores/lista-escritores.component';
import { EscritorDetalleComponent } from './pages/escritor-detalle/escritor-detalle.component';
import { LibrosComponent } from './pages/libros/libros.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'escritores'  },
  { path: 'escritores', component: ListaEscritoresComponent },
  { path: 'escritor-detalle/:idEscritor', component: EscritorDetalleComponent,
    children:[
      { path: 'libros', component: LibrosComponent }
    ]
  },
  { path: '**', redirectTo: 'escritores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
