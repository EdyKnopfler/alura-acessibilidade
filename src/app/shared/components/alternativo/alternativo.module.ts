import { KeyboardManagerModule } from './../../directives/keyboard-manager/keyboard-manager.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlternativoComponent } from './alternativo.component';


@NgModule({
  declarations: [
    AlternativoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlternativoComponent
  ]
})
export class AlternativoModule { }
