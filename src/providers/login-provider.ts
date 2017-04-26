import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase'
import { Credencial } from './../model/credencial';
import { Usuario } from "../model/usuario";

@Injectable()
export class LoginProvider {

  currentUser: Usuario;
  
  autenticado: boolean;

  loginSucessoEventEmitter: EventEmitter<any>;

  loginFalhaEventEmitter: EventEmitter<any>;

  logouEventEmitter: EventEmitter<any>;

  constructor(
    public http: HttpModule,
    public ngZone: NgZone ) {

      this.loginSucessoEventEmitter = new EventEmitter();
      
      this.loginFalhaEventEmitter = new EventEmitter();
      
      this.logouEventEmitter = new EventEmitter();
    
  }

  private callbackStateChange(state){

    this.ngZone.run( () => {

    });
    
  }

  registrarUsuario(credencial: Credencial){
    console.log(credencial);
    firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }

}
