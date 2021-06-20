import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UniqueIdService } from '../../unique-id/unique-id.service';

// Repeteco de yes-no-button-group.component.ts?

@Component({
  selector: 'app-alternativo',
  templateUrl: './alternativo.component.html',
  styleUrls: ['./alternativo.component.scss']
})
export class AlternativoComponent implements OnInit, ControlValueAccessor {

  id: string = null;

  @Input() value: string = null;
  @Input() label: string = '';

  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<string>();
  private onChange = (value: string) => {};

  options = YesNoButtonGroupOptions;

  constructor(uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('alternative');
  }

  ngOnInit(): void {
  }

  activate(answer: string) {
    this.writeValue(answer);
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(this.value);
  }
  registerOnChange(fn: (string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    // ...
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
