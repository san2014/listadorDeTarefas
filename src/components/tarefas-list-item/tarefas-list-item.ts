import { Component, Input } from '@angular/core';
import { Tarefa } from './../../model/tarefa';

@Component({
  selector: 'tarefas-list-item',
  templateUrl: 'tarefas-list-item.html'
})
export class TarefasListItem {

  @Input()
  tarefa: Tarefa

}
