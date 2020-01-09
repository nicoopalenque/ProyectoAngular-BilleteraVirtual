import { Component, OnInit } from '@angular/core';
import { TitularService } from '../../../services/titular.service';
import { Titulares } from 'src/app/models/titulares';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import {Router} from "@angular/router";


@Component({
  selector: 'app-logincliente',
  templateUrl: './logincliente.component.html',
  styleUrls: ['./logincliente.component.css']
  
})
export class LoginclienteComponent implements OnInit {
  
  titular: Titulares;
  titulares: Titulares[];
  user: string;
  pass: string;

 

  constructor(private titularService: TitularService, private router: Router) { 

  
  }

  ngOnInit() {
    
  }

  validar(){
    
       if( this.user == "nicolas" &&  this.pass == "palenque"){
         
          this.router.navigate(['/transferirdinero']);

       }else{
          console.log("No existe el usuario");         
       }
        
    
    
  }
}
