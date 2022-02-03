import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CadastroUsuarioService } from '../home/cadastro-usuario/cadastro-usuario.service';
import { switchMap, map, first } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserExistentService {

  constructor(private CadastroUsuarioService: CadastroUsuarioService) { }

  userExistent() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(value => this.CadastroUsuarioService.isExistUser(value)),
        map(user => user ? { userExist: true } : null),
        first()
      )
    }
  }
}
