import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesComponent } from './quienes/quienes.component';
import { DesparasitacionComponent } from './desparasitacion/desparasitacion.component';
import { EsteticaComponent } from './estetica/estetica.component';
import { HomeComponent } from './home/home.component';
import { QuirofanoComponent } from './quirofano/quirofano.component';
import { VacunasComponent } from './vacunas/vacunas.component';
import {CatalogoComponent} from './catalogo/catalogo.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'quienes', 
    component: QuienesComponent
  },
  {
    path: 'desparasitacion', 
    component: DesparasitacionComponent
  },
  {
    path: 'estetica', 
    component: EsteticaComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'quirofano', 
    component: QuirofanoComponent
  },
  {
    path: 'vacunas', 
    component: VacunasComponent
  },
  {
    path: 'catalogo', 
    component: CatalogoComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
