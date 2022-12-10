import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresoComponent } from './egreso/egreso.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VerEgresosComponent } from './ver-egresos/ver-egresos.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';

const routes: Routes = [

  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'egreso',
    component: EgresoComponent
  },
  {
    path: 'ver_usuarios',
    component: VerUsuariosComponent
  },
  {
    path: 'ver_egresos',
    component: VerEgresosComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
