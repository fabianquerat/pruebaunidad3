import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicio/usuario.service';


@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  usuario:any

  constructor(private usuarioSrv: UsuarioService) { }

  ngOnInit(): void {
    this.obtener_usuarios();
  }

  obtener_usuarios(){
    this.usuarioSrv.obtener_datosUsuarios().subscribe(
      (response:any) =>{
        this.usuario = response.usuarios;
        console.log(this.usuario)
      },error =>{
        console.log(error)
      }
    )
  }

}
