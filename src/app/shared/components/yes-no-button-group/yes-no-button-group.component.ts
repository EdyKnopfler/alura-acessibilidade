import { UniqueIdService } from './../../unique-id/unique-id.service';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],

  // integração do componente com forms #1 ("receita de bolo")
  // esta configuração e a interface ControlValueAccessor habilitam [(ngModel)]
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // forwardRef: aguarda pois a referência não éstá definida
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  id: string = null;

  @Input() value: string = null;
  @Input() label: string = '';

  @Output() valueChange = new EventEmitter<string>();  // para data binding
  private onChange = (value: string) => {};            // para form reativo
  //private onTouched = () => {};

  // Elementos disabled são IGNORADOS pelo leitor de tela e não recebem foco.
  @Input() disabled: boolean = false;

  options = YesNoButtonGroupOptions;

  constructor(uniqueIdService: UniqueIdService) {
    // Gerando id dinâmico
    // Isolamos o uso de uma biblioteca externa em um serviço, para em caso de troca
    // não termos que mudar 8879424 componentes
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }

  ngOnInit(): void {
  }

  activate(answer: string) {
    this.writeValue(answer);
  }

  // Interface ControlValueAccessor: integração do componente com forms #2
  // Esta interface por si habilita o formControlName (forms reativos)
  writeValue(value: string): void {
    // Mudei o modelo, atualize a view
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(this.value);
  }

  registerOnChange(fn: (string) => void): void {
    // Guarda a função passada pelo Angular para monitorar o estado do campo
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    // Outro tipo de evento do Angular, não usado por este componente
    //this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  // ---------------------------------------------------------------------------------------

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
