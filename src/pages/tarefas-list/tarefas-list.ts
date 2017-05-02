import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {Tarefa} from "../../model/tarefa";
import {TarefaProvider} from "../../providers/tarefa-provider";
import {TarefasAdd} from "../tarefas-add/tarefas-add";

@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasList {

  tarefas:Array<Tarefa>;

  constructor(
    public navCtrl: NavController,
    public tarefaProvider: TarefaProvider,
    public toastController: ToastController,
    public ngZone: NgZone) {

      this.tarefas = new Array();

  }

  ionViewDidLoad(){

    this.tarefaProvider.reference.on('child_removed', (snapshot) => {
      let tarefaRemovida = snapshot.val();
      this.toastController.create({
        message: "Tarefa" + tarefaRemovida.titulo + ' removida',
        duration: 3000
      }).present();
    });

    this.tarefaProvider.reference.on('value', (snapshot) => {

    this.ngZone.run( () => {

        let innerArray = new Array();

        console.log(snapshot);

        snapshot.forEach(elemento => {

          let el = elemento.val();

          innerArray.push(el);

        })
        
        this.tarefas = innerArray;

      })

    })

  }

  adicionarTarefa(){
   
    this.navCtrl.push(TarefasAdd, {'tarefa': new Tarefa()});

  }

  atualizarTarefa(tarefa: Tarefa){
    
    this.navCtrl.push(TarefasAdd, {'tarefa' : tarefa});

  }

  deletarTarefa(tarefa: Tarefa){

    this.tarefaProvider.delete(tarefa)
    .then(sucesso => console.log('tarefa deletada'))
    .catch(erro => console.log('não foi possível deleter tarefa'));

  }

}
