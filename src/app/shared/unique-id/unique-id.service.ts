import { Injectable } from '@angular/core';

// npm install uuid
// Evitamos ficar dependente desta API em todos os componentes.
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  constructor() { }

  public generateUniqueIdWithPrefix(prefixo: string) {
    return `${prefixo}-${this.generateUniqueId()}`;
  }

  private generateUniqueId() {
    return uuid.v1();
  }


}
