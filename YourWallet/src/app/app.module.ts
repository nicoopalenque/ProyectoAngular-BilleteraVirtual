import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginclienteComponent } from './components/cliente/logincliente/logincliente.component';
import { TransferirdineroComponent } from './components/cliente/transferirdinero/transferirdinero.component';
import { VermovimientosComponent } from './components/cliente/vermovimientos/vermovimientos.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { LogingestorComponent } from './components/gestor/logingestor/logingestor.component';

import { AcreditarComponent } from './components/gestor/acreditar/acreditar.component';
import { DebitarComponent } from './components/gestor/debitar/debitar.component';
import { LoginadminComponent } from './components/administrador/loginadmin/loginadmin.component';
import { RegistrargestorComponent } from './components/administrador/registrargestor/registrargestor.component';
import { MovimientogestorComponent } from './components/administrador/movimientogestor/movimientogestor.component';
import { MovimientousuarioComponent } from './components/administrador/movimientousuario/movimientousuario.component';
import { RegistrarClienteComponent } from './components/cliente/registrar-cliente/registrar-cliente.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarclienteComponent } from './layout/navbarcliente/navbarcliente.component';
import { NavbargestorComponent } from './layout/navbargestor/navbargestor.component';
import { NavbaradministradorComponent } from './layout/navbaradministrador/navbaradministrador.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginclienteComponent,
    TransferirdineroComponent,
    VermovimientosComponent,
    PrincipalComponent,
    InicioComponent,
    LogingestorComponent,
    AcreditarComponent,
    DebitarComponent,
    LoginadminComponent,
    RegistrargestorComponent,
    MovimientogestorComponent,
    MovimientousuarioComponent,
    RegistrarClienteComponent,
    FooterComponent,
    NavbarclienteComponent,
    NavbargestorComponent,
    NavbaradministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
