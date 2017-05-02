import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Linguagem } from './linguagem';

@NgModule({
  declarations: [
    Linguagem,
  ],
  imports: [
    IonicModule.forRoot(Linguagem),
  ],
  exports: [
    Linguagem
  ]
})
export class LinguagemModule {}
