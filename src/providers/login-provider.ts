import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase'
import { Credencial } from './../model/credencial';
import { Tarefa } from "../model/tarefa";

@Injectable()
export class LoginProvider {

  currentUser: any;

  autenticado: boolean;

  loginSucessoEventEmitter: EventEmitter<any>;

  loginFalhaEventEmitter: EventEmitter<any>;

  logouEventEmitter: EventEmitter<any>;

  constructor(
    public http: HttpModule,
    public ngZone: NgZone) {

    this.loginSucessoEventEmitter = new EventEmitter();

    this.loginFalhaEventEmitter = new EventEmitter();

    this.logouEventEmitter = new EventEmitter();

    firebase.auth().onAuthStateChanged(usuario  => {

      this.callbackStateChange(usuario);

    })

  }

  private callbackStateChange(usuario) {

    this.ngZone.run(() => {
      if (usuario == null) {

        console.log('nao temos usuario');

        this.currentUser = null;

        this.autenticado = false;

      } else {

        this.currentUser = usuario;

        this.autenticado = true;

      }
    });

  }

  private callbackSucessoLogin(response) {

    this.loginSucessoEventEmitter.emit(response.user);

  }

  private callbackFalhaLogin(error) {

    this.loginFalhaEventEmitter.emit(
        { code: error.code, message: error.message, email: error.email, credencial: error.credencial }
    )

  }

  loginComCredencial(credencial: Credencial) {

    firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
      .then(resultado => this.callbackSucessoLogin(resultado))
      .catch(error => this.callbackFalhaLogin(error));

  }

  loginComGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(resultado => this.callbackSucessoLogin(resultado))
      .catch(error => this.callbackFalhaLogin(error));    
  }

  loginComFacebook(){

    let provider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(provider)
      .then(resultado => this.callbackSucessoLogin(resultado))
      .catch(error => this.callbackFalhaLogin(error));

  }

  registrarUsuario(credencial: Credencial) {
    
    firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  sair(){
    firebase.auth().signOut()
      .then(() => this.logouEventEmitter.emit(true))
      .catch(error => this.callbackFalhaLogin(error));
  }

}
