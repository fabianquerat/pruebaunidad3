import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EgresoComponent } from './egreso/egreso.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { VerEgresosComponent } from './ver-egresos/ver-egresos.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EgresoComponent,
    VerUsuariosComponent,
    VerEgresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
