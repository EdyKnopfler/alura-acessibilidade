import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Acessibilidade';

  test: string = null;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      yesNoAnswer: [{
        value: 'yes',
        disabled: false
      }]
    });
  }

  submit() {
    console.log(this.form.value);

    // Desabilitando programaticamente
    this.form.get('yesNoAnswer').disable();
  }

}
