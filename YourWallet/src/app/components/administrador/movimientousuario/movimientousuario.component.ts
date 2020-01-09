import { Component, OnInit } from '@angular/core';
import { Titulares } from 'src/app/models/titulares';
import { TitularService } from 'src/app/services/titular.service';
import { MovimientoService } from 'src/app/services/movimiento.service';

@Component({
  selector: 'app-movimientousuario',
  templateUrl: './movimientousuario.component.html',
  styleUrls: ['./movimientousuario.component.css']
})
export class MovimientousuarioComponent implements OnInit {
  movimientos: any[];

  constructor(private movimientoService: MovimientoService) { 
  }

  ngOnInit() {
    this.movimientoService.getMovimientos().subscribe( response => {
      console.log(response);
      
      this.movimientos = response;

    });
  }

}
