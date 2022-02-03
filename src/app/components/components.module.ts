import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { PremiunMessageComponent } from './premiun-message/premiun-message.component';
import { CabecalhoModule } from './cabecalho/cabecalho.module';
import { RodapeModule } from './rodape/rodape.module';

@NgModule({
  declarations: [
    MessageComponent,
    PremiunMessageComponent,
  ],
  imports: [
    CommonModule,
    CabecalhoModule,
    RodapeModule
  ],
  exports: [
    MessageComponent,
    PremiunMessageComponent
  ]
})
export class ComponentsModule { }
