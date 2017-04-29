import { Credencial } from './../../model/credencial';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Registrar } from "../registrar/registrar";
import { LoginProvider } from './../../providers/login-provider';
import { TarefasList } from './../tarefas-list/tarefas-list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public credencial: Credencial

  constructor(
      public navCtrl: NavController,
      public loginProvider: LoginProvider) {

      this.ionViewDidLoad();
  }

  
  ionViewDidLoad(){

    this.credencial = new Credencial();

    console.log('init app');

    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => this.navCtrl.setRoot(TarefasList),
      error => console.log(error)
    )

    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial)
  }

  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }

  registrar(){
    this.navCtrl.push(Registrar);
  }

  sair(){
    this.loginProvider.sair();
  }

}
