import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: number | any = ''

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autentificar({ userName: this.username, password: this.password })
      .subscribe(
        (response) => {
          if (response) this.router.navigate(['list-animals'])
        },
        (error) => console.log(error)
      )
  }
}
