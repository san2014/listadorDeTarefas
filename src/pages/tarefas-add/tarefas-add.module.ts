import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TarefasAdd } from './tarefas-add';

@NgModule({
  declarations: [
    TarefasAdd,
  ],
  imports: [
    IonicModule.forRoot(TarefasAdd),
  ],
  exports: [
    TarefasAdd
  ]
})
export class TarefasAddModule {}
