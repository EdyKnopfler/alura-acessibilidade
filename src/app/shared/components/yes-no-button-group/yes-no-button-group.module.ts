import { KeyboardManagerModule } from './../../directives/keyboard-manager/keyboard-manager.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';



@NgModule({
  declarations: [
    YesNoButtonGroupComponent
  ],
  imports: [
    CommonModule,
    KeyboardManagerModule  // Ver shared/directives/keyboard-manager/*
  ],
  exports: [
    YesNoButtonGroupComponent
  ]
})
export class YesNoButtonGroupModule { }
