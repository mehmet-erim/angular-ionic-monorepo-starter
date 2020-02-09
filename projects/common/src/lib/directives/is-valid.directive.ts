import { Directive, Optional, Self, HostBinding } from '@angular/core';
import {
  FormGroupDirective,
  FormGroup,
  FormControlName,
  NgControl,
  FormControl,
} from '@angular/forms';

@Directive({ selector: '[isValid]' })
export class IsValidDirective {
  @HostBinding('class.is-valid')
  isValid = false;

  get form(): FormGroup {
    return this.formGroupDirective.form;
  }

  get formControl(): FormControl {
    return this.form.get(this.control.name) as FormControl;
  }

  constructor(
    private formGroupDirective: FormGroupDirective,
    @Self()
    private control: NgControl,
  ) {}

  ngOnInit() {
    this.formControl.valueChanges.subscribe(() => {
      if (this.formControl.dirty) {
        this.isValid = this.formControl.errors ? false : true;
      }
    });
  }
}
