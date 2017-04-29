import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarefa } from "../../model/tarefa";
import { LovProvider } from './../../providers/lov-provider';

@IonicPage()
@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAdd {

  tarefa: Tarefa;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public lovProvider: LovProvider) {

      this.ionViewDidLoad();
  }

  ionViewDidLoad() {
   
    this.tarefa = this.navParams.get('tarefa');

    if (!this.tarefa){

      this.tarefa = new Tarefa();

    }
  }

}
