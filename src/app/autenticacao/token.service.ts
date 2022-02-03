import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  addToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token') ?? null

  }
  verifyToken() {
    return !!this.getToken()
  }
  deleteToken() {
    localStorage.removeItem('token')
  }
}
