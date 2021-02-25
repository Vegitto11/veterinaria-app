import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DesparasitacionComponent } from './desparasitacion/desparasitacion.component';
import { QuienesComponent } from './quienes/quienes.component';
import { VacunasComponent } from './vacunas/vacunas.component';
import { QuirofanoComponent } from './quirofano/quirofano.component';
import { EsteticaComponent } from './estetica/estetica.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DesparasitacionComponent,
    QuienesComponent,
    VacunasComponent,
    QuirofanoComponent,
    EsteticaComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
