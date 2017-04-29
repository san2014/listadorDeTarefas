import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TarefasList } from './tarefas-list';

@NgModule({
  declarations: [
    TarefasList,
  ],
  imports: [
    IonicModule.forRoot(TarefasList),
  ],
  exports: [
    TarefasList
  ]
})
export class TarefasListModule {}
