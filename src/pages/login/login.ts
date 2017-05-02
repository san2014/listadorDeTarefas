import { Credencial } from './../../model/credencial';
import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { Registrar } from "../registrar/registrar";
import { LoginProvider } from './../../providers/login-provider';
import { TarefasList } from './../tarefas-list/tarefas-list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public credencial: Credencial

  public loginForm: FormGroup

  constructor(
      public navCtrl: NavController,
      public loginProvider: LoginProvider,
      public menuCtrl: MenuController,
      public fb: FormBuilder) {

      this.initialize();
  }

  private initialize(){

    this.credencial = new Credencial();

    this.loginForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'senha': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });    

  }  

  ionViewDidEnter(){
    
    this.menuCtrl.enable(false);
    
    this.menuCtrl.swipeEnable(false);

  }

  ionViewDidLoad(){

    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => {

        this.menuCtrl.enable(true);
        
        this.menuCtrl.swipeEnable(true);    

        this.navCtrl.setRoot(TarefasList)

      },
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
