import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import CustomValidators from '../../customValidators/validators';
import { UserExistentService } from 'src/app/cadastro-usuario/user-existent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  newUserForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: CadastroUsuarioService,
    private userExistentService: UserExistentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const { required,
      minLength,
      email
    }
    = Validators

    this.newUserForm = this.formBuilder.group(
      {
        email: ['',[required, email]],
        fullName: ['',[required, minLength(4)]],
        userName: ['',[CustomValidators.toLowerCase],[this.userExistentService.userExistent()]],
        password: [''],
      },
      {
        validators: [CustomValidators.equalsPasswordAndUsername]
      }
    )
  }

  cadastrar() {
    if (this.newUserForm.valid) {
      const params = this.newUserForm.getRawValue()
      this.service.newUser(params)
        .subscribe(
          (response) => this.router.navigate(['']),
          error => console.log(error)
        )
    }
  }
}
