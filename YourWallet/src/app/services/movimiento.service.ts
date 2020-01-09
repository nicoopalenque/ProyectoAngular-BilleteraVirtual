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
export class MovimientoService {

  public urlWallet = 'http://localhost:3000';
  constructor(public http: HttpClient) {

   }
   getMovimientos(): Observable<any>{
    return this.http.get(this.urlWallet + '/movimientos');
   }
   obtenerMovimiento(titular): Observable<any>{

    return this.http.get(this.urlWallet + '/movimientos/dni/'+[titular], cudOptionsXWWForm);
  }

   agregarMovimiento(movimiento): Observable<any[]>{
     const parametros ={
       fecha: movimiento.fecha,
       id_tipo_de_operacion: movimiento.id_tipo_de_operacion,
       tipo_de_operacion: movimiento.tipo_de_operacion,
       costo_operacion: movimiento.costo_operacion,
       id_gestor: movimiento.id_gestor,
       id_usuario_origen: movimiento.id_usuario_origen,
       id_usuario_destino: movimiento.id_usuario_destino,
       monto_operacion: movimiento.monto_operacion,
       valor_comision: movimiento.valor_comision,
       saldo_inicial_origen: movimiento.saldo_inicial_origen,
       saldo_final_origen: movimiento.saldo_final_origen,
       saldo_inicial_destino: movimiento.saldo_inicial_destino,
       saldo_final_destino: movimiento.saldo_final_destino 
     }
     const newSession = Object.assign({}, parametros);
     return this.http.post<any[]>(this.urlWallet + '/movimientos?', newSession, cudOptions);

   }
}
