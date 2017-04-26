import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from './../pages/login/login';
import { LoginModule } from './../pages/login/login.module';
import { Registrar } from './../pages/registrar/registrar';
import { LoginProvider } from './../providers/login-provider';
import firebase from 'firebase'
import { HttpModule } from "@angular/http";

const firebaseConfig = {
    apiKey: "AIzaSyBXIOh7VLlwoRf--lHwInIqen7gVIezizc",
    authDomain: "listadordetarefas-c3de2.firebaseapp.com",
    databaseURL: "https://listadordetarefas-c3de2.firebaseio.com",
    projectId: "listadordetarefas-c3de2",
    storageBucket: "listadordetarefas-c3de2.appspot.com",
    messagingSenderId: "627770590744"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Registrar
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Registrar
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginModule,
    LoginProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
