import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './vista/inicio/inicio.component';
import { NuevoComponent } from './vista/nuevo/nuevo.component';
import { EditarComponent } from './vista/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NuevoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
