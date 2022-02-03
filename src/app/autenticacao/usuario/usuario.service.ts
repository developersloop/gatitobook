import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userSubject = new BehaviorSubject<any>({})

  constructor(private tokenService: TokenService) {
    if (this.tokenService.verifyToken()) {
      this.decodeJWT()
    }
  }


  private decodeJWT() {
    const token: any = this.tokenService.getToken()
    const user = jwt_decode(token)
    this.userSubject.next(user)
  }

  returnUser() {
    return this.userSubject.asObservable()
  }

  storeToken(token: string) {
    this.tokenService.addToken(token)
    this.decodeJWT()
  }

  logout() {
    this.tokenService.deleteToken()
    this.userSubject.next({})
  }

  isLoggedIn() {
    return this.tokenService.verifyToken()
  }
}
