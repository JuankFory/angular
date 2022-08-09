import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './vista/inicio/inicio.component';
import { NuevoComponent } from './vista/nuevo/nuevo.component';
import { EditarComponent } from './vista/editar/editar.component';
import { DatosComponent } from './modelos/datos/datos.component';
import { ApiService } from './servicio/api/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NuevoComponent,
    EditarComponent,
    DatosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
