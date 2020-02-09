import { sandboxOf } from 'angular-playground';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-elements',
  template: `
    <div class="container mt-4" novalidate>
      <form [formGroup]="form">
        <div class="col-md-4 mb-3">
          <label for="validationCustom02">Name</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="Name"
            formControlName="name"
            isValid
          />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [``],
})
class FormElementsComponent {
  form = new FormGroup({
    name: new FormControl('', { validators: Validators.required }),
  });

  constructor() {}
}

export default sandboxOf(FormElementsComponent).add('Form elements', {
  template: '<app-form-elements></app-form-elements>',
});
