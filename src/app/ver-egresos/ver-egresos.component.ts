import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EgresosService } from '../servicio/egresos.service';

//agregar el servicio

@Component({
  selector: 'app-ver-egresos',
  templateUrl: './ver-egresos.component.html',
  styleUrls: ['./ver-egresos.component.css']
})
export class VerEgresosComponent implements OnInit {
  egreso:any;

  formulario:any;

  constructor(private fb:FormBuilder, private VERegresos:EgresosService) { }

  ngOnInit(): void {
    this.obtener_egresos();
  }

  obtener_egresos(){
    this.VERegresos.obtener_datosEgresos().subscribe(
      (response:any) =>{
        this.egreso = response.egresos;
        console.log(this.egreso)
      },error =>{
        console.log(error)
      }
    )
  }

}
