import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';
import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";

// Diretiva: um código que atravessa os componentes, estando presente em vários deles
// e isolado em um único lugar :)

@Directive({
  selector: '[appKm]'  // entre colchetes: seletor de atributo
})
export class KeyboardManagerDirective {

  // Busca todos os filhos que contenham a diretiva KeyboardManager**ITEM**Directive
  // QueryList: atualiza automaticamente conteúdo dinâmico :)
  @ContentChildren(KeyboardManagerItemDirective)
  public items: QueryList<KeyboardManagerItemDirective>;

  @HostListener('keyup', ['$event'] )  // Quando disparar um keyup, quero ter acesso ao $event
  public manageKeys(event: KeyboardEvent) {

    // Testando a QueryList
    // console.log(this.items.toArray());

    // REGRAS:
    // Se estou no primeiro item e aperto Left, vou para o último
    // Se estou no último item e aperto Right, vou para o primeiro

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT);
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT);
        break;
    }
  }

  private moveFocus(direction: ArrowDirection) {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex((item) => item.isFocused());

    if (currentSelectedIndex >= 0) {
      const targetElementFocus = items[currentSelectedIndex + direction];
      if (targetElementFocus) {
        targetElementFocus.focus();
        return;
      }
    }

    if (items.length) {
      if (direction === ArrowDirection.LEFT) {
        items[items.length - 1].focus();
      }
      else {
        items[0].focus();
      }
    }
  }

}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1
}
