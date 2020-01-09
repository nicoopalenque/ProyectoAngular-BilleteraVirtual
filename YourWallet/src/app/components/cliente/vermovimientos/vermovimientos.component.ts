import { Component, OnInit } from '@angular/core';
import { MovimientoService } from 'src/app/services/movimiento.service';

@Component({
  selector: 'app-vermovimientos',
  templateUrl: './vermovimientos.component.html',
  styleUrls: ['./vermovimientos.component.css']
})
export class VermovimientosComponent implements OnInit {

  dni: number = 111;
  movimientos: any[]
  constructor(private movimientoService: MovimientoService) { }


  ngOnInit() { 
    this.movimientoService.obtenerMovimiento(this.dni).subscribe( resp =>{
    this.movimientos = resp;
    })
  }

}
