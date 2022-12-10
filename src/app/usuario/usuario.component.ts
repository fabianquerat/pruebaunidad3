import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formulario:any;
  registro_enviar={
    nombre:null,
    apellido:null,
    rut:null,
    correo:null,
    password:null
  }

  constructor(private fb:FormBuilder, private usuarioSRV:UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(4)]],
      apellido: ['',[Validators.required, Validators.minLength(4)]],
      rut: ['',],
      correo: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    console.log(this.formulario);
  }

  registrar(){
    this.registro_enviar.nombre = this.formularioReactivo.nombre.value
    this.registro_enviar.apellido = this.formularioReactivo.apellido.value
    this.registro_enviar.rut = this.formularioReactivo.rut.value
    this.registro_enviar.correo = this.formularioReactivo.correo.value
    this.registro_enviar.password = this.formularioReactivo.password.value

    this.usuarioSRV.crear_datosUsuarios(this.registro_enviar).subscribe(
      (response:any) =>{
        console.log(response.usuario);
      },error => {
        console.log(error)
      }
    )
  }
}


