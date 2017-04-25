import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Registrar } from './registrar';

@NgModule({
  declarations: [
    Registrar,
  ],
  imports: [
    IonicModule.forRoot(Registrar),
  ],
  exports: [
    Registrar
  ]
})
export class RegistrarModule {}
