import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public mostrarInicio: boolean = true;

  public ocultarInicio(){
    this.mostrarInicio = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
