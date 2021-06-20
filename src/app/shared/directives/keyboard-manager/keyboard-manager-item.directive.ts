import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

@Directive({
  selector: '[appKmItem]'
})
export class KeyboardManagerItemDirective {

  @Output() focused = new EventEmitter<void>();

  // A diretiva pode receber uma referência ao elemento no DOM
  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  public focus() {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }

}
