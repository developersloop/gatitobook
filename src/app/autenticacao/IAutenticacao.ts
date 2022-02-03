import { Observable } from "rxjs";

export interface IAutenticacao {
  autentificar: (args: TUser) => Observable<TUser | any>
}
export type TUser = {
  userName: string,
  password: number
}
