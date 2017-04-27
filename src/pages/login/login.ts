import { Credencial } from './../../model/credencial';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Registrar } from "../registrar/registrar";
import { LoginProvider } from './../../providers/login-provider';
import { HomePage } from './../home/home';


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

    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => this.navCtrl.setRoot(HomePage),
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
