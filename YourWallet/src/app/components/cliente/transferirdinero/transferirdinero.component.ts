import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { TitularService } from 'src/app/services/titular.service';
import { ThrowStmt } from '@angular/compiler';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transferirdinero',
  templateUrl: './transferirdinero.component.html',
  styleUrls: ['./transferirdinero.component.css']
})
export class TransferirdineroComponent implements OnInit {

  fecha: Date = new Date();

  id_de_operacion: number = 1;
  tipo_de_Operacion: string ="TRANSFERENCIA";
  costo_operacion: number = 0;
  id_gestor: number = 1;
  id_usuario_origen: number = 111;
  id_usuario_destino: number;
  monto_operacion: number;
  valor_comision: number = 0;
  saldo_inicial_origen: number;
  saldo_final_origen: number;
  saldo_inicial_destino: number;
  saldo_final_destino: number;


  suma: number;

  constructor(private movimientoService: MovimientoService, private titularService: TitularService) { }

  ngOnInit() {
  }

  transferir(){
    if(this.id_usuario_destino == null || this.monto_operacion == null){
      alert('Debe ingresar datos');
    }else{
      //Obtiene el saldo del titular que hara la transaccion
    this.titularService.obtenerTitular(this.id_usuario_origen).subscribe(response =>{
      console.log(response);

      //Verifica si dispone de saldo para hacer la transaccionl
      if(response.saldo < this.monto_operacion){
        alert("No se puede realizar transferencia");
      }else{

        //SaldoOrigenfin devuelve la RESTA de la transaccion
        var saldoOrigenfin = response.saldo - this.monto_operacion - this.costo_operacion;
        console.log("Saldo de resta " + saldoOrigenfin);

        //Obtiene el saldo del titular al que se le hara la transaccion
        this.titularService.obtenerTitular(this.id_usuario_destino).subscribe(resp =>{
          console.log("Saldo traido de destino " +resp.saldo);
    
          //SaldoDestinofin devuelve la SUMA de la transaccion
          var saldoDestinofin =  resp.saldo + this.monto_operacion ;
          console.log("Saldo de suma " + saldoDestinofin);

          //Actializo el saldo final del Titular ORIGEN
          let titular ={
           
            saldo: saldoOrigenfin
          }
          this.titularService.actualizarSaldo(this.id_usuario_origen, titular).subscribe(devuelve =>{
            console.log("Saldo origen ACTUALIZADO");

            //Actualizo el saldo final del Titular DESTINO
            let titularDestino = {
              saldo: saldoDestinofin
            }
           //Carga la tabla MOVIMIENTOS
            this.titularService.actualizarSaldo(this.id_usuario_destino, titularDestino).subscribe(devuelveVal =>{
              console.log("Saldo destino ACTUALIZADO");
              var dd = this.fecha.getDate();
              var mm = this.fecha.getMonth()+1;
              var yyyy = this.fecha.getFullYear(); 
              let movimiento={
                fecha: yyyy+'/'+mm+'/'+dd,
                id_tipo_de_operacion: this.id_de_operacion,
                tipo_de_operacion: this.tipo_de_Operacion,
                costo_operacion: this.costo_operacion,
                id_gestor: this.id_gestor,
                id_usuario_origen: this.id_usuario_origen,
                id_usuario_destino: this.id_usuario_destino,
                monto_operacion: this.monto_operacion,
                valor_comision: this.valor_comision,
                saldo_inicial_origen: response.saldo,
                saldo_final_origen: saldoOrigenfin,
                saldo_inicial_destino: resp.saldo,
                saldo_final_destino: saldoDestinofin

              }
              this.movimientoService.agregarMovimiento(movimiento).subscribe(respMov =>{
                if (respMov['ok']) {
                  alert('La transferencia se realizo con exito');
                }
              }, err => {
                  alert('Se produjo un error al insertar el registro');
              })


            })


          })
         
          
  
        })
        
      }
      
   
    })
    }  
  }
}
