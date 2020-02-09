import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {
  Validation,
  ValidationErrorComponent as NgxValdiateErrorComponent,
} from '@ngx-validate/core';

@Component({
  selector: 'app-validation-error',
  template: `
    <div class="invalid-feedback" *ngFor="let error of errors; trackBy: trackByFn">
      {{ error.message }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ValidationErrorComponent extends NgxValdiateErrorComponent {}
