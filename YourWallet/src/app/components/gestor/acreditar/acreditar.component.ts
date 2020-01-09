import { Component, OnInit } from '@angular/core';
import { TitularService } from 'src/app/services/titular.service';

@Component({
  selector: 'app-acreditar',
  templateUrl: './acreditar.component.html',
  styleUrls: ['./acreditar.component.css']
})
export class AcreditarComponent implements OnInit {

  constructor(private titularService: TitularService) { }
  dni: number;
  saldo: number;
  ngOnInit() {
  }


  acreditarDinero(){
    if(this.dni == null || this.saldo == null){
      alert('Se deben ingresar datos');
    }else{
      this.titularService.obtenerTitular(this.dni).subscribe( resp =>{
      var suma = resp.saldo + this.saldo;
      console.log(suma);

      let titular = {
        saldo: suma
      }
      this.titularService.actualizarSaldo(this.dni, titular).subscribe(res => {
        if(res['ok']){
          alert("Se acredito correctamente");
        
        }
      }, err =>{
          alert("Ocurrio un error, vuelva a intentarlo");
      });
    })
    }

  }

}
