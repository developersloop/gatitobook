import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AutenticacaoModule } from '../autenticacao/autenticacao.module';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    TesteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    AutenticacaoModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
