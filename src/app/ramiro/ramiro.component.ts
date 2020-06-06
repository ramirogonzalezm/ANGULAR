import { Component, OnInit } from '@angular/core';
import { SaludoService} from '../services/saludo.service';
import { Saludo} from '../model/saludo';
import { HttpErrorResponse, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-ramiro',
  templateUrl: './ramiro.component.html',
  styleUrls: ['./ramiro.component.scss']
})
export class RamiroComponent implements OnInit {
  valorservicio: Saludo;

  constructor( private saludoService: SaludoService) { }
  //private saludolist = this.saludoService.get_Saludo();

  ngOnInit(): void {
  }

  getSaludo(){
    console.log('Entraria a la funcion del servicio');
    //alert('ALERTAS DE AVISO');
    this.saludoService.get_Saludo().subscribe((res : Saludo)=>{
      console.log('DATOS CORRECTOS');
      console.log(res);
      this.valorservicio = res;
    },(err: HttpErrorResponse)=>{
      console.log('Ocurrio un error');
      alert(err.message);
      console.log(err.status);
    });

  }

  hacerMayuscula(){
    alert('Consumo de funciones');
  }

}
