import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Tarefa } from './../model/tarefa';


@Injectable()
export class TarefaProvider {

  getAll(): Array<Tarefa>{
    return new Array();
  }


  constructor(public http: Http) {
    console.log('Hello TarefaProvider Provider');
  }

}
