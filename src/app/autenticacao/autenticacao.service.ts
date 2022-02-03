import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { IAutenticacao, TUser } from './IAutenticacao';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'any'
})

export class AutenticacaoService implements IAutenticacao {

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autentificar(user: TUser): Observable<HttpResponse<any>> {
    return this.httpClient
      .post('http://localhost:3000/user/login', user, { observe: 'response'} )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? ''
          this.usuarioService.storeToken(authToken)
        })
      )
  }
}
