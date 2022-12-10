import { Injectable } from '@angular/core';

//Importando el cliente http
import { HttpClient } from '@angular/common/http';
//FIN Importando el cliente Http

import { environment } from '../../environments/environment';
//FIN Para ruta de nuestro backend

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url_backend = environment.url_backend+"/usuario";

  constructor(private http:HttpClient) { }

  crear_datosUsuarios(datosFormulario:any){
    //Ruta de nuestro backend a cual se le enviará los datos a registrar
    return this.http.post(`${this.url_backend}/crear-usuario`, datosFormulario);

  }

  obtener_datosUsuarios(){
    //Ruta de nuestro backend a cual se le enviará los datos a registrar
    return this.http.get(`${this.url_backend}/obtener-usuarios`);

  }

}
