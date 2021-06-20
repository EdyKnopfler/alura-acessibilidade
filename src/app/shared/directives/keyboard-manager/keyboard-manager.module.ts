import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ KeyboardManagerDirective, KeyboardManagerItemDirective ],
  imports: [
    CommonModule
  ],
  exports: [ KeyboardManagerDirective, KeyboardManagerItemDirective ]
})
export class KeyboardManagerModule { }
