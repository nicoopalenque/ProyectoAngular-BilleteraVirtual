import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const cudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const cudOptionsXWWForm = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
const cudOptionsHtml = {
  headers: new HttpHeaders({ 'Content-Type': 'text/html; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})


export class TitularService {
 
  public urlWallet = 'http://localhost:3000';

  constructor(public http: HttpClient) {
  }


  getTitulares(): Observable<any> {

    return this.http.get(this.urlWallet + '/titulares');
  }
  

  public getJSON(): Observable<any> {
    return this.http.get('./assets/test.json');
  }

  obtenerTitular(titular): Observable<any>{

    return this.http.get(this.urlWallet + '/titulares/dni/'+[titular], cudOptionsXWWForm);
  }

  actualizarSaldo(dni, titular): Observable<any>{

   const parametros ={
     saldo: titular.saldo
   }
   const newSession = Object.assign({}, parametros);
    return this.http.put(this.urlWallet + '/titulares/dni/'+[dni],newSession, cudOptions)
  }



// POST: Nuevo Titular
postTitularNuevo(titular): Observable<any[]> {
  const parametros = {
    nombre: titular.nombre,
    apellido: titular.apellido,
    dni: titular.dni,
    email: titular.email,
    fecha_nacimiento: titular.fecha_nacimiento,
    provinciaUbicacion: titular.provinciaUbicacion,
    usuario: titular.usuario,
    clave: titular.clave,
    saldo: titular.saldo
  };
  const newSession = Object.assign({}, parametros);
  return this.http.post<any[]>(this.urlWallet + '/titulares?', newSession, cudOptions);

}



}
