import { Routes } from '@angular/router';
import { LoginclienteComponent } from './components/cliente/logincliente/logincliente.component';
import { TransferirdineroComponent } from './components/cliente/transferirdinero/transferirdinero.component';
import { VermovimientosComponent } from './components/cliente/vermovimientos/vermovimientos.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { RegistrarClienteComponent } from './components/cliente/registrar-cliente/registrar-cliente.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AcreditarComponent } from './components/gestor/acreditar/acreditar.component';
import { LogingestorComponent } from './components/gestor/logingestor/logingestor.component';
import { DebitarComponent } from './components/gestor/debitar/debitar.component';
import { MovimientogestorComponent } from './components/administrador/movimientogestor/movimientogestor.component';
import { MovimientousuarioComponent } from './components/administrador/movimientousuario/movimientousuario.component';
import { RegistrargestorComponent } from './components/administrador/registrargestor/registrargestor.component';




export const appRoutes: Routes = [
    { path: "logincliente", component: LoginclienteComponent },
    { path: "transferirdinero", component: TransferirdineroComponent },
    { path: "vermovimientos", component: VermovimientosComponent },
    { path: "principal", component: PrincipalComponent },
    { path: "inicio", component: InicioComponent },
    { path: "registrar-cliente", component: RegistrarClienteComponent },
    { path: "footer", component: FooterComponent },
    { path: "registrar-cliente", component: RegistrarClienteComponent},
    { path: "acreditar", component: AcreditarComponent},
    { path: "debitar", component: DebitarComponent},
    { path: "logingestor", component: LogingestorComponent},
    { path: "movimientogestor", component: MovimientogestorComponent },
    { path: "movimientousuario", component: MovimientousuarioComponent},
    { path: "registrargestor", component: RegistrargestorComponent}
];