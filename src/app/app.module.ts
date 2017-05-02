import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, Http } from "@angular/http";
import { MyApp } from './app.component';
import { Login } from './../pages/login/login';
import { LoginModule } from './../pages/login/login.module';
import { Registrar } from './../pages/registrar/registrar';
import { LoginProvider } from './../providers/login-provider';
import firebase from 'firebase'

import { TarefasAdd } from './../pages/tarefas-add/tarefas-add';
import { TarefasListItem } from './../components/tarefas-list-item/tarefas-list-item';
import { TarefasList } from './../pages/tarefas-list/tarefas-list';
import { TarefaProvider } from './../providers/tarefa-provider';
import { LovProvider } from './../providers/lov-provider';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { Linguagem } from './../pages/linguagem/linguagem';

const firebaseConfig = {
    apiKey: "AIzaSyBXIOh7VLlwoRf--lHwInIqen7gVIezizc",
    authDomain: "listadordetarefas-c3de2.firebaseapp.com",
    databaseURL: "https://listadordetarefas-c3de2.firebaseio.com",
    projectId: "listadordetarefas-c3de2",
    storageBucket: "listadordetarefas-c3de2.appspot.com",
    messagingSenderId: "627770590744"
};

export function createTranslateLoader(http: Http){
  
  return new TranslateStaticLoader(http, './assets/i18n/', '.json');

}

@NgModule({
  declarations: [
    MyApp,
    Login,
    Registrar,
    TarefasList,
    TarefasListItem,
    TarefasAdd,
    Linguagem
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Registrar,
    TarefasList,
    TarefasListItem,
    TarefasAdd,
    Linguagem
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginModule,
    LoginProvider,
    TarefaProvider,
    LovProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
