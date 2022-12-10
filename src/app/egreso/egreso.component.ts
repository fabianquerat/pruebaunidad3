import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from '../servicio/egresos.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  formulario:any;
  registro_enviar={
    descripcion:null,
    precio:null,
    id_usuario:null
  }

  constructor(private fb:FormBuilder, private egresoSRV:EgresosService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      descripcion: ['',Validators.required],
      precio: ['',Validators.pattern(/^([0-9])*$/)],
      id_usuario: ['',Validators.required]
    })
  }

  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    console.log(this.formulario);
  }

  enviarDatos(){
    this.registro_enviar.descripcion = this.formularioReactivo.descripcion.value
    this.registro_enviar.precio = this.formularioReactivo.precio.value
    this.registro_enviar.id_usuario = this.formularioReactivo.id_usuario.value

    this.egresoSRV.crear_datosEgreso(this.registro_enviar).subscribe(
      (response:any) =>{
        console.log(response.egreso);
      },error => {
        console.log(error)
      }
    )
  }



}
