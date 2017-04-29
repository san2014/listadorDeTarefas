import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { EstadoTarefa } from "../model/estado-tarefa";

@Injectable()
export class LovProvider {


  getTarefasState(): Array<EstadoTarefa>{

    return [EstadoTarefa.NOVA, EstadoTarefa.EXECUTANDO, EstadoTarefa.FINALIZANDO];

  }


}
