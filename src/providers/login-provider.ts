import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Usuario } from './../model/usuario';

@Injectable()
export class LoginProvider {

  constructor(
    public http: Http,
    public loginProvider: LoginProvider) {
    console.log('Hello LoginProvider Provider');
  }

  registrarse(usuario: Usuario){

  }

}
