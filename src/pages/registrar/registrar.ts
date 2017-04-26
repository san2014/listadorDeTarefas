import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Credencial } from './../../model/credencial';
import { LoginProvider } from './../../providers/login-provider';

/**
 * Generated class for the Registrar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class Registrar {

  credencial: Credencial;

  constructor(
      public navCtrl: NavController, 
      public loginProvider: LoginProvider) {
    
    this.credencial = new Credencial();

  }

  doRegister(){
    this.loginProvider.registrarUsuario(this.credencial);
  }

}
