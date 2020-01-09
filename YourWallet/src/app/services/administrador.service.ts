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
export class AdministradorService {
  public urlWallet = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  getTitulares(): Observable<any> {

    return this.http.get(this.urlWallet + '/titulares');
  }
}
