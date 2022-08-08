import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './vista/inicio/inicio.component';
import { NuevoComponent } from './vista/nuevo/nuevo.component';
import { EditarComponent } from './vista/editar/editar.component';

const routes: Routes = [
{path:'', redirectTo:'inicio', pathMatch:'full'},
{path:'inicio', component:InicioComponent},
{path:'nuevo', component:NuevoComponent},
{path:'editar',component:EditarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
