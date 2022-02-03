import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroUsuario } from './cadastro-usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient ) { }

  newUser(params: CadastroUsuario): Observable<CadastroUsuario> {
    return this.http.post<CadastroUsuario>('http://localhost:3000/user/signup', params);
  }

  isExistUser(userName: string) {
    return this.http.get(`http://localhost:3000/user/exists/${userName}`)
  }
}
