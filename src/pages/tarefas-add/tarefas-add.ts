import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Tarefa } from "../../model/tarefa";
import { LovProvider } from './../../providers/lov-provider';
import { TarefaProvider } from './../../providers/tarefa-provider';
import { EstadoTarefa } from "../../model/estado-tarefa";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAdd {

  tarefa: Tarefa;

  tarefaForm: FormGroup;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public lovProvider: LovProvider,
      public viewCtrl: ViewController,
      public tarefaProvider: TarefaProvider,
      public fb: FormBuilder) {

      this.initialize();
  }

  initialize() {
   
    this.tarefa = this.navParams.get('tarefa');

    if (!this.tarefa){

      this.tarefa = new Tarefa();

    }

    this.tarefaForm = this.fb.group({
      'titulo': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'descricao': ['', Validators.required],
      'estadoTarefa': ['', Validators.required]
    });

  }

  salvarTarefa(){
       
    this.tarefaProvider.save(this.tarefa);

    this.viewCtrl.dismiss();

  }

  getLabelEstadoTarefa(estadoTarefa: EstadoTarefa): string{
    
    return EstadoTarefa[estadoTarefa];

  }

}
