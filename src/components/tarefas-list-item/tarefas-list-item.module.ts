import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TarefasListItem } from './tarefas-list-item';

@NgModule({
  declarations: [
    TarefasListItem,
  ],
  imports: [
    IonicModule.forRoot(TarefasListItem),
  ],
  exports: [
    TarefasListItem
  ]
})
export class TarefasListItemModule {}
