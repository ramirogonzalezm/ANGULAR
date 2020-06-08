import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Saludo } from '../model/saludo';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {
  baseURL = 'http://localhost:8080/ServiciosRest-0.0.1-SNAPSHOT';

  constructor(private http:HttpClient) { }

  //metodo para obtener los datos del API
  get_Saludo(): Observable<Saludo>{
    const url = this.baseURL+'/valores';
    return this.http.get<Saludo>(url);
  }
}
