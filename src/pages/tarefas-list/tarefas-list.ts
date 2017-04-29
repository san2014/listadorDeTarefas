import { TarefasAdd } from './../tarefas-add/tarefas-add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarefa } from "../../model/tarefa";
import { TarefaProvider } from './../../providers/tarefa-provider';

@IonicPage()
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasList {

  tarefas: Array<Tarefa>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tarefaProvider: TarefaProvider) {
  }

  ionViewDidLoad() {
    this.tarefas = this.tarefaProvider.getAll();
  }

  adicionarTarefa(){
    this.navCtrl.push(TarefasAdd, {'tarefa': new Tarefa()});
  }

}
