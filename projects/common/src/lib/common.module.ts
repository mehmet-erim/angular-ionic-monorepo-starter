import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterOutletComponent } from './components/router-outlet.component';
import { AbstractNgModelComponent } from './components/ng-model.component';
import { FormSubmitDirective } from './directives/form-submit.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { SortPipe } from './pipes/sort.pipe';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from './components/validation-error.component';
import { IsValidDirective } from './directives/is-valid.directive';

const declarations = [
  RouterOutletComponent,
  AbstractNgModelComponent,
  ValidationErrorComponent,
  FormSubmitDirective,
  StopPropagationDirective,
  SortPipe,
  IsValidDirective,
];

@NgModule({
  declarations,
  imports: [
    NgCommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxsModule,
    NgxValidateCoreModule,
  ],
  exports: [
    NgCommonModule,
    NgxsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxValidateCoreModule,

    ...declarations,
  ],
  entryComponents: [ValidationErrorComponent],
})
export class CommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: [
        ...NgxsModule.forRoot().providers,
        ...NgxValidateCoreModule.forRoot({ errorTemplate: ValidationErrorComponent }).providers,
      ],
    };
  }
}
