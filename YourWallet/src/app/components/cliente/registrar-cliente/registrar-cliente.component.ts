import { Component, OnInit } from '@angular/core';
import { TitularService } from 'src/app/services/titular.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
 
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  fecha_nacimiento: string;
  provincia: string;
  usuario: string;
  clave: string;
  saldo = 0;

  provincias: any = [
    {nombre: 'Seleccione', zona:0},
    {nombre: 'Jujuy', zona: 1},
    {nombre: 'Salta', zona: 2},
    {nombre: 'Tucuman', zona: 3},
    {nombre: 'Cordoba', zona: 4},
    {nombre: 'Santa Fe', zona: 5},
    {nombre: 'Buenos Aires', zona: 6},
    {nombre: 'Chubut', zona: 7},
  ];

  constructor(private titularService: TitularService) { }

  ngOnInit() {
  }
  onChange(event: any){
    console.log(event.target.value);
    this.provincia = event.target.value;
  }

  guardar() {


    let titular = {
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      email: this.email,
      fecha_nacimiento: this.fecha_nacimiento,
      provinciaUbicacion: this.provincia,
      usuario: this.usuario,
      clave: this.clave,
      saldo: this.saldo
    };
  

console.log(titular);

    this.titularService.postTitularNuevo(titular).subscribe(resp => {
      console.log(resp);
      if (resp['ok']) {
        alert('El Titular se ingreso correctamente');
      }
    }, err => {
        alert('Se produjo un error al insertar el registro');
    });

  }
}
