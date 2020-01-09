import { Titulares } from './titulares';
import { Operacion } from './operacion';
import { Gestores } from './gestores';

export class Movimientos {
    public id: number;
    public fecha: Date;
    public operacion: Operacion;
    public gestor: Gestores;
    public titular: Titulares;
    
    public comision: number;
    
    constructor(){}

}
