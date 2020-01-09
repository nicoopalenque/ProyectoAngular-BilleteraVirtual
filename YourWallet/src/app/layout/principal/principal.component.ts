import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public mostrarInicio: boolean = true;
  ocultarInicio(){
    this.mostrarInicio = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
