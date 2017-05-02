import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from './../pages/login/login';
import { TarefasList } from './../pages/tarefas-list/tarefas-list';
import { TranslateService } from "ng2-translate";
import { Linguagem } from './../pages/linguagem/linguagem';

@Component({
  template: `
    <ion-menu [content]="rootIonNav">
      <ion-content>
        <ion-list>
          <ion-list-header>
            <button menuClose ion-item *ngFor="let menuSection of menuSections" (click)="navToComponent(menuSection.component)">
              {{ menuSection.title }}
              <ion-icon name="arrow-foward" item-right></ion-icon>
            </button>
          </ion-list-header>
        </ion-list>
      </ion-content>

    </ion-menu>

    <ion-nav #rootIonNav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage:any = Login;

  menuSections: Array<{title: string, component: any}>

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    translateService: TranslateService) {
    platform.ready().then(() => {

      localStorage.setItem('usedLanguage', 'pt_BR');
      
      translateService.setDefaultLang('pt_BR');
      
      translateService.use('pt_BR');
      
      statusBar.styleDefault();
      
      //splashScreen.hide();

      this.menuSections = [
        {title: 'pages.tarefa.title', component: TarefasList},
        {title: 'pages.linguagem.title',  component: Linguagem}
      ]

    });
  }

  navToComponent(component: any){
    console.log('navToComponent')
    this.nav.setRoot(component); 
  }
}

